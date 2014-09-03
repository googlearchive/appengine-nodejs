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

'use strict';

var assert = require('assert');
var http = require('http');
var tmp = require('tmp');

var appengine = require('../lib/index.js');
var utils = require('../lib/utils.js');

require('../lib/closure/goog/bootstrap/nodejs.js');
require('../lib/deps.js');

goog.require('apphosting.base.VoidProto');
goog.require('net.proto2.contrib.WireSerializer');

describe('appengine', function() {
 it('should export all public functions', function() {
    assert.strictEqual(typeof(appengine.memcache.get), 'function');
    assert.strictEqual(typeof(appengine.memcache.set), 'function');
    assert.strictEqual(typeof(appengine.taskqueue.add), 'function');
    assert.strictEqual(typeof(appengine.modules.getHostname), 'function');
    assert.strictEqual(typeof(appengine.auth.getServiceAccountToken), 'function');
    assert.strictEqual(typeof(appengine.metadata.getAttribute), 'function');
    assert.strictEqual(typeof(appengine.middleware.base), 'function');
  });

  it('should export a constructor', function() {
    assert.notEqual(appengine.AppEngine, undefined);
  });

  describe('AppEngine', function() {
    var serializer = new net.proto2.contrib.WireSerializer();

    describe('exportAll_', function() {
      it('should export all public functions', function() {
        var ae = new appengine.AppEngine();
        assert.strictEqual(ae.memcache, undefined);
        assert.strictEqual(ae.taskqueue, undefined);
        assert.strictEqual(ae.modules, undefined);
        assert.strictEqual(ae.auth, undefined);
        assert.strictEqual(ae.metadata, undefined);
        assert.strictEqual(ae.middleware, undefined);
        ae.exportAll_();
        assert.strictEqual(typeof(appengine.memcache.get), 'function');
        assert.strictEqual(typeof(appengine.memcache.set), 'function');
        assert.strictEqual(typeof(appengine.taskqueue.add), 'function');
        assert.strictEqual(typeof(appengine.modules.getHostname), 'function');
        assert.strictEqual(typeof(appengine.auth.getServiceAccountToken), 'function');
        assert.strictEqual(typeof(appengine.metadata.getAttribute), 'function');
        assert.strictEqual(typeof(appengine.middleware.base), 'function');
      });
    });

    describe('sendHttpRequest_', function() {

      // TODO: Add a test for a regular request-response interaction.

      it('handles low-level errors', function() {
        tmp.tmpName(function(err, path) {
          assert.ifError(err);
          var responseHeaders = {'test': 'foobar'};
          var responseBody = new Buffer('ABCD');
          var ae = new appengine.AppEngine();
          var body = new Buffer(10);
          body.fill('a');
          var options = {
            socketPath: path,
            path: '/',
            method: 'GET'
          };
          ae.sendHttpRequest_(options, body, function(err, response) {
            assert.ok(!!err, 'expected an error');
          });
        });
      });
    });

    describe('callApi_', function() {
      it('handles success responses', function() {
        var ae = new appengine.AppEngine();

        var responseProto = new apphosting.base.VoidProto();
        var response = new apphosting.ext.remote_api.Response();
        response.setResponse(utils.numberArrayToString(serializer.serialize(responseProto)));
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err, apiResponse) {
          assert.ifError(err);
          assert.strictEqual(apiResponse.hasApplicationError(), false);
          assert.strictEqual(apiResponse.hasRpcError(), false);
          assert.strictEqual(apiResponse.hasException(), false);
          var actualResponseProto = new apphosting.base.VoidProto();
          serializer.deserializeTo(actualResponseProto, utils.stringToUint8Array(apiResponse.getResponse()));
          assert.deepEqual(actualResponseProto, responseProto);
        });
      });

      it('handles application errors', function(done) {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        var error = new apphosting.ext.remote_api.ApplicationError();
        error.setCode(1);
        error.setDetail('test');
        response.setApplicationError(error);
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        }
        ae.translateApplicationError_ = function(applicationError) {
          assert.deepEqual(applicationError, error);
          done();
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {});
      });

      it('handles rpc errors', function(done) {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        var error = new apphosting.ext.remote_api.RpcError();
        error.setCode(1);
        error.setDetail('test');
        response.setRpcError(error);
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        }
        ae.translateRpcError_ = function(rpcError) {
          assert.deepEqual(rpcError, error);
          done();
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {});
      });

      it('handles python exceptions', function() {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        response.setException('exception');
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.equal(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: python exception');
        });
      });

      it('handles java exceptions', function() {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        response.setJavaException('exception');
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.equal(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: java exception');
        });
      });

      it('handles non-200 status codes', function() {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 500, body: new Buffer('test')});
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.equal(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: test');
        });
      });

      it('handles low-level http errors', function() {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        var error = new Error('failed');
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(error);
        }

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.equal(err, error);
        });
      });
    });

    describe('getRemoteApiRequestOptions_', function() {
      it('returns the correct options', function() {
        var req = {appengine: {devappserver: false}};
        var ae = new appengine.AppEngine();
        var options = ae.getRemoteApiRequestOptions_(req, new Buffer(100));
        assert.strictEqual(options.hostname, 'appengine.googleapis.com');
        assert.strictEqual(options.port, 10001);
        assert.strictEqual(options.path, '/rpc_http');
        assert.strictEqual(options.method, 'POST');
        assert.deepEqual(options.headers, {
          'Content-Type': 'application/octet-stream',
          'Content-Length': 100,
          'X-Google-RPC-Service-Endpoint': 'app-engine-apis',
          'X-Google-RPC-Service-Method': '/VMRemoteAPI.CallRemoteAPI'
        });
      });

      it('returns the correct options for the devappserver', function() {
        var env = {'API_HOST': 'foo', 'API_PORT':'8888'};
        var ae = new appengine.AppEngine();
        ae.getProcessEnv_ = function(name) {
          return env[name]
        }

        var req = {appengine: {devappserver: true}};
        var options = ae.getRemoteApiRequestOptions_(req, new Buffer(100));
        assert.strictEqual(options.hostname, 'foo');
        assert.strictEqual(options.port, 8888);
        assert.strictEqual(options.path, '/rpc_http');
        assert.strictEqual(options.method, 'POST');
        assert.deepEqual(options.headers, {
          'Content-Type': 'application/octet-stream',
          'Content-Length': 100,
          'X-Google-RPC-Service-Endpoint': 'app-engine-apis',
          'X-Google-RPC-Service-Method': '/VMRemoteAPI.CallRemoteAPI'
        });
      });
    });

    describe('getCurrentTime_', function() {
      it('returns the current time', function() {
        var ae = new appengine.AppEngine();
        var before = new Date().getTime();
        var time = ae.getCurrentTime_();
        var after = new Date().getTime();
        assert.ok(before <= time && time <= after);
      });

      it('returns a result in the correct interval', function(done) {
        var ae = new appengine.AppEngine();
        var before = new Date().getTime();
        setTimeout(function() {
          var time = ae.getCurrentTime_();
          setTimeout(function() {
            var after = new Date().getTime();
            assert.ok(before <= time && time <= after);
            done();
          }, 10);
        }, 10);
      });
    });

    describe('getProcessEnv_', function() {
      it('returns the properties of process.env', function() {
        var ae = new appengine.AppEngine();
        for (var p in process.env) {
          if (process.env.hasOwnProperty(p)) {
            assert.strictEqual(ae.getProcessEnv_(p), process.env[p]);
          }
        }
      });
    });

    describe('makeRemoteApiRequestBuffer_', function() {
      it('returns the correct proto', function() {
        var ae = new appengine.AppEngine();

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        var buffer = ae.makeRemoteApiRequestBuffer_('Test', 'test', req, proto);

        var apiRequest = new apphosting.ext.remote_api.Request();
        serializer.deserializeTo(apiRequest, utils.bufferToUint8Array(buffer));
        assert.strictEqual(apiRequest.getServiceName(), 'Test');
        assert.strictEqual(apiRequest.getMethod(), 'test');
        assert.strictEqual(apiRequest.getRequestId(), 'test123');
        assert.strictEqual(apiRequest.getRequest(), '');
      });

      it('returns the correct proto for the devappserver', function() {
        var ae = new appengine.AppEngine();

        var req = {appengine: {devRequestId: 'test123', devappserver: true}};
        var proto = new apphosting.base.VoidProto();
        var buffer = ae.makeRemoteApiRequestBuffer_('Test', 'test', req, proto);

        var apiRequest = new apphosting.ext.remote_api.Request();
        serializer.deserializeTo(apiRequest, utils.bufferToUint8Array(buffer));
        assert.strictEqual(apiRequest.getServiceName(), 'Test');
        assert.strictEqual(apiRequest.getMethod(), 'test');
        assert.strictEqual(apiRequest.getRequestId(), 'test123');
        assert.strictEqual(apiRequest.getRequest(), '');
      });
    });

    describe('parseRemoteApiResponseBuffer_', function() {
      it('returns the correct proto', function() {
        var innerProto = new apphosting.base.VoidProto();
        var proto = new apphosting.ext.remote_api.Response();
        proto.setResponse(utils.numberArrayToString(serializer.serialize(innerProto)));
        var buffer = new Buffer(serializer.serialize(proto));
        var ae = new appengine.AppEngine();

        var result = ae.parseRemoteApiResponseBuffer_(buffer);
        assert.deepEqual(result, proto);
      });
    });

    describe('translateApplicationError_', function() {
      it('translates it to an Error', function() {
        var ae = new appengine.AppEngine();
        var error = new apphosting.ext.remote_api.ApplicationError();
        error.setCode(1);
        error.setDetail('test');
        var result = ae.translateApplicationError_(error);
        assert.equal(result.constructor, Error);
        assert.strictEqual(result.message, 'application error: 1 test');
      });
    });

    describe('translateRpcError_', function() {
      it('translates it to an Error', function() {
        var ae = new appengine.AppEngine();
        var error = new apphosting.ext.remote_api.RpcError();
        error.setCode(1);
        error.setDetail('test');
        var result = ae.translateRpcError_(error);
        assert.equal(result.constructor, Error);
        assert.strictEqual(result.message, 'rpc error: 1 test');
      });
    });

    describe('logOneLine', function() {
      it('makes an api call to log a line', function(done) {
        var ae = new appengine.AppEngine();
        var time = new Date().getTime();
        ae.getCurrentTime_ = function() {
          return time;
        }
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'logservice');
          assert.strictEqual(methodName, 'Flush');
          var userAppLogGroup = new apphosting.UserAppLogGroup();
          serializer.deserializeTo(userAppLogGroup, utils.stringToUint8Array(proto.getLogs()));
          assert.strictEqual(userAppLogGroup.logLineCount(), 1);
          var logLine = userAppLogGroup.getLogLine(0);
          assert.strictEqual(logLine.getTimestampUsec(), (time * 1000).toString());
          assert.strictEqual(logLine.getLevel(), '0');
          assert.strictEqual(logLine.getMessage(), 'test');
          var response = new apphosting.ext.remote_api.Response();
          var voidResponse = new apphosting.base.VoidProto();
          response.setResponse(utils.numberArrayToString(serializer.serialize(voidResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.logOneLine(req, 'test', function() {
          done();
        });
      });

      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.logOneLine(req, 'test', function(err) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('memcacheGet_', function() {
      it('retrieves an existing memcache entry', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'memcache');
          assert.strictEqual(methodName, 'Get');
          assert.strictEqual(proto.keyCount(), 1);
          assert.strictEqual(proto.getKey(0), 'key');
          var response = new apphosting.ext.remote_api.Response();
          var memcacheResponse = new apphosting.MemcacheGetResponse();
          var item = new apphosting.MemcacheGetResponse.Item();
          item.setKey('key');
          item.setValue('value');
          memcacheResponse.addItem(item);
          response.setResponse(utils.numberArrayToString(serializer.serialize(memcacheResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheGet_(req, 'key', function(err, value) {
          assert.ifError(err);
          assert.strictEqual(value, 'value');
          done();
        });
      });

      it('retrieves a non-existing memcache entry', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'memcache');
          assert.strictEqual(methodName, 'Get');
          assert.strictEqual(proto.keyCount(), 1);
          assert.strictEqual(proto.getKey(0), 'key');
          var response = new apphosting.ext.remote_api.Response();
          var memcacheResponse = new apphosting.MemcacheGetResponse();
          response.setResponse(utils.numberArrayToString(serializer.serialize(memcacheResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheGet_(req, 'key', function(err, value) {
          assert.ifError(err);
          assert.strictEqual(value, undefined);
          done();
        });
      });

      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheGet_(req, 'key', function(err, value) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('memcacheSet_', function() {
      it('sets a memcache entry', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'memcache');
          assert.strictEqual(methodName, 'Set');
          assert.strictEqual(proto.itemCount(), 1);
          assert.strictEqual(proto.getItem(0).getKey(), 'key');
          assert.strictEqual(proto.getItem(0).getValue(), 'value');
          var response = new apphosting.ext.remote_api.Response();
          var memcacheResponse = new apphosting.MemcacheSetResponse();
          memcacheResponse.addSetStatus(apphosting.MemcacheSetResponse.SetStatusCode.STORED);
          response.setResponse(utils.numberArrayToString(serializer.serialize(memcacheResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheSet_(req, 'key', 'value', function(err) {
          assert.ifError(err);
          done();
        });
      });

      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheSet_(req, 'key', 'value', function(err, value) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('taskQueueAdd_', function() {
      it('adds a task', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'taskqueue');
          assert.strictEqual(methodName, 'Add');
          assert.strictEqual(proto.getUrl(), 'url');
          assert.strictEqual(proto.getQueueName(), 'queue');
          assert.strictEqual(proto.getTaskName(), 'task');
          assert.strictEqual(proto.getEtaUsec(), '10000000');
          assert.strictEqual(proto.getMethod(), apphosting.TaskQueueAddRequest.RequestMethod.POST);
          assert.strictEqual(proto.getBody(), 'test');
          assert.strictEqual(proto.headerCount(), 1);
          assert.strictEqual(proto.getHeader(0).getKey(), 'foo');
          assert.strictEqual(proto.getHeader(0).getValue(), 'bar');
          var response = new apphosting.ext.remote_api.Response();
          var taskqueueResponse = new apphosting.TaskQueueAddResponse();
          taskqueueResponse.setChosenTaskName('task');
          response.setResponse(utils.numberArrayToString(serializer.serialize(taskqueueResponse)));
          callback(null, response);
        };

        var options = {
          url: 'url',
          queueName: 'queue',
          taskName: 'task',
          etaUsec: '10000000',
          method: 'post',
          body: 'test',
          headers: {'foo': 'bar'}
        };
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.taskQueueAdd_(req, options, function(err, taskName) {
          assert.ifError(err);
          assert.ok(!!taskName);
          assert.strictEqual(typeof(taskName), 'string');
          done();
        });
      });

      it('defaults several options', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'taskqueue');
          assert.strictEqual(methodName, 'Add');
          assert.strictEqual(proto.getUrl(), 'url');
          assert.strictEqual(proto.getQueueName(), 'default');
          assert.strictEqual(proto.getTaskName(), '');
          assert.strictEqual(proto.getEtaUsec(), '0');
          assert.strictEqual(proto.getMethod(), apphosting.TaskQueueAddRequest.RequestMethod.POST);
          var response = new apphosting.ext.remote_api.Response();
          var taskqueueResponse = new apphosting.TaskQueueAddResponse();
          taskqueueResponse.setChosenTaskName('task');
          response.setResponse(utils.numberArrayToString(serializer.serialize(taskqueueResponse)));
          callback(null, response);
        };

        var options = {
          url: 'url',
        };
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.taskQueueAdd_(req, options, function(err, taskName) {
          assert.ifError(err);
          assert.ok(!!taskName);
          assert.strictEqual(typeof(taskName), 'string');
          done();
        });
      });

      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var options = {
          url: 'url',
          queueName: 'queue',
          taskName: 'task',
          etaUsec: '10000000',
          method: 'post',
          body: 'test',
          headers: {'foo': 'bar'}
        };
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.taskQueueAdd_(req, options, function(err, taskName) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('modulesGetHostname_', function() {
      it('returns a hostname', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'modules');
          assert.strictEqual(methodName, 'GetHostname');
          assert.strictEqual(proto.getModule(), 'module');
          assert.strictEqual(proto.getVersion(), 'version');
          assert.strictEqual(proto.getInstance(), 'instance');
          var response = new apphosting.ext.remote_api.Response();
          var modulesResponse = new apphosting.GetHostnameResponse();
          modulesResponse.setHostname('hostname');
          response.setResponse(utils.numberArrayToString(serializer.serialize(modulesResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.modulesGetHostname_(req, 'module', 'version', 'instance', function(err, hostname) {
          assert.ifError(err);
          assert.strictEqual(hostname, 'hostname');
          done();
        });
      });

      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.modulesGetHostname_(req, 'module', 'version', 'instance', function(err, value) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('systemStartBackgroundRequest_', function() {
      it('starts a background request', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          assert.strictEqual(serviceName, 'system');
          assert.strictEqual(methodName, 'StartBackgroundRequest');
          var response = new apphosting.ext.remote_api.Response();
          var systemResponse = new apphosting.StartBackgroundRequestResponse();
          systemResponse.setRequestId('id');
          response.setResponse(utils.numberArrayToString(serializer.serialize(systemResponse)));
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.systemStartBackgroundRequest_(req, function(err, requestId) {
          assert.ifError(err);
          assert.strictEqual(requestId, 'id');
          done();
        });
      });


      it('handles api errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('test');
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.systemStartBackgroundRequest_(req, function(err, value) {
          assert.equal(err, error);
          done();
        });
      });
    });

    describe('authGetServiceAccountToken_', function() {
      it('returns a valid token', function(done) {
        var ae = new appengine.AppEngine();
        ae.sendHttpRequest_ = function(options, body, callback) {
          assert.strictEqual(options.hostname, 'metadata');
          assert.strictEqual(options.path, '/computeMetadata/v1/instance/service-accounts/default/token');
          assert.strictEqual(options.method, 'GET');
          assert.strictEqual(options.headers['Metadata-Flavor'], 'Google');
          assert.strictEqual(body, null);
          var response = {statusCode: 200, headers: {}, body: new Buffer('{ "access_token": "test", "token_type": "Bearer", "expires_in": 600}')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.authGetServiceAccountToken_(req, function(err, token) {
          assert.ifError(err);
          assert.strictEqual(token.accessToken, 'test');
          assert.strictEqual(token.tokenType, 'Bearer');
          assert.strictEqual(token.expiresIn, 600);
          done();
        });
      });

      it('handles metadata server errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.sendHttpRequest_ = function(options, body, callback) {
          assert.strictEqual(options.hostname, 'metadata');
          assert.strictEqual(options.path, '/computeMetadata/v1/instance/service-accounts/default/token');
          assert.strictEqual(options.method, 'GET');
          assert.strictEqual(options.headers['Metadata-Flavor'], 'Google');
          assert.strictEqual(body, null);
          var response = {statusCode: 500, headers: {}, body: new Buffer('500 Internal Server Error')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.authGetServiceAccountToken_(req, function(err, token) {
          assert.ok(!!err);
          assert.equal(err.constructor, Error);
          assert.strictEqual(token, undefined);
          done();
        });
      });

      it('handles low-level http errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('failed');
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.authGetServiceAccountToken_(req, function(err, token) {
          assert.equal(err, error);
          assert.strictEqual(token, undefined);
          done();
        });
      });
    });

    describe('metadataGetAttribute_', function() {
      it('returns an existing attribute', function(done) {
        var ae = new appengine.AppEngine();
        ae.sendHttpRequest_ = function(options, body, callback) {
          assert.strictEqual(options.hostname, 'metadata');
          assert.strictEqual(options.path, '/computeMetadata/v1/name');
          assert.strictEqual(options.method, 'GET');
          assert.strictEqual(options.headers['Metadata-Flavor'], 'Google');
          assert.strictEqual(body, null);
          var response = {statusCode: 200, headers: {}, body: new Buffer('value')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.metadataGetAttribute_(req, 'name', function(err, value) {
          assert.ifError(err);
          assert.strictEqual(value, 'value');
          done();
        });
      });

      it('returns null for a non-existing attribute', function(done) {
        var ae = new appengine.AppEngine();
        ae.sendHttpRequest_ = function(options, body, callback) {
          assert.strictEqual(options.hostname, 'metadata');
          assert.strictEqual(options.path, '/computeMetadata/v1/name');
          assert.strictEqual(options.method, 'GET');
          assert.strictEqual(options.headers['Metadata-Flavor'], 'Google');
          assert.strictEqual(body, null);
          var response = {statusCode: 404, headers: {}, body: new Buffer(0)};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.metadataGetAttribute_(req, 'name', function(err, value) {
          assert.ifError(err);
          assert.strictEqual(value, null);
          done();
        });
      });

      it('handles metadata server errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.sendHttpRequest_ = function(options, body, callback) {
          assert.strictEqual(options.hostname, 'metadata');
          assert.strictEqual(options.path, '/computeMetadata/v1/name');
          assert.strictEqual(options.method, 'GET');
          assert.strictEqual(options.headers['Metadata-Flavor'], 'Google');
          assert.strictEqual(body, null);
          var response = {statusCode: 500, headers: {}, body: new Buffer('500 Internal Server Error')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.metadataGetAttribute_(req, 'name', function(err, value) {
          assert.ok(!!err);
          assert.equal(err.constructor, Error);
          assert.strictEqual(value, undefined);
          done();
        });
      });

      it('handles low-level http errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('failed');
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.metadataGetAttribute_(req, 'name', function(err, value) {
          assert.equal(err, error);
          assert.strictEqual(value, undefined);
          done();
        });
      });
    });

    describe('middlewareBase_', function() {
      it('processes basic request headers', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-api-ticket': 'a',
          'x-appengine-auth-domain': 'b',
          'x-appengine-datacenter': 'c',
          'x-appengine-default-version-hostname': 'd',
          'x-appengine-https': 'e',
          'x-appengine-request-id-hash': 'f',
          'x-appengine-request-log-id': 'g'
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine);
          assert.strictEqual(req.appengine.apiTicket, 'a');
          assert.strictEqual(req.appengine.authDomain, 'b');
          assert.strictEqual(req.appengine.datacenter, 'c');
          assert.strictEqual(req.appengine.defaultVersionHostname, 'd');
          assert.strictEqual(req.appengine.https, 'e');
          assert.strictEqual(req.appengine.requestIdHash, 'f');
          assert.strictEqual(req.appengine.requestLogId, 'g');
          done();
        });
      });

      it('detects the devappserver environment', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-dev-request-id': 'e',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine);
          assert.strictEqual(req.appengine.devRequestId, 'e');
          assert.strictEqual(req.appengine.devappserver, true);
          done();
        });
      });

      it('detects the production environment', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-api-ticket': 'a',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine);
          assert.strictEqual(req.appengine.apiTicket, 'a');
          assert.strictEqual(req.appengine.devappserver, false);
          done();
        });
      });

      it('processes user headers', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-user-email': 'a',
          'x-appengine-user-ip': 'b',
          'x-appengine-user-is-admin': 'c',
          'x-appengine-user-nickname': 'd',
          'x-appengine-user-organization': 'e',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine.user);
          assert.strictEqual(req.appengine.user.email, 'a');
          assert.strictEqual(req.appengine.user.ip, 'b');
          assert.strictEqual(req.appengine.user.isAdmin, 'c');
          assert.strictEqual(req.appengine.user.nickname, 'd');
          assert.strictEqual(req.appengine.user.organization, 'e');
          done();
        });
      });

      it('processes geo headers', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-city': 'a',
          'x-appengine-citylatlong': 'b',
          'x-appengine-country': 'c',
          'x-appengine-region': 'd'
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine.geo);
          assert.strictEqual(req.appengine.geo.city, 'a');
          assert.strictEqual(req.appengine.geo.cityLatLong, 'b');
          assert.strictEqual(req.appengine.geo.country, 'c');
          assert.strictEqual(req.appengine.geo.region, 'd');
          done();
        });
      });

      it('handles incomplete geo headers', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-country': 'ZZ',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!req.appengine.geo);
          done();
        });
      });

      it('processes task headers', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-taskexecutioncount': 'a',
          'x-appengine-queuename': 'b',
          'x-appengine-taskretrycount': 'c',
          'x-appengine-taskname': 'd'
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert(!!req.appengine.task);
          assert.strictEqual(req.appengine.task.executionCount, 'a');
          assert.strictEqual(req.appengine.task.queueName, 'b');
          assert.strictEqual(req.appengine.task.retryCount, 'c');
          assert.strictEqual(req.appengine.task.taskName, 'd');
          done();
        });
      });
    });
  });
});
