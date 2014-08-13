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
function makeRemoteApiRequestBuffer(serviceName, methodName, req, proto) {
  var requestId = req.appengine.apiTicket;
  if (req.appengine.devappserver) {
    requestId = req.appengine.devRequestId;
  }
  var apiRequest = new apphosting.ext.remote_api.Request();
  apiRequest.setServiceName(serviceName);
  apiRequest.setMethod(methodName);
  apiRequest.setRequestId(requestId);
  var serializer = new net.proto2.contrib.WireSerializer();
  var data = numberArrayToString(serializer.serialize(proto));
  apiRequest.setRequest(data);
  return new Buffer(serializer.serialize(apiRequest));
};

/**
 * Parse a remote api response proto inside a node.js Buffer.
 *
 * @param {!Buffer} buffer a buffer containing the remote api response
 * @return {!apphosting.ext.remote_api.Response} the remote api response proto
 */
function parseRemoteApiResponseBuffer(buffer) {
  var serializer = new net.proto2.contrib.WireSerializer();
  var apiResponse = new apphosting.ext.remote_api.Response();
  serializer.deserializeTo(apiResponse, bufferToUint8Array(buffer));
  return apiResponse;
};

/**
 * Convert an array of numbers to a string.
 *
 * @param {Array.<number>} a array to convert
 * @return {!string} resulting string
 */
function numberArrayToString(a) {
  var s = ''
  for (var i in a) {
    s += String.fromCharCode(a[i]);
  }
  return s;
};

/**
 * Convert a node.js Buffer to a UInt8Array.
 *
 * @param {!Buffer} buffer buffer to convert
 * @return {!Uint8Array} resulting array
 */
function bufferToUint8Array(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return view;
};

/**
 * Convert a string to a Uint8Array.
 * @param {!string} s string to convert
 * @return {UInt8Array} resulting array
 */
function stringToUint8Array(s) {
    a = new Uint8Array(s.length);
    for(var i=0, j=s.length; i<j; ++i) {
        a[i]=s.charCodeAt(i);
    }
    return a;
};

/**
 * Return the http options for an API request to the appserver.
 *
 * @param {!Object} req node.js request object
 * @param {!Buffer} data a buffer containing a serialized api request proto
 * @return {!Object} the http options
 */
function getRemoteApiRequestOptions(req, data) {
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
    options.hostname = process.env['API_HOST'];
    options.port = process.env['API_PORT'];
  }
  return options;
};

/**
 * Translate an application error to a Javascript error object.
 * @param {!apphosting.ext.remote_api.ApplicationError}
 *        applicationError application error to be translated
 * @return {!Error} the resulting error
 */
function translateApplicationError(applicationError) {
  var message = "application error: " + applicationError.getCode() + " " +
      applicationError.getDetail();
  return new Error(message);
}

/**
 * Translate a rpc error to a Javascript error object.
 * @param {!apphosting.ext.remote_api.RpcError}
 *        rpcError rpc error to be translated
 * @return {!Error} the resulting error
 */
function translateRpcError(rpcError) {
  var message = "rpc error: " + rpcError.getCode();
  if (rpcError.hasDetail()) {
    message += " " + rpcError.getDetail();
  }
  return new Error(message);
}

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
function callApi(serviceName, methodName, req, proto, callback) {
  var data = makeRemoteApiRequestBuffer(serviceName, methodName, req, proto);
  var options = getRemoteApiRequestOptions(req, data);
  var request = http.request(options, function(response) {
    var chunks = [];
    response.on('data', function(chunk) {
      chunks.push(chunk);
    });
    response.on('error', callback);
    response.on('end', function(e) {
      var body = Buffer.concat(chunks);
      if (response.statusCode == 200) {
        var apiResponse = parseRemoteApiResponseBuffer(body);
        if (apiResponse.hasApplicationError()) {
          callback(translateApplicationError(apiResponse.getApplicationError()));
        } else if (apiResponse.hasRpcError()) {
          callback(translateRpcError(apiResponse.getRpcError()));
        } else if (apiResponse.hasException()) {
          callback(new Error("'API error: python exception"));
        } else if (apiResponse.hasJavaException()) {
          callback(new Error("'API error: java exception"));
        } else {
          callback(null, apiResponse);
        }
      } else {
        // Anything other than a 200 is an error.
        callback(new Error('API error: ' + body.toString()));
      }
    });
  });
  request.on('error', callback);
  request.write(data);
  request.end();
};

/**
 * Return a log flush request proto.
 *
 * @param {!string} message the message to log
 * @return {!apphosting.FlushRequest} a log flush request proto
 */
function makeLogFlushProto(message) {
  var userAppLogLine = new apphosting.UserAppLogLine();
  userAppLogLine.setTimestampUsec((new Date().getTime() * 1000).toString());
  userAppLogLine.setLevel((0).toString());
  userAppLogLine.setMessage(message);
  var userAppLogGroup = new apphosting.UserAppLogGroup();
  userAppLogGroup.addLogLine(userAppLogLine);
  var flushRequest = new apphosting.FlushRequest();
  var serializer = new net.proto2.contrib.WireSerializer();
  var data = numberArrayToString(serializer.serialize(userAppLogGroup));
  flushRequest.setLogs(data);
  return flushRequest;
};

/**
 * Log one line to the App Engine log.
 *
 * @param {!Object} req node.js request object
 * @param {!string} message message to log
 * @param {!function(?Error)} callback callback
 */
exports.logOneLine = function(req, message, callback) {
  callApi('logservice', 'Flush', req, makeLogFlushProto(message),
    function(err, apiResponse) {
      callback(err);
    });
};

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
};

// Exported memcache api.
exports.memcache = {};

/**
 * Retrieve the value associated with a key in memcache, or undefined if
 * there is no entry matching the key.
 *
 * @param {!Object} req node.js request object
 * @param {!string} key key of the item to retrieve
 * @param {!function(?Error, ?string)} callback callback
 */
exports.memcache.get = function(req, key, callback) {
  callApi('memcache', 'Get', req, makeMemcacheGetProto(key),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var memcacheGetResponse = new apphosting.MemcacheGetResponse();
      if (apiResponse.hasResponse()) {
        var serializer = new net.proto2.contrib.WireSerializer();
        serializer.deserializeTo(memcacheGetResponse, stringToUint8Array(apiResponse.getResponse()));
        if (memcacheGetResponse.itemCount() > 0) {
          var value = memcacheGetResponse.getItem(0).getValue();
          callback(null, value);
        } else {
          callback(null, undefined);
        }
      } else {
        callback(new Error('missing api response pb'));
      }
    });
};

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
};

/**
 * Set the value associated with a key in memcache.
 *
 * @param {!Object} req node.js request object
 * @param {!string} key key of the item to set
 * @param {!string} value value of the item to set
 * @param {!function(?Error)} callback callback
 */
exports.memcache.set = function(req, key, value, callback) {
  callApi('memcache', 'Set', req, makeMemcacheSetProto(key, value),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var memcacheSetResponse = new apphosting.MemcacheSetResponse();
      if (apiResponse.hasResponse()) {
        var serializer = new net.proto2.contrib.WireSerializer();
        serializer.deserializeTo(memcacheSetResponse, stringToUint8Array(apiResponse.getResponse()));
        // TODO: Handle the status codes in the response.
        callback(null);
      } else {
        callback(new Error('missing api response pb'));
      }
    });
};

// Exported taskqueue api.
exports.taskqueue = {};

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
exports.taskqueue.add = function(req, taskOptions, callback) {
  callApi('taskqueue', 'Add', req, makeTaskqueueAddProto(taskOptions),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.StartBackgroundRequestResponse();
      if (apiResponse.hasResponse()) {
        var serializer = new net.proto2.contrib.WireSerializer();
        serializer.deserializeTo(response, stringToUint8Array(apiResponse.getResponse()));
        callback(null, response.getRequestId());
      } else {
        callback(new Error('missing api response pb'));
      }
    });
};

// Exported modules api.
exports.modules = {};

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
exports.modules.getHostname = function(req, module, version, instance, callback) {
  callApi('modules', 'GetHostname', req,
    makeModulesGetHostnameProto(module, version, instance),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.GetHostnameResponse();
      if (apiResponse.hasResponse()) {
        var serializer = new net.proto2.contrib.WireSerializer();
        serializer.deserializeTo(response, stringToUint8Array(apiResponse.getResponse()));
        callback(null, response.getHostname());
      } else {
        callback(new Error('missing api response pb'));
      }
    });
};

// Exported system api.
exports.system = {};

/**
 * Start a background request.
 *
 * @param {!Object} req node.js request object
 * @param {!function(?Error, ?string)} callback callback
 */
exports.system.startBackgroundRequest = function(req, callback) {
  callApi('system', 'StartBackgroundRequest', req,
    new apphosting.StartBackgroundRequestRequest(),
    function(err, apiResponse) {
      if (err) {
        callback(err);
        return;
      }
      var response = new apphosting.StartBackgroundRequestResponse();
      if (apiResponse.hasResponse()) {
        var serializer = new net.proto2.contrib.WireSerializer();
        serializer.deserializeTo(response, stringToUint8Array(apiResponse.getResponse()));
        callback(null, response.getRequestId());
      } else {
        callback(new Error('missing api response pb'));
      }
    });
};

// Exported auth helpers.
exports.auth = {};

/**
 * Retrieve an OAuth access token for the service account for the VM.
 * In case of success, the callback will be invoked with as argument an object
 * containing three properties: "accessToken" and "tokenType", both strings, and
 * "expiresIn", a number.
 *
 * @param {!Object} req node.js request object
 * @param {function(?Error, ?Object)} callback
 */
exports.auth.getServiceAccountToken = function(req, callback) {
  var options = {
    hostname: 'metadata',
    path: '/computeMetadata/v1/instance/service-accounts/default/token',
    method: 'GET',
    headers: {
      'Metadata-Flavor' : 'Google'
    }
  };
  var tokenRequest = http.request(options, function(tokenResponse) {
    var chunks = [];
    tokenResponse.on('data', function(chunk) {
      chunks.push(chunk);
    });
    tokenResponse.on('error', function(e) {
      console.log('token response error: ' + e.message);
      callback(e);
    });
    tokenResponse.on('end', function(e) {
      var body = Buffer.concat(chunks);
      if (tokenResponse.statusCode == 200) {
        var response = JSON.parse(body);
        callback(null, {accessToken: response.access_token,
                        tokenType: response.token_type,
                        expiresIn: response.expires_in});
      } else {
        callback(new Error('token request error: ' + body.toString()));
      }
    });
  });
  tokenRequest.on('error', function(e) {
    console.log('token request error: ' + e.message);
    callback(e);
  });
  tokenRequest.end();
};

// Exported metadata helpers.
exports.metadata = {};

/**
 * Retrieve the value of a metadata attribute.
 *
 * @param {!Object} req node.js request object
 * @param {!String} name attribute name
 * @param {function(?Error, ?string)} callback
 */
exports.metadata.getAttribute = function(req, name, callback) {
  var options = {
    hostname: 'metadata',
    path: '/computeMetadata/v1/' + name,
    method: 'GET',
    headers: {
      'Metadata-Flavor' : 'Google'
    }
  };
  var metadataRequest = http.request(options, function(metadataResponse) {
    var chunks = [];
    metadataResponse.on('data', function(chunk) {
      chunks.push(chunk);
    });
    metadataResponse.on('error', function(e) {
      console.log('metadata response error: ' + e.message);
      callback(e);
    });
    metadataResponse.on('end', function(e) {
      var body = Buffer.concat(chunks);
      if (metadataResponse.statusCode == 200) {
        callback(null, body.toString());
      } else if (metadataResponse.statusCode == 404) {
        callback(null, null);
      } else {
        callback(new Error('metadata request error: ' + body.toString()));
      }
    });
  });
  metadataRequest.on('error', function(e) {
    console.log('metadata request error: ' + e.message);
    callback(e);
  });
  metadataRequest.end();
}

// Exported middlewares.
exports.middleware = {};

/**
 * Process the App Engine-specific request headers before calling the next
 * middleware in the chain.
 *
 * @param {!Object} req node.js request object
 * @param {!Object} res node.js response object
 * @param {?function()} next function to use to invoke the next middleware
 */
exports.middleware.base = function(req, res, next) {
  var info = {};
  info.apiTicket = req.headers['x-appengine-api-ticket'];
  info.devRequestId = req.headers['x-appengine-dev-request-id'];
  info.authDomain = req.headers['x-appengine-auth-domain'];
  info.datacenter = req.headers['x-appengine-datacenter'];
  info.defaultVersionHostname = req.headers['x-appengine-default-version-hostname'];
  info.https = req.headers['x-appengine-https'];
  info.requestIdHash = req.headers['x-appengine-request-id-hash'];
  info.requestLogId = req.headers['x-appengine-request-log-id'];
  var moduleName = process.env['GAE_MODULE_NAME'];
  if (goog.isDefAndNotNull(moduleName)) {
    info.moduleName = moduleName;
  }
  var moduleVersion = process.env['GAE_MODULE_VERSION'];
  if (goog.isDefAndNotNull(moduleVersion)) {
    info.moduleVersion = moduleVersion;
  }
  if (req.headers['x-appengine-user-email']) {
    var userInfo = {};
    userInfo.ip = req.headers['x-appengine-user-ip'];
    userInfo.email = req.headers['x-appengine-user-email'];
    userInfo.nickname = req.headers['x-appengine-user-nickname'];
    userInfo.organization = req.headers['x-appengine-user-organization'];
    userInfo.isAdmin = req.headers['x-appengine-user-is-admin'];
    info.user = userInfo;
  }
  if (req.headers['x-appengine-country']) {
    var geoInfo = {};
    geoInfo.country = req.headers['x-appengine-country'];
    if (geoInfo.country != 'ZZ') {
      // 'ZZ' is a bogus value used for requests that come from the executor service.
      geoInfo.region = req.headers['x-appengine-region'];
      geoInfo.city = req.headers['x-appengine-city'];
      geoInfo.cityLatLong  = req.headers['x-appengine-citylatlong'];
      info.geo = geoInfo;
    }
  }
  if (req.headers['x-appengine-taskname']) {
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
