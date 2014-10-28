// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* global apphosting, goog, net */

'use strict';

require('./closure/goog/bootstrap/nodejs.js');
require('./deps.js');

goog.require('apphosting.UserAppLogLine');
goog.require('apphosting.UserAppLogGroup');
goog.require('apphosting.FlushRequest');
goog.require('apphosting.MemcacheGetRequest');
goog.require('apphosting.MemcacheGetResponse');
goog.require('apphosting.MemcacheSetRequest');
goog.require('apphosting.MemcacheSetResponse');
goog.require('apphosting.StartBackgroundRequestRequest');
goog.require('apphosting.StartBackgroundRequestResponse');
goog.require('apphosting.TaskQueueAddRequest');
goog.require('apphosting.TaskQueueAddResponse');
goog.require('apphosting.ext.remote_api.Request');
goog.require('apphosting.ext.remote_api.Response');
goog.require('apphosting.GetHostnameRequest');
goog.require('apphosting.GetHostnameResponse');
goog.require('goog.asserts');
goog.require('goog.object');
goog.require('net.proto2.contrib.WireSerializer');

var http = require('http');
var utils = require('./utils');

function AppEngine() {
  this.serializer_ = new net.proto2.contrib.WireSerializer();
  this.cache_ = {};
}

/**
 * Export all the public apis.
 */
AppEngine.prototype.exportAll_ = function() {
  this.memcache = {
    get: this.memcacheGet_.bind(this),
    set: this.memcacheSet_.bind(this)
  };
  this.taskqueue = {
    add: this.taskQueueAdd_.bind(this)
  };
  this.modules = {
    getHostname: this.modulesGetHostname_.bind(this)
  };
  this.system = {
    startBackgroundRequest: this.systemStartBackgroundRequest_.bind(this),
    getBackgroundRequest: this.systemGetBackgroundRequest_.bind(this)
  };
  this.auth = {
    getServiceAccountToken: this.authGetServiceAccountToken_.bind(this)
  };
  this.metadata = {
    getAttribute: this.metadataGetAttribute_.bind(this)
  };
  this.middleware = {
    base: this.middlewareBase_.bind(this)
  };
};

/**
 * Make a http request with the specified options and body, then invoke the
 * callback with an optional error and an optional response object.
 * Valid options are:
 *   - hostname {!String}
 *   - port {?Number}
 *   - path {!String}
 *   - method {!String}
 *   - headers {?Object}
 * A response has the following properties:
 *   - statusCode {!Number}
 *   - body {!Buffer}
 *   - headers {?Object}
 *
 * @param {!Object} options request options
 * @param {?Buffer} body request body
 * @param {!function(?Error, ?Object)} callback
 */
AppEngine.prototype.sendHttpRequest_ = function(options, body, callback) {
  if (!goog.isDefAndNotNull(body)) {
    body = new Buffer(0);
  }
  var request = http.request(options, function(response) {
    var chunks = [];
    response.on('data', function(chunk) {
      chunks.push(chunk);
    });
    response.on('error', callback);
    response.on('end', function() {
      var responseObject = {
        statusCode: response.statusCode,
        headers: response.headers,
        body: Buffer.concat(chunks)
      };
      callback(null, responseObject);
    });
  });
  request.on('error', callback);
  request.write(body);
  request.end();
};

/**
 * Invoke an api.
 *
 * @param {!string} serviceName service name
 * @param {!string} methodName method name
 * @param {!Object} req node.js request object
 * @param {!Object} proto request proto
 * @param {!function(?Error, ?apphosting.ext.remote_api.Response)} callback
 *        callback
 */
AppEngine.prototype.callApi_ = function(serviceName, methodName, req, proto, callback) {
  var maybeError = this.validateRequest_(req);
  if (goog.isDefAndNotNull(maybeError)) {
    callback(maybeError);
    return;
  }
  var data = this.makeRemoteApiRequestBuffer_(serviceName, methodName, req, proto);
  var options = this.getRemoteApiRequestOptions_(req, data);
  var this_ = this;
  this.sendHttpRequest_(options, data, function(err, response) {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode === 200) {
      var apiResponse = this_.parseRemoteApiResponseBuffer_(response.body);
      if (apiResponse.hasApplicationError()) {
        callback(this_.translateApplicationError_(apiResponse.getApplicationError()));
      } else if (apiResponse.hasRpcError()) {
        callback(this_.translateRpcError_(apiResponse.getRpcError()));
      } else if (apiResponse.hasException()) {
        callback(new Error('API error: python exception'));
      } else if (apiResponse.hasJavaException()) {
        callback(new Error('API error: java exception'));
      } else {
        callback(null, apiResponse);
      }
    } else {
      // Anything other than a 200 is an error.
      var message = 'API error: ' + response.body.toString();
      callback(new Error(message));
    }
  });
};

/**
 * Return the http options for an API request to the appserver.
 *
 * @param {!Object} req node.js request object
 * @param {!Buffer} data a buffer containing a serialized api request proto
 * @return {!Object} the http options
 */
AppEngine.prototype.getRemoteApiRequestOptions_ = function(req, data) {
  var options = {
    hostname: 'appengine.googleapis.com',
    port: 10001,
    path: '/rpc_http',
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': data.length,
      'X-Google-RPC-Service-Endpoint': 'app-engine-apis',
      'X-Google-RPC-Service-Method': '/VMRemoteAPI.CallRemoteAPI'
    }
  };
  if (req.appengine.devappserver) {
    options.hostname = this.getProcessEnv_('API_HOST');
    options.port = Number(this.getProcessEnv_('API_PORT'));
  }
  return options;
};

/**
 * Return the current time.
 *
 * @return {!Number} the current time
 */
AppEngine.prototype.getCurrentTime_ = function() {
  return new Date().getTime();
};

/**
 * Return a property of the process.env object.
 *
 * @param {!String} property name
 * @return {!String} property value
 */
AppEngine.prototype.getProcessEnv_ = function(name) {
  return process.env[name];
};

/**
 * Validate that a request object is valid and contains the appengine
 * extension installed by our middleware. If the request is invalid,
 * it returns an error, otherwise null.
 *
 * @param {Object} req request object
 * @return {?Error} null if the request is valid, an Error otherwise
 */
AppEngine.prototype.validateRequest_ = function(req) {
  if (!goog.isDefAndNotNull(req)) {
    return new Error('invalid request object: ' + req);
  }
  if (!goog.isDefAndNotNull(req.appengine)) {
    return new Error('invalid request object: missing appengine extensions');
  }
  return null;
};

/**
 * Return a node.js Buffer containing a remote api request proto for
 * the given call.
 *
 * @param {!string} serviceName service name
 * @param {!string} methodName method name
 * @param {!Object} req node.js request object
 * @param {!Object} proto request proto
 * @return {!Buffer} a node.js Buffer containing the remote api request
 */
AppEngine.prototype.makeRemoteApiRequestBuffer_ = function(serviceName, methodName, req, proto) {
  var requestId = req.appengine.apiTicket;
  if (req.appengine.devappserver) {
    requestId = req.appengine.devRequestId;
  }
  var apiRequest = new apphosting.ext.remote_api.Request();
  apiRequest.setServiceName(serviceName);
  apiRequest.setMethod(methodName);
  apiRequest.setRequestId(requestId);
  var data = utils.numberArrayToString(this.serializer_.serialize(proto));
  apiRequest.setRequest(data);
  return new Buffer(this.serializer_.serialize(apiRequest));
};

/**
 * Parse a remote api response proto inside a node.js Buffer.
 *
 * @param {!Buffer} buffer a buffer containing the remote api response
 * @return {!apphosting.ext.remote_api.Response} the remote api response proto
 */
AppEngine.prototype.parseRemoteApiResponseBuffer_ = function(buffer) {
  var apiResponse = new apphosting.ext.remote_api.Response();
  this.serializer_.deserializeTo(apiResponse, utils.bufferToUint8Array(buffer));
  return apiResponse;
};

/**
 * Translate an application error to a Javascript error object.
 * @param {!apphosting.ext.remote_api.ApplicationError}
 *        applicationError application error to be translated
 * @return {!Error} the resulting error
 */
AppEngine.prototype.translateApplicationError_ = function(applicationError) {
  var message = 'application error: ' + applicationError.getCode() + ' ' +
      applicationError.getDetail();
  return new Error(message);
};

/**
 * Translate a rpc error to a Javascript error object.
 * @param {!apphosting.ext.remote_api.RpcError}
 *        rpcError rpc error to be translated
 * @return {!Error} the resulting error
 */
AppEngine.prototype.translateRpcError_ = function(rpcError) {
  var message = 'rpc error: ' + rpcError.getCode();
  if (rpcError.hasDetail()) {
    message += ' ' + rpcError.getDetail();
  }
  return new Error(message);
};

/**
 * Log one line to the App Engine log.
 *
 * @param {!Object} req node.js request object
 * @param {!string} message message to log
 * @param {!function(?Error)} callback callback
 */
AppEngine.prototype.logOneLine = function(req, message, callback) {
  this.callApi_('logservice', 'Flush', req, makeLogFlushProto(message,
    this.getCurrentTime_(), this.serializer_), function(err) {
      callback(err);
    });
};

/**
 * Retrieve the value associated with a key in memcache, or undefined if
 * there is no entry matching the key.
 *
 * @param {!Object} req node.js request object
 * @param {!string} key key of the item to retrieve
 * @param {!function(?Error, ?string)} callback callback
 */
AppEngine.prototype.memcacheGet_ = function(req, key, callback) {
  this.callApi_('memcache', 'Get', req, makeMemcacheGetProto(key),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var memcacheGetResponse = new apphosting.MemcacheGetResponse();
      if (apiResponse.hasResponse()) {
        this.serializer_.deserializeTo(memcacheGetResponse, utils.stringToUint8Array(apiResponse.getResponse()));
        if (memcacheGetResponse.itemCount() > 0) {
          var value = memcacheGetResponse.getItem(0).getValue();
          callback(null, value);
        } else {
          callback(null, undefined);
        }
      } else {
        callback(new Error('missing api response pb'));
      }
    }.bind(this));
};

/**
 * Set the value associated with a key in memcache.
 *
 * @param {!Object} req node.js request object
 * @param {!string} key key of the item to set
 * @param {!string} value value of the item to set
 * @param {!function(?Error)} callback callback
 */
AppEngine.prototype.memcacheSet_ = function(req, key, value, callback) {
  this.callApi_('memcache', 'Set', req, makeMemcacheSetProto(key, value),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var memcacheSetResponse = new apphosting.MemcacheSetResponse();
      if (apiResponse.hasResponse()) {
        this.serializer_.deserializeTo(memcacheSetResponse, utils.stringToUint8Array(apiResponse.getResponse()));
        // TODO: Handle the status codes in the response.
        callback(null);
      } else {
        callback(new Error('missing api response pb'));
      }
    }.bind(this));
};

/**
 * Add a task to a queue.
 *
 * The object representing the task options must satisfy the following contract.
 * It must have the following (required) properties:
 *   url : a string, the url to dispatch the task request to
 *
 * It may have the following (optional) properties:
 *   queueName : a string, the name of the queue to add the task to
                (defaults to 'default')
 *   taskName : a string, the name of the task
 *   etaUsec: a string, the ETA in microseconds as a string
 *   method: a string among 'get', 'post', 'head', 'put', 'delete'
 *          (defaults to 'post')
 *   body: a string, the body of the request (for 'post' and 'put' only)
 *   headers: an object containing a property for each desired header in the request
 *
 * @param {!Object} req node.js request object
 * @param {!Object} the task options (see above)
 * @param {!function(?Error)} callback callback
 */
AppEngine.prototype.taskQueueAdd_ = function(req, taskOptions, callback) {
  this.callApi_('taskqueue', 'Add', req, makeTaskqueueAddProto(taskOptions),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.TaskQueueAddResponse();
      if (apiResponse.hasResponse()) {
        this.serializer_.deserializeTo(response, utils.stringToUint8Array(apiResponse.getResponse()));
        var taskName = (response.hasChosenTaskName() ? response.getChosenTaskName() : undefined);
        callback(null, taskName);
      } else {
        callback(new Error('missing api response pb'));
      }
    }.bind(this));
};

/**
 * Get the hostname for a module.
 *
 * @param {!Object} req node.js request object
 * @param {!String} module module name
 * @param {!String} version module version
 * @param {!String} instance module instance
 * @param {!function(?Error, ?string)} callback callback
 */
AppEngine.prototype.modulesGetHostname_ = function(req, module, version, instance, callback) {
  this.callApi_('modules', 'GetHostname', req,
    makeModulesGetHostnameProto(module, version, instance),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.GetHostnameResponse();
      if (apiResponse.hasResponse()) {
        this.serializer_.deserializeTo(response, utils.stringToUint8Array(apiResponse.getResponse()));
        callback(null, response.getHostname());
      } else {
        callback(new Error('missing api response pb'));
      }
    }.bind(this));
};

/**
 * Start a background request.
 *
 * @param {!Object} req node.js request object
 * @param {!function(?Error, ?string)} callback callback
 */
AppEngine.prototype.systemStartBackgroundRequest_ = function(req, callback) {
  this.callApi_('system', 'StartBackgroundRequest', req,
    new apphosting.StartBackgroundRequestRequest(),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.StartBackgroundRequestResponse();
      if (apiResponse.hasResponse()) {
        this.serializer_.deserializeTo(response, utils.stringToUint8Array(apiResponse.getResponse()));
        callback(null, response.getRequestId());
      } else {
        callback(new Error('missing api response pb'));
      }
    }.bind(this));
};

/**
 * Get a background request object that can be used to make api calls from
 * outside an appengine request handler.
 *
 * @param {!Object} req node.js request object
 * @param {!function(?Error, ?Object)} callback callback
 * @return {!Object} a request object suitable for making api calls
 */
AppEngine.prototype.systemGetBackgroundRequest_ = function(req, callback) {
  var maybeError = this.validateRequest_(req);
  if (goog.isDefAndNotNull(maybeError)) {
    callback(maybeError);
    return;
  }
  var appId = req.appengine.appId;
  var moduleName = req.appengine.moduleName;
  var moduleVersion = req.appengine.moduleVersion;
  var moduleInstance;
  if (goog.isDefAndNotNull(req.appengine.moduleInstance)) {
    moduleInstance = req.appengine.moduleInstance;
  } else if (goog.isDefAndNotNull(this.cache_.moduleInstance)) {
    moduleInstance = this.cache_.moduleInstance;
  }
  if (goog.isDefAndNotNull(moduleInstance)) {
    callback(null, makeBackgroundRequest(req, appId, moduleName, moduleVersion, moduleInstance));
  } else {
    this.metadataGetAttribute_(req, 'instance/attributes/gae_backend_instance', function(err, moduleInstance) {
      if (err) {
        callback(err);
        return;
      }
      this.cache_.moduleInstance = moduleInstance;
      callback(null, makeBackgroundRequest(req, appId, moduleName, moduleVersion, moduleInstance));
    }.bind(this));
  }
};

/**
 * Retrieve an OAuth access token for the service account for the VM.
 * In case of success, the callback will be invoked with as argument an object
 * containing three properties: "accessToken" and "tokenType", both strings, and
 * "expiresIn", a number.
 *
 * @param {!Object} req node.js request object
 * @param {function(?Error, ?Object)} callback
 */
AppEngine.prototype.authGetServiceAccountToken_ = function(req, callback) {
  var options = {
    hostname: 'metadata',
    path: '/computeMetadata/v1/instance/service-accounts/default/token',
    method: 'GET',
    headers: {
      'Metadata-Flavor' : 'Google'
    }
  };
  this.sendHttpRequest_(options, null, function(err, response) {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode === 200) {
      var tokenData = JSON.parse(response.body);
      callback(null, {accessToken: tokenData.access_token,
                      tokenType: tokenData.token_type,
                      expiresIn: tokenData.expires_in});
    } else {
        var message = 'auth error: ' + response.body.toString();
        callback(new Error(message));
    }
  });
};

/**
 * Retrieve the value of a metadata attribute.
 *
 * @param {!Object} req node.js request object
 * @param {!String} name attribute name
 * @param {function(?Error, ?string)} callback
 */
AppEngine.prototype.metadataGetAttribute_ = function(req, name, callback) {
  var options = {
    hostname: 'metadata',
    path: '/computeMetadata/v1/' + name,
    method: 'GET',
    headers: {
      'Metadata-Flavor' : 'Google'
    }
  };
  this.sendHttpRequest_(options, null, function(err, response) {
    if (err) {
      callback(err);
      return;
    }
    if (response.statusCode === 200) {
      callback(null, response.body.toString());
    } else if (response.statusCode === 404) {
      callback(null, null);
    } else {
        var message = 'metadata error: ' + response.body.toString();
        callback(new Error(message));
    }
  });
};

/**
 * Process the App Engine-specific request headers before calling the next
 * middleware in the chain.
 *
 * @param {!Object} req node.js request object
 * @param {!Object} res node.js response object
 * @param {?function()} next function to use to invoke the next middleware
 */
AppEngine.prototype.middlewareBase_ = function(req, res, next) {
  var info = {};
  info.apiTicket = req.headers['x-appengine-api-ticket'];
  info.devRequestId = req.headers['x-appengine-dev-request-id'];
  info.authDomain = req.headers['x-appengine-auth-domain'];
  info.datacenter = req.headers['x-appengine-datacenter'];
  info.defaultVersionHostname = req.headers['x-appengine-default-version-hostname'];
  info.https = req.headers['x-appengine-https'];
  info.requestIdHash = req.headers['x-appengine-request-id-hash'];
  info.requestLogId = req.headers['x-appengine-request-log-id'];
  info.appId = this.getProcessEnv_('GAE_LONG_APP_ID');
  info.moduleName = this.getProcessEnv_('GAE_MODULE_NAME');
  info.moduleVersion = this.getProcessEnv_('GAE_MODULE_VERSION');
  // This environment variable only exists in the dev appserver.
  var moduleInstance = this.getProcessEnv_('GAE_MODULE_INSTANCE');
  if (goog.isDefAndNotNull(moduleInstance)) {
    info.moduleInstance = moduleInstance;
  }
  info.minorVersion = this.getProcessEnv_('GAE_MINOR_VERSION');
  if (goog.isDefAndNotNull(req.headers['x-appengine-user-email']) ||
      goog.isDefAndNotNull(req.headers['x-appengine-user-ip'])) {
    var userInfo = {};
    userInfo.ip = req.headers['x-appengine-user-ip'];
    userInfo.email = req.headers['x-appengine-user-email'];
    userInfo.nickname = req.headers['x-appengine-user-nickname'];
    userInfo.organization = req.headers['x-appengine-user-organization'];
    userInfo.isAdmin = req.headers['x-appengine-user-is-admin'];
    info.user = userInfo;
  }
  if (goog.isDefAndNotNull(req.headers['x-appengine-country'])) {
    var geoInfo = {};
    geoInfo.country = req.headers['x-appengine-country'];
    if (geoInfo.country !== 'ZZ') {
      // 'ZZ' is a bogus value used for requests that come from the executor service.
      geoInfo.region = req.headers['x-appengine-region'];
      geoInfo.city = req.headers['x-appengine-city'];
      geoInfo.cityLatLong  = req.headers['x-appengine-citylatlong'];
      info.geo = geoInfo;
    }
  }
  if (goog.isDefAndNotNull(req.headers['x-appengine-taskname'])) {
    var taskInfo = {};
    taskInfo.queueName = req.headers['x-appengine-queuename'];
    taskInfo.taskName = req.headers['x-appengine-taskname'];
    taskInfo.retryCount = req.headers['x-appengine-taskretrycount'];
    taskInfo.executionCount = req.headers['x-appengine-taskexecutioncount'];
    taskInfo.eta = req.headers['x-appengine-tasketa'];
    info.task = taskInfo;
  }
  // TODO: Alternatively, we can look at process.env['GAE_PARTITION'], which is
  // set to 'dev' in the devappserver.
  info.devappserver = goog.isDefAndNotNull(info.devRequestId);
  req.appengine = info;

  if (goog.isDefAndNotNull(next)) {
    next();
  }
};

/**
 * Return a log flush request proto.
 *
 * @param {!string} message the message to log
 * @param {!Number} time the timestamp to use in milliseconds
 * @Param {!net.proto2.contrib.WireSerializer} serializer the serializer to use
 * @return {!apphosting.FlushRequest} a log flush request proto
 */
function makeLogFlushProto(message, time, serializer) {
  var userAppLogLine = new apphosting.UserAppLogLine();
  userAppLogLine.setTimestampUsec((time * 1000).toString());
  userAppLogLine.setLevel((0).toString());
  userAppLogLine.setMessage(message);
  var userAppLogGroup = new apphosting.UserAppLogGroup();
  userAppLogGroup.addLogLine(userAppLogLine);
  var flushRequest = new apphosting.FlushRequest();
  var data = utils.numberArrayToString(serializer.serialize(userAppLogGroup));
  flushRequest.setLogs(data);
  return flushRequest;
}

/**
 * Return a memcache get request proto.
 *
 * @param {!string} key key of the item to retrieve
 * @return {apphosting.MemcacheGetRequest} a memcache get request proto
 */
function makeMemcacheGetProto(key) {
  var memcacheGetRequest = new apphosting.MemcacheGetRequest();
  memcacheGetRequest.addKey(key);
  return memcacheGetRequest;
}

/**
 * Return a memcache set request proto.
 *
 * @param {!string} key key of the item to set
 * @param {!string} value value of the item to set
 * @return {apphosting.MemcacheSetRequest} a memcache set request proto
 */
function makeMemcacheSetProto(key, value) {
  var memcacheSetRequest = new apphosting.MemcacheSetRequest();
  var item = new apphosting.MemcacheSetRequest.Item();
  item.setKey(key);
  item.setValue(value);
  item.setSetPolicy(apphosting.MemcacheSetRequest.SetPolicy.SET);
  memcacheSetRequest.addItem(item);
  return memcacheSetRequest;
}

var methodToProtoMethod = {
  'post': apphosting.TaskQueueAddRequest.RequestMethod.POST,
  'get': apphosting.TaskQueueAddRequest.RequestMethod.GET,
  'head': apphosting.TaskQueueAddRequest.RequestMethod.HEAD,
  'put': apphosting.TaskQueueAddRequest.RequestMethod.PUT,
  'delete': apphosting.TaskQueueAddRequest.RequestMethod.DELETE
};

/**
 * Return a taskqueue add request proto.
 *
 * The object representing the task options must satisfy the following contract.
 * It must have the following (required) properties:
 *   url : a string, the url to dispatch the task request to
 *
 * It may have the following (optional) properties:
 *   queueName : a string, the name of the queue to add the task to
                (defaults to 'default')
 *   taskName : a string, the name of the task
 *   etaUsec: a string, the ETA in microseconds as a string
 *   method: a string among 'get', 'post', 'head', 'put', 'delete'
 *          (defaults to 'post')
 *   body: a string, the body of the request (for 'post' and 'put' only)
 *   headers: an object containing a property for each desired header in the request
 *
 * @param {!Object} the task options (see above)
 * @return {apphosting.TaskQueueAddRequest} a taskqueue add request proto
 */
function makeTaskqueueAddProto(taskOptions) {
  var taskqueueAddRequest = new apphosting.TaskQueueAddRequest();
  taskqueueAddRequest.setUrl(taskOptions.url);
  taskqueueAddRequest.setQueueName(goog.isDefAndNotNull(taskOptions.queueName) ?
    taskOptions.queueName : 'default');
  taskqueueAddRequest.setTaskName(goog.isDefAndNotNull(taskOptions.taskName) ?
    taskOptions.taskName : '');
  taskqueueAddRequest.setEtaUsec(goog.isDefAndNotNull(taskOptions.etaUsec) ?
    taskOptions.etaUsec : '0');
  var method = 'post';
  if (goog.isDefAndNotNull(taskOptions.method)) {
    method = taskOptions.method;
  }
  taskqueueAddRequest.setMethod(methodToProtoMethod[method]);
  if (goog.isDefAndNotNull(taskOptions.body)) {
    taskqueueAddRequest.setBody(taskOptions.body);
  }
  if (goog.isDefAndNotNull(taskOptions.headers)) {
    goog.object.forEach(taskOptions.headers, function(value, key) {
      var header = new apphosting.TaskQueueAddRequest.Header();
      header.setKey(key);
      header.setValue(value);
      taskqueueAddRequest.addHeader(header);
    });
  }
  return taskqueueAddRequest;
}

/**
 * Return a background request object.
 *
 * @param {!object} req request
 * @param {!string} appId application id
 * @param {!string} moduleName module name
 * @param {!string} moduleVersion major module version
 * @param {!string} moduleInstance instance id
 * @return {!Object} a request object suitable for making api calls
 */
function makeBackgroundRequest(req, appId, moduleName, moduleVersion, moduleInstance) {
  var escapedAppId = appId.replace(/[:.]/g, '_');
  var token = escapedAppId + '/' + moduleName + '.' + moduleVersion + '.' + moduleInstance;
  var result = {
    appengine: {
      devappserver: req.appengine.devappserver,
      appId: req.appengine.appId,
      moduleName: req.appengine.moduleName,
      moduleVersion: req.appengine.moduleVersion
    }
  };
  if (req.appengine.devappserver) {
    result.appengine.devRequestId = token;
  } else {
    result.appengine.apiTicket = token;
  }
  if (goog.isDefAndNotNull(req.appengine.moduleInstance)) {
    result.appengine.moduleInstance = req.appengine.moduleInstance;
  }
  return result;
}

/**
 * Return a modules get hostname proto.
 *
 * @param {!string} module module name
 * @param {!string} version module version
 * @param {!string} instance module instance
 * @return {apphosting.GetHostnameRequest} a modules get hostname proto
 */
function makeModulesGetHostnameProto(module, version, instance) {
  var getHostnameRequest = new apphosting.GetHostnameRequest();
  getHostnameRequest.setModule(module);
  getHostnameRequest.setVersion(version);
  getHostnameRequest.setInstance(instance);
  return getHostnameRequest;
}

function createAppEngine() {
  var ae = new AppEngine();
  ae.exportAll_();
  return ae;
}

module.exports = createAppEngine();

module.exports.AppEngine = AppEngine;
