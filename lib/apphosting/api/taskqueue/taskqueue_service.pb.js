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

goog.provide('apphosting.TaskQueueServiceError');
goog.provide('apphosting.TaskQueueServiceError.ErrorCode');
goog.provide('apphosting.TaskPayload');
goog.provide('apphosting.TaskQueueRetryParameters');
goog.provide('apphosting.TaskQueueAcl');
goog.provide('apphosting.TaskQueueHttpHeader');
goog.provide('apphosting.TaskQueueMode');
goog.provide('apphosting.TaskQueueMode.Mode');
goog.provide('apphosting.TaskQueueAddRequest');
goog.provide('apphosting.TaskQueueAddRequest.Header');
goog.provide('apphosting.TaskQueueAddRequest.CronTimetable');
goog.provide('apphosting.TaskQueueAddRequest.RequestMethod');
goog.provide('apphosting.TaskQueueAddResponse');
goog.provide('apphosting.TaskQueueBulkAddRequest');
goog.provide('apphosting.TaskQueueBulkAddResponse');
goog.provide('apphosting.TaskQueueBulkAddResponse.TaskResult');
goog.provide('apphosting.TaskQueueDeleteRequest');
goog.provide('apphosting.TaskQueueDeleteResponse');
goog.provide('apphosting.TaskQueueForceRunRequest');
goog.provide('apphosting.TaskQueueForceRunResponse');
goog.provide('apphosting.TaskQueueUpdateQueueRequest');
goog.provide('apphosting.TaskQueueUpdateQueueResponse');
goog.provide('apphosting.TaskQueueFetchQueuesRequest');
goog.provide('apphosting.TaskQueueFetchQueuesResponse');
goog.provide('apphosting.TaskQueueFetchQueuesResponse.Queue');
goog.provide('apphosting.TaskQueueFetchQueueStatsRequest');
goog.provide('apphosting.TaskQueueScannerQueueInfo');
goog.provide('apphosting.TaskQueueFetchQueueStatsResponse');
goog.provide('apphosting.TaskQueueFetchQueueStatsResponse.QueueStats');
goog.provide('apphosting.TaskQueuePauseQueueRequest');
goog.provide('apphosting.TaskQueuePauseQueueResponse');
goog.provide('apphosting.TaskQueuePurgeQueueRequest');
goog.provide('apphosting.TaskQueuePurgeQueueResponse');
goog.provide('apphosting.TaskQueueDeleteQueueRequest');
goog.provide('apphosting.TaskQueueDeleteQueueResponse');
goog.provide('apphosting.TaskQueueDeleteGroupRequest');
goog.provide('apphosting.TaskQueueDeleteGroupResponse');
goog.provide('apphosting.TaskQueueQueryTasksRequest');
goog.provide('apphosting.TaskQueueQueryTasksResponse');
goog.provide('apphosting.TaskQueueQueryTasksResponse.Task');
goog.provide('apphosting.TaskQueueQueryTasksResponse.Task.Header');
goog.provide('apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable');
goog.provide('apphosting.TaskQueueQueryTasksResponse.Task.RunLog');
goog.provide('apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod');
goog.provide('apphosting.TaskQueueFetchTaskRequest');
goog.provide('apphosting.TaskQueueFetchTaskResponse');
goog.provide('apphosting.TaskQueueUpdateStorageLimitRequest');
goog.provide('apphosting.TaskQueueUpdateStorageLimitResponse');
goog.provide('apphosting.TaskQueueQueryAndOwnTasksRequest');
goog.provide('apphosting.TaskQueueQueryAndOwnTasksResponse');
goog.provide('apphosting.TaskQueueQueryAndOwnTasksResponse.Task');
goog.provide('apphosting.TaskQueueModifyTaskLeaseRequest');
goog.provide('apphosting.TaskQueueModifyTaskLeaseResponse');

goog.require('goog.proto2.Message');



/**
 * Message TaskQueueServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueServiceError} The cloned message.
 * @override
 */
apphosting.TaskQueueServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.TaskQueueServiceError.ErrorCode = {
  OK: 0,
  UNKNOWN_QUEUE: 1,
  TRANSIENT_ERROR: 2,
  INTERNAL_ERROR: 3,
  TASK_TOO_LARGE: 4,
  INVALID_TASK_NAME: 5,
  INVALID_QUEUE_NAME: 6,
  INVALID_URL: 7,
  INVALID_QUEUE_RATE: 8,
  PERMISSION_DENIED: 9,
  TASK_ALREADY_EXISTS: 10,
  TOMBSTONED_TASK: 11,
  INVALID_ETA: 12,
  INVALID_REQUEST: 13,
  UNKNOWN_TASK: 14,
  TOMBSTONED_QUEUE: 15,
  DUPLICATE_TASK_NAME: 16,
  SKIPPED: 17,
  TOO_MANY_TASKS: 18,
  INVALID_PAYLOAD: 19,
  INVALID_RETRY_PARAMETERS: 20,
  INVALID_QUEUE_MODE: 21,
  ACL_LOOKUP_ERROR: 22,
  TRANSACTIONAL_REQUEST_TOO_LARGE: 23,
  INCORRECT_CREATOR_NAME: 24,
  TASK_LEASE_EXPIRED: 25,
  QUEUE_PAUSED: 26,
  INVALID_TAG: 27,
  DATASTORE_ERROR: 10000
};



/**
 * Message TaskPayload.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskPayload = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskPayload, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskPayload} The cloned message.
 * @override
 */
apphosting.TaskPayload.prototype.clone;



/**
 * Message TaskQueueRetryParameters.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueRetryParameters = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueRetryParameters, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueRetryParameters} The cloned message.
 * @override
 */
apphosting.TaskQueueRetryParameters.prototype.clone;


/**
 * Gets the value of the retry_limit field.
 * @return {?number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getRetryLimit = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the retry_limit field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getRetryLimitOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the retry_limit field.
 * @param {number} value The value.
 */
apphosting.TaskQueueRetryParameters.prototype.setRetryLimit = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the retry_limit field has a value.
 */
apphosting.TaskQueueRetryParameters.prototype.hasRetryLimit = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the retry_limit field.
 */
apphosting.TaskQueueRetryParameters.prototype.retryLimitCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the retry_limit field.
 */
apphosting.TaskQueueRetryParameters.prototype.clearRetryLimit = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the age_limit_sec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getAgeLimitSec = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the age_limit_sec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getAgeLimitSecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the age_limit_sec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueRetryParameters.prototype.setAgeLimitSec = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the age_limit_sec field has a value.
 */
apphosting.TaskQueueRetryParameters.prototype.hasAgeLimitSec = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the age_limit_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.ageLimitSecCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the age_limit_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.clearAgeLimitSec = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the min_backoff_sec field.
 * @return {?number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMinBackoffSec = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the min_backoff_sec field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMinBackoffSecOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the min_backoff_sec field.
 * @param {number} value The value.
 */
apphosting.TaskQueueRetryParameters.prototype.setMinBackoffSec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the min_backoff_sec field has a value.
 */
apphosting.TaskQueueRetryParameters.prototype.hasMinBackoffSec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the min_backoff_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.minBackoffSecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the min_backoff_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.clearMinBackoffSec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the max_backoff_sec field.
 * @return {?number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMaxBackoffSec = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the max_backoff_sec field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMaxBackoffSecOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the max_backoff_sec field.
 * @param {number} value The value.
 */
apphosting.TaskQueueRetryParameters.prototype.setMaxBackoffSec = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the max_backoff_sec field has a value.
 */
apphosting.TaskQueueRetryParameters.prototype.hasMaxBackoffSec = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the max_backoff_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.maxBackoffSecCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the max_backoff_sec field.
 */
apphosting.TaskQueueRetryParameters.prototype.clearMaxBackoffSec = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the max_doublings field.
 * @return {?number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMaxDoublings = function() {
  return /** @type {?number} */ (this.get$Value(5));
};


/**
 * Gets the value of the max_doublings field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueRetryParameters.prototype.getMaxDoublingsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the max_doublings field.
 * @param {number} value The value.
 */
apphosting.TaskQueueRetryParameters.prototype.setMaxDoublings = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the max_doublings field has a value.
 */
apphosting.TaskQueueRetryParameters.prototype.hasMaxDoublings = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the max_doublings field.
 */
apphosting.TaskQueueRetryParameters.prototype.maxDoublingsCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the max_doublings field.
 */
apphosting.TaskQueueRetryParameters.prototype.clearMaxDoublings = function() {
  this.clear$Field(5);
};



/**
 * Message TaskQueueAcl.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueAcl = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueAcl, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueAcl} The cloned message.
 * @override
 */
apphosting.TaskQueueAcl.prototype.clone;


/**
 * Gets the value of the user_email field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.TaskQueueAcl.prototype.getUserEmail = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the user_email field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.TaskQueueAcl.prototype.getUserEmailOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the user_email field.
 * @param {string} value The value to add.
 */
apphosting.TaskQueueAcl.prototype.addUserEmail = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the user_email field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.TaskQueueAcl.prototype.userEmailArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the user_email field has a value.
 */
apphosting.TaskQueueAcl.prototype.hasUserEmail = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the user_email field.
 */
apphosting.TaskQueueAcl.prototype.userEmailCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the user_email field.
 */
apphosting.TaskQueueAcl.prototype.clearUserEmail = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the writer_email field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.TaskQueueAcl.prototype.getWriterEmail = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the writer_email field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.TaskQueueAcl.prototype.getWriterEmailOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the writer_email field.
 * @param {string} value The value to add.
 */
apphosting.TaskQueueAcl.prototype.addWriterEmail = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the writer_email field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.TaskQueueAcl.prototype.writerEmailArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the writer_email field has a value.
 */
apphosting.TaskQueueAcl.prototype.hasWriterEmail = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the writer_email field.
 */
apphosting.TaskQueueAcl.prototype.writerEmailCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the writer_email field.
 */
apphosting.TaskQueueAcl.prototype.clearWriterEmail = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueueHttpHeader.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueHttpHeader = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueHttpHeader, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueHttpHeader} The cloned message.
 * @override
 */
apphosting.TaskQueueHttpHeader.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.TaskQueueHttpHeader.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueHttpHeader.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.TaskQueueHttpHeader.prototype.setKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.TaskQueueHttpHeader.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.TaskQueueHttpHeader.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.TaskQueueHttpHeader.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.TaskQueueHttpHeader.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueHttpHeader.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.TaskQueueHttpHeader.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.TaskQueueHttpHeader.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.TaskQueueHttpHeader.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.TaskQueueHttpHeader.prototype.clearValue = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueueMode.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueMode = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueMode, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueMode} The cloned message.
 * @override
 */
apphosting.TaskQueueMode.prototype.clone;


/**
 * Enumeration Mode.
 * @enum {number}
 */
apphosting.TaskQueueMode.Mode = {
  PUSH: 0,
  PULL: 1
};



/**
 * Message TaskQueueAddRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueAddRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueAddRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueAddRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueAddRequest.prototype.clone;


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setQueueName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasQueueName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueAddRequest.prototype.queueNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueAddRequest.prototype.clearQueueName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setTaskName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasTaskName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueAddRequest.prototype.taskNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueAddRequest.prototype.clearTaskName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setEtaUsec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the eta_usec field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasEtaUsec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the eta_usec field.
 */
apphosting.TaskQueueAddRequest.prototype.etaUsecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the eta_usec field.
 */
apphosting.TaskQueueAddRequest.prototype.clearEtaUsec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the method field.
 * @return {?apphosting.TaskQueueAddRequest.RequestMethod} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getMethod = function() {
  return /** @type {?apphosting.TaskQueueAddRequest.RequestMethod} */ (this.get$Value(5));
};


/**
 * Gets the value of the method field or the default value if not set.
 * @return {apphosting.TaskQueueAddRequest.RequestMethod} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getMethodOrDefault = function() {
  return /** @type {apphosting.TaskQueueAddRequest.RequestMethod} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the method field.
 * @param {apphosting.TaskQueueAddRequest.RequestMethod} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setMethod = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the method field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasMethod = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the method field.
 */
apphosting.TaskQueueAddRequest.prototype.methodCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the method field.
 */
apphosting.TaskQueueAddRequest.prototype.clearMethod = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setUrl = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the url field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasUrl = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the url field.
 */
apphosting.TaskQueueAddRequest.prototype.urlCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the url field.
 */
apphosting.TaskQueueAddRequest.prototype.clearUrl = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the header field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueAddRequest.Header} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getHeader = function(index) {
  return /** @type {apphosting.TaskQueueAddRequest.Header} */ (this.get$Value(6, index));
};


/**
 * Gets the value of the header field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueAddRequest.Header} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getHeaderOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueAddRequest.Header} */ (this.get$ValueOrDefault(6, index));
};


/**
 * Adds a value to the header field.
 * @param {!apphosting.TaskQueueAddRequest.Header} value The value to add.
 */
apphosting.TaskQueueAddRequest.prototype.addHeader = function(value) {
  this.add$Value(6, value);
};


/**
 * Returns the array of values in the header field.
 * @return {!Array.<!apphosting.TaskQueueAddRequest.Header>} The values in the field.
 */
apphosting.TaskQueueAddRequest.prototype.headerArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueAddRequest.Header>} */ (this.array$Values(6));
};


/**
 * @return {boolean} Whether the header field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasHeader = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the header field.
 */
apphosting.TaskQueueAddRequest.prototype.headerCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the header field.
 */
apphosting.TaskQueueAddRequest.prototype.clearHeader = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the body field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getBody = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the body field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the body field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setBody = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the body field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasBody = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the body field.
 */
apphosting.TaskQueueAddRequest.prototype.bodyCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the body field.
 */
apphosting.TaskQueueAddRequest.prototype.clearBody = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(11));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setAppId = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasAppId = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueAddRequest.prototype.appIdCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueAddRequest.prototype.clearAppId = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the crontimetable field.
 * @return {apphosting.TaskQueueAddRequest.CronTimetable} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getCrontimetable = function() {
  return /** @type {apphosting.TaskQueueAddRequest.CronTimetable} */ (this.get$Value(12));
};


/**
 * Gets the value of the crontimetable field or the default value if not set.
 * @return {!apphosting.TaskQueueAddRequest.CronTimetable} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getCrontimetableOrDefault = function() {
  return /** @type {!apphosting.TaskQueueAddRequest.CronTimetable} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the crontimetable field.
 * @param {!apphosting.TaskQueueAddRequest.CronTimetable} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setCrontimetable = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the crontimetable field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasCrontimetable = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the crontimetable field.
 */
apphosting.TaskQueueAddRequest.prototype.crontimetableCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the crontimetable field.
 */
apphosting.TaskQueueAddRequest.prototype.clearCrontimetable = function() {
  this.clear$Field(12);
};


/**
 * Gets the value of the description field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getDescription = function() {
  return /** @type {?string} */ (this.get$Value(15));
};


/**
 * Gets the value of the description field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getDescriptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(15));
};


/**
 * Sets the value of the description field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setDescription = function(value) {
  this.set$Value(15, value);
};


/**
 * @return {boolean} Whether the description field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasDescription = function() {
  return this.has$Value(15);
};


/**
 * @return {number} The number of values in the description field.
 */
apphosting.TaskQueueAddRequest.prototype.descriptionCount = function() {
  return this.count$Values(15);
};


/**
 * Clears the values in the description field.
 */
apphosting.TaskQueueAddRequest.prototype.clearDescription = function() {
  this.clear$Field(15);
};


/**
 * Gets the value of the payload field.
 * @return {apphosting.TaskPayload} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getPayload = function() {
  return /** @type {apphosting.TaskPayload} */ (this.get$Value(16));
};


/**
 * Gets the value of the payload field or the default value if not set.
 * @return {!apphosting.TaskPayload} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getPayloadOrDefault = function() {
  return /** @type {!apphosting.TaskPayload} */ (this.get$ValueOrDefault(16));
};


/**
 * Sets the value of the payload field.
 * @param {!apphosting.TaskPayload} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setPayload = function(value) {
  this.set$Value(16, value);
};


/**
 * @return {boolean} Whether the payload field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasPayload = function() {
  return this.has$Value(16);
};


/**
 * @return {number} The number of values in the payload field.
 */
apphosting.TaskQueueAddRequest.prototype.payloadCount = function() {
  return this.count$Values(16);
};


/**
 * Clears the values in the payload field.
 */
apphosting.TaskQueueAddRequest.prototype.clearPayload = function() {
  this.clear$Field(16);
};


/**
 * Gets the value of the retry_parameters field.
 * @return {apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getRetryParameters = function() {
  return /** @type {apphosting.TaskQueueRetryParameters} */ (this.get$Value(17));
};


/**
 * Gets the value of the retry_parameters field or the default value if not set.
 * @return {!apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getRetryParametersOrDefault = function() {
  return /** @type {!apphosting.TaskQueueRetryParameters} */ (this.get$ValueOrDefault(17));
};


/**
 * Sets the value of the retry_parameters field.
 * @param {!apphosting.TaskQueueRetryParameters} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setRetryParameters = function(value) {
  this.set$Value(17, value);
};


/**
 * @return {boolean} Whether the retry_parameters field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasRetryParameters = function() {
  return this.has$Value(17);
};


/**
 * @return {number} The number of values in the retry_parameters field.
 */
apphosting.TaskQueueAddRequest.prototype.retryParametersCount = function() {
  return this.count$Values(17);
};


/**
 * Clears the values in the retry_parameters field.
 */
apphosting.TaskQueueAddRequest.prototype.clearRetryParameters = function() {
  this.clear$Field(17);
};


/**
 * Gets the value of the mode field.
 * @return {?apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getMode = function() {
  return /** @type {?apphosting.TaskQueueMode.Mode} */ (this.get$Value(18));
};


/**
 * Gets the value of the mode field or the default value if not set.
 * @return {apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getModeOrDefault = function() {
  return /** @type {apphosting.TaskQueueMode.Mode} */ (this.get$ValueOrDefault(18));
};


/**
 * Sets the value of the mode field.
 * @param {apphosting.TaskQueueMode.Mode} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setMode = function(value) {
  this.set$Value(18, value);
};


/**
 * @return {boolean} Whether the mode field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasMode = function() {
  return this.has$Value(18);
};


/**
 * @return {number} The number of values in the mode field.
 */
apphosting.TaskQueueAddRequest.prototype.modeCount = function() {
  return this.count$Values(18);
};


/**
 * Clears the values in the mode field.
 */
apphosting.TaskQueueAddRequest.prototype.clearMode = function() {
  this.clear$Field(18);
};


/**
 * Gets the value of the tag field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getTag = function() {
  return /** @type {?string} */ (this.get$Value(19));
};


/**
 * Gets the value of the tag field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.prototype.getTagOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(19));
};


/**
 * Sets the value of the tag field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.prototype.setTag = function(value) {
  this.set$Value(19, value);
};


/**
 * @return {boolean} Whether the tag field has a value.
 */
apphosting.TaskQueueAddRequest.prototype.hasTag = function() {
  return this.has$Value(19);
};


/**
 * @return {number} The number of values in the tag field.
 */
apphosting.TaskQueueAddRequest.prototype.tagCount = function() {
  return this.count$Values(19);
};


/**
 * Clears the values in the tag field.
 */
apphosting.TaskQueueAddRequest.prototype.clearTag = function() {
  this.clear$Field(19);
};


/**
 * Enumeration RequestMethod.
 * @enum {number}
 */
apphosting.TaskQueueAddRequest.RequestMethod = {
  GET: 1,
  POST: 2,
  HEAD: 3,
  PUT: 4,
  DELETE: 5
};



/**
 * Message Header.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueAddRequest.Header = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueAddRequest.Header, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueAddRequest.Header} The cloned message.
 * @override
 */
apphosting.TaskQueueAddRequest.Header.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.setKey = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.hasKey = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.TaskQueueAddRequest.Header.prototype.keyCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the key field.
 */
apphosting.TaskQueueAddRequest.Header.prototype.clearKey = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.setValue = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.TaskQueueAddRequest.Header.prototype.hasValue = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.TaskQueueAddRequest.Header.prototype.valueCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the value field.
 */
apphosting.TaskQueueAddRequest.Header.prototype.clearValue = function() {
  this.clear$Field(8);
};



/**
 * Message CronTimetable.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueAddRequest.CronTimetable = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueAddRequest.CronTimetable, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueAddRequest.CronTimetable} The cloned message.
 * @override
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.clone;


/**
 * Gets the value of the schedule field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.getSchedule = function() {
  return /** @type {?string} */ (this.get$Value(13));
};


/**
 * Gets the value of the schedule field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.getScheduleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(13));
};


/**
 * Sets the value of the schedule field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.setSchedule = function(value) {
  this.set$Value(13, value);
};


/**
 * @return {boolean} Whether the schedule field has a value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.hasSchedule = function() {
  return this.has$Value(13);
};


/**
 * @return {number} The number of values in the schedule field.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.scheduleCount = function() {
  return this.count$Values(13);
};


/**
 * Clears the values in the schedule field.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.clearSchedule = function() {
  this.clear$Field(13);
};


/**
 * Gets the value of the timezone field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.getTimezone = function() {
  return /** @type {?string} */ (this.get$Value(14));
};


/**
 * Gets the value of the timezone field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.getTimezoneOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(14));
};


/**
 * Sets the value of the timezone field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.setTimezone = function(value) {
  this.set$Value(14, value);
};


/**
 * @return {boolean} Whether the timezone field has a value.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.hasTimezone = function() {
  return this.has$Value(14);
};


/**
 * @return {number} The number of values in the timezone field.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.timezoneCount = function() {
  return this.count$Values(14);
};


/**
 * Clears the values in the timezone field.
 */
apphosting.TaskQueueAddRequest.CronTimetable.prototype.clearTimezone = function() {
  this.clear$Field(14);
};



/**
 * Message TaskQueueAddResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueAddResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueAddResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueAddResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueAddResponse.prototype.clone;


/**
 * Gets the value of the chosen_task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueAddResponse.prototype.getChosenTaskName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the chosen_task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueAddResponse.prototype.getChosenTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the chosen_task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueAddResponse.prototype.setChosenTaskName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the chosen_task_name field has a value.
 */
apphosting.TaskQueueAddResponse.prototype.hasChosenTaskName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the chosen_task_name field.
 */
apphosting.TaskQueueAddResponse.prototype.chosenTaskNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the chosen_task_name field.
 */
apphosting.TaskQueueAddResponse.prototype.clearChosenTaskName = function() {
  this.clear$Field(1);
};



/**
 * Message TaskQueueBulkAddRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueBulkAddRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueBulkAddRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueBulkAddRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueBulkAddRequest.prototype.clone;


/**
 * Gets the value of the add_request field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueAddRequest} The value.
 */
apphosting.TaskQueueBulkAddRequest.prototype.getAddRequest = function(index) {
  return /** @type {apphosting.TaskQueueAddRequest} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the add_request field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueAddRequest} The value.
 */
apphosting.TaskQueueBulkAddRequest.prototype.getAddRequestOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueAddRequest} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the add_request field.
 * @param {!apphosting.TaskQueueAddRequest} value The value to add.
 */
apphosting.TaskQueueBulkAddRequest.prototype.addAddRequest = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the add_request field.
 * @return {!Array.<!apphosting.TaskQueueAddRequest>} The values in the field.
 */
apphosting.TaskQueueBulkAddRequest.prototype.addRequestArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueAddRequest>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the add_request field has a value.
 */
apphosting.TaskQueueBulkAddRequest.prototype.hasAddRequest = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the add_request field.
 */
apphosting.TaskQueueBulkAddRequest.prototype.addRequestCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the add_request field.
 */
apphosting.TaskQueueBulkAddRequest.prototype.clearAddRequest = function() {
  this.clear$Field(1);
};



/**
 * Message TaskQueueBulkAddResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueBulkAddResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueBulkAddResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueBulkAddResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueBulkAddResponse.prototype.clone;


/**
 * Gets the value of the taskresult field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueBulkAddResponse.TaskResult} The value.
 */
apphosting.TaskQueueBulkAddResponse.prototype.getTaskresult = function(index) {
  return /** @type {apphosting.TaskQueueBulkAddResponse.TaskResult} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the taskresult field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueBulkAddResponse.TaskResult} The value.
 */
apphosting.TaskQueueBulkAddResponse.prototype.getTaskresultOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueBulkAddResponse.TaskResult} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the taskresult field.
 * @param {!apphosting.TaskQueueBulkAddResponse.TaskResult} value The value to add.
 */
apphosting.TaskQueueBulkAddResponse.prototype.addTaskresult = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the taskresult field.
 * @return {!Array.<!apphosting.TaskQueueBulkAddResponse.TaskResult>} The values in the field.
 */
apphosting.TaskQueueBulkAddResponse.prototype.taskresultArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueBulkAddResponse.TaskResult>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the taskresult field has a value.
 */
apphosting.TaskQueueBulkAddResponse.prototype.hasTaskresult = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the taskresult field.
 */
apphosting.TaskQueueBulkAddResponse.prototype.taskresultCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the taskresult field.
 */
apphosting.TaskQueueBulkAddResponse.prototype.clearTaskresult = function() {
  this.clear$Field(1);
};



/**
 * Message TaskResult.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueBulkAddResponse.TaskResult = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueBulkAddResponse.TaskResult, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueBulkAddResponse.TaskResult} The cloned message.
 * @override
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.clone;


/**
 * Gets the value of the result field.
 * @return {?apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.getResult = function() {
  return /** @type {?apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$Value(2));
};


/**
 * Gets the value of the result field or the default value if not set.
 * @return {apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.getResultOrDefault = function() {
  return /** @type {apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the result field.
 * @param {apphosting.TaskQueueServiceError.ErrorCode} value The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.setResult = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the result field has a value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.hasResult = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the result field.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.resultCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the result field.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.clearResult = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the chosen_task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.getChosenTaskName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the chosen_task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.getChosenTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the chosen_task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.setChosenTaskName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the chosen_task_name field has a value.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.hasChosenTaskName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the chosen_task_name field.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.chosenTaskNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the chosen_task_name field.
 */
apphosting.TaskQueueBulkAddResponse.TaskResult.prototype.clearChosenTaskName = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueDeleteRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteRequest.prototype.clone;


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.setQueueName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueDeleteRequest.prototype.hasQueueName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueDeleteRequest.prototype.queueNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueDeleteRequest.prototype.clearQueueName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the task_name field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getTaskName = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the task_name field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getTaskNameOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the task_name field.
 * @param {string} value The value to add.
 */
apphosting.TaskQueueDeleteRequest.prototype.addTaskName = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the task_name field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.TaskQueueDeleteRequest.prototype.taskNameArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueDeleteRequest.prototype.hasTaskName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueDeleteRequest.prototype.taskNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueDeleteRequest.prototype.clearTaskName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueDeleteRequest.prototype.setAppId = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueDeleteRequest.prototype.hasAppId = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueDeleteRequest.prototype.appIdCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueDeleteRequest.prototype.clearAppId = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueDeleteResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteResponse.prototype.clone;


/**
 * Gets the value of the result field at the index given.
 * @param {number} index The index to lookup.
 * @return {?apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueDeleteResponse.prototype.getResult = function(index) {
  return /** @type {?apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the result field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueDeleteResponse.prototype.getResultOrDefault = function(index) {
  return /** @type {apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the result field.
 * @param {apphosting.TaskQueueServiceError.ErrorCode} value The value to add.
 */
apphosting.TaskQueueDeleteResponse.prototype.addResult = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the result field.
 * @return {!Array.<apphosting.TaskQueueServiceError.ErrorCode>} The values in the field.
 */
apphosting.TaskQueueDeleteResponse.prototype.resultArray = function() {
  return /** @type {!Array.<apphosting.TaskQueueServiceError.ErrorCode>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the result field has a value.
 */
apphosting.TaskQueueDeleteResponse.prototype.hasResult = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the result field.
 */
apphosting.TaskQueueDeleteResponse.prototype.resultCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the result field.
 */
apphosting.TaskQueueDeleteResponse.prototype.clearResult = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueForceRunRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueForceRunRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueForceRunRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueForceRunRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueForceRunRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueForceRunRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueForceRunRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueForceRunRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueForceRunRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueForceRunRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueForceRunRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueForceRunRequest.prototype.setTaskName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueForceRunRequest.prototype.hasTaskName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueForceRunRequest.prototype.taskNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueForceRunRequest.prototype.clearTaskName = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueForceRunResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueForceRunResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueForceRunResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueForceRunResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueForceRunResponse.prototype.clone;


/**
 * Gets the value of the result field.
 * @return {?apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueForceRunResponse.prototype.getResult = function() {
  return /** @type {?apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$Value(3));
};


/**
 * Gets the value of the result field or the default value if not set.
 * @return {apphosting.TaskQueueServiceError.ErrorCode} The value.
 */
apphosting.TaskQueueForceRunResponse.prototype.getResultOrDefault = function() {
  return /** @type {apphosting.TaskQueueServiceError.ErrorCode} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the result field.
 * @param {apphosting.TaskQueueServiceError.ErrorCode} value The value.
 */
apphosting.TaskQueueForceRunResponse.prototype.setResult = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the result field has a value.
 */
apphosting.TaskQueueForceRunResponse.prototype.hasResult = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the result field.
 */
apphosting.TaskQueueForceRunResponse.prototype.resultCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the result field.
 */
apphosting.TaskQueueForceRunResponse.prototype.clearResult = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueUpdateQueueRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueUpdateQueueRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueUpdateQueueRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueUpdateQueueRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the bucket_refill_per_second field.
 * @return {?number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getBucketRefillPerSecond = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the bucket_refill_per_second field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getBucketRefillPerSecondOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the bucket_refill_per_second field.
 * @param {number} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setBucketRefillPerSecond = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the bucket_refill_per_second field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasBucketRefillPerSecond = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the bucket_refill_per_second field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.bucketRefillPerSecondCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the bucket_refill_per_second field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearBucketRefillPerSecond = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the bucket_capacity field.
 * @return {?number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getBucketCapacity = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the bucket_capacity field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getBucketCapacityOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the bucket_capacity field.
 * @param {number} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setBucketCapacity = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the bucket_capacity field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasBucketCapacity = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the bucket_capacity field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.bucketCapacityCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the bucket_capacity field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearBucketCapacity = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the user_specified_rate field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getUserSpecifiedRate = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the user_specified_rate field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getUserSpecifiedRateOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the user_specified_rate field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setUserSpecifiedRate = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the user_specified_rate field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasUserSpecifiedRate = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the user_specified_rate field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.userSpecifiedRateCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the user_specified_rate field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearUserSpecifiedRate = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the retry_parameters field.
 * @return {apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getRetryParameters = function() {
  return /** @type {apphosting.TaskQueueRetryParameters} */ (this.get$Value(6));
};


/**
 * Gets the value of the retry_parameters field or the default value if not set.
 * @return {!apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getRetryParametersOrDefault = function() {
  return /** @type {!apphosting.TaskQueueRetryParameters} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the retry_parameters field.
 * @param {!apphosting.TaskQueueRetryParameters} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setRetryParameters = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the retry_parameters field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasRetryParameters = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the retry_parameters field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.retryParametersCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the retry_parameters field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearRetryParameters = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the max_concurrent_requests field.
 * @return {?number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getMaxConcurrentRequests = function() {
  return /** @type {?number} */ (this.get$Value(7));
};


/**
 * Gets the value of the max_concurrent_requests field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getMaxConcurrentRequestsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the max_concurrent_requests field.
 * @param {number} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setMaxConcurrentRequests = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the max_concurrent_requests field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasMaxConcurrentRequests = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the max_concurrent_requests field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.maxConcurrentRequestsCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the max_concurrent_requests field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearMaxConcurrentRequests = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the mode field.
 * @return {?apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getMode = function() {
  return /** @type {?apphosting.TaskQueueMode.Mode} */ (this.get$Value(8));
};


/**
 * Gets the value of the mode field or the default value if not set.
 * @return {apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getModeOrDefault = function() {
  return /** @type {apphosting.TaskQueueMode.Mode} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the mode field.
 * @param {apphosting.TaskQueueMode.Mode} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setMode = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the mode field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasMode = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the mode field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.modeCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the mode field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearMode = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the acl field.
 * @return {apphosting.TaskQueueAcl} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getAcl = function() {
  return /** @type {apphosting.TaskQueueAcl} */ (this.get$Value(9));
};


/**
 * Gets the value of the acl field or the default value if not set.
 * @return {!apphosting.TaskQueueAcl} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getAclOrDefault = function() {
  return /** @type {!apphosting.TaskQueueAcl} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the acl field.
 * @param {!apphosting.TaskQueueAcl} value The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.setAcl = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the acl field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasAcl = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the acl field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.aclCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the acl field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearAcl = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the header_override field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueHttpHeader} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getHeaderOverride = function(index) {
  return /** @type {apphosting.TaskQueueHttpHeader} */ (this.get$Value(10, index));
};


/**
 * Gets the value of the header_override field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueHttpHeader} The value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.getHeaderOverrideOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueHttpHeader} */ (this.get$ValueOrDefault(10, index));
};


/**
 * Adds a value to the header_override field.
 * @param {!apphosting.TaskQueueHttpHeader} value The value to add.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.addHeaderOverride = function(value) {
  this.add$Value(10, value);
};


/**
 * Returns the array of values in the header_override field.
 * @return {!Array.<!apphosting.TaskQueueHttpHeader>} The values in the field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.headerOverrideArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueHttpHeader>} */ (this.array$Values(10));
};


/**
 * @return {boolean} Whether the header_override field has a value.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.hasHeaderOverride = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the header_override field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.headerOverrideCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the header_override field.
 */
apphosting.TaskQueueUpdateQueueRequest.prototype.clearHeaderOverride = function() {
  this.clear$Field(10);
};



/**
 * Message TaskQueueUpdateQueueResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueUpdateQueueResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueUpdateQueueResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueUpdateQueueResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueUpdateQueueResponse.prototype.clone;



/**
 * Message TaskQueueFetchQueuesRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueuesRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueuesRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueuesRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the max_rows field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.getMaxRows = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the max_rows field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.getMaxRowsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the max_rows field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.setMaxRows = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the max_rows field has a value.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.hasMaxRows = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the max_rows field.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.maxRowsCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the max_rows field.
 */
apphosting.TaskQueueFetchQueuesRequest.prototype.clearMaxRows = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueueFetchQueuesResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueuesResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueuesResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueuesResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.clone;


/**
 * Gets the value of the queue field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueFetchQueuesResponse.Queue} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.getQueue = function(index) {
  return /** @type {apphosting.TaskQueueFetchQueuesResponse.Queue} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the queue field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueFetchQueuesResponse.Queue} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.getQueueOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueFetchQueuesResponse.Queue} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the queue field.
 * @param {!apphosting.TaskQueueFetchQueuesResponse.Queue} value The value to add.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.addQueue = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the queue field.
 * @return {!Array.<!apphosting.TaskQueueFetchQueuesResponse.Queue>} The values in the field.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.queueArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueFetchQueuesResponse.Queue>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the queue field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.hasQueue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queue field.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.queueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queue field.
 */
apphosting.TaskQueueFetchQueuesResponse.prototype.clearQueue = function() {
  this.clear$Field(1);
};



/**
 * Message Queue.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueuesResponse.Queue = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueuesResponse.Queue, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueuesResponse.Queue} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clone;


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the bucket_refill_per_second field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getBucketRefillPerSecond = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the bucket_refill_per_second field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getBucketRefillPerSecondOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the bucket_refill_per_second field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setBucketRefillPerSecond = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the bucket_refill_per_second field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasBucketRefillPerSecond = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the bucket_refill_per_second field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.bucketRefillPerSecondCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the bucket_refill_per_second field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearBucketRefillPerSecond = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the bucket_capacity field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getBucketCapacity = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the bucket_capacity field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getBucketCapacityOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the bucket_capacity field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setBucketCapacity = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the bucket_capacity field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasBucketCapacity = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the bucket_capacity field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.bucketCapacityCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the bucket_capacity field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearBucketCapacity = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the user_specified_rate field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getUserSpecifiedRate = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the user_specified_rate field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getUserSpecifiedRateOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the user_specified_rate field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setUserSpecifiedRate = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the user_specified_rate field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasUserSpecifiedRate = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the user_specified_rate field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.userSpecifiedRateCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the user_specified_rate field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearUserSpecifiedRate = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the paused field.
 * @return {?boolean} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getPaused = function() {
  return /** @type {?boolean} */ (this.get$Value(6));
};


/**
 * Gets the value of the paused field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getPausedOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the paused field.
 * @param {boolean} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setPaused = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the paused field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasPaused = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the paused field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.pausedCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the paused field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearPaused = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the retry_parameters field.
 * @return {apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getRetryParameters = function() {
  return /** @type {apphosting.TaskQueueRetryParameters} */ (this.get$Value(7));
};


/**
 * Gets the value of the retry_parameters field or the default value if not set.
 * @return {!apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getRetryParametersOrDefault = function() {
  return /** @type {!apphosting.TaskQueueRetryParameters} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the retry_parameters field.
 * @param {!apphosting.TaskQueueRetryParameters} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setRetryParameters = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the retry_parameters field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasRetryParameters = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the retry_parameters field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.retryParametersCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the retry_parameters field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearRetryParameters = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the max_concurrent_requests field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getMaxConcurrentRequests = function() {
  return /** @type {?number} */ (this.get$Value(8));
};


/**
 * Gets the value of the max_concurrent_requests field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getMaxConcurrentRequestsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the max_concurrent_requests field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setMaxConcurrentRequests = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the max_concurrent_requests field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasMaxConcurrentRequests = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the max_concurrent_requests field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.maxConcurrentRequestsCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the max_concurrent_requests field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearMaxConcurrentRequests = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the mode field.
 * @return {?apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getMode = function() {
  return /** @type {?apphosting.TaskQueueMode.Mode} */ (this.get$Value(9));
};


/**
 * Gets the value of the mode field or the default value if not set.
 * @return {apphosting.TaskQueueMode.Mode} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getModeOrDefault = function() {
  return /** @type {apphosting.TaskQueueMode.Mode} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the mode field.
 * @param {apphosting.TaskQueueMode.Mode} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setMode = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the mode field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasMode = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the mode field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.modeCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the mode field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearMode = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the acl field.
 * @return {apphosting.TaskQueueAcl} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getAcl = function() {
  return /** @type {apphosting.TaskQueueAcl} */ (this.get$Value(10));
};


/**
 * Gets the value of the acl field or the default value if not set.
 * @return {!apphosting.TaskQueueAcl} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getAclOrDefault = function() {
  return /** @type {!apphosting.TaskQueueAcl} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the acl field.
 * @param {!apphosting.TaskQueueAcl} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setAcl = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the acl field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasAcl = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the acl field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.aclCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the acl field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearAcl = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the header_override field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueHttpHeader} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getHeaderOverride = function(index) {
  return /** @type {apphosting.TaskQueueHttpHeader} */ (this.get$Value(11, index));
};


/**
 * Gets the value of the header_override field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueHttpHeader} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getHeaderOverrideOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueHttpHeader} */ (this.get$ValueOrDefault(11, index));
};


/**
 * Adds a value to the header_override field.
 * @param {!apphosting.TaskQueueHttpHeader} value The value to add.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.addHeaderOverride = function(value) {
  this.add$Value(11, value);
};


/**
 * Returns the array of values in the header_override field.
 * @return {!Array.<!apphosting.TaskQueueHttpHeader>} The values in the field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.headerOverrideArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueHttpHeader>} */ (this.array$Values(11));
};


/**
 * @return {boolean} Whether the header_override field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasHeaderOverride = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the header_override field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.headerOverrideCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the header_override field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearHeaderOverride = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the creator_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getCreatorName = function() {
  return /** @type {?string} */ (this.get$Value(12));
};


/**
 * Gets the value of the creator_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.getCreatorNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the creator_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.setCreatorName = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the creator_name field has a value.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.hasCreatorName = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the creator_name field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.creatorNameCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the creator_name field.
 */
apphosting.TaskQueueFetchQueuesResponse.Queue.prototype.clearCreatorName = function() {
  this.clear$Field(12);
};



/**
 * Message TaskQueueFetchQueueStatsRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueueStatsRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueueStatsRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueueStatsRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getQueueName = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the queue_name field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getQueueNameOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the queue_name field.
 * @param {string} value The value to add.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.addQueueName = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the queue_name field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.queueNameArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_num_tasks field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getMaxNumTasks = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_num_tasks field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.getMaxNumTasksOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_num_tasks field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.setMaxNumTasks = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_num_tasks field has a value.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.hasMaxNumTasks = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_num_tasks field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.maxNumTasksCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_num_tasks field.
 */
apphosting.TaskQueueFetchQueueStatsRequest.prototype.clearMaxNumTasks = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueScannerQueueInfo.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueScannerQueueInfo = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueScannerQueueInfo, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueScannerQueueInfo} The cloned message.
 * @override
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clone;


/**
 * Gets the value of the executed_last_minute field.
 * @return {?string} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getExecutedLastMinute = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the executed_last_minute field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getExecutedLastMinuteOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the executed_last_minute field.
 * @param {string} value The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.setExecutedLastMinute = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the executed_last_minute field has a value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.hasExecutedLastMinute = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the executed_last_minute field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.executedLastMinuteCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the executed_last_minute field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clearExecutedLastMinute = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the executed_last_hour field.
 * @return {?string} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getExecutedLastHour = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the executed_last_hour field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getExecutedLastHourOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the executed_last_hour field.
 * @param {string} value The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.setExecutedLastHour = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the executed_last_hour field has a value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.hasExecutedLastHour = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the executed_last_hour field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.executedLastHourCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the executed_last_hour field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clearExecutedLastHour = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the sampling_duration_seconds field.
 * @return {?number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getSamplingDurationSeconds = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the sampling_duration_seconds field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getSamplingDurationSecondsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the sampling_duration_seconds field.
 * @param {number} value The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.setSamplingDurationSeconds = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the sampling_duration_seconds field has a value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.hasSamplingDurationSeconds = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the sampling_duration_seconds field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.samplingDurationSecondsCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the sampling_duration_seconds field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clearSamplingDurationSeconds = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the requests_in_flight field.
 * @return {?number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getRequestsInFlight = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the requests_in_flight field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getRequestsInFlightOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the requests_in_flight field.
 * @param {number} value The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.setRequestsInFlight = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the requests_in_flight field has a value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.hasRequestsInFlight = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the requests_in_flight field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.requestsInFlightCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the requests_in_flight field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clearRequestsInFlight = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the enforced_rate field.
 * @return {?number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getEnforcedRate = function() {
  return /** @type {?number} */ (this.get$Value(5));
};


/**
 * Gets the value of the enforced_rate field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.getEnforcedRateOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the enforced_rate field.
 * @param {number} value The value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.setEnforcedRate = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the enforced_rate field has a value.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.hasEnforcedRate = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the enforced_rate field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.enforcedRateCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the enforced_rate field.
 */
apphosting.TaskQueueScannerQueueInfo.prototype.clearEnforcedRate = function() {
  this.clear$Field(5);
};



/**
 * Message TaskQueueFetchQueueStatsResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueueStatsResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueueStatsResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueueStatsResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.clone;


/**
 * Gets the value of the queuestats field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.getQueuestats = function(index) {
  return /** @type {apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the queuestats field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.getQueuestatsOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the queuestats field.
 * @param {!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} value The value to add.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.addQueuestats = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the queuestats field.
 * @return {!Array.<!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats>} The values in the field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.queuestatsArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the queuestats field has a value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.hasQueuestats = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queuestats field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.queuestatsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queuestats field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.prototype.clearQueuestats = function() {
  this.clear$Field(1);
};



/**
 * Message QueueStats.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchQueueStatsResponse.QueueStats, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchQueueStatsResponse.QueueStats} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.clone;


/**
 * Gets the value of the num_tasks field.
 * @return {?number} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getNumTasks = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the num_tasks field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getNumTasksOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the num_tasks field.
 * @param {number} value The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.setNumTasks = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the num_tasks field has a value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.hasNumTasks = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the num_tasks field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.numTasksCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the num_tasks field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.clearNumTasks = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the oldest_eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getOldestEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the oldest_eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getOldestEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the oldest_eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.setOldestEtaUsec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the oldest_eta_usec field has a value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.hasOldestEtaUsec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the oldest_eta_usec field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.oldestEtaUsecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the oldest_eta_usec field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.clearOldestEtaUsec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the scanner_info field.
 * @return {apphosting.TaskQueueScannerQueueInfo} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getScannerInfo = function() {
  return /** @type {apphosting.TaskQueueScannerQueueInfo} */ (this.get$Value(4));
};


/**
 * Gets the value of the scanner_info field or the default value if not set.
 * @return {!apphosting.TaskQueueScannerQueueInfo} The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.getScannerInfoOrDefault = function() {
  return /** @type {!apphosting.TaskQueueScannerQueueInfo} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the scanner_info field.
 * @param {!apphosting.TaskQueueScannerQueueInfo} value The value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.setScannerInfo = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the scanner_info field has a value.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.hasScannerInfo = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the scanner_info field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.scannerInfoCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the scanner_info field.
 */
apphosting.TaskQueueFetchQueueStatsResponse.QueueStats.prototype.clearScannerInfo = function() {
  this.clear$Field(4);
};



/**
 * Message TaskQueuePauseQueueRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueuePauseQueueRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueuePauseQueueRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueuePauseQueueRequest} The cloned message.
 * @override
 */
apphosting.TaskQueuePauseQueueRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the pause field.
 * @return {?boolean} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getPause = function() {
  return /** @type {?boolean} */ (this.get$Value(3));
};


/**
 * Gets the value of the pause field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.getPauseOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the pause field.
 * @param {boolean} value The value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.setPause = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the pause field has a value.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.hasPause = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the pause field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.pauseCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the pause field.
 */
apphosting.TaskQueuePauseQueueRequest.prototype.clearPause = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueuePauseQueueResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueuePauseQueueResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueuePauseQueueResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueuePauseQueueResponse} The cloned message.
 * @override
 */
apphosting.TaskQueuePauseQueueResponse.prototype.clone;



/**
 * Message TaskQueuePurgeQueueRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueuePurgeQueueRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueuePurgeQueueRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueuePurgeQueueRequest} The cloned message.
 * @override
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueuePurgeQueueRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueuePurgeQueueResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueuePurgeQueueResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueuePurgeQueueResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueuePurgeQueueResponse} The cloned message.
 * @override
 */
apphosting.TaskQueuePurgeQueueResponse.prototype.clone;



/**
 * Message TaskQueueDeleteQueueRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteQueueRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteQueueRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteQueueRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueDeleteQueueRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueueDeleteQueueResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteQueueResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteQueueResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteQueueResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteQueueResponse.prototype.clone;



/**
 * Message TaskQueueDeleteGroupRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteGroupRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteGroupRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteGroupRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueDeleteGroupRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};



/**
 * Message TaskQueueDeleteGroupResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueDeleteGroupResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueDeleteGroupResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueDeleteGroupResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueDeleteGroupResponse.prototype.clone;



/**
 * Message TaskQueueQueryTasksRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the start_task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartTaskName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the start_task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the start_task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setStartTaskName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the start_task_name field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasStartTaskName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the start_task_name field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.startTaskNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the start_task_name field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearStartTaskName = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the start_eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the start_eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the start_eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setStartEtaUsec = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the start_eta_usec field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasStartEtaUsec = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the start_eta_usec field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.startEtaUsecCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the start_eta_usec field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearStartEtaUsec = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the start_tag field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartTag = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the start_tag field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getStartTagOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the start_tag field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setStartTag = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the start_tag field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasStartTag = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the start_tag field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.startTagCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the start_tag field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearStartTag = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the max_rows field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getMaxRows = function() {
  return /** @type {?number} */ (this.get$Value(5));
};


/**
 * Gets the value of the max_rows field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.getMaxRowsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the max_rows field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.setMaxRows = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the max_rows field has a value.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.hasMaxRows = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the max_rows field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.maxRowsCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the max_rows field.
 */
apphosting.TaskQueueQueryTasksRequest.prototype.clearMaxRows = function() {
  this.clear$Field(5);
};



/**
 * Message TaskQueueQueryTasksResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksResponse.prototype.clone;


/**
 * Gets the value of the task field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueQueryTasksResponse.Task} The value.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.getTask = function(index) {
  return /** @type {apphosting.TaskQueueQueryTasksResponse.Task} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the task field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task} The value.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.getTaskOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueQueryTasksResponse.Task} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the task field.
 * @param {!apphosting.TaskQueueQueryTasksResponse.Task} value The value to add.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.addTask = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the task field.
 * @return {!Array.<!apphosting.TaskQueueQueryTasksResponse.Task>} The values in the field.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.taskArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueQueryTasksResponse.Task>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the task field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.hasTask = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the task field.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.taskCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the task field.
 */
apphosting.TaskQueueQueryTasksResponse.prototype.clearTask = function() {
  this.clear$Field(1);
};



/**
 * Message Task.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksResponse.Task = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksResponse.Task, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clone;


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setTaskName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasTaskName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.taskNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearTaskName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setEtaUsec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the eta_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasEtaUsec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the eta_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.etaUsecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the eta_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearEtaUsec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setUrl = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the url field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasUrl = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the url field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.urlCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the url field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearUrl = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the method field.
 * @return {?apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getMethod = function() {
  return /** @type {?apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod} */ (this.get$Value(5));
};


/**
 * Gets the value of the method field or the default value if not set.
 * @return {apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getMethodOrDefault = function() {
  return /** @type {apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the method field.
 * @param {apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setMethod = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the method field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasMethod = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the method field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.methodCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the method field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearMethod = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the retry_count field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRetryCount = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the retry_count field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRetryCountOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the retry_count field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setRetryCount = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the retry_count field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasRetryCount = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the retry_count field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.retryCountCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the retry_count field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearRetryCount = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the header field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueQueryTasksResponse.Task.Header} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getHeader = function(index) {
  return /** @type {apphosting.TaskQueueQueryTasksResponse.Task.Header} */ (this.get$Value(7, index));
};


/**
 * Gets the value of the header field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.Header} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getHeaderOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueQueryTasksResponse.Task.Header} */ (this.get$ValueOrDefault(7, index));
};


/**
 * Adds a value to the header field.
 * @param {!apphosting.TaskQueueQueryTasksResponse.Task.Header} value The value to add.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.addHeader = function(value) {
  this.add$Value(7, value);
};


/**
 * Returns the array of values in the header field.
 * @return {!Array.<!apphosting.TaskQueueQueryTasksResponse.Task.Header>} The values in the field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.headerArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueQueryTasksResponse.Task.Header>} */ (this.array$Values(7));
};


/**
 * @return {boolean} Whether the header field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasHeader = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the header field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.headerCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the header field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearHeader = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the body_size field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getBodySize = function() {
  return /** @type {?number} */ (this.get$Value(10));
};


/**
 * Gets the value of the body_size field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getBodySizeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the body_size field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setBodySize = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the body_size field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasBodySize = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the body_size field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.bodySizeCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the body_size field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearBodySize = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the body field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getBody = function() {
  return /** @type {?string} */ (this.get$Value(11));
};


/**
 * Gets the value of the body field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the body field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setBody = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the body field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasBody = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the body field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.bodyCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the body field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearBody = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the creation_time_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getCreationTimeUsec = function() {
  return /** @type {?string} */ (this.get$Value(12));
};


/**
 * Gets the value of the creation_time_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getCreationTimeUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the creation_time_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setCreationTimeUsec = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the creation_time_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasCreationTimeUsec = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the creation_time_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.creationTimeUsecCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the creation_time_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearCreationTimeUsec = function() {
  this.clear$Field(12);
};


/**
 * Gets the value of the crontimetable field.
 * @return {apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getCrontimetable = function() {
  return /** @type {apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} */ (this.get$Value(13));
};


/**
 * Gets the value of the crontimetable field or the default value if not set.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getCrontimetableOrDefault = function() {
  return /** @type {!apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} */ (this.get$ValueOrDefault(13));
};


/**
 * Sets the value of the crontimetable field.
 * @param {!apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setCrontimetable = function(value) {
  this.set$Value(13, value);
};


/**
 * @return {boolean} Whether the crontimetable field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasCrontimetable = function() {
  return this.has$Value(13);
};


/**
 * @return {number} The number of values in the crontimetable field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.crontimetableCount = function() {
  return this.count$Values(13);
};


/**
 * Clears the values in the crontimetable field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearCrontimetable = function() {
  this.clear$Field(13);
};


/**
 * Gets the value of the runlog field.
 * @return {apphosting.TaskQueueQueryTasksResponse.Task.RunLog} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRunlog = function() {
  return /** @type {apphosting.TaskQueueQueryTasksResponse.Task.RunLog} */ (this.get$Value(16));
};


/**
 * Gets the value of the runlog field or the default value if not set.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.RunLog} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRunlogOrDefault = function() {
  return /** @type {!apphosting.TaskQueueQueryTasksResponse.Task.RunLog} */ (this.get$ValueOrDefault(16));
};


/**
 * Sets the value of the runlog field.
 * @param {!apphosting.TaskQueueQueryTasksResponse.Task.RunLog} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setRunlog = function(value) {
  this.set$Value(16, value);
};


/**
 * @return {boolean} Whether the runlog field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasRunlog = function() {
  return this.has$Value(16);
};


/**
 * @return {number} The number of values in the runlog field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.runlogCount = function() {
  return this.count$Values(16);
};


/**
 * Clears the values in the runlog field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearRunlog = function() {
  this.clear$Field(16);
};


/**
 * Gets the value of the description field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getDescription = function() {
  return /** @type {?string} */ (this.get$Value(21));
};


/**
 * Gets the value of the description field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getDescriptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(21));
};


/**
 * Sets the value of the description field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setDescription = function(value) {
  this.set$Value(21, value);
};


/**
 * @return {boolean} Whether the description field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasDescription = function() {
  return this.has$Value(21);
};


/**
 * @return {number} The number of values in the description field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.descriptionCount = function() {
  return this.count$Values(21);
};


/**
 * Clears the values in the description field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearDescription = function() {
  this.clear$Field(21);
};


/**
 * Gets the value of the payload field.
 * @return {apphosting.TaskPayload} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getPayload = function() {
  return /** @type {apphosting.TaskPayload} */ (this.get$Value(22));
};


/**
 * Gets the value of the payload field or the default value if not set.
 * @return {!apphosting.TaskPayload} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getPayloadOrDefault = function() {
  return /** @type {!apphosting.TaskPayload} */ (this.get$ValueOrDefault(22));
};


/**
 * Sets the value of the payload field.
 * @param {!apphosting.TaskPayload} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setPayload = function(value) {
  this.set$Value(22, value);
};


/**
 * @return {boolean} Whether the payload field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasPayload = function() {
  return this.has$Value(22);
};


/**
 * @return {number} The number of values in the payload field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.payloadCount = function() {
  return this.count$Values(22);
};


/**
 * Clears the values in the payload field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearPayload = function() {
  this.clear$Field(22);
};


/**
 * Gets the value of the retry_parameters field.
 * @return {apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRetryParameters = function() {
  return /** @type {apphosting.TaskQueueRetryParameters} */ (this.get$Value(23));
};


/**
 * Gets the value of the retry_parameters field or the default value if not set.
 * @return {!apphosting.TaskQueueRetryParameters} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getRetryParametersOrDefault = function() {
  return /** @type {!apphosting.TaskQueueRetryParameters} */ (this.get$ValueOrDefault(23));
};


/**
 * Sets the value of the retry_parameters field.
 * @param {!apphosting.TaskQueueRetryParameters} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setRetryParameters = function(value) {
  this.set$Value(23, value);
};


/**
 * @return {boolean} Whether the retry_parameters field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasRetryParameters = function() {
  return this.has$Value(23);
};


/**
 * @return {number} The number of values in the retry_parameters field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.retryParametersCount = function() {
  return this.count$Values(23);
};


/**
 * Clears the values in the retry_parameters field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearRetryParameters = function() {
  this.clear$Field(23);
};


/**
 * Gets the value of the first_try_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getFirstTryUsec = function() {
  return /** @type {?string} */ (this.get$Value(24));
};


/**
 * Gets the value of the first_try_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getFirstTryUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(24));
};


/**
 * Sets the value of the first_try_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setFirstTryUsec = function(value) {
  this.set$Value(24, value);
};


/**
 * @return {boolean} Whether the first_try_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasFirstTryUsec = function() {
  return this.has$Value(24);
};


/**
 * @return {number} The number of values in the first_try_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.firstTryUsecCount = function() {
  return this.count$Values(24);
};


/**
 * Clears the values in the first_try_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearFirstTryUsec = function() {
  this.clear$Field(24);
};


/**
 * Gets the value of the tag field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getTag = function() {
  return /** @type {?string} */ (this.get$Value(25));
};


/**
 * Gets the value of the tag field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getTagOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(25));
};


/**
 * Sets the value of the tag field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setTag = function(value) {
  this.set$Value(25, value);
};


/**
 * @return {boolean} Whether the tag field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasTag = function() {
  return this.has$Value(25);
};


/**
 * @return {number} The number of values in the tag field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.tagCount = function() {
  return this.count$Values(25);
};


/**
 * Clears the values in the tag field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearTag = function() {
  this.clear$Field(25);
};


/**
 * Gets the value of the execution_count field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getExecutionCount = function() {
  return /** @type {?number} */ (this.get$Value(26));
};


/**
 * Gets the value of the execution_count field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.getExecutionCountOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(26));
};


/**
 * Sets the value of the execution_count field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.setExecutionCount = function(value) {
  this.set$Value(26, value);
};


/**
 * @return {boolean} Whether the execution_count field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.hasExecutionCount = function() {
  return this.has$Value(26);
};


/**
 * @return {number} The number of values in the execution_count field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.executionCountCount = function() {
  return this.count$Values(26);
};


/**
 * Clears the values in the execution_count field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.prototype.clearExecutionCount = function() {
  this.clear$Field(26);
};


/**
 * Enumeration RequestMethod.
 * @enum {number}
 */
apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod = {
  GET: 1,
  POST: 2,
  HEAD: 3,
  PUT: 4,
  DELETE: 5
};



/**
 * Message Header.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksResponse.Task.Header, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.Header} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.setKey = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.hasKey = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.keyCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the key field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.clearKey = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.setValue = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.hasValue = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.valueCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the value field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.Header.prototype.clearValue = function() {
  this.clear$Field(9);
};



/**
 * Message CronTimetable.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.clone;


/**
 * Gets the value of the schedule field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.getSchedule = function() {
  return /** @type {?string} */ (this.get$Value(14));
};


/**
 * Gets the value of the schedule field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.getScheduleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(14));
};


/**
 * Sets the value of the schedule field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.setSchedule = function(value) {
  this.set$Value(14, value);
};


/**
 * @return {boolean} Whether the schedule field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.hasSchedule = function() {
  return this.has$Value(14);
};


/**
 * @return {number} The number of values in the schedule field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.scheduleCount = function() {
  return this.count$Values(14);
};


/**
 * Clears the values in the schedule field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.clearSchedule = function() {
  this.clear$Field(14);
};


/**
 * Gets the value of the timezone field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.getTimezone = function() {
  return /** @type {?string} */ (this.get$Value(15));
};


/**
 * Gets the value of the timezone field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.getTimezoneOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(15));
};


/**
 * Sets the value of the timezone field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.setTimezone = function(value) {
  this.set$Value(15, value);
};


/**
 * @return {boolean} Whether the timezone field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.hasTimezone = function() {
  return this.has$Value(15);
};


/**
 * @return {number} The number of values in the timezone field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.timezoneCount = function() {
  return this.count$Values(15);
};


/**
 * Clears the values in the timezone field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable.prototype.clearTimezone = function() {
  this.clear$Field(15);
};



/**
 * Message RunLog.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryTasksResponse.Task.RunLog, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryTasksResponse.Task.RunLog} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clone;


/**
 * Gets the value of the dispatched_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getDispatchedUsec = function() {
  return /** @type {?string} */ (this.get$Value(17));
};


/**
 * Gets the value of the dispatched_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getDispatchedUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(17));
};


/**
 * Sets the value of the dispatched_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.setDispatchedUsec = function(value) {
  this.set$Value(17, value);
};


/**
 * @return {boolean} Whether the dispatched_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.hasDispatchedUsec = function() {
  return this.has$Value(17);
};


/**
 * @return {number} The number of values in the dispatched_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.dispatchedUsecCount = function() {
  return this.count$Values(17);
};


/**
 * Clears the values in the dispatched_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clearDispatchedUsec = function() {
  this.clear$Field(17);
};


/**
 * Gets the value of the lag_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getLagUsec = function() {
  return /** @type {?string} */ (this.get$Value(18));
};


/**
 * Gets the value of the lag_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getLagUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(18));
};


/**
 * Sets the value of the lag_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.setLagUsec = function(value) {
  this.set$Value(18, value);
};


/**
 * @return {boolean} Whether the lag_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.hasLagUsec = function() {
  return this.has$Value(18);
};


/**
 * @return {number} The number of values in the lag_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.lagUsecCount = function() {
  return this.count$Values(18);
};


/**
 * Clears the values in the lag_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clearLagUsec = function() {
  this.clear$Field(18);
};


/**
 * Gets the value of the elapsed_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getElapsedUsec = function() {
  return /** @type {?string} */ (this.get$Value(19));
};


/**
 * Gets the value of the elapsed_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getElapsedUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(19));
};


/**
 * Sets the value of the elapsed_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.setElapsedUsec = function(value) {
  this.set$Value(19, value);
};


/**
 * @return {boolean} Whether the elapsed_usec field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.hasElapsedUsec = function() {
  return this.has$Value(19);
};


/**
 * @return {number} The number of values in the elapsed_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.elapsedUsecCount = function() {
  return this.count$Values(19);
};


/**
 * Clears the values in the elapsed_usec field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clearElapsedUsec = function() {
  this.clear$Field(19);
};


/**
 * Gets the value of the response_code field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getResponseCode = function() {
  return /** @type {?string} */ (this.get$Value(20));
};


/**
 * Gets the value of the response_code field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getResponseCodeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(20));
};


/**
 * Sets the value of the response_code field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.setResponseCode = function(value) {
  this.set$Value(20, value);
};


/**
 * @return {boolean} Whether the response_code field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.hasResponseCode = function() {
  return this.has$Value(20);
};


/**
 * @return {number} The number of values in the response_code field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.responseCodeCount = function() {
  return this.count$Values(20);
};


/**
 * Clears the values in the response_code field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clearResponseCode = function() {
  this.clear$Field(20);
};


/**
 * Gets the value of the retry_reason field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getRetryReason = function() {
  return /** @type {?string} */ (this.get$Value(27));
};


/**
 * Gets the value of the retry_reason field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.getRetryReasonOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(27));
};


/**
 * Sets the value of the retry_reason field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.setRetryReason = function(value) {
  this.set$Value(27, value);
};


/**
 * @return {boolean} Whether the retry_reason field has a value.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.hasRetryReason = function() {
  return this.has$Value(27);
};


/**
 * @return {number} The number of values in the retry_reason field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.retryReasonCount = function() {
  return this.count$Values(27);
};


/**
 * Clears the values in the retry_reason field.
 */
apphosting.TaskQueueQueryTasksResponse.Task.RunLog.prototype.clearRetryReason = function() {
  this.clear$Field(27);
};



/**
 * Message TaskQueueFetchTaskRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchTaskRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchTaskRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchTaskRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchTaskRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.setQueueName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.hasQueueName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.queueNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.clearQueueName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.setTaskName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.hasTaskName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.taskNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueFetchTaskRequest.prototype.clearTaskName = function() {
  this.clear$Field(3);
};



/**
 * Message TaskQueueFetchTaskResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueFetchTaskResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueFetchTaskResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueFetchTaskResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueFetchTaskResponse.prototype.clone;


/**
 * Gets the value of the task field.
 * @return {apphosting.TaskQueueQueryTasksResponse} The value.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.getTask = function() {
  return /** @type {apphosting.TaskQueueQueryTasksResponse} */ (this.get$Value(1));
};


/**
 * Gets the value of the task field or the default value if not set.
 * @return {!apphosting.TaskQueueQueryTasksResponse} The value.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.getTaskOrDefault = function() {
  return /** @type {!apphosting.TaskQueueQueryTasksResponse} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the task field.
 * @param {!apphosting.TaskQueueQueryTasksResponse} value The value.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.setTask = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the task field has a value.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.hasTask = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the task field.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.taskCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the task field.
 */
apphosting.TaskQueueFetchTaskResponse.prototype.clearTask = function() {
  this.clear$Field(1);
};



/**
 * Message TaskQueueUpdateStorageLimitRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueUpdateStorageLimitRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueUpdateStorageLimitRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueUpdateStorageLimitRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the limit field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.getLimit = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the limit field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.getLimitOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the limit field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.setLimit = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the limit field has a value.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.hasLimit = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the limit field.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.limitCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the limit field.
 */
apphosting.TaskQueueUpdateStorageLimitRequest.prototype.clearLimit = function() {
  this.clear$Field(2);
};



/**
 * Message TaskQueueUpdateStorageLimitResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueUpdateStorageLimitResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueUpdateStorageLimitResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueUpdateStorageLimitResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.clone;


/**
 * Gets the value of the new_limit field.
 * @return {?string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.getNewLimit = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the new_limit field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.getNewLimitOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the new_limit field.
 * @param {string} value The value.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.setNewLimit = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the new_limit field has a value.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.hasNewLimit = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the new_limit field.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.newLimitCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the new_limit field.
 */
apphosting.TaskQueueUpdateStorageLimitResponse.prototype.clearNewLimit = function() {
  this.clear$Field(1);
};



/**
 * Message TaskQueueQueryAndOwnTasksRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryAndOwnTasksRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryAndOwnTasksRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryAndOwnTasksRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clone;


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.setQueueName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.hasQueueName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.queueNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clearQueueName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the lease_seconds field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getLeaseSeconds = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the lease_seconds field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getLeaseSecondsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the lease_seconds field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.setLeaseSeconds = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the lease_seconds field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.hasLeaseSeconds = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the lease_seconds field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.leaseSecondsCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the lease_seconds field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clearLeaseSeconds = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_tasks field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getMaxTasks = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_tasks field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getMaxTasksOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_tasks field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.setMaxTasks = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_tasks field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.hasMaxTasks = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_tasks field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.maxTasksCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_tasks field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clearMaxTasks = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the group_by_tag field.
 * @return {?boolean} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getGroupByTag = function() {
  return /** @type {?boolean} */ (this.get$Value(4));
};


/**
 * Gets the value of the group_by_tag field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getGroupByTagOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the group_by_tag field.
 * @param {boolean} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.setGroupByTag = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the group_by_tag field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.hasGroupByTag = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the group_by_tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.groupByTagCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the group_by_tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clearGroupByTag = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the tag field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getTag = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the tag field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.getTagOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the tag field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.setTag = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the tag field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.hasTag = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.tagCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksRequest.prototype.clearTag = function() {
  this.clear$Field(5);
};



/**
 * Message TaskQueueQueryAndOwnTasksResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryAndOwnTasksResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryAndOwnTasksResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryAndOwnTasksResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.clone;


/**
 * Gets the value of the task field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TaskQueueQueryAndOwnTasksResponse.Task} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.getTask = function(index) {
  return /** @type {apphosting.TaskQueueQueryAndOwnTasksResponse.Task} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the task field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TaskQueueQueryAndOwnTasksResponse.Task} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.getTaskOrDefault = function(index) {
  return /** @type {!apphosting.TaskQueueQueryAndOwnTasksResponse.Task} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the task field.
 * @param {!apphosting.TaskQueueQueryAndOwnTasksResponse.Task} value The value to add.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.addTask = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the task field.
 * @return {!Array.<!apphosting.TaskQueueQueryAndOwnTasksResponse.Task>} The values in the field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.taskArray = function() {
  return /** @type {!Array.<!apphosting.TaskQueueQueryAndOwnTasksResponse.Task>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the task field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.hasTask = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the task field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.taskCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the task field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.prototype.clearTask = function() {
  this.clear$Field(1);
};



/**
 * Message Task.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueQueryAndOwnTasksResponse.Task, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueQueryAndOwnTasksResponse.Task} The cloned message.
 * @override
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clone;


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.setTaskName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.hasTaskName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.taskNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clearTaskName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.setEtaUsec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the eta_usec field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.hasEtaUsec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the eta_usec field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.etaUsecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the eta_usec field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clearEtaUsec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the retry_count field.
 * @return {?number} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getRetryCount = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the retry_count field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getRetryCountOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the retry_count field.
 * @param {number} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.setRetryCount = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the retry_count field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.hasRetryCount = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the retry_count field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.retryCountCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the retry_count field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clearRetryCount = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the body field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getBody = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the body field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the body field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.setBody = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the body field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.hasBody = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the body field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.bodyCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the body field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clearBody = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the tag field.
 * @return {?string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getTag = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the tag field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.getTagOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the tag field.
 * @param {string} value The value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.setTag = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the tag field has a value.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.hasTag = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.tagCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the tag field.
 */
apphosting.TaskQueueQueryAndOwnTasksResponse.Task.prototype.clearTag = function() {
  this.clear$Field(6);
};



/**
 * Message TaskQueueModifyTaskLeaseRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueModifyTaskLeaseRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueModifyTaskLeaseRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueModifyTaskLeaseRequest} The cloned message.
 * @override
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.clone;


/**
 * Gets the value of the queue_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getQueueName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the queue_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.setQueueName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the queue_name field has a value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.hasQueueName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the queue_name field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.queueNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the queue_name field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.clearQueueName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.setTaskName = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.hasTaskName = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.taskNameCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.clearTaskName = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.setEtaUsec = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the eta_usec field has a value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.hasEtaUsec = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the eta_usec field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.etaUsecCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the eta_usec field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.clearEtaUsec = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the lease_seconds field.
 * @return {?number} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getLeaseSeconds = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the lease_seconds field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.getLeaseSecondsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the lease_seconds field.
 * @param {number} value The value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.setLeaseSeconds = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the lease_seconds field has a value.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.hasLeaseSeconds = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the lease_seconds field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.leaseSecondsCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the lease_seconds field.
 */
apphosting.TaskQueueModifyTaskLeaseRequest.prototype.clearLeaseSeconds = function() {
  this.clear$Field(4);
};



/**
 * Message TaskQueueModifyTaskLeaseResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TaskQueueModifyTaskLeaseResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TaskQueueModifyTaskLeaseResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TaskQueueModifyTaskLeaseResponse} The cloned message.
 * @override
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.clone;


/**
 * Gets the value of the updated_eta_usec field.
 * @return {?string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.getUpdatedEtaUsec = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the updated_eta_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.getUpdatedEtaUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the updated_eta_usec field.
 * @param {string} value The value.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.setUpdatedEtaUsec = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the updated_eta_usec field has a value.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.hasUpdatedEtaUsec = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the updated_eta_usec field.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.updatedEtaUsecCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the updated_eta_usec field.
 */
apphosting.TaskQueueModifyTaskLeaseResponse.prototype.clearUpdatedEtaUsec = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.TaskQueueServiceError, {
  0: {
    name: 'TaskQueueServiceError',
    fullName: 'apphosting.TaskQueueServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskPayload, {
  0: {
    name: 'TaskPayload',
    fullName: 'apphosting.TaskPayload'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueRetryParameters, {
  0: {
    name: 'TaskQueueRetryParameters',
    fullName: 'apphosting.TaskQueueRetryParameters'
  },
  1: {
    name: 'retry_limit',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'age_limit_sec',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'min_backoff_sec',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    defaultValue: 0.1,
    type: Number
  },
  4: {
    name: 'max_backoff_sec',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    defaultValue: 3600,
    type: Number
  },
  5: {
    name: 'max_doublings',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 16,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueAcl, {
  0: {
    name: 'TaskQueueAcl',
    fullName: 'apphosting.TaskQueueAcl'
  },
  1: {
    name: 'user_email',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'writer_email',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueHttpHeader, {
  0: {
    name: 'TaskQueueHttpHeader',
    fullName: 'apphosting.TaskQueueHttpHeader'
  },
  1: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueMode, {
  0: {
    name: 'TaskQueueMode',
    fullName: 'apphosting.TaskQueueMode'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueAddRequest, {
  0: {
    name: 'TaskQueueAddRequest',
    fullName: 'apphosting.TaskQueueAddRequest'
  },
  1: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'method',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueAddRequest.RequestMethod.POST,
    type: apphosting.TaskQueueAddRequest.RequestMethod
  },
  4: {
    name: 'url',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  6: {
    name: 'header',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueAddRequest.Header
  },
  9: {
    name: 'body',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  11: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  12: {
    name: 'crontimetable',
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueAddRequest.CronTimetable
  },
  15: {
    name: 'description',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  16: {
    name: 'payload',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskPayload
  },
  17: {
    name: 'retry_parameters',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueRetryParameters
  },
  18: {
    name: 'mode',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueMode.Mode.PUSH,
    type: apphosting.TaskQueueMode.Mode
  },
  19: {
    name: 'tag',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueAddRequest.Header, {
  0: {
    name: 'Header',
    containingType: apphosting.TaskQueueAddRequest,
    fullName: 'apphosting.TaskQueueAddRequest.Header'
  },
  7: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  8: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueAddRequest.CronTimetable, {
  0: {
    name: 'CronTimetable',
    containingType: apphosting.TaskQueueAddRequest,
    fullName: 'apphosting.TaskQueueAddRequest.CronTimetable'
  },
  13: {
    name: 'schedule',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  14: {
    name: 'timezone',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueAddResponse, {
  0: {
    name: 'TaskQueueAddResponse',
    fullName: 'apphosting.TaskQueueAddResponse'
  },
  1: {
    name: 'chosen_task_name',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueBulkAddRequest, {
  0: {
    name: 'TaskQueueBulkAddRequest',
    fullName: 'apphosting.TaskQueueBulkAddRequest'
  },
  1: {
    name: 'add_request',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueAddRequest
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueBulkAddResponse, {
  0: {
    name: 'TaskQueueBulkAddResponse',
    fullName: 'apphosting.TaskQueueBulkAddResponse'
  },
  1: {
    name: 'taskresult',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueBulkAddResponse.TaskResult
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueBulkAddResponse.TaskResult, {
  0: {
    name: 'TaskResult',
    containingType: apphosting.TaskQueueBulkAddResponse,
    fullName: 'apphosting.TaskQueueBulkAddResponse.TaskResult'
  },
  2: {
    name: 'result',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueServiceError.ErrorCode.OK,
    type: apphosting.TaskQueueServiceError.ErrorCode
  },
  3: {
    name: 'chosen_task_name',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteRequest, {
  0: {
    name: 'TaskQueueDeleteRequest',
    fullName: 'apphosting.TaskQueueDeleteRequest'
  },
  1: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'task_name',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteResponse, {
  0: {
    name: 'TaskQueueDeleteResponse',
    fullName: 'apphosting.TaskQueueDeleteResponse'
  },
  3: {
    name: 'result',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueServiceError.ErrorCode.OK,
    type: apphosting.TaskQueueServiceError.ErrorCode
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueForceRunRequest, {
  0: {
    name: 'TaskQueueForceRunRequest',
    fullName: 'apphosting.TaskQueueForceRunRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueForceRunResponse, {
  0: {
    name: 'TaskQueueForceRunResponse',
    fullName: 'apphosting.TaskQueueForceRunResponse'
  },
  3: {
    name: 'result',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueServiceError.ErrorCode.OK,
    type: apphosting.TaskQueueServiceError.ErrorCode
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueUpdateQueueRequest, {
  0: {
    name: 'TaskQueueUpdateQueueRequest',
    fullName: 'apphosting.TaskQueueUpdateQueueRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'bucket_refill_per_second',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  4: {
    name: 'bucket_capacity',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  5: {
    name: 'user_specified_rate',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  6: {
    name: 'retry_parameters',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueRetryParameters
  },
  7: {
    name: 'max_concurrent_requests',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  8: {
    name: 'mode',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueMode.Mode.PUSH,
    type: apphosting.TaskQueueMode.Mode
  },
  9: {
    name: 'acl',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueAcl
  },
  10: {
    name: 'header_override',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueHttpHeader
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueUpdateQueueResponse, {
  0: {
    name: 'TaskQueueUpdateQueueResponse',
    fullName: 'apphosting.TaskQueueUpdateQueueResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueuesRequest, {
  0: {
    name: 'TaskQueueFetchQueuesRequest',
    fullName: 'apphosting.TaskQueueFetchQueuesRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'max_rows',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueuesResponse, {
  0: {
    name: 'TaskQueueFetchQueuesResponse',
    fullName: 'apphosting.TaskQueueFetchQueuesResponse'
  },
  1: {
    name: 'queue',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueFetchQueuesResponse.Queue
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueuesResponse.Queue, {
  0: {
    name: 'Queue',
    containingType: apphosting.TaskQueueFetchQueuesResponse,
    fullName: 'apphosting.TaskQueueFetchQueuesResponse.Queue'
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'bucket_refill_per_second',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  4: {
    name: 'bucket_capacity',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  5: {
    name: 'user_specified_rate',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  6: {
    name: 'paused',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  7: {
    name: 'retry_parameters',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueRetryParameters
  },
  8: {
    name: 'max_concurrent_requests',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  9: {
    name: 'mode',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueMode.Mode.PUSH,
    type: apphosting.TaskQueueMode.Mode
  },
  10: {
    name: 'acl',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueAcl
  },
  11: {
    name: 'header_override',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueHttpHeader
  },
  12: {
    name: 'creator_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: 'apphosting',
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueueStatsRequest, {
  0: {
    name: 'TaskQueueFetchQueueStatsRequest',
    fullName: 'apphosting.TaskQueueFetchQueueStatsRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'max_num_tasks',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 0,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueScannerQueueInfo, {
  0: {
    name: 'TaskQueueScannerQueueInfo',
    fullName: 'apphosting.TaskQueueScannerQueueInfo'
  },
  1: {
    name: 'executed_last_minute',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  2: {
    name: 'executed_last_hour',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'sampling_duration_seconds',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  4: {
    name: 'requests_in_flight',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  5: {
    name: 'enforced_rate',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueueStatsResponse, {
  0: {
    name: 'TaskQueueFetchQueueStatsResponse',
    fullName: 'apphosting.TaskQueueFetchQueueStatsResponse'
  },
  1: {
    name: 'queuestats',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueFetchQueueStatsResponse.QueueStats
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchQueueStatsResponse.QueueStats, {
  0: {
    name: 'QueueStats',
    containingType: apphosting.TaskQueueFetchQueueStatsResponse,
    fullName: 'apphosting.TaskQueueFetchQueueStatsResponse.QueueStats'
  },
  2: {
    name: 'num_tasks',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'oldest_eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'scanner_info',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueScannerQueueInfo
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueuePauseQueueRequest, {
  0: {
    name: 'TaskQueuePauseQueueRequest',
    fullName: 'apphosting.TaskQueuePauseQueueRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'pause',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueuePauseQueueResponse, {
  0: {
    name: 'TaskQueuePauseQueueResponse',
    fullName: 'apphosting.TaskQueuePauseQueueResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueuePurgeQueueRequest, {
  0: {
    name: 'TaskQueuePurgeQueueRequest',
    fullName: 'apphosting.TaskQueuePurgeQueueRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueuePurgeQueueResponse, {
  0: {
    name: 'TaskQueuePurgeQueueResponse',
    fullName: 'apphosting.TaskQueuePurgeQueueResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteQueueRequest, {
  0: {
    name: 'TaskQueueDeleteQueueRequest',
    fullName: 'apphosting.TaskQueueDeleteQueueRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteQueueResponse, {
  0: {
    name: 'TaskQueueDeleteQueueResponse',
    fullName: 'apphosting.TaskQueueDeleteQueueResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteGroupRequest, {
  0: {
    name: 'TaskQueueDeleteGroupRequest',
    fullName: 'apphosting.TaskQueueDeleteGroupRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueDeleteGroupResponse, {
  0: {
    name: 'TaskQueueDeleteGroupResponse',
    fullName: 'apphosting.TaskQueueDeleteGroupResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksRequest, {
  0: {
    name: 'TaskQueueQueryTasksRequest',
    fullName: 'apphosting.TaskQueueQueryTasksRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'start_task_name',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  4: {
    name: 'start_eta_usec',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  6: {
    name: 'start_tag',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  5: {
    name: 'max_rows',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 1,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksResponse, {
  0: {
    name: 'TaskQueueQueryTasksResponse',
    fullName: 'apphosting.TaskQueueQueryTasksResponse'
  },
  1: {
    name: 'task',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueQueryTasksResponse.Task
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksResponse.Task, {
  0: {
    name: 'Task',
    containingType: apphosting.TaskQueueQueryTasksResponse,
    fullName: 'apphosting.TaskQueueQueryTasksResponse.Task'
  },
  2: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'url',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  5: {
    name: 'method',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod.GET,
    type: apphosting.TaskQueueQueryTasksResponse.Task.RequestMethod
  },
  6: {
    name: 'retry_count',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 0,
    type: Number
  },
  7: {
    name: 'header',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueQueryTasksResponse.Task.Header
  },
  10: {
    name: 'body_size',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  11: {
    name: 'body',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  12: {
    name: 'creation_time_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  13: {
    name: 'crontimetable',
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable
  },
  16: {
    name: 'runlog',
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueQueryTasksResponse.Task.RunLog
  },
  21: {
    name: 'description',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  22: {
    name: 'payload',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskPayload
  },
  23: {
    name: 'retry_parameters',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueRetryParameters
  },
  24: {
    name: 'first_try_usec',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  25: {
    name: 'tag',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  26: {
    name: 'execution_count',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 0,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksResponse.Task.Header, {
  0: {
    name: 'Header',
    containingType: apphosting.TaskQueueQueryTasksResponse.Task,
    fullName: 'apphosting.TaskQueueQueryTasksResponse.Task.Header'
  },
  8: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  9: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable, {
  0: {
    name: 'CronTimetable',
    containingType: apphosting.TaskQueueQueryTasksResponse.Task,
    fullName: 'apphosting.TaskQueueQueryTasksResponse.Task.CronTimetable'
  },
  14: {
    name: 'schedule',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  15: {
    name: 'timezone',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryTasksResponse.Task.RunLog, {
  0: {
    name: 'RunLog',
    containingType: apphosting.TaskQueueQueryTasksResponse.Task,
    fullName: 'apphosting.TaskQueueQueryTasksResponse.Task.RunLog'
  },
  17: {
    name: 'dispatched_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  18: {
    name: 'lag_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  19: {
    name: 'elapsed_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  20: {
    name: 'response_code',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  27: {
    name: 'retry_reason',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchTaskRequest, {
  0: {
    name: 'TaskQueueFetchTaskRequest',
    fullName: 'apphosting.TaskQueueFetchTaskRequest'
  },
  1: {
    name: 'app_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueFetchTaskResponse, {
  0: {
    name: 'TaskQueueFetchTaskResponse',
    fullName: 'apphosting.TaskQueueFetchTaskResponse'
  },
  1: {
    name: 'task',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TaskQueueQueryTasksResponse
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueUpdateStorageLimitRequest, {
  0: {
    name: 'TaskQueueUpdateStorageLimitRequest',
    fullName: 'apphosting.TaskQueueUpdateStorageLimitRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'limit',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueUpdateStorageLimitResponse, {
  0: {
    name: 'TaskQueueUpdateStorageLimitResponse',
    fullName: 'apphosting.TaskQueueUpdateStorageLimitResponse'
  },
  1: {
    name: 'new_limit',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryAndOwnTasksRequest, {
  0: {
    name: 'TaskQueueQueryAndOwnTasksRequest',
    fullName: 'apphosting.TaskQueueQueryAndOwnTasksRequest'
  },
  1: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'lease_seconds',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  3: {
    name: 'max_tasks',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'group_by_tag',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  5: {
    name: 'tag',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryAndOwnTasksResponse, {
  0: {
    name: 'TaskQueueQueryAndOwnTasksResponse',
    fullName: 'apphosting.TaskQueueQueryAndOwnTasksResponse'
  },
  1: {
    name: 'task',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.TaskQueueQueryAndOwnTasksResponse.Task
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueQueryAndOwnTasksResponse.Task, {
  0: {
    name: 'Task',
    containingType: apphosting.TaskQueueQueryAndOwnTasksResponse,
    fullName: 'apphosting.TaskQueueQueryAndOwnTasksResponse.Task'
  },
  2: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'retry_count',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 0,
    type: Number
  },
  5: {
    name: 'body',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  6: {
    name: 'tag',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueModifyTaskLeaseRequest, {
  0: {
    name: 'TaskQueueModifyTaskLeaseRequest',
    fullName: 'apphosting.TaskQueueModifyTaskLeaseRequest'
  },
  1: {
    name: 'queue_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'task_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'lease_seconds',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.TaskQueueModifyTaskLeaseResponse, {
  0: {
    name: 'TaskQueueModifyTaskLeaseResponse',
    fullName: 'apphosting.TaskQueueModifyTaskLeaseResponse'
  },
  1: {
    name: 'updated_eta_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});
