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

/**
 * @fileoverview Generated Protocol Buffer code.
 */

goog.provide('apphosting.ext.remote_api.Request');
goog.provide('apphosting.ext.remote_api.ApplicationError');
goog.provide('apphosting.ext.remote_api.RpcError');
goog.provide('apphosting.ext.remote_api.RpcError.ErrorCode');
goog.provide('apphosting.ext.remote_api.Response');

goog.require('goog.proto2.Message');



/**
 * Message Request.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ext.remote_api.Request = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ext.remote_api.Request, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ext.remote_api.Request} The cloned message.
 * @override
 */
apphosting.ext.remote_api.Request.prototype.clone;


/**
 * Gets the value of the service_name field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getServiceName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the service_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getServiceNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the service_name field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Request.prototype.setServiceName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the service_name field has a value.
 */
apphosting.ext.remote_api.Request.prototype.hasServiceName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the service_name field.
 */
apphosting.ext.remote_api.Request.prototype.serviceNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the service_name field.
 */
apphosting.ext.remote_api.Request.prototype.clearServiceName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the method field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getMethod = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the method field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getMethodOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the method field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Request.prototype.setMethod = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the method field has a value.
 */
apphosting.ext.remote_api.Request.prototype.hasMethod = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the method field.
 */
apphosting.ext.remote_api.Request.prototype.methodCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the method field.
 */
apphosting.ext.remote_api.Request.prototype.clearMethod = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the request field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getRequest = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the request field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getRequestOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the request field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Request.prototype.setRequest = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the request field has a value.
 */
apphosting.ext.remote_api.Request.prototype.hasRequest = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the request field.
 */
apphosting.ext.remote_api.Request.prototype.requestCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the request field.
 */
apphosting.ext.remote_api.Request.prototype.clearRequest = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the request_id field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getRequestId = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the request_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Request.prototype.getRequestIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the request_id field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Request.prototype.setRequestId = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the request_id field has a value.
 */
apphosting.ext.remote_api.Request.prototype.hasRequestId = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the request_id field.
 */
apphosting.ext.remote_api.Request.prototype.requestIdCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the request_id field.
 */
apphosting.ext.remote_api.Request.prototype.clearRequestId = function() {
  this.clear$Field(5);
};



/**
 * Message ApplicationError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ext.remote_api.ApplicationError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ext.remote_api.ApplicationError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ext.remote_api.ApplicationError} The cloned message.
 * @override
 */
apphosting.ext.remote_api.ApplicationError.prototype.clone;


/**
 * Gets the value of the code field.
 * @return {?number} The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.getCode = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the code field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.getCodeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the code field.
 * @param {number} value The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.setCode = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the code field has a value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.hasCode = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the code field.
 */
apphosting.ext.remote_api.ApplicationError.prototype.codeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the code field.
 */
apphosting.ext.remote_api.ApplicationError.prototype.clearCode = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the detail field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.getDetail = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the detail field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.getDetailOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the detail field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.setDetail = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the detail field has a value.
 */
apphosting.ext.remote_api.ApplicationError.prototype.hasDetail = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the detail field.
 */
apphosting.ext.remote_api.ApplicationError.prototype.detailCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the detail field.
 */
apphosting.ext.remote_api.ApplicationError.prototype.clearDetail = function() {
  this.clear$Field(2);
};



/**
 * Message RpcError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ext.remote_api.RpcError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ext.remote_api.RpcError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ext.remote_api.RpcError} The cloned message.
 * @override
 */
apphosting.ext.remote_api.RpcError.prototype.clone;


/**
 * Gets the value of the code field.
 * @return {?number} The value.
 */
apphosting.ext.remote_api.RpcError.prototype.getCode = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the code field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ext.remote_api.RpcError.prototype.getCodeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the code field.
 * @param {number} value The value.
 */
apphosting.ext.remote_api.RpcError.prototype.setCode = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the code field has a value.
 */
apphosting.ext.remote_api.RpcError.prototype.hasCode = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the code field.
 */
apphosting.ext.remote_api.RpcError.prototype.codeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the code field.
 */
apphosting.ext.remote_api.RpcError.prototype.clearCode = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the detail field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.RpcError.prototype.getDetail = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the detail field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.RpcError.prototype.getDetailOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the detail field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.RpcError.prototype.setDetail = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the detail field has a value.
 */
apphosting.ext.remote_api.RpcError.prototype.hasDetail = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the detail field.
 */
apphosting.ext.remote_api.RpcError.prototype.detailCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the detail field.
 */
apphosting.ext.remote_api.RpcError.prototype.clearDetail = function() {
  this.clear$Field(2);
};


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.ext.remote_api.RpcError.ErrorCode = {
  UNKNOWN: 0,
  CALL_NOT_FOUND: 1,
  PARSE_ERROR: 2,
  SECURITY_VIOLATION: 3,
  OVER_QUOTA: 4,
  REQUEST_TOO_LARGE: 5,
  CAPABILITY_DISABLED: 6,
  FEATURE_DISABLED: 7,
  BAD_REQUEST: 8,
  RESPONSE_TOO_LARGE: 9,
  CANCELLED: 10,
  REPLAY_ERROR: 11,
  DEADLINE_EXCEEDED: 12
};



/**
 * Message Response.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ext.remote_api.Response = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ext.remote_api.Response, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ext.remote_api.Response} The cloned message.
 * @override
 */
apphosting.ext.remote_api.Response.prototype.clone;


/**
 * Gets the value of the response field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getResponse = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the response field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getResponseOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the response field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Response.prototype.setResponse = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the response field has a value.
 */
apphosting.ext.remote_api.Response.prototype.hasResponse = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the response field.
 */
apphosting.ext.remote_api.Response.prototype.responseCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the response field.
 */
apphosting.ext.remote_api.Response.prototype.clearResponse = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the exception field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getException = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the exception field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getExceptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the exception field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Response.prototype.setException = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the exception field has a value.
 */
apphosting.ext.remote_api.Response.prototype.hasException = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the exception field.
 */
apphosting.ext.remote_api.Response.prototype.exceptionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the exception field.
 */
apphosting.ext.remote_api.Response.prototype.clearException = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the application_error field.
 * @return {apphosting.ext.remote_api.ApplicationError} The value.
 */
apphosting.ext.remote_api.Response.prototype.getApplicationError = function() {
  return /** @type {apphosting.ext.remote_api.ApplicationError} */ (this.get$Value(3));
};


/**
 * Gets the value of the application_error field or the default value if not set.
 * @return {!apphosting.ext.remote_api.ApplicationError} The value.
 */
apphosting.ext.remote_api.Response.prototype.getApplicationErrorOrDefault = function() {
  return /** @type {!apphosting.ext.remote_api.ApplicationError} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the application_error field.
 * @param {!apphosting.ext.remote_api.ApplicationError} value The value.
 */
apphosting.ext.remote_api.Response.prototype.setApplicationError = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the application_error field has a value.
 */
apphosting.ext.remote_api.Response.prototype.hasApplicationError = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the application_error field.
 */
apphosting.ext.remote_api.Response.prototype.applicationErrorCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the application_error field.
 */
apphosting.ext.remote_api.Response.prototype.clearApplicationError = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the java_exception field.
 * @return {?string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getJavaException = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the java_exception field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ext.remote_api.Response.prototype.getJavaExceptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the java_exception field.
 * @param {string} value The value.
 */
apphosting.ext.remote_api.Response.prototype.setJavaException = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the java_exception field has a value.
 */
apphosting.ext.remote_api.Response.prototype.hasJavaException = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the java_exception field.
 */
apphosting.ext.remote_api.Response.prototype.javaExceptionCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the java_exception field.
 */
apphosting.ext.remote_api.Response.prototype.clearJavaException = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the rpc_error field.
 * @return {apphosting.ext.remote_api.RpcError} The value.
 */
apphosting.ext.remote_api.Response.prototype.getRpcError = function() {
  return /** @type {apphosting.ext.remote_api.RpcError} */ (this.get$Value(5));
};


/**
 * Gets the value of the rpc_error field or the default value if not set.
 * @return {!apphosting.ext.remote_api.RpcError} The value.
 */
apphosting.ext.remote_api.Response.prototype.getRpcErrorOrDefault = function() {
  return /** @type {!apphosting.ext.remote_api.RpcError} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the rpc_error field.
 * @param {!apphosting.ext.remote_api.RpcError} value The value.
 */
apphosting.ext.remote_api.Response.prototype.setRpcError = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the rpc_error field has a value.
 */
apphosting.ext.remote_api.Response.prototype.hasRpcError = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the rpc_error field.
 */
apphosting.ext.remote_api.Response.prototype.rpcErrorCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the rpc_error field.
 */
apphosting.ext.remote_api.Response.prototype.clearRpcError = function() {
  this.clear$Field(5);
};


goog.proto2.Message.set$Metadata(apphosting.ext.remote_api.Request, {
  0: {
    name: 'Request',
    fullName: 'apphosting.ext.remote_api.Request'
  },
  2: {
    name: 'service_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'method',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'request',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  5: {
    name: 'request_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.ext.remote_api.ApplicationError, {
  0: {
    name: 'ApplicationError',
    fullName: 'apphosting.ext.remote_api.ApplicationError'
  },
  1: {
    name: 'code',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'detail',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.ext.remote_api.RpcError, {
  0: {
    name: 'RpcError',
    fullName: 'apphosting.ext.remote_api.RpcError'
  },
  1: {
    name: 'code',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'detail',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.ext.remote_api.Response, {
  0: {
    name: 'Response',
    fullName: 'apphosting.ext.remote_api.Response'
  },
  1: {
    name: 'response',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'exception',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'application_error',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ext.remote_api.ApplicationError
  },
  4: {
    name: 'java_exception',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  5: {
    name: 'rpc_error',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ext.remote_api.RpcError
  }
});
