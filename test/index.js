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

/* global apphosting, describe, goog, it, net */

'use strict';

var assert = require('assert');
var http = require('http');
var tmp = require('tmp');

var appengine = require('../lib/index.js');
var utils = require('../lib/utils.js');

require('../lib/closure/goog/bootstrap/nodejs.js');
require('../lib/deps.js');

goog.require('apphosting.base.VoidProto');
goog.require('goog.object');
goog.require('net.proto2.contrib.WireSerializer');

describe('appengine', function() {
 it('should export all public functions', function() {
    assert.strictEqual(typeof(appengine.memcache.get), 'function');
    assert.strictEqual(typeof(appengine.memcache.set), 'function');
    assert.strictEqual(typeof(appengine.taskqueue.add), 'function');
    assert.strictEqual(typeof(appengine.modules.getHostname), 'function');
    assert.strictEqual(typeof(appengine.system.getBackgroundRequest), 'function');
    assert.strictEqual(typeof(appengine.auth.getServiceAccountToken), 'function');
    assert.strictEqual(typeof(appengine.metadata.getAttribute), 'function');
    assert.strictEqual(typeof(appengine.middleware.base), 'function');
  });

  it('should export a constructor', function() {
    assert.notEqual(appengine.AppEngine, undefined);
  });

  describe('AppEngine', function() {
    var serializer = new net.proto2.contrib.WireSerializer();

    describe('constructor', function() {
      it('processes the specified options', function() {
        var ae = new appengine.AppEngine({logSizeThreshold: 100});
        assert.strictEqual(ae.logSizeThreshold_, 100);

        ae = new appengine.AppEngine({logMaxTimestampDeltaMillis: 200});
        assert.strictEqual(ae.logMaxTimestampDeltaMillis_, 200);

        ae = new appengine.AppEngine({httpAgentMaxSockets: 300});
        assert.strictEqual(ae.httpAgent_.maxSockets, 300);

        ae = new appengine.AppEngine({loggerMaxFiles: 400, loggerMaxFileSize: 500});
        var transport = ae.logger_.transports.file;
        assert.ok(!!transport);
        assert.strictEqual(transport.maxFiles, 400);
        assert.strictEqual(transport.maxsize, 500);
      });

      it('has the expected default values for all options', function() {
        var ae = new appengine.AppEngine();
        assert.deepEqual(ae.defaultOptions_, {
          logSizeThreshold: 1024 * 1024,
          logMaxTimestampDeltaMillis: 60000,
          loggerMaxFiles: 1,
          loggerMaxFileSize: 100 * 1024 * 1024,
          httpAgentMaxSockets: 100,
          addPublicAPIs: true
        });
      });

      it('defaults any missing options', function() {
        var ae = new appengine.AppEngine({});
        verifyAllOptionsHaveDefaultValues(ae);
      });

      it('uses default options if argument is null or undefined', function() {
        var ae = new appengine.AppEngine(null);
        verifyAllOptionsHaveDefaultValues(ae);

        ae = new appengine.AppEngine(undefined);
        verifyAllOptionsHaveDefaultValues(ae);
      });

      function verifyAllOptionsHaveDefaultValues(ae) {
        assert.strictEqual(ae.logSizeThreshold_, ae.defaultOptions_.logSizeThreshold);
        assert.strictEqual(ae.logMaxTimestampDeltaMillis_, ae.defaultOptions_.logMaxTimestampDeltaMillis);
        assert.strictEqual(ae.httpAgent_.maxSockets, ae.defaultOptions_.httpAgentMaxSockets);
        var transport = ae.logger_.transports.file;
        assert.ok(!!transport);
        assert.strictEqual(transport.maxFiles, ae.defaultOptions_.loggerMaxFiles);
        assert.strictEqual(transport.maxsize, ae.defaultOptions_.loggerMaxFileSize);
        assert.strictEqual(ae.options_.addPublicAPIs, true);
      }

      it('calls addPublicAPIs_ iff the addPublicAPIs option is true', function() {
        var ae = new appengine.AppEngine({addPublicAPIs: true});
        assert.strictEqual(typeof(appengine.memcache.get), 'function');
        assert.strictEqual(typeof(appengine.memcache.set), 'function');
        assert.strictEqual(typeof(appengine.taskqueue.add), 'function');
        assert.strictEqual(typeof(appengine.modules.getHostname), 'function');
        assert.strictEqual(typeof(appengine.system.getBackgroundRequest), 'function');
        assert.strictEqual(typeof(appengine.auth.getServiceAccountToken), 'function');
        assert.strictEqual(typeof(appengine.metadata.getAttribute), 'function');
        assert.strictEqual(typeof(appengine.middleware.base), 'function');

        ae = new appengine.AppEngine({addPublicAPIs: false});
        assert.strictEqual(ae.memcache, undefined);
        assert.strictEqual(ae.taskqueue, undefined);
        assert.strictEqual(ae.modules, undefined);
        assert.strictEqual(ae.system, undefined);
        assert.strictEqual(ae.auth, undefined);
        assert.strictEqual(ae.metadata, undefined);
        assert.strictEqual(ae.middleware, undefined);
      });
    });

    describe('addPublicAPIs_', function() {
      it('should add all public APIs', function() {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        assert.strictEqual(ae.memcache, undefined);
        assert.strictEqual(ae.taskqueue, undefined);
        assert.strictEqual(ae.modules, undefined);
        assert.strictEqual(ae.system, undefined);
        assert.strictEqual(ae.auth, undefined);
        assert.strictEqual(ae.metadata, undefined);
        assert.strictEqual(ae.middleware, undefined);
        ae.addPublicAPIs_();
        assert.strictEqual(typeof(appengine.memcache.get), 'function');
        assert.strictEqual(typeof(appengine.memcache.set), 'function');
        assert.strictEqual(typeof(appengine.taskqueue.add), 'function');
        assert.strictEqual(typeof(appengine.modules.getHostname), 'function');
        assert.strictEqual(typeof(appengine.system.getBackgroundRequest), 'function');
        assert.strictEqual(typeof(appengine.auth.getServiceAccountToken), 'function');
        assert.strictEqual(typeof(appengine.metadata.getAttribute), 'function');
        assert.strictEqual(typeof(appengine.middleware.base), 'function');
      });

      it('should add the correct function for memcache.get', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.memcacheGet_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.memcache.get();
      });

      it('should add the correct function for memcache.set', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.memcacheSet_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.memcache.set();
      });

      it('should add the correct function for taskqueue.add', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.taskQueueAdd_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.taskqueue.add();
      });

      it('should add the correct function for modules.getHostname', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.modulesGetHostname_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.modules.getHostname();
      });

      it('should add the correct function for system.getBackgroundRequest', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.systemGetBackgroundRequest_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.system.getBackgroundRequest();
      });

      it('should add the correct function for auth.getServiceAccountToken', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.authGetServiceAccountToken_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.auth.getServiceAccountToken();
      });

      it('should add the correct function for metadata.getAttribute', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.metadataGetAttribute_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.metadata.getAttribute();
      });

      it('should add the correct function for middleware.base', function(done) {
        var ae = new appengine.AppEngine({addPublicAPIs: false});
        ae.middlewareBase_ = function() {
          done();
        };
        ae.addPublicAPIs_();
        ae.middleware.base();
      });
    });

    describe('loggingTimestampNs_', function() {
      it('returns a string of the expected length', function() {
        var ae = new appengine.AppEngine();
        var ts = ae.loggingTimestampNs_();
        assert.strictEqual(typeof(ts), 'string');
        assert.strictEqual(ts.length, 19);
      });

      it('returns a correct timestamp', function() {
        var ae = new appengine.AppEngine();
        var time = new Date().getTime();
        ae.getCurrentTime_ = function() {
          return time;
        };
        var ts = ae.loggingTimestampNs_();
        // The initial segment is the (mock) current time.
        assert.strictEqual(ts.substring(0, time.toString().length), time.toString());
        // After the current time, there are exactly six digits.
        assert.strictEqual(ts.length - time.toString().length, 6);
      });
    });

    describe('loggingStringify_', function() {
      it('converts a log record to json', function() {
        var ae = new appengine.AppEngine();
        var record = {message: 'test',  level: 'debug', timestamp: '123'};
        var result = ae.loggingStringify_(record);
        assert.strictEqual(result, '{"timeNanos": 123, "message": "test", "severity": "DEBUG", "thread": 0}');
        JSON.parse(result);
      });

      it('converts log levels into the expected severities', function() {
        var ae = new appengine.AppEngine();

        function check(level, severity) {
          var record = {message: 'test',  level: level, timestamp: '123'};
          var result = ae.loggingStringify_(record);
          assert.strictEqual(result, '{"timeNanos": 123, "message": "test", "severity": "' + severity + '", "thread": 0}');
          // Check that it's valid JSON.
          JSON.parse(result);
        }

        check('silly', 'DEBUG');
        check('debug', 'DEBUG');
        check('info', 'INFO');
        check('warn', 'WARNING');
        check('error', 'ERROR');
        // Any other values are mapped to INFO.
        check('other', 'INFO');
      });

      it('handles quotes in messages correctly', function() {
        var ae = new appengine.AppEngine();
        var record = {message: 'test\'again',  level: 'info', timestamp: '123'};
        assert.strictEqual(ae.loggingStringify_(record), '{"timeNanos": 123, "message": "test\'again", "severity": "INFO", "thread": 0}');
        record = {message: 'test"again',  level: 'info', timestamp: '123'};
        assert.strictEqual(ae.loggingStringify_(record), '{"timeNanos": 123, "message": "test\\\"again", "severity": "INFO", "thread": 0}');
      });
    });

    describe('sendHttpRequest_', function() {
      it('sends a request and invokes the callback with the response', function(done) {
        tmp.tmpName(function(err, path) {
          assert.ifError(err);
          var responseHeaders = {'test': 'bar'};
          var responseBody = new Buffer('ABCD');

          var server = http.createServer(function(request, response) {
            assert.strictEqual(request.url, '/');
            assert.strictEqual(request.method, 'POST');
            assert.strictEqual(request.headers.test, 'foo');
            var chunks = [];
            request.on('data', function(chunk) {
              chunks.push(chunk);
            });
            request.on('end', function() {
              var body = Buffer.concat(chunks);
              assert.deepEqual(body, requestBody);
              response.writeHead(200, 'OK', responseHeaders);
              response.write(responseBody);
              response.end();
            });
          });
          server.listen(path);

          var ae = new appengine.AppEngine();
          var requestBody = new Buffer(10);
          requestBody.fill('a');
          var options = {
            socketPath: path,
            path: '/',
            method: 'POST',
            headers: {'test': 'foo'}
          };
          ae.sendHttpRequest_(options, requestBody, function(err, response) {
            assert.ifError(err);
            assert.strictEqual(response.statusCode, 200);
            assert.strictEqual(response.headers.test, 'bar');
            assert.deepEqual(response.body, responseBody);
            server.close();
            done();
          });
        });
      });

      it('sends a request with an empty body and invokes the callback with the response', function(done) {
        tmp.tmpName(function(err, path) {
          assert.ifError(err);
          var responseHeaders = {'test': 'bar'};
          var responseBody = new Buffer('ABCD');

          var server = http.createServer(function(request, response) {
            assert.strictEqual(request.url, '/');
            assert.strictEqual(request.method, 'POST');
            assert.strictEqual(request.headers.test, 'foo');
            var chunks = [];
            request.on('data', function(chunk) {
              chunks.push(chunk);
            });
            request.on('end', function() {
              var body = Buffer.concat(chunks);
              assert.deepEqual(body, new Buffer(0));
              response.writeHead(200, 'OK', responseHeaders);
              response.write(responseBody);
              response.end();
            });
          });
          server.listen(path);

          var ae = new appengine.AppEngine();
          var options = {
            socketPath: path,
            path: '/',
            method: 'POST',
            headers: {'test': 'foo'}
          };
          ae.sendHttpRequest_(options, null, function(err, response) {
            assert.ifError(err);
            assert.strictEqual(response.statusCode, 200);
            assert.strictEqual(response.headers.test, 'bar');
            assert.deepEqual(response.body, responseBody);
            server.close();
            done();
          });
        });
      });

      it('handles low-level errors', function(done) {
        tmp.tmpName(function(err, path) {
          assert.ifError(err);
          var ae = new appengine.AppEngine();
          var body = new Buffer(10);
          body.fill('a');
          var options = {
            socketPath: path,
            path: '/',
            method: 'GET'
          };
          ae.sendHttpRequest_(options, body, function(err) {
            assert.ok(!!err, 'expected an error');
            done();
          });
        });
      });
    });

    describe('callApi_', function() {
      it('handles success responses', function(done) {
        var ae = new appengine.AppEngine();

        var responseProto = new apphosting.base.VoidProto();
        var response = new apphosting.ext.remote_api.Response();
        response.setResponse(utils.numberArrayToString(serializer.serialize(responseProto)));
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        };

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
          done();
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
        };
        ae.translateApplicationError_ = function(applicationError) {
          assert.deepEqual(applicationError, error);
          done();
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function() {});
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
        };
        ae.translateRpcError_ = function(rpcError) {
          assert.deepEqual(rpcError, error);
          done();
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function() {});
      });

      it('handles python exceptions', function(done) {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        response.setException('exception');
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.strictEqual(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: python exception');
          done();
        });
      });

      it('handles java exceptions', function(done) {
        var ae = new appengine.AppEngine();

        var response = new apphosting.ext.remote_api.Response();
        response.setJavaException('exception');
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.strictEqual(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: java exception');
          done();
        });
      });

      it('handles non-200 status codes', function(done) {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 500, body: new Buffer('test')});
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.strictEqual(err.constructor, Error);
          assert.strictEqual(err.message, 'API error: test');
          done();
        });
      });

      it('handles low-level http errors', function(done) {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        var error = new Error('failed');
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(error);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.callApi_('Test', 'test', req, proto, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('validates the request object', function(done) {
        var ae = new appengine.AppEngine();
        var responseProto = new apphosting.base.VoidProto();
        var response = new apphosting.ext.remote_api.Response();
        response.setResponse(utils.numberArrayToString(serializer.serialize(responseProto)));
        var responseBody = new Buffer(serializer.serialize(response));
        ae.sendHttpRequest_ = function(options, body, callback) {
          callback(null, {statusCode: 200, body: responseBody});
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.validateRequest_ = function (request) {
          assert.strictEqual(request, req);
          done();
          return null;
        };
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

      it('uses getRemoteApiRequestOptions_ to get the request options and passes them to sendHttpRequest_', function(done) {
        var ae = new appengine.AppEngine();
        var requestOptions = {};
        ae.getRemoteApiRequestOptions_ = function() {
          return requestOptions;
        };
        ae.sendHttpRequest_ = function(options) {
          assert.strictEqual(options, requestOptions);
          done();
        };
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', req, proto, function() {});
      });

      it('fails if the request is null', function(done) {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', null, proto, function(err) {
          assert.ok(!!err);
          done();
        });
      });

      it('fails if the request is undefined', function(done) {
        var ae = new appengine.AppEngine();
        var proto = new apphosting.base.VoidProto();
        ae.callApi_('Test', 'test', undefined, proto, function(err) {
          assert.ok(!!err);
          done();
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
        assert.strictEqual(options.agent, ae.httpAgent_);
      });

      it('returns the correct options for the devappserver', function() {
        var env = {'API_HOST': 'foo', 'API_PORT':'8888'};
        var ae = new appengine.AppEngine();
        ae.getProcessEnv_ = function(name) {
          return env[name];
        };

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
        assert.strictEqual(options.agent, ae.httpAgent_);
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

    describe('validateRequest_', function() {
      it('handles valid requests in production', function() {
        var ae = new appengine.AppEngine();
        assert.ifError(ae.validateRequest_({appengine: {devappserver: false, apiTicket: 'a'}}));
      });

      it('handles valid requests in the devappserver', function() {
        var ae = new appengine.AppEngine();
        assert.ifError(ae.validateRequest_({appengine: {devappserver: true, devRequestId: 'a'}}));
      });

      it('fails if the request object is null', function() {
        var ae = new appengine.AppEngine();
        var maybeError = ae.validateRequest_(null);
        assert.strictEqual(maybeError.constructor, Error);
        assert.strictEqual(maybeError.message, 'invalid request object: null');
      });

      it('fails if the request object is undefined', function() {
        var ae = new appengine.AppEngine();
        var maybeError = ae.validateRequest_(undefined);
        assert.strictEqual(maybeError.constructor, Error);
        assert.strictEqual(maybeError.message, 'invalid request object: undefined');
      });

      it('fails if the request object does not have the appengine extensions', function() {
        var ae = new appengine.AppEngine();
        var maybeError= ae.validateRequest_({});
        assert.strictEqual(maybeError.constructor, Error);
        assert.strictEqual(maybeError.message, 'invalid request object: missing appengine extensions');
      });

      it('fails if the request object does not contain an api ticket when running in production', function() {
        var ae = new appengine.AppEngine();
        var maybeError= ae.validateRequest_({appengine: {devappserver: false}});
        assert.strictEqual(maybeError.constructor, Error);
        assert.strictEqual(maybeError.message, 'invalid request object: missing request id');
      });

      it('fails if the request object does not contain a request id when running on the devappserver', function() {
        var ae = new appengine.AppEngine();
        var maybeError= ae.validateRequest_({appengine: {devappserver: true}});
        assert.strictEqual(maybeError.constructor, Error);
        assert.strictEqual(maybeError.message, 'invalid request object: missing request id');
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
        assert.strictEqual(result.constructor, Error);
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
        assert.strictEqual(result.constructor, Error);
        assert.strictEqual(result.message, 'rpc error: 1 test');
      });

      it('handles a missing detail field', function() {
        var ae = new appengine.AppEngine();
        var error = new apphosting.ext.remote_api.RpcError();
        error.setCode(1);
        var result = ae.translateRpcError_(error);
        assert.strictEqual(result.constructor, Error);
        assert.strictEqual(result.message, 'rpc error: 1');
      });
    });

    describe('LogLevel', function() {
      it('maps log levels to the correct values', function() {
        var ae = new appengine.AppEngine();
        assert.ok(goog.isDefAndNotNull(ae.LogLevel));
        assert.strictEqual(ae.LogLevel.DEBUG, '0');
        assert.strictEqual(ae.LogLevel.INFO, '1');
        assert.strictEqual(ae.LogLevel.WARNING, '2');
        assert.strictEqual(ae.LogLevel.ERROR, '3');
        assert.strictEqual(ae.LogLevel.CRITICAL, '4');
      });

      it('does not contain any extra properties', function() {
        var ae = new appengine.AppEngine();
        assert.deepEqual(goog.object.getKeys(ae.LogLevel).sort(),
          ['CRITICAL', 'DEBUG', 'ERROR', 'INFO', 'WARNING']);
      });
    });

    describe('newLogBuffer_', function() {
      describe('LogBuffer', function() {
        it('initializes the instance as expected', function() {
          var ae = new appengine.AppEngine();
          var logBuffer = ae.newLogBuffer_();
          assert.strictEqual(logBuffer.appengine_, ae);
          assert.deepEqual(logBuffer.buffer_, []);
          assert.strictEqual(logBuffer.size_, 0);
          assert.strictEqual(logBuffer.lastTimestamp_, -1);
        });
      });

      describe('logOneLine_', function() {
        it('buffers individual lines', function(done) {
          var ae = new appengine.AppEngine();
          var logBuffer = ae.newLogBuffer_();
          assert.strictEqual(logBuffer.buffer_.length, 0);
          assert.strictEqual(logBuffer.size_, 0);
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'test', function(err) {
            assert.ifError(err);
            assert.strictEqual(logBuffer.buffer_.length, 1);
            assert.strictEqual(logBuffer.size_, 4);
            logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'moreandmore', function(err) {
              assert.ifError(err);
              assert.strictEqual(logBuffer.buffer_.length, 2);
              assert.strictEqual(logBuffer.size_, 15);
              done();
            });
          });
        });

        it('flushes when the buffer becomes too large', function(done) {
          var ae = new appengine.AppEngine();
          ae.logSizeThreshold_ = 10;
          var logBuffer = ae.newLogBuffer_();
          var flushCalled = false;
          logBuffer.flush_ = function(req, callback) {
            assert.strictEqual(logBuffer.buffer_.length, 3);
            flushCalled = true;
            callback(null);
          };
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'test', function(err) {
            assert.ifError(err);
            logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'more', function(err) {
              assert.ifError(err);
              logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'last', function(err) {
                assert.ifError(err);
                if (flushCalled) {
                  done();
                }
              });
            });
          });
        });

        it('flushes when enough time has passed', function(done) {
          var ae = new appengine.AppEngine();
          ae.logMaxTimestampDeltaMillis_ = 1000;
          var time = new Date().getTime();
          ae.getCurrentTime_ = function() {
            var result = time;
            time += 600;
            return result;
          };
          var flushApiCalled = false;
          ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
            assert.strictEqual(serviceName, 'logservice');
            assert.strictEqual(methodName, 'Flush');
            flushApiCalled = true;
            callback(null);
          };
          var logBuffer = ae.newLogBuffer_();
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'test', function(err) {
            assert.ifError(err);
            logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'more', function(err) {
              assert.ifError(err);
              assert.strictEqual(logBuffer.buffer_.length, 2);
              logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'flush', function(err) {
                assert.ifError(err);
                assert.strictEqual(logBuffer.buffer_.length, 0);
                assert.strictEqual(logBuffer.lastTimestamp_, time - 600);
                logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'last', function(err) {
                  assert.ifError(err);
                  if (flushApiCalled) {
                    assert.strictEqual(logBuffer.buffer_.length, 1);
                    done();
                  }
                });
              });
            });
          });
        });
      });

      describe('flush_', function() {
        it('works as expected when the buffer is non-empty', function(done) {
          var ae = new appengine.AppEngine();
          var firstTimestamp = new Date().getTime();
          var time = firstTimestamp;
          ae.getCurrentTime_ = function() {
            var result = time;
            time += 1;
            return result;
          };
          var flushApiCalled = false;
          ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
            assert.strictEqual(serviceName, 'logservice');
            assert.strictEqual(methodName, 'Flush');
            flushApiCalled = true;
            var userAppLogGroup = new apphosting.UserAppLogGroup();
            serializer.deserializeTo(userAppLogGroup, utils.stringToUint8Array(proto.getLogs()));
            assert.strictEqual(userAppLogGroup.logLineCount(), 2);
            var logLine = userAppLogGroup.getLogLine(0);
            assert.strictEqual(logLine.getTimestampUsec(), (firstTimestamp * 1000).toString());
            assert.strictEqual(logLine.getLevel(), '1');
            assert.strictEqual(logLine.getMessage(), 'test');
            logLine = userAppLogGroup.getLogLine(1);
            assert.strictEqual(logLine.getTimestampUsec(), ((firstTimestamp + 1)* 1000).toString());
            assert.strictEqual(logLine.getLevel(), '3');
            assert.strictEqual(logLine.getMessage(), 'flush');
            var response = new apphosting.ext.remote_api.Response();
            var voidResponse = new apphosting.base.VoidProto();
            response.setResponse(utils.numberArrayToString(serializer.serialize(voidResponse)));
            callback(null, response);
          };
          var logBuffer = ae.newLogBuffer_();
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'test', function(err) {
            assert.ifError(err);
            assert.strictEqual(logBuffer.buffer_.length, 1);
            assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp);
            logBuffer.logOneLine_(req, ae.LogLevel.ERROR, 'flush', function(err) {
              assert.ifError(err);
              logBuffer.flush_(req, function(err) {
                assert.ifError(err);
                if (flushApiCalled) {
                  assert.strictEqual(logBuffer.buffer_.length, 0);
                  assert.strictEqual(logBuffer.size_, 0);
                  assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp + 2);
                  done();
                }
              });
            });
          });
        });

        it('works as expected when the buffer is empty', function(done) {
          var ae = new appengine.AppEngine();
          var firstTimestamp = new Date().getTime();
          var time = firstTimestamp;
          ae.getCurrentTime_ = function() {
            var result = time;
            time += 1;
            return result;
          };
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          ae.callApi_ = function(serviceName, methodName, request) {
            assert.strictEqual(req, request);
            assert.strictEqual(serviceName, 'logservice');
            assert.strictEqual(methodName, 'Flush');
            ae.fail('should not have called the flush api');
          };
          var logBuffer = ae.newLogBuffer_();
          logBuffer.flush_(req, function(err) {
            assert.ifError(err);
            assert.strictEqual(logBuffer.buffer_.length, 0);
            assert.strictEqual(logBuffer.size_, 0);
            assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp);
            logBuffer.flush_(req, function(err) {
              assert.ifError(err);
              assert.strictEqual(logBuffer.buffer_.length, 0);
              assert.strictEqual(logBuffer.size_, 0);
              assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp + 1);
              done();
            });
          });
        });

        it('handles api failures', function(done) {
          var ae = new appengine.AppEngine();
          var firstTimestamp = new Date().getTime();
          var time = firstTimestamp;
          ae.getCurrentTime_ = function() {
            var result = time;
            time += 1;
            return result;
          };
          var error = new Error('test');
          ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
            assert.strictEqual(serviceName, 'logservice');
            assert.strictEqual(methodName, 'Flush');
            callback(error);
          };
          var logBuffer = ae.newLogBuffer_();
          var req = {appengine: {apiTicket: 'test123', devappserver: false}};
          logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'test', function(err) {
            assert.ifError(err);
            assert.strictEqual(logBuffer.buffer_.length, 1);
            logBuffer.logOneLine_(req, ae.LogLevel.INFO, 'flush', function(err) {
              assert.ifError(err);
              assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp);
              logBuffer.flush_(req, function(err) {
                assert.strictEqual(err, error);
                // An API failure still results in the buffer being emptied.
                assert.strictEqual(logBuffer.buffer_.length, 0);
                assert.strictEqual(logBuffer.lastTimestamp_, firstTimestamp + 2);
                done();
              });
            });
          });
        });
      });
    });

    describe('logOneLine', function() {
      it('logs a line at the default log level', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var fakeLogBuffer = {
          logOneLine_: function(request, logLevel, message, callback) {
            assert.strictEqual(request, req);
            assert.strictEqual(logLevel, ae.LogLevel.DEBUG);
            assert.strictEqual(message, 'test');
            callback(null);
            done();
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
        ae.logOneLine(req, 'test', function(err) {
          assert.ifError(err);
        });
      });

      it('logs a line at the specified log level', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var fakeLogBuffer = {
          logOneLine_: function(request, logLevel, message, callback) {
            assert.strictEqual(request, req);
            assert.strictEqual(logLevel, ae.LogLevel.ERROR);
            assert.strictEqual(message, 'test');
            callback(null);
            done();
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
        ae.logOneLine(req, 'test', ae.LogLevel.ERROR, function(err) {
          assert.ifError(err);
        });
      });

      it('handles errors correctly', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var error = new Error('some error');
        var fakeLogBuffer = {
          logOneLine_: function(request, logLevel, message, callback) {
            assert.strictEqual(request, req);
            assert.strictEqual(logLevel, ae.LogLevel.DEBUG);
            assert.strictEqual(message, 'test');
            callback(error);
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
        ae.logOneLine(req, 'test', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing callback', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var fakeLogBuffer = {
          logOneLine_: function(request, logLevel, message, callback) {
            assert.strictEqual(request, req);
            assert.strictEqual(logLevel, ae.LogLevel.ERROR);
            assert.strictEqual(message, 'test');
            callback(null);
            done();
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
        ae.logOneLine(req, 'test', ae.LogLevel.ERROR);
      });

      it('handles a missing level and callback', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var fakeLogBuffer = {
          logOneLine_: function(request, logLevel, message, callback) {
            assert.strictEqual(request, req);
            assert.strictEqual(logLevel, ae.LogLevel.DEBUG);
            assert.strictEqual(message, 'test');
            callback(null);
            done();
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
        ae.logOneLine(req, 'test');
      });

      it('handles invalid request objects', function(done) {
        var ae = new appengine.AppEngine();
        var req = {};
        var error = new Error('invalid');
        ae.validateRequest_ = function(request) {
          assert.strictEqual(request, req);
          return error;
        };
        ae.logOneLine(req, 'test', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });
    });

    describe('flushLogs', function() {
      it('flushes the logs', function(done) {
        var ae = new appengine.AppEngine();
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        var fakeLogBuffer = {
          flush_: function(request, callback) {
            assert.strictEqual(request, req);
            callback(null);
            done();
          }
        };
        req.appengine.logBuffer_ = fakeLogBuffer;
        ae.flushLogs(req, function(err) {
          assert.ifError(err);
        });
      });

      it('handles invalid request objects', function(done) {
        var ae = new appengine.AppEngine();
        var req = {};
        var error = new Error('invalid');
        ae.validateRequest_ = function(request) {
          assert.strictEqual(request, req);
          return error;
        };
        ae.flushLogs(req, function(err) {
          assert.strictEqual(err, error);
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
        ae.memcacheGet_(req, 'key', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing response protobuf correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          var response = new apphosting.ext.remote_api.Response();
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheGet_(req, 'key', function(err) {
          assert.ok(!!err);
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
        ae.memcacheSet_(req, 'key', 'value', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing response protobuf correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          var response = new apphosting.ext.remote_api.Response();
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.memcacheSet_(req, 'key', 'value', function(err) {
          assert.ok(!!err);
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

      it('handles a missing chosen task name', function(done) {
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
          response.setResponse(utils.numberArrayToString(serializer.serialize(taskqueueResponse)));
          callback(null, response);
        };

        var options = {
          url: 'url',
        };
        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.taskQueueAdd_(req, options, function(err, taskName) {
          assert.ifError(err);
          assert.strictEqual(taskName, undefined);
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
        ae.taskQueueAdd_(req, options, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing response protobuf correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          var response = new apphosting.ext.remote_api.Response();
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
        ae.taskQueueAdd_(req, options, function(err) {
          assert.ok(!!err);
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
        ae.modulesGetHostname_(req, 'module', 'version', 'instance', function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing response protobuf correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          var response = new apphosting.ext.remote_api.Response();
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.modulesGetHostname_(req, 'module', 'version', 'instance', function(err) {
          assert.ok(!!err);
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
        ae.systemStartBackgroundRequest_(req, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('handles a missing response protobuf correctly', function(done) {
        var ae = new appengine.AppEngine();
        ae.callApi_ = function(serviceName, methodName, req, proto, callback) {
          var response = new apphosting.ext.remote_api.Response();
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.systemStartBackgroundRequest_(req, function(err) {
          assert.ok(!!err);
          done();
        });
      });
    });

    describe('systemGetBackgroundRequest_', function() {
      it('works correctly in production', function(done) {
        var ae = new appengine.AppEngine();
        ae.metadataGetAttribute_ = function(req, name, callback) {
          assert.strictEqual(name, 'instance/attributes/gae_backend_instance');
          callback(null, '0');
        };
        var req = {
          appengine: {
            apiTicket: 'test123',
            devappserver: false,
            appId: 'example.com:test',
            moduleName: 'foo',
            moduleVersion: 'bar',
            moduleInstance: '0'
          }
        };
        ae.systemGetBackgroundRequest_(req, function(err, bgReq) {
          assert.ifError(err);
          var expected = goog.cloneObject(req);
          expected.appengine.apiTicket = 'example_com_test/foo.bar.0';
          assert.strictEqual(bgReq.appengine.logBuffer_.constructor, ae.newLogBuffer_().constructor);
          delete bgReq.appengine.logBuffer_;
          assert.deepEqual(bgReq, expected);
          done();
        });
      });

      it('caches the module instance returned by the metadata server in production', function(done) {
        var ae = new appengine.AppEngine();
        ae.metadataGetAttribute_ = function(req, name, callback) {
          assert.strictEqual(name, 'instance/attributes/gae_backend_instance');
          callback(null, '0');
        };
        var req = {
          appengine: {
            apiTicket: 'test123',
            devappserver: false,
            appId: 'example.com:test',
            moduleName: 'foo',
            moduleVersion: 'bar'
          }
        };
        ae.systemGetBackgroundRequest_(req, function(err, bgReq) {
          assert.ifError(err);
          assert.strictEqual(bgReq.appengine.moduleInstance, '0');
          var expected = goog.cloneObject(req);
          expected.appengine.apiTicket = 'example_com_test/foo.bar.0';
          expected.appengine.moduleInstance = '0';
          delete expected.appengine.logBuffer_;
          assert.strictEqual(ae.cache_.moduleInstance, '0');
          ae.metadataGetAttribute_ = function() {
            throw new Error('should not have called metadataGetAttribute_ again');
          };
          ae.systemGetBackgroundRequest_(req, function(err, bgReq) {
            assert.strictEqual(bgReq.appengine.logBuffer_.constructor, ae.newLogBuffer_().constructor);
            delete bgReq.appengine.logBuffer_;
            assert.deepEqual(bgReq, expected);
            done();
          });
        });
      });

      it('works correctly in the dev appserver', function(done) {
        var ae = new appengine.AppEngine();
        ae.metadataGetAttribute_ = function(req, name, callback) {
          callback(new Error('metadataGetAttribute_ should not have been invoked'));
        };
        var req = {
          appengine: {
            devRequestId: 'test123',
            devappserver: true,
            appId: 'example.com:test',
            moduleName: 'foo',
            moduleVersion: 'bar',
            moduleInstance: '0'
          }
        };
        ae.systemGetBackgroundRequest_(req, function(err, bgReq) {
          assert.ifError(err);
          var expected = goog.cloneObject(req);
          expected.appengine.devRequestId = 'example_com_test/foo.bar.0';
          assert.strictEqual(bgReq.appengine.logBuffer_.constructor, ae.newLogBuffer_().constructor);
          delete bgReq.appengine.logBuffer_;
          assert.deepEqual(bgReq, expected);
          done();
        });
      });

      it('handles metadata server errors', function(done) {
        var ae = new appengine.AppEngine();
        var error = new Error('failed');
        ae.metadataGetAttribute_ = function(req, name, callback) {
          assert.strictEqual(name, 'instance/attributes/gae_backend_instance');
          callback(error);
        };
        var req = {
          appengine: {
            apiTicket: 'test123',
            devappserver: false,
            appId: 'example.com:test',
            moduleName: 'foo',
            moduleVersion: 'bar'
          }
        };
        ae.systemGetBackgroundRequest_(req, function(err) {
          assert.strictEqual(err, error);
          done();
        });
      });

      it('validates the request object', function(done) {
        var ae = new appengine.AppEngine();
        var req = {
          appengine: {
            devRequestId: 'test123',
            devappserver: true,
            appId: 'example.com:test',
            moduleName: 'foo',
            moduleVersion: 'bar',
            moduleInstance: '0'
          }
        };
        ae.validateRequest_ = function (request) {
          assert.strictEqual(request, req);
          done();
          return null;
        };
        ae.systemGetBackgroundRequest_(req, function(err, bgReq) {
          assert.ifError(err);
          var expected = goog.cloneObject(req);
          expected.appengine.devRequestId = 'example_com_test/foo.bar.0';
          assert.strictEqual(bgReq.appengine.logBuffer_.constructor, ae.newLogBuffer_().constructor);
          delete bgReq.appengine.logBuffer_;
          assert.deepEqual(bgReq, expected);
        });
      });

      it('fails if the request is null', function(done) {
        var ae = new appengine.AppEngine();
        ae.systemGetBackgroundRequest_(null, function(err) {
          assert.ok(!!err);
          done();
        });
      });

      it('fails if the request is undefined', function(done) {
        var ae = new appengine.AppEngine();
        ae.systemGetBackgroundRequest_(undefined, function(err) {
          assert.ok(!!err);
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
          assert.strictEqual(options.agent, ae.httpAgent_);
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
          assert.strictEqual(options.agent, ae.httpAgent_);
          assert.strictEqual(body, null);
          var response = {statusCode: 500, headers: {}, body: new Buffer('500 Internal Server Error')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.authGetServiceAccountToken_(req, function(err, token) {
          assert.ok(!!err);
          assert.strictEqual(err.constructor, Error);
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
          assert.strictEqual(err, error);
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
          assert.strictEqual(options.agent, ae.httpAgent_);
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
          assert.strictEqual(options.agent, ae.httpAgent_);
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
          assert.strictEqual(options.agent, ae.httpAgent_);
          assert.strictEqual(body, null);
          var response = {statusCode: 500, headers: {}, body: new Buffer('500 Internal Server Error')};
          callback(null, response);
        };

        var req = {appengine: {apiTicket: 'test123', devappserver: false}};
        ae.metadataGetAttribute_(req, 'name', function(err, value) {
          assert.ok(!!err);
          assert.strictEqual(err.constructor, Error);
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
          assert.strictEqual(err, error);
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
          assert.ok(!!req.appengine);
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
          assert.ok(!!req.appengine);
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
          assert.ok(!!req.appengine);
          assert.strictEqual(req.appengine.apiTicket, 'a');
          assert.strictEqual(req.appengine.devappserver, false);
          done();
        });
      });

      it('processes environment variables', function(done) {
        var env = {
          'GAE_LONG_APP_ID': 'my-test-app',
          'GAE_MODULE_NAME': 'foo',
          'GAE_MODULE_VERSION': 'bar',
          'GAE_MODULE_INSTANCE': '0',
          'GAE_MINOR_VERSION': '1234567890'
        };
        var ae = new appengine.AppEngine();
        ae.getProcessEnv_ = function(name) {
          return env[name];
        };
        var req = {headers: {'x-appengine-api-ticket': 'a'}};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert.ok(!!req.appengine);
          assert.strictEqual(req.appengine.appId, 'my-test-app');
          assert.strictEqual(req.appengine.moduleName, 'foo');
          assert.strictEqual(req.appengine.moduleVersion, 'bar');
          assert.strictEqual(req.appengine.moduleInstance, '0');
          assert.strictEqual(req.appengine.minorVersion, '1234567890');
          done();
        });
      });

      it('processes environment variables in the dev appserver', function(done) {
        var env = {
          'GAE_LONG_APP_ID': 'my-test-app',
          'GAE_MODULE_NAME': 'foo',
          'GAE_MODULE_VERSION': 'bar',
          'GAE_MINOR_VERSION': '1234567890'
        };
        var ae = new appengine.AppEngine();
        ae.getProcessEnv_ = function(name) {
          return env[name];
        };
        var req = {headers: {'x-appengine-dev-request-id': 'a'}};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert.ok(!!req.appengine);
          assert.strictEqual(req.appengine.appId, 'my-test-app');
          assert.strictEqual(req.appengine.moduleName, 'foo');
          assert.strictEqual(req.appengine.moduleVersion, 'bar');
          assert.ok(!req.appengine.hasOwnProperty('moduleInstance'));
          assert.strictEqual(req.appengine.minorVersion, '1234567890');
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
          assert.ok(!!req.appengine.user);
          assert.strictEqual(req.appengine.user.email, 'a');
          assert.strictEqual(req.appengine.user.ip, 'b');
          assert.strictEqual(req.appengine.user.isAdmin, 'c');
          assert.strictEqual(req.appengine.user.nickname, 'd');
          assert.strictEqual(req.appengine.user.organization, 'e');
          done();
        });
      });

      it('processes user headers when only the user ip is present', function(done) {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-user-ip': 'b',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res, function() {
          assert.ok(!!req.appengine.user);
          assert.strictEqual(req.appengine.user.ip, 'b');
          assert.ok(!req.appengine.user.isAdmin);
          assert.ok(!req.appengine.user.nickname);
          assert.ok(!req.appengine.user.organization);
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
          assert.ok(!!req.appengine.geo);
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
          assert.ok(!req.appengine.geo);
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
          assert.ok(!!req.appengine.task);
          assert.strictEqual(req.appengine.task.executionCount, 'a');
          assert.strictEqual(req.appengine.task.queueName, 'b');
          assert.strictEqual(req.appengine.task.retryCount, 'c');
          assert.strictEqual(req.appengine.task.taskName, 'd');
          done();
        });
      });

      it('handles a missing next handler', function() {
        var ae = new appengine.AppEngine();
        var headers = {
          'x-appengine-api-ticket': 'a',
        };
        var req = {headers: headers};
        var res = {};
        ae.middlewareBase_(req, res);
      });

      it('creates a log buffer and attaches it to the request', function(done) {
        var ae = new appengine.AppEngine();
        var fakeLogBuffer = {flush_: function() {}};
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
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
          assert.ok(!!req.appengine);
          assert.strictEqual(req.appengine.logBuffer_, fakeLogBuffer);
          done();
        });
      });

      it('flushes the log buffer after the request completes', function(done) {
        var ae = new appengine.AppEngine();
        var realEndCalled = false;
        var fakeLogBuffer = { flush_: function(req, callback) {
          callback(null);
          if (realEndCalled) {
            done();
          }
        }};
        ae.newLogBuffer_ = function() {
          return fakeLogBuffer;
        };
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
        var res = {end: function() {
          realEndCalled = true;
        }};
        ae.middlewareBase_(req, res, function() {
          assert.ok(!!req.appengine);
          assert.strictEqual(req.appengine.logBuffer_, fakeLogBuffer);
        });
        res.end();
      });
    });
  });
});
