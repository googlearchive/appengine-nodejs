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

goog.provide('apphosting.SystemServiceError');
goog.provide('apphosting.SystemServiceError.ErrorCode');
goog.provide('apphosting.SystemStat');
goog.provide('apphosting.GetSystemStatsRequest');
goog.provide('apphosting.GetSystemStatsResponse');
goog.provide('apphosting.StartBackgroundRequestRequest');
goog.provide('apphosting.StartBackgroundRequestResponse');

goog.require('goog.proto2.Message');



/**
 * Message SystemServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SystemServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SystemServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SystemServiceError} The cloned message.
 * @override
 */
apphosting.SystemServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.SystemServiceError.ErrorCode = {
  OK: 0,
  INTERNAL_ERROR: 1,
  BACKEND_REQUIRED: 2,
  LIMIT_REACHED: 3
};



/**
 * Message SystemStat.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SystemStat = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SystemStat, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SystemStat} The cloned message.
 * @override
 */
apphosting.SystemStat.prototype.clone;


/**
 * Gets the value of the current field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getCurrent = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the current field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getCurrentOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the current field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setCurrent = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the current field has a value.
 */
apphosting.SystemStat.prototype.hasCurrent = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the current field.
 */
apphosting.SystemStat.prototype.currentCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the current field.
 */
apphosting.SystemStat.prototype.clearCurrent = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the average1m field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getAverage1m = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the average1m field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getAverage1mOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the average1m field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setAverage1m = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the average1m field has a value.
 */
apphosting.SystemStat.prototype.hasAverage1m = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the average1m field.
 */
apphosting.SystemStat.prototype.average1mCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the average1m field.
 */
apphosting.SystemStat.prototype.clearAverage1m = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the average10m field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getAverage10m = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the average10m field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getAverage10mOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the average10m field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setAverage10m = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the average10m field has a value.
 */
apphosting.SystemStat.prototype.hasAverage10m = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the average10m field.
 */
apphosting.SystemStat.prototype.average10mCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the average10m field.
 */
apphosting.SystemStat.prototype.clearAverage10m = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the total field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getTotal = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the total field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getTotalOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the total field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setTotal = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the total field has a value.
 */
apphosting.SystemStat.prototype.hasTotal = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the total field.
 */
apphosting.SystemStat.prototype.totalCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the total field.
 */
apphosting.SystemStat.prototype.clearTotal = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the rate1m field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getRate1m = function() {
  return /** @type {?number} */ (this.get$Value(5));
};


/**
 * Gets the value of the rate1m field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getRate1mOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the rate1m field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setRate1m = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the rate1m field has a value.
 */
apphosting.SystemStat.prototype.hasRate1m = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the rate1m field.
 */
apphosting.SystemStat.prototype.rate1mCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the rate1m field.
 */
apphosting.SystemStat.prototype.clearRate1m = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the rate10m field.
 * @return {?number} The value.
 */
apphosting.SystemStat.prototype.getRate10m = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the rate10m field or the default value if not set.
 * @return {number} The value.
 */
apphosting.SystemStat.prototype.getRate10mOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the rate10m field.
 * @param {number} value The value.
 */
apphosting.SystemStat.prototype.setRate10m = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the rate10m field has a value.
 */
apphosting.SystemStat.prototype.hasRate10m = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the rate10m field.
 */
apphosting.SystemStat.prototype.rate10mCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the rate10m field.
 */
apphosting.SystemStat.prototype.clearRate10m = function() {
  this.clear$Field(6);
};



/**
 * Message GetSystemStatsRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetSystemStatsRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetSystemStatsRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetSystemStatsRequest} The cloned message.
 * @override
 */
apphosting.GetSystemStatsRequest.prototype.clone;



/**
 * Message GetSystemStatsResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetSystemStatsResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetSystemStatsResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetSystemStatsResponse} The cloned message.
 * @override
 */
apphosting.GetSystemStatsResponse.prototype.clone;


/**
 * Gets the value of the cpu field.
 * @return {apphosting.SystemStat} The value.
 */
apphosting.GetSystemStatsResponse.prototype.getCpu = function() {
  return /** @type {apphosting.SystemStat} */ (this.get$Value(1));
};


/**
 * Gets the value of the cpu field or the default value if not set.
 * @return {!apphosting.SystemStat} The value.
 */
apphosting.GetSystemStatsResponse.prototype.getCpuOrDefault = function() {
  return /** @type {!apphosting.SystemStat} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the cpu field.
 * @param {!apphosting.SystemStat} value The value.
 */
apphosting.GetSystemStatsResponse.prototype.setCpu = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the cpu field has a value.
 */
apphosting.GetSystemStatsResponse.prototype.hasCpu = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the cpu field.
 */
apphosting.GetSystemStatsResponse.prototype.cpuCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the cpu field.
 */
apphosting.GetSystemStatsResponse.prototype.clearCpu = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the memory field.
 * @return {apphosting.SystemStat} The value.
 */
apphosting.GetSystemStatsResponse.prototype.getMemory = function() {
  return /** @type {apphosting.SystemStat} */ (this.get$Value(2));
};


/**
 * Gets the value of the memory field or the default value if not set.
 * @return {!apphosting.SystemStat} The value.
 */
apphosting.GetSystemStatsResponse.prototype.getMemoryOrDefault = function() {
  return /** @type {!apphosting.SystemStat} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the memory field.
 * @param {!apphosting.SystemStat} value The value.
 */
apphosting.GetSystemStatsResponse.prototype.setMemory = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the memory field has a value.
 */
apphosting.GetSystemStatsResponse.prototype.hasMemory = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the memory field.
 */
apphosting.GetSystemStatsResponse.prototype.memoryCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the memory field.
 */
apphosting.GetSystemStatsResponse.prototype.clearMemory = function() {
  this.clear$Field(2);
};



/**
 * Message StartBackgroundRequestRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StartBackgroundRequestRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StartBackgroundRequestRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StartBackgroundRequestRequest} The cloned message.
 * @override
 */
apphosting.StartBackgroundRequestRequest.prototype.clone;



/**
 * Message StartBackgroundRequestResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StartBackgroundRequestResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StartBackgroundRequestResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StartBackgroundRequestResponse} The cloned message.
 * @override
 */
apphosting.StartBackgroundRequestResponse.prototype.clone;


/**
 * Gets the value of the request_id field.
 * @return {?string} The value.
 */
apphosting.StartBackgroundRequestResponse.prototype.getRequestId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the request_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.StartBackgroundRequestResponse.prototype.getRequestIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the request_id field.
 * @param {string} value The value.
 */
apphosting.StartBackgroundRequestResponse.prototype.setRequestId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the request_id field has a value.
 */
apphosting.StartBackgroundRequestResponse.prototype.hasRequestId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the request_id field.
 */
apphosting.StartBackgroundRequestResponse.prototype.requestIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the request_id field.
 */
apphosting.StartBackgroundRequestResponse.prototype.clearRequestId = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.SystemServiceError, {
  0: {
    name: 'SystemServiceError',
    fullName: 'apphosting.SystemServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.SystemStat, {
  0: {
    name: 'SystemStat',
    fullName: 'apphosting.SystemStat'
  },
  1: {
    name: 'current',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  3: {
    name: 'average1m',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  4: {
    name: 'average10m',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  2: {
    name: 'total',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  5: {
    name: 'rate1m',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  6: {
    name: 'rate10m',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetSystemStatsRequest, {
  0: {
    name: 'GetSystemStatsRequest',
    fullName: 'apphosting.GetSystemStatsRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetSystemStatsResponse, {
  0: {
    name: 'GetSystemStatsResponse',
    fullName: 'apphosting.GetSystemStatsResponse'
  },
  1: {
    name: 'cpu',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.SystemStat
  },
  2: {
    name: 'memory',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.SystemStat
  }
});


goog.proto2.Message.set$Metadata(apphosting.StartBackgroundRequestRequest, {
  0: {
    name: 'StartBackgroundRequestRequest',
    fullName: 'apphosting.StartBackgroundRequestRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.StartBackgroundRequestResponse, {
  0: {
    name: 'StartBackgroundRequestResponse',
    fullName: 'apphosting.StartBackgroundRequestResponse'
  },
  1: {
    name: 'request_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
