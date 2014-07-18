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

goog.provide('apphosting.LogServiceError');
goog.provide('apphosting.LogServiceError.ErrorCode');
goog.provide('apphosting.UserAppLogLine');
goog.provide('apphosting.UserAppLogGroup');
goog.provide('apphosting.FlushRequest');
goog.provide('apphosting.SetStatusRequest');
goog.provide('apphosting.LogOffset');
goog.provide('apphosting.LogLine');
goog.provide('apphosting.RequestLog');
goog.provide('apphosting.LogModuleVersion');
goog.provide('apphosting.LogReadRequest');
goog.provide('apphosting.LogReadResponse');
goog.provide('apphosting.LogUsageRecord');
goog.provide('apphosting.LogUsageRequest');
goog.provide('apphosting.LogUsageResponse');

goog.require('goog.proto2.Message');



/**
 * Message LogServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogServiceError} The cloned message.
 * @override
 */
apphosting.LogServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.LogServiceError.ErrorCode = {
  OK: 0,
  INVALID_REQUEST: 1,
  STORAGE_ERROR: 2
};



/**
 * Message UserAppLogLine.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.UserAppLogLine = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.UserAppLogLine, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.UserAppLogLine} The cloned message.
 * @override
 */
apphosting.UserAppLogLine.prototype.clone;


/**
 * Gets the value of the timestamp_usec field.
 * @return {?string} The value.
 */
apphosting.UserAppLogLine.prototype.getTimestampUsec = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the timestamp_usec field or the default value if not set.
 * @return {string} The value.
 */
apphosting.UserAppLogLine.prototype.getTimestampUsecOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the timestamp_usec field.
 * @param {string} value The value.
 */
apphosting.UserAppLogLine.prototype.setTimestampUsec = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the timestamp_usec field has a value.
 */
apphosting.UserAppLogLine.prototype.hasTimestampUsec = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the timestamp_usec field.
 */
apphosting.UserAppLogLine.prototype.timestampUsecCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the timestamp_usec field.
 */
apphosting.UserAppLogLine.prototype.clearTimestampUsec = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the level field.
 * @return {?string} The value.
 */
apphosting.UserAppLogLine.prototype.getLevel = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the level field or the default value if not set.
 * @return {string} The value.
 */
apphosting.UserAppLogLine.prototype.getLevelOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the level field.
 * @param {string} value The value.
 */
apphosting.UserAppLogLine.prototype.setLevel = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the level field has a value.
 */
apphosting.UserAppLogLine.prototype.hasLevel = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the level field.
 */
apphosting.UserAppLogLine.prototype.levelCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the level field.
 */
apphosting.UserAppLogLine.prototype.clearLevel = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the message field.
 * @return {?string} The value.
 */
apphosting.UserAppLogLine.prototype.getMessage = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.UserAppLogLine.prototype.getMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the message field.
 * @param {string} value The value.
 */
apphosting.UserAppLogLine.prototype.setMessage = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the message field has a value.
 */
apphosting.UserAppLogLine.prototype.hasMessage = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the message field.
 */
apphosting.UserAppLogLine.prototype.messageCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the message field.
 */
apphosting.UserAppLogLine.prototype.clearMessage = function() {
  this.clear$Field(3);
};



/**
 * Message UserAppLogGroup.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.UserAppLogGroup = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.UserAppLogGroup, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.UserAppLogGroup} The cloned message.
 * @override
 */
apphosting.UserAppLogGroup.prototype.clone;


/**
 * Gets the value of the log_line field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.UserAppLogLine} The value.
 */
apphosting.UserAppLogGroup.prototype.getLogLine = function(index) {
  return /** @type {apphosting.UserAppLogLine} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the log_line field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.UserAppLogLine} The value.
 */
apphosting.UserAppLogGroup.prototype.getLogLineOrDefault = function(index) {
  return /** @type {!apphosting.UserAppLogLine} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the log_line field.
 * @param {!apphosting.UserAppLogLine} value The value to add.
 */
apphosting.UserAppLogGroup.prototype.addLogLine = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the log_line field.
 * @return {!Array.<!apphosting.UserAppLogLine>} The values in the field.
 */
apphosting.UserAppLogGroup.prototype.logLineArray = function() {
  return /** @type {!Array.<!apphosting.UserAppLogLine>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the log_line field has a value.
 */
apphosting.UserAppLogGroup.prototype.hasLogLine = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the log_line field.
 */
apphosting.UserAppLogGroup.prototype.logLineCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the log_line field.
 */
apphosting.UserAppLogGroup.prototype.clearLogLine = function() {
  this.clear$Field(2);
};



/**
 * Message FlushRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.FlushRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.FlushRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.FlushRequest} The cloned message.
 * @override
 */
apphosting.FlushRequest.prototype.clone;


/**
 * Gets the value of the logs field.
 * @return {?string} The value.
 */
apphosting.FlushRequest.prototype.getLogs = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the logs field or the default value if not set.
 * @return {string} The value.
 */
apphosting.FlushRequest.prototype.getLogsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the logs field.
 * @param {string} value The value.
 */
apphosting.FlushRequest.prototype.setLogs = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the logs field has a value.
 */
apphosting.FlushRequest.prototype.hasLogs = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the logs field.
 */
apphosting.FlushRequest.prototype.logsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the logs field.
 */
apphosting.FlushRequest.prototype.clearLogs = function() {
  this.clear$Field(1);
};



/**
 * Message SetStatusRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SetStatusRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SetStatusRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SetStatusRequest} The cloned message.
 * @override
 */
apphosting.SetStatusRequest.prototype.clone;


/**
 * Gets the value of the status field.
 * @return {?string} The value.
 */
apphosting.SetStatusRequest.prototype.getStatus = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the status field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SetStatusRequest.prototype.getStatusOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the status field.
 * @param {string} value The value.
 */
apphosting.SetStatusRequest.prototype.setStatus = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the status field has a value.
 */
apphosting.SetStatusRequest.prototype.hasStatus = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the status field.
 */
apphosting.SetStatusRequest.prototype.statusCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the status field.
 */
apphosting.SetStatusRequest.prototype.clearStatus = function() {
  this.clear$Field(1);
};



/**
 * Message LogOffset.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogOffset = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogOffset, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogOffset} The cloned message.
 * @override
 */
apphosting.LogOffset.prototype.clone;


/**
 * Gets the value of the request_id field.
 * @return {?string} The value.
 */
apphosting.LogOffset.prototype.getRequestId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the request_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogOffset.prototype.getRequestIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the request_id field.
 * @param {string} value The value.
 */
apphosting.LogOffset.prototype.setRequestId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the request_id field has a value.
 */
apphosting.LogOffset.prototype.hasRequestId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the request_id field.
 */
apphosting.LogOffset.prototype.requestIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the request_id field.
 */
apphosting.LogOffset.prototype.clearRequestId = function() {
  this.clear$Field(1);
};



/**
 * Message LogLine.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogLine = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogLine, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogLine} The cloned message.
 * @override
 */
apphosting.LogLine.prototype.clone;


/**
 * Gets the value of the time field.
 * @return {?string} The value.
 */
apphosting.LogLine.prototype.getTime = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogLine.prototype.getTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the time field.
 * @param {string} value The value.
 */
apphosting.LogLine.prototype.setTime = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the time field has a value.
 */
apphosting.LogLine.prototype.hasTime = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the time field.
 */
apphosting.LogLine.prototype.timeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the time field.
 */
apphosting.LogLine.prototype.clearTime = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the level field.
 * @return {?number} The value.
 */
apphosting.LogLine.prototype.getLevel = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the level field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogLine.prototype.getLevelOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the level field.
 * @param {number} value The value.
 */
apphosting.LogLine.prototype.setLevel = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the level field has a value.
 */
apphosting.LogLine.prototype.hasLevel = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the level field.
 */
apphosting.LogLine.prototype.levelCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the level field.
 */
apphosting.LogLine.prototype.clearLevel = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the log_message field.
 * @return {?string} The value.
 */
apphosting.LogLine.prototype.getLogMessage = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the log_message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogLine.prototype.getLogMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the log_message field.
 * @param {string} value The value.
 */
apphosting.LogLine.prototype.setLogMessage = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the log_message field has a value.
 */
apphosting.LogLine.prototype.hasLogMessage = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the log_message field.
 */
apphosting.LogLine.prototype.logMessageCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the log_message field.
 */
apphosting.LogLine.prototype.clearLogMessage = function() {
  this.clear$Field(3);
};



/**
 * Message RequestLog.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.RequestLog = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.RequestLog, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.RequestLog} The cloned message.
 * @override
 */
apphosting.RequestLog.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.RequestLog.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.RequestLog.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.RequestLog.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the module_id field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getModuleId = function() {
  return /** @type {?string} */ (this.get$Value(37));
};


/**
 * Gets the value of the module_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getModuleIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(37));
};


/**
 * Sets the value of the module_id field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setModuleId = function(value) {
  this.set$Value(37, value);
};


/**
 * @return {boolean} Whether the module_id field has a value.
 */
apphosting.RequestLog.prototype.hasModuleId = function() {
  return this.has$Value(37);
};


/**
 * @return {number} The number of values in the module_id field.
 */
apphosting.RequestLog.prototype.moduleIdCount = function() {
  return this.count$Values(37);
};


/**
 * Clears the values in the module_id field.
 */
apphosting.RequestLog.prototype.clearModuleId = function() {
  this.clear$Field(37);
};


/**
 * Gets the value of the version_id field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getVersionId = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getVersionIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version_id field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setVersionId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version_id field has a value.
 */
apphosting.RequestLog.prototype.hasVersionId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version_id field.
 */
apphosting.RequestLog.prototype.versionIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version_id field.
 */
apphosting.RequestLog.prototype.clearVersionId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the request_id field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getRequestId = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the request_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getRequestIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the request_id field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setRequestId = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the request_id field has a value.
 */
apphosting.RequestLog.prototype.hasRequestId = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the request_id field.
 */
apphosting.RequestLog.prototype.requestIdCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the request_id field.
 */
apphosting.RequestLog.prototype.clearRequestId = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the offset field.
 * @return {apphosting.LogOffset} The value.
 */
apphosting.RequestLog.prototype.getOffset = function() {
  return /** @type {apphosting.LogOffset} */ (this.get$Value(35));
};


/**
 * Gets the value of the offset field or the default value if not set.
 * @return {!apphosting.LogOffset} The value.
 */
apphosting.RequestLog.prototype.getOffsetOrDefault = function() {
  return /** @type {!apphosting.LogOffset} */ (this.get$ValueOrDefault(35));
};


/**
 * Sets the value of the offset field.
 * @param {!apphosting.LogOffset} value The value.
 */
apphosting.RequestLog.prototype.setOffset = function(value) {
  this.set$Value(35, value);
};


/**
 * @return {boolean} Whether the offset field has a value.
 */
apphosting.RequestLog.prototype.hasOffset = function() {
  return this.has$Value(35);
};


/**
 * @return {number} The number of values in the offset field.
 */
apphosting.RequestLog.prototype.offsetCount = function() {
  return this.count$Values(35);
};


/**
 * Clears the values in the offset field.
 */
apphosting.RequestLog.prototype.clearOffset = function() {
  this.clear$Field(35);
};


/**
 * Gets the value of the ip field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getIp = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the ip field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getIpOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the ip field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setIp = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the ip field has a value.
 */
apphosting.RequestLog.prototype.hasIp = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the ip field.
 */
apphosting.RequestLog.prototype.ipCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the ip field.
 */
apphosting.RequestLog.prototype.clearIp = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the nickname field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getNickname = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the nickname field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getNicknameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the nickname field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setNickname = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the nickname field has a value.
 */
apphosting.RequestLog.prototype.hasNickname = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the nickname field.
 */
apphosting.RequestLog.prototype.nicknameCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the nickname field.
 */
apphosting.RequestLog.prototype.clearNickname = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the start_time field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getStartTime = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the start_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getStartTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the start_time field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setStartTime = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the start_time field has a value.
 */
apphosting.RequestLog.prototype.hasStartTime = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the start_time field.
 */
apphosting.RequestLog.prototype.startTimeCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the start_time field.
 */
apphosting.RequestLog.prototype.clearStartTime = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the end_time field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getEndTime = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the end_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getEndTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the end_time field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setEndTime = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the end_time field has a value.
 */
apphosting.RequestLog.prototype.hasEndTime = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the end_time field.
 */
apphosting.RequestLog.prototype.endTimeCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the end_time field.
 */
apphosting.RequestLog.prototype.clearEndTime = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the latency field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getLatency = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the latency field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getLatencyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the latency field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setLatency = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the latency field has a value.
 */
apphosting.RequestLog.prototype.hasLatency = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the latency field.
 */
apphosting.RequestLog.prototype.latencyCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the latency field.
 */
apphosting.RequestLog.prototype.clearLatency = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the mcycles field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getMcycles = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the mcycles field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getMcyclesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the mcycles field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setMcycles = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the mcycles field has a value.
 */
apphosting.RequestLog.prototype.hasMcycles = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the mcycles field.
 */
apphosting.RequestLog.prototype.mcyclesCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the mcycles field.
 */
apphosting.RequestLog.prototype.clearMcycles = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the method field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getMethod = function() {
  return /** @type {?string} */ (this.get$Value(10));
};


/**
 * Gets the value of the method field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getMethodOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the method field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setMethod = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the method field has a value.
 */
apphosting.RequestLog.prototype.hasMethod = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the method field.
 */
apphosting.RequestLog.prototype.methodCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the method field.
 */
apphosting.RequestLog.prototype.clearMethod = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the resource field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getResource = function() {
  return /** @type {?string} */ (this.get$Value(11));
};


/**
 * Gets the value of the resource field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getResourceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the resource field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setResource = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the resource field has a value.
 */
apphosting.RequestLog.prototype.hasResource = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the resource field.
 */
apphosting.RequestLog.prototype.resourceCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the resource field.
 */
apphosting.RequestLog.prototype.clearResource = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the http_version field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getHttpVersion = function() {
  return /** @type {?string} */ (this.get$Value(12));
};


/**
 * Gets the value of the http_version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getHttpVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the http_version field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setHttpVersion = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the http_version field has a value.
 */
apphosting.RequestLog.prototype.hasHttpVersion = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the http_version field.
 */
apphosting.RequestLog.prototype.httpVersionCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the http_version field.
 */
apphosting.RequestLog.prototype.clearHttpVersion = function() {
  this.clear$Field(12);
};


/**
 * Gets the value of the status field.
 * @return {?number} The value.
 */
apphosting.RequestLog.prototype.getStatus = function() {
  return /** @type {?number} */ (this.get$Value(13));
};


/**
 * Gets the value of the status field or the default value if not set.
 * @return {number} The value.
 */
apphosting.RequestLog.prototype.getStatusOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(13));
};


/**
 * Sets the value of the status field.
 * @param {number} value The value.
 */
apphosting.RequestLog.prototype.setStatus = function(value) {
  this.set$Value(13, value);
};


/**
 * @return {boolean} Whether the status field has a value.
 */
apphosting.RequestLog.prototype.hasStatus = function() {
  return this.has$Value(13);
};


/**
 * @return {number} The number of values in the status field.
 */
apphosting.RequestLog.prototype.statusCount = function() {
  return this.count$Values(13);
};


/**
 * Clears the values in the status field.
 */
apphosting.RequestLog.prototype.clearStatus = function() {
  this.clear$Field(13);
};


/**
 * Gets the value of the response_size field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getResponseSize = function() {
  return /** @type {?string} */ (this.get$Value(14));
};


/**
 * Gets the value of the response_size field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getResponseSizeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(14));
};


/**
 * Sets the value of the response_size field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setResponseSize = function(value) {
  this.set$Value(14, value);
};


/**
 * @return {boolean} Whether the response_size field has a value.
 */
apphosting.RequestLog.prototype.hasResponseSize = function() {
  return this.has$Value(14);
};


/**
 * @return {number} The number of values in the response_size field.
 */
apphosting.RequestLog.prototype.responseSizeCount = function() {
  return this.count$Values(14);
};


/**
 * Clears the values in the response_size field.
 */
apphosting.RequestLog.prototype.clearResponseSize = function() {
  this.clear$Field(14);
};


/**
 * Gets the value of the referrer field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getReferrer = function() {
  return /** @type {?string} */ (this.get$Value(15));
};


/**
 * Gets the value of the referrer field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getReferrerOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(15));
};


/**
 * Sets the value of the referrer field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setReferrer = function(value) {
  this.set$Value(15, value);
};


/**
 * @return {boolean} Whether the referrer field has a value.
 */
apphosting.RequestLog.prototype.hasReferrer = function() {
  return this.has$Value(15);
};


/**
 * @return {number} The number of values in the referrer field.
 */
apphosting.RequestLog.prototype.referrerCount = function() {
  return this.count$Values(15);
};


/**
 * Clears the values in the referrer field.
 */
apphosting.RequestLog.prototype.clearReferrer = function() {
  this.clear$Field(15);
};


/**
 * Gets the value of the user_agent field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getUserAgent = function() {
  return /** @type {?string} */ (this.get$Value(16));
};


/**
 * Gets the value of the user_agent field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getUserAgentOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(16));
};


/**
 * Sets the value of the user_agent field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setUserAgent = function(value) {
  this.set$Value(16, value);
};


/**
 * @return {boolean} Whether the user_agent field has a value.
 */
apphosting.RequestLog.prototype.hasUserAgent = function() {
  return this.has$Value(16);
};


/**
 * @return {number} The number of values in the user_agent field.
 */
apphosting.RequestLog.prototype.userAgentCount = function() {
  return this.count$Values(16);
};


/**
 * Clears the values in the user_agent field.
 */
apphosting.RequestLog.prototype.clearUserAgent = function() {
  this.clear$Field(16);
};


/**
 * Gets the value of the url_map_entry field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getUrlMapEntry = function() {
  return /** @type {?string} */ (this.get$Value(17));
};


/**
 * Gets the value of the url_map_entry field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getUrlMapEntryOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(17));
};


/**
 * Sets the value of the url_map_entry field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setUrlMapEntry = function(value) {
  this.set$Value(17, value);
};


/**
 * @return {boolean} Whether the url_map_entry field has a value.
 */
apphosting.RequestLog.prototype.hasUrlMapEntry = function() {
  return this.has$Value(17);
};


/**
 * @return {number} The number of values in the url_map_entry field.
 */
apphosting.RequestLog.prototype.urlMapEntryCount = function() {
  return this.count$Values(17);
};


/**
 * Clears the values in the url_map_entry field.
 */
apphosting.RequestLog.prototype.clearUrlMapEntry = function() {
  this.clear$Field(17);
};


/**
 * Gets the value of the combined field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getCombined = function() {
  return /** @type {?string} */ (this.get$Value(18));
};


/**
 * Gets the value of the combined field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getCombinedOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(18));
};


/**
 * Sets the value of the combined field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setCombined = function(value) {
  this.set$Value(18, value);
};


/**
 * @return {boolean} Whether the combined field has a value.
 */
apphosting.RequestLog.prototype.hasCombined = function() {
  return this.has$Value(18);
};


/**
 * @return {number} The number of values in the combined field.
 */
apphosting.RequestLog.prototype.combinedCount = function() {
  return this.count$Values(18);
};


/**
 * Clears the values in the combined field.
 */
apphosting.RequestLog.prototype.clearCombined = function() {
  this.clear$Field(18);
};


/**
 * Gets the value of the api_mcycles field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getApiMcycles = function() {
  return /** @type {?string} */ (this.get$Value(19));
};


/**
 * Gets the value of the api_mcycles field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getApiMcyclesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(19));
};


/**
 * Sets the value of the api_mcycles field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setApiMcycles = function(value) {
  this.set$Value(19, value);
};


/**
 * @return {boolean} Whether the api_mcycles field has a value.
 */
apphosting.RequestLog.prototype.hasApiMcycles = function() {
  return this.has$Value(19);
};


/**
 * @return {number} The number of values in the api_mcycles field.
 */
apphosting.RequestLog.prototype.apiMcyclesCount = function() {
  return this.count$Values(19);
};


/**
 * Clears the values in the api_mcycles field.
 */
apphosting.RequestLog.prototype.clearApiMcycles = function() {
  this.clear$Field(19);
};


/**
 * Gets the value of the host field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getHost = function() {
  return /** @type {?string} */ (this.get$Value(20));
};


/**
 * Gets the value of the host field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getHostOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(20));
};


/**
 * Sets the value of the host field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setHost = function(value) {
  this.set$Value(20, value);
};


/**
 * @return {boolean} Whether the host field has a value.
 */
apphosting.RequestLog.prototype.hasHost = function() {
  return this.has$Value(20);
};


/**
 * @return {number} The number of values in the host field.
 */
apphosting.RequestLog.prototype.hostCount = function() {
  return this.count$Values(20);
};


/**
 * Clears the values in the host field.
 */
apphosting.RequestLog.prototype.clearHost = function() {
  this.clear$Field(20);
};


/**
 * Gets the value of the cost field.
 * @return {?number} The value.
 */
apphosting.RequestLog.prototype.getCost = function() {
  return /** @type {?number} */ (this.get$Value(21));
};


/**
 * Gets the value of the cost field or the default value if not set.
 * @return {number} The value.
 */
apphosting.RequestLog.prototype.getCostOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(21));
};


/**
 * Sets the value of the cost field.
 * @param {number} value The value.
 */
apphosting.RequestLog.prototype.setCost = function(value) {
  this.set$Value(21, value);
};


/**
 * @return {boolean} Whether the cost field has a value.
 */
apphosting.RequestLog.prototype.hasCost = function() {
  return this.has$Value(21);
};


/**
 * @return {number} The number of values in the cost field.
 */
apphosting.RequestLog.prototype.costCount = function() {
  return this.count$Values(21);
};


/**
 * Clears the values in the cost field.
 */
apphosting.RequestLog.prototype.clearCost = function() {
  this.clear$Field(21);
};


/**
 * Gets the value of the task_queue_name field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getTaskQueueName = function() {
  return /** @type {?string} */ (this.get$Value(22));
};


/**
 * Gets the value of the task_queue_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getTaskQueueNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(22));
};


/**
 * Sets the value of the task_queue_name field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setTaskQueueName = function(value) {
  this.set$Value(22, value);
};


/**
 * @return {boolean} Whether the task_queue_name field has a value.
 */
apphosting.RequestLog.prototype.hasTaskQueueName = function() {
  return this.has$Value(22);
};


/**
 * @return {number} The number of values in the task_queue_name field.
 */
apphosting.RequestLog.prototype.taskQueueNameCount = function() {
  return this.count$Values(22);
};


/**
 * Clears the values in the task_queue_name field.
 */
apphosting.RequestLog.prototype.clearTaskQueueName = function() {
  this.clear$Field(22);
};


/**
 * Gets the value of the task_name field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getTaskName = function() {
  return /** @type {?string} */ (this.get$Value(23));
};


/**
 * Gets the value of the task_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getTaskNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(23));
};


/**
 * Sets the value of the task_name field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setTaskName = function(value) {
  this.set$Value(23, value);
};


/**
 * @return {boolean} Whether the task_name field has a value.
 */
apphosting.RequestLog.prototype.hasTaskName = function() {
  return this.has$Value(23);
};


/**
 * @return {number} The number of values in the task_name field.
 */
apphosting.RequestLog.prototype.taskNameCount = function() {
  return this.count$Values(23);
};


/**
 * Clears the values in the task_name field.
 */
apphosting.RequestLog.prototype.clearTaskName = function() {
  this.clear$Field(23);
};


/**
 * Gets the value of the was_loading_request field.
 * @return {?boolean} The value.
 */
apphosting.RequestLog.prototype.getWasLoadingRequest = function() {
  return /** @type {?boolean} */ (this.get$Value(24));
};


/**
 * Gets the value of the was_loading_request field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.RequestLog.prototype.getWasLoadingRequestOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(24));
};


/**
 * Sets the value of the was_loading_request field.
 * @param {boolean} value The value.
 */
apphosting.RequestLog.prototype.setWasLoadingRequest = function(value) {
  this.set$Value(24, value);
};


/**
 * @return {boolean} Whether the was_loading_request field has a value.
 */
apphosting.RequestLog.prototype.hasWasLoadingRequest = function() {
  return this.has$Value(24);
};


/**
 * @return {number} The number of values in the was_loading_request field.
 */
apphosting.RequestLog.prototype.wasLoadingRequestCount = function() {
  return this.count$Values(24);
};


/**
 * Clears the values in the was_loading_request field.
 */
apphosting.RequestLog.prototype.clearWasLoadingRequest = function() {
  this.clear$Field(24);
};


/**
 * Gets the value of the pending_time field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getPendingTime = function() {
  return /** @type {?string} */ (this.get$Value(25));
};


/**
 * Gets the value of the pending_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getPendingTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(25));
};


/**
 * Sets the value of the pending_time field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setPendingTime = function(value) {
  this.set$Value(25, value);
};


/**
 * @return {boolean} Whether the pending_time field has a value.
 */
apphosting.RequestLog.prototype.hasPendingTime = function() {
  return this.has$Value(25);
};


/**
 * @return {number} The number of values in the pending_time field.
 */
apphosting.RequestLog.prototype.pendingTimeCount = function() {
  return this.count$Values(25);
};


/**
 * Clears the values in the pending_time field.
 */
apphosting.RequestLog.prototype.clearPendingTime = function() {
  this.clear$Field(25);
};


/**
 * Gets the value of the replica_index field.
 * @return {?number} The value.
 */
apphosting.RequestLog.prototype.getReplicaIndex = function() {
  return /** @type {?number} */ (this.get$Value(26));
};


/**
 * Gets the value of the replica_index field or the default value if not set.
 * @return {number} The value.
 */
apphosting.RequestLog.prototype.getReplicaIndexOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(26));
};


/**
 * Sets the value of the replica_index field.
 * @param {number} value The value.
 */
apphosting.RequestLog.prototype.setReplicaIndex = function(value) {
  this.set$Value(26, value);
};


/**
 * @return {boolean} Whether the replica_index field has a value.
 */
apphosting.RequestLog.prototype.hasReplicaIndex = function() {
  return this.has$Value(26);
};


/**
 * @return {number} The number of values in the replica_index field.
 */
apphosting.RequestLog.prototype.replicaIndexCount = function() {
  return this.count$Values(26);
};


/**
 * Clears the values in the replica_index field.
 */
apphosting.RequestLog.prototype.clearReplicaIndex = function() {
  this.clear$Field(26);
};


/**
 * Gets the value of the finished field.
 * @return {?boolean} The value.
 */
apphosting.RequestLog.prototype.getFinished = function() {
  return /** @type {?boolean} */ (this.get$Value(27));
};


/**
 * Gets the value of the finished field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.RequestLog.prototype.getFinishedOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(27));
};


/**
 * Sets the value of the finished field.
 * @param {boolean} value The value.
 */
apphosting.RequestLog.prototype.setFinished = function(value) {
  this.set$Value(27, value);
};


/**
 * @return {boolean} Whether the finished field has a value.
 */
apphosting.RequestLog.prototype.hasFinished = function() {
  return this.has$Value(27);
};


/**
 * @return {number} The number of values in the finished field.
 */
apphosting.RequestLog.prototype.finishedCount = function() {
  return this.count$Values(27);
};


/**
 * Clears the values in the finished field.
 */
apphosting.RequestLog.prototype.clearFinished = function() {
  this.clear$Field(27);
};


/**
 * Gets the value of the clone_key field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getCloneKey = function() {
  return /** @type {?string} */ (this.get$Value(28));
};


/**
 * Gets the value of the clone_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getCloneKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(28));
};


/**
 * Sets the value of the clone_key field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setCloneKey = function(value) {
  this.set$Value(28, value);
};


/**
 * @return {boolean} Whether the clone_key field has a value.
 */
apphosting.RequestLog.prototype.hasCloneKey = function() {
  return this.has$Value(28);
};


/**
 * @return {number} The number of values in the clone_key field.
 */
apphosting.RequestLog.prototype.cloneKeyCount = function() {
  return this.count$Values(28);
};


/**
 * Clears the values in the clone_key field.
 */
apphosting.RequestLog.prototype.clearCloneKey = function() {
  this.clear$Field(28);
};


/**
 * Gets the value of the line field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.LogLine} The value.
 */
apphosting.RequestLog.prototype.getLine = function(index) {
  return /** @type {apphosting.LogLine} */ (this.get$Value(29, index));
};


/**
 * Gets the value of the line field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.LogLine} The value.
 */
apphosting.RequestLog.prototype.getLineOrDefault = function(index) {
  return /** @type {!apphosting.LogLine} */ (this.get$ValueOrDefault(29, index));
};


/**
 * Adds a value to the line field.
 * @param {!apphosting.LogLine} value The value to add.
 */
apphosting.RequestLog.prototype.addLine = function(value) {
  this.add$Value(29, value);
};


/**
 * Returns the array of values in the line field.
 * @return {!Array.<!apphosting.LogLine>} The values in the field.
 */
apphosting.RequestLog.prototype.lineArray = function() {
  return /** @type {!Array.<!apphosting.LogLine>} */ (this.array$Values(29));
};


/**
 * @return {boolean} Whether the line field has a value.
 */
apphosting.RequestLog.prototype.hasLine = function() {
  return this.has$Value(29);
};


/**
 * @return {number} The number of values in the line field.
 */
apphosting.RequestLog.prototype.lineCount = function() {
  return this.count$Values(29);
};


/**
 * Clears the values in the line field.
 */
apphosting.RequestLog.prototype.clearLine = function() {
  this.clear$Field(29);
};


/**
 * Gets the value of the lines_incomplete field.
 * @return {?boolean} The value.
 */
apphosting.RequestLog.prototype.getLinesIncomplete = function() {
  return /** @type {?boolean} */ (this.get$Value(36));
};


/**
 * Gets the value of the lines_incomplete field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.RequestLog.prototype.getLinesIncompleteOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(36));
};


/**
 * Sets the value of the lines_incomplete field.
 * @param {boolean} value The value.
 */
apphosting.RequestLog.prototype.setLinesIncomplete = function(value) {
  this.set$Value(36, value);
};


/**
 * @return {boolean} Whether the lines_incomplete field has a value.
 */
apphosting.RequestLog.prototype.hasLinesIncomplete = function() {
  return this.has$Value(36);
};


/**
 * @return {number} The number of values in the lines_incomplete field.
 */
apphosting.RequestLog.prototype.linesIncompleteCount = function() {
  return this.count$Values(36);
};


/**
 * Clears the values in the lines_incomplete field.
 */
apphosting.RequestLog.prototype.clearLinesIncomplete = function() {
  this.clear$Field(36);
};


/**
 * Gets the value of the app_engine_release field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getAppEngineRelease = function() {
  return /** @type {?string} */ (this.get$Value(38));
};


/**
 * Gets the value of the app_engine_release field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getAppEngineReleaseOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(38));
};


/**
 * Sets the value of the app_engine_release field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setAppEngineRelease = function(value) {
  this.set$Value(38, value);
};


/**
 * @return {boolean} Whether the app_engine_release field has a value.
 */
apphosting.RequestLog.prototype.hasAppEngineRelease = function() {
  return this.has$Value(38);
};


/**
 * @return {number} The number of values in the app_engine_release field.
 */
apphosting.RequestLog.prototype.appEngineReleaseCount = function() {
  return this.count$Values(38);
};


/**
 * Clears the values in the app_engine_release field.
 */
apphosting.RequestLog.prototype.clearAppEngineRelease = function() {
  this.clear$Field(38);
};


/**
 * Gets the value of the exit_reason field.
 * @return {?number} The value.
 */
apphosting.RequestLog.prototype.getExitReason = function() {
  return /** @type {?number} */ (this.get$Value(30));
};


/**
 * Gets the value of the exit_reason field or the default value if not set.
 * @return {number} The value.
 */
apphosting.RequestLog.prototype.getExitReasonOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(30));
};


/**
 * Sets the value of the exit_reason field.
 * @param {number} value The value.
 */
apphosting.RequestLog.prototype.setExitReason = function(value) {
  this.set$Value(30, value);
};


/**
 * @return {boolean} Whether the exit_reason field has a value.
 */
apphosting.RequestLog.prototype.hasExitReason = function() {
  return this.has$Value(30);
};


/**
 * @return {number} The number of values in the exit_reason field.
 */
apphosting.RequestLog.prototype.exitReasonCount = function() {
  return this.count$Values(30);
};


/**
 * Clears the values in the exit_reason field.
 */
apphosting.RequestLog.prototype.clearExitReason = function() {
  this.clear$Field(30);
};


/**
 * Gets the value of the was_throttled_for_time field.
 * @return {?boolean} The value.
 */
apphosting.RequestLog.prototype.getWasThrottledForTime = function() {
  return /** @type {?boolean} */ (this.get$Value(31));
};


/**
 * Gets the value of the was_throttled_for_time field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.RequestLog.prototype.getWasThrottledForTimeOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(31));
};


/**
 * Sets the value of the was_throttled_for_time field.
 * @param {boolean} value The value.
 */
apphosting.RequestLog.prototype.setWasThrottledForTime = function(value) {
  this.set$Value(31, value);
};


/**
 * @return {boolean} Whether the was_throttled_for_time field has a value.
 */
apphosting.RequestLog.prototype.hasWasThrottledForTime = function() {
  return this.has$Value(31);
};


/**
 * @return {number} The number of values in the was_throttled_for_time field.
 */
apphosting.RequestLog.prototype.wasThrottledForTimeCount = function() {
  return this.count$Values(31);
};


/**
 * Clears the values in the was_throttled_for_time field.
 */
apphosting.RequestLog.prototype.clearWasThrottledForTime = function() {
  this.clear$Field(31);
};


/**
 * Gets the value of the was_throttled_for_requests field.
 * @return {?boolean} The value.
 */
apphosting.RequestLog.prototype.getWasThrottledForRequests = function() {
  return /** @type {?boolean} */ (this.get$Value(32));
};


/**
 * Gets the value of the was_throttled_for_requests field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.RequestLog.prototype.getWasThrottledForRequestsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(32));
};


/**
 * Sets the value of the was_throttled_for_requests field.
 * @param {boolean} value The value.
 */
apphosting.RequestLog.prototype.setWasThrottledForRequests = function(value) {
  this.set$Value(32, value);
};


/**
 * @return {boolean} Whether the was_throttled_for_requests field has a value.
 */
apphosting.RequestLog.prototype.hasWasThrottledForRequests = function() {
  return this.has$Value(32);
};


/**
 * @return {number} The number of values in the was_throttled_for_requests field.
 */
apphosting.RequestLog.prototype.wasThrottledForRequestsCount = function() {
  return this.count$Values(32);
};


/**
 * Clears the values in the was_throttled_for_requests field.
 */
apphosting.RequestLog.prototype.clearWasThrottledForRequests = function() {
  this.clear$Field(32);
};


/**
 * Gets the value of the throttled_time field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getThrottledTime = function() {
  return /** @type {?string} */ (this.get$Value(33));
};


/**
 * Gets the value of the throttled_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getThrottledTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(33));
};


/**
 * Sets the value of the throttled_time field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setThrottledTime = function(value) {
  this.set$Value(33, value);
};


/**
 * @return {boolean} Whether the throttled_time field has a value.
 */
apphosting.RequestLog.prototype.hasThrottledTime = function() {
  return this.has$Value(33);
};


/**
 * @return {number} The number of values in the throttled_time field.
 */
apphosting.RequestLog.prototype.throttledTimeCount = function() {
  return this.count$Values(33);
};


/**
 * Clears the values in the throttled_time field.
 */
apphosting.RequestLog.prototype.clearThrottledTime = function() {
  this.clear$Field(33);
};


/**
 * Gets the value of the server_name field.
 * @return {?string} The value.
 */
apphosting.RequestLog.prototype.getServerName = function() {
  return /** @type {?string} */ (this.get$Value(34));
};


/**
 * Gets the value of the server_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.RequestLog.prototype.getServerNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(34));
};


/**
 * Sets the value of the server_name field.
 * @param {string} value The value.
 */
apphosting.RequestLog.prototype.setServerName = function(value) {
  this.set$Value(34, value);
};


/**
 * @return {boolean} Whether the server_name field has a value.
 */
apphosting.RequestLog.prototype.hasServerName = function() {
  return this.has$Value(34);
};


/**
 * @return {number} The number of values in the server_name field.
 */
apphosting.RequestLog.prototype.serverNameCount = function() {
  return this.count$Values(34);
};


/**
 * Clears the values in the server_name field.
 */
apphosting.RequestLog.prototype.clearServerName = function() {
  this.clear$Field(34);
};



/**
 * Message LogModuleVersion.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogModuleVersion = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogModuleVersion, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogModuleVersion} The cloned message.
 * @override
 */
apphosting.LogModuleVersion.prototype.clone;


/**
 * Gets the value of the module_id field.
 * @return {?string} The value.
 */
apphosting.LogModuleVersion.prototype.getModuleId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogModuleVersion.prototype.getModuleIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module_id field.
 * @param {string} value The value.
 */
apphosting.LogModuleVersion.prototype.setModuleId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module_id field has a value.
 */
apphosting.LogModuleVersion.prototype.hasModuleId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module_id field.
 */
apphosting.LogModuleVersion.prototype.moduleIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module_id field.
 */
apphosting.LogModuleVersion.prototype.clearModuleId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version_id field.
 * @return {?string} The value.
 */
apphosting.LogModuleVersion.prototype.getVersionId = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogModuleVersion.prototype.getVersionIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version_id field.
 * @param {string} value The value.
 */
apphosting.LogModuleVersion.prototype.setVersionId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version_id field has a value.
 */
apphosting.LogModuleVersion.prototype.hasVersionId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version_id field.
 */
apphosting.LogModuleVersion.prototype.versionIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version_id field.
 */
apphosting.LogModuleVersion.prototype.clearVersionId = function() {
  this.clear$Field(2);
};



/**
 * Message LogReadRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogReadRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogReadRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogReadRequest} The cloned message.
 * @override
 */
apphosting.LogReadRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.LogReadRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.LogReadRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.LogReadRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version_id field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getVersionId = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the version_id field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getVersionIdOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the version_id field.
 * @param {string} value The value to add.
 */
apphosting.LogReadRequest.prototype.addVersionId = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the version_id field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.LogReadRequest.prototype.versionIdArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the version_id field has a value.
 */
apphosting.LogReadRequest.prototype.hasVersionId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version_id field.
 */
apphosting.LogReadRequest.prototype.versionIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version_id field.
 */
apphosting.LogReadRequest.prototype.clearVersionId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the module_version field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.LogModuleVersion} The value.
 */
apphosting.LogReadRequest.prototype.getModuleVersion = function(index) {
  return /** @type {apphosting.LogModuleVersion} */ (this.get$Value(19, index));
};


/**
 * Gets the value of the module_version field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.LogModuleVersion} The value.
 */
apphosting.LogReadRequest.prototype.getModuleVersionOrDefault = function(index) {
  return /** @type {!apphosting.LogModuleVersion} */ (this.get$ValueOrDefault(19, index));
};


/**
 * Adds a value to the module_version field.
 * @param {!apphosting.LogModuleVersion} value The value to add.
 */
apphosting.LogReadRequest.prototype.addModuleVersion = function(value) {
  this.add$Value(19, value);
};


/**
 * Returns the array of values in the module_version field.
 * @return {!Array.<!apphosting.LogModuleVersion>} The values in the field.
 */
apphosting.LogReadRequest.prototype.moduleVersionArray = function() {
  return /** @type {!Array.<!apphosting.LogModuleVersion>} */ (this.array$Values(19));
};


/**
 * @return {boolean} Whether the module_version field has a value.
 */
apphosting.LogReadRequest.prototype.hasModuleVersion = function() {
  return this.has$Value(19);
};


/**
 * @return {number} The number of values in the module_version field.
 */
apphosting.LogReadRequest.prototype.moduleVersionCount = function() {
  return this.count$Values(19);
};


/**
 * Clears the values in the module_version field.
 */
apphosting.LogReadRequest.prototype.clearModuleVersion = function() {
  this.clear$Field(19);
};


/**
 * Gets the value of the start_time field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getStartTime = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the start_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getStartTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the start_time field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setStartTime = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the start_time field has a value.
 */
apphosting.LogReadRequest.prototype.hasStartTime = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the start_time field.
 */
apphosting.LogReadRequest.prototype.startTimeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the start_time field.
 */
apphosting.LogReadRequest.prototype.clearStartTime = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the end_time field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getEndTime = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the end_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getEndTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the end_time field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setEndTime = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the end_time field has a value.
 */
apphosting.LogReadRequest.prototype.hasEndTime = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the end_time field.
 */
apphosting.LogReadRequest.prototype.endTimeCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the end_time field.
 */
apphosting.LogReadRequest.prototype.clearEndTime = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the offset field.
 * @return {apphosting.LogOffset} The value.
 */
apphosting.LogReadRequest.prototype.getOffset = function() {
  return /** @type {apphosting.LogOffset} */ (this.get$Value(5));
};


/**
 * Gets the value of the offset field or the default value if not set.
 * @return {!apphosting.LogOffset} The value.
 */
apphosting.LogReadRequest.prototype.getOffsetOrDefault = function() {
  return /** @type {!apphosting.LogOffset} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the offset field.
 * @param {!apphosting.LogOffset} value The value.
 */
apphosting.LogReadRequest.prototype.setOffset = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the offset field has a value.
 */
apphosting.LogReadRequest.prototype.hasOffset = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the offset field.
 */
apphosting.LogReadRequest.prototype.offsetCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the offset field.
 */
apphosting.LogReadRequest.prototype.clearOffset = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the request_id field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getRequestId = function(index) {
  return /** @type {?string} */ (this.get$Value(6, index));
};


/**
 * Gets the value of the request_id field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getRequestIdOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(6, index));
};


/**
 * Adds a value to the request_id field.
 * @param {string} value The value to add.
 */
apphosting.LogReadRequest.prototype.addRequestId = function(value) {
  this.add$Value(6, value);
};


/**
 * Returns the array of values in the request_id field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.LogReadRequest.prototype.requestIdArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(6));
};


/**
 * @return {boolean} Whether the request_id field has a value.
 */
apphosting.LogReadRequest.prototype.hasRequestId = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the request_id field.
 */
apphosting.LogReadRequest.prototype.requestIdCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the request_id field.
 */
apphosting.LogReadRequest.prototype.clearRequestId = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the minimum_log_level field.
 * @return {?number} The value.
 */
apphosting.LogReadRequest.prototype.getMinimumLogLevel = function() {
  return /** @type {?number} */ (this.get$Value(7));
};


/**
 * Gets the value of the minimum_log_level field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogReadRequest.prototype.getMinimumLogLevelOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the minimum_log_level field.
 * @param {number} value The value.
 */
apphosting.LogReadRequest.prototype.setMinimumLogLevel = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the minimum_log_level field has a value.
 */
apphosting.LogReadRequest.prototype.hasMinimumLogLevel = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the minimum_log_level field.
 */
apphosting.LogReadRequest.prototype.minimumLogLevelCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the minimum_log_level field.
 */
apphosting.LogReadRequest.prototype.clearMinimumLogLevel = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the include_incomplete field.
 * @return {?boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeIncomplete = function() {
  return /** @type {?boolean} */ (this.get$Value(8));
};


/**
 * Gets the value of the include_incomplete field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeIncompleteOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the include_incomplete field.
 * @param {boolean} value The value.
 */
apphosting.LogReadRequest.prototype.setIncludeIncomplete = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the include_incomplete field has a value.
 */
apphosting.LogReadRequest.prototype.hasIncludeIncomplete = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the include_incomplete field.
 */
apphosting.LogReadRequest.prototype.includeIncompleteCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the include_incomplete field.
 */
apphosting.LogReadRequest.prototype.clearIncludeIncomplete = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the count field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getCount = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the count field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getCountOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the count field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setCount = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the count field has a value.
 */
apphosting.LogReadRequest.prototype.hasCount = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the count field.
 */
apphosting.LogReadRequest.prototype.countCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the count field.
 */
apphosting.LogReadRequest.prototype.clearCount = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the combined_log_regex field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getCombinedLogRegex = function() {
  return /** @type {?string} */ (this.get$Value(14));
};


/**
 * Gets the value of the combined_log_regex field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getCombinedLogRegexOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(14));
};


/**
 * Sets the value of the combined_log_regex field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setCombinedLogRegex = function(value) {
  this.set$Value(14, value);
};


/**
 * @return {boolean} Whether the combined_log_regex field has a value.
 */
apphosting.LogReadRequest.prototype.hasCombinedLogRegex = function() {
  return this.has$Value(14);
};


/**
 * @return {number} The number of values in the combined_log_regex field.
 */
apphosting.LogReadRequest.prototype.combinedLogRegexCount = function() {
  return this.count$Values(14);
};


/**
 * Clears the values in the combined_log_regex field.
 */
apphosting.LogReadRequest.prototype.clearCombinedLogRegex = function() {
  this.clear$Field(14);
};


/**
 * Gets the value of the host_regex field.
 * @return {?string} The value.
 */
apphosting.LogReadRequest.prototype.getHostRegex = function() {
  return /** @type {?string} */ (this.get$Value(15));
};


/**
 * Gets the value of the host_regex field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadRequest.prototype.getHostRegexOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(15));
};


/**
 * Sets the value of the host_regex field.
 * @param {string} value The value.
 */
apphosting.LogReadRequest.prototype.setHostRegex = function(value) {
  this.set$Value(15, value);
};


/**
 * @return {boolean} Whether the host_regex field has a value.
 */
apphosting.LogReadRequest.prototype.hasHostRegex = function() {
  return this.has$Value(15);
};


/**
 * @return {number} The number of values in the host_regex field.
 */
apphosting.LogReadRequest.prototype.hostRegexCount = function() {
  return this.count$Values(15);
};


/**
 * Clears the values in the host_regex field.
 */
apphosting.LogReadRequest.prototype.clearHostRegex = function() {
  this.clear$Field(15);
};


/**
 * Gets the value of the replica_index field.
 * @return {?number} The value.
 */
apphosting.LogReadRequest.prototype.getReplicaIndex = function() {
  return /** @type {?number} */ (this.get$Value(16));
};


/**
 * Gets the value of the replica_index field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogReadRequest.prototype.getReplicaIndexOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(16));
};


/**
 * Sets the value of the replica_index field.
 * @param {number} value The value.
 */
apphosting.LogReadRequest.prototype.setReplicaIndex = function(value) {
  this.set$Value(16, value);
};


/**
 * @return {boolean} Whether the replica_index field has a value.
 */
apphosting.LogReadRequest.prototype.hasReplicaIndex = function() {
  return this.has$Value(16);
};


/**
 * @return {number} The number of values in the replica_index field.
 */
apphosting.LogReadRequest.prototype.replicaIndexCount = function() {
  return this.count$Values(16);
};


/**
 * Clears the values in the replica_index field.
 */
apphosting.LogReadRequest.prototype.clearReplicaIndex = function() {
  this.clear$Field(16);
};


/**
 * Gets the value of the include_app_logs field.
 * @return {?boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeAppLogs = function() {
  return /** @type {?boolean} */ (this.get$Value(10));
};


/**
 * Gets the value of the include_app_logs field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeAppLogsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the include_app_logs field.
 * @param {boolean} value The value.
 */
apphosting.LogReadRequest.prototype.setIncludeAppLogs = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the include_app_logs field has a value.
 */
apphosting.LogReadRequest.prototype.hasIncludeAppLogs = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the include_app_logs field.
 */
apphosting.LogReadRequest.prototype.includeAppLogsCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the include_app_logs field.
 */
apphosting.LogReadRequest.prototype.clearIncludeAppLogs = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the app_logs_per_request field.
 * @return {?number} The value.
 */
apphosting.LogReadRequest.prototype.getAppLogsPerRequest = function() {
  return /** @type {?number} */ (this.get$Value(17));
};


/**
 * Gets the value of the app_logs_per_request field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogReadRequest.prototype.getAppLogsPerRequestOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(17));
};


/**
 * Sets the value of the app_logs_per_request field.
 * @param {number} value The value.
 */
apphosting.LogReadRequest.prototype.setAppLogsPerRequest = function(value) {
  this.set$Value(17, value);
};


/**
 * @return {boolean} Whether the app_logs_per_request field has a value.
 */
apphosting.LogReadRequest.prototype.hasAppLogsPerRequest = function() {
  return this.has$Value(17);
};


/**
 * @return {number} The number of values in the app_logs_per_request field.
 */
apphosting.LogReadRequest.prototype.appLogsPerRequestCount = function() {
  return this.count$Values(17);
};


/**
 * Clears the values in the app_logs_per_request field.
 */
apphosting.LogReadRequest.prototype.clearAppLogsPerRequest = function() {
  this.clear$Field(17);
};


/**
 * Gets the value of the include_host field.
 * @return {?boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeHost = function() {
  return /** @type {?boolean} */ (this.get$Value(11));
};


/**
 * Gets the value of the include_host field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeHostOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the include_host field.
 * @param {boolean} value The value.
 */
apphosting.LogReadRequest.prototype.setIncludeHost = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the include_host field has a value.
 */
apphosting.LogReadRequest.prototype.hasIncludeHost = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the include_host field.
 */
apphosting.LogReadRequest.prototype.includeHostCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the include_host field.
 */
apphosting.LogReadRequest.prototype.clearIncludeHost = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the include_all field.
 * @return {?boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeAll = function() {
  return /** @type {?boolean} */ (this.get$Value(12));
};


/**
 * Gets the value of the include_all field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogReadRequest.prototype.getIncludeAllOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the include_all field.
 * @param {boolean} value The value.
 */
apphosting.LogReadRequest.prototype.setIncludeAll = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the include_all field has a value.
 */
apphosting.LogReadRequest.prototype.hasIncludeAll = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the include_all field.
 */
apphosting.LogReadRequest.prototype.includeAllCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the include_all field.
 */
apphosting.LogReadRequest.prototype.clearIncludeAll = function() {
  this.clear$Field(12);
};


/**
 * Gets the value of the cache_iterator field.
 * @return {?boolean} The value.
 */
apphosting.LogReadRequest.prototype.getCacheIterator = function() {
  return /** @type {?boolean} */ (this.get$Value(13));
};


/**
 * Gets the value of the cache_iterator field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogReadRequest.prototype.getCacheIteratorOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(13));
};


/**
 * Sets the value of the cache_iterator field.
 * @param {boolean} value The value.
 */
apphosting.LogReadRequest.prototype.setCacheIterator = function(value) {
  this.set$Value(13, value);
};


/**
 * @return {boolean} Whether the cache_iterator field has a value.
 */
apphosting.LogReadRequest.prototype.hasCacheIterator = function() {
  return this.has$Value(13);
};


/**
 * @return {number} The number of values in the cache_iterator field.
 */
apphosting.LogReadRequest.prototype.cacheIteratorCount = function() {
  return this.count$Values(13);
};


/**
 * Clears the values in the cache_iterator field.
 */
apphosting.LogReadRequest.prototype.clearCacheIterator = function() {
  this.clear$Field(13);
};


/**
 * Gets the value of the num_shards field.
 * @return {?number} The value.
 */
apphosting.LogReadRequest.prototype.getNumShards = function() {
  return /** @type {?number} */ (this.get$Value(18));
};


/**
 * Gets the value of the num_shards field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogReadRequest.prototype.getNumShardsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(18));
};


/**
 * Sets the value of the num_shards field.
 * @param {number} value The value.
 */
apphosting.LogReadRequest.prototype.setNumShards = function(value) {
  this.set$Value(18, value);
};


/**
 * @return {boolean} Whether the num_shards field has a value.
 */
apphosting.LogReadRequest.prototype.hasNumShards = function() {
  return this.has$Value(18);
};


/**
 * @return {number} The number of values in the num_shards field.
 */
apphosting.LogReadRequest.prototype.numShardsCount = function() {
  return this.count$Values(18);
};


/**
 * Clears the values in the num_shards field.
 */
apphosting.LogReadRequest.prototype.clearNumShards = function() {
  this.clear$Field(18);
};



/**
 * Message LogReadResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogReadResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogReadResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogReadResponse} The cloned message.
 * @override
 */
apphosting.LogReadResponse.prototype.clone;


/**
 * Gets the value of the log field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.RequestLog} The value.
 */
apphosting.LogReadResponse.prototype.getLog = function(index) {
  return /** @type {apphosting.RequestLog} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the log field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.RequestLog} The value.
 */
apphosting.LogReadResponse.prototype.getLogOrDefault = function(index) {
  return /** @type {!apphosting.RequestLog} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the log field.
 * @param {!apphosting.RequestLog} value The value to add.
 */
apphosting.LogReadResponse.prototype.addLog = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the log field.
 * @return {!Array.<!apphosting.RequestLog>} The values in the field.
 */
apphosting.LogReadResponse.prototype.logArray = function() {
  return /** @type {!Array.<!apphosting.RequestLog>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the log field has a value.
 */
apphosting.LogReadResponse.prototype.hasLog = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the log field.
 */
apphosting.LogReadResponse.prototype.logCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the log field.
 */
apphosting.LogReadResponse.prototype.clearLog = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the offset field.
 * @return {apphosting.LogOffset} The value.
 */
apphosting.LogReadResponse.prototype.getOffset = function() {
  return /** @type {apphosting.LogOffset} */ (this.get$Value(2));
};


/**
 * Gets the value of the offset field or the default value if not set.
 * @return {!apphosting.LogOffset} The value.
 */
apphosting.LogReadResponse.prototype.getOffsetOrDefault = function() {
  return /** @type {!apphosting.LogOffset} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the offset field.
 * @param {!apphosting.LogOffset} value The value.
 */
apphosting.LogReadResponse.prototype.setOffset = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the offset field has a value.
 */
apphosting.LogReadResponse.prototype.hasOffset = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the offset field.
 */
apphosting.LogReadResponse.prototype.offsetCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the offset field.
 */
apphosting.LogReadResponse.prototype.clearOffset = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the last_end_time field.
 * @return {?string} The value.
 */
apphosting.LogReadResponse.prototype.getLastEndTime = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the last_end_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogReadResponse.prototype.getLastEndTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the last_end_time field.
 * @param {string} value The value.
 */
apphosting.LogReadResponse.prototype.setLastEndTime = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the last_end_time field has a value.
 */
apphosting.LogReadResponse.prototype.hasLastEndTime = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the last_end_time field.
 */
apphosting.LogReadResponse.prototype.lastEndTimeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the last_end_time field.
 */
apphosting.LogReadResponse.prototype.clearLastEndTime = function() {
  this.clear$Field(3);
};



/**
 * Message LogUsageRecord.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogUsageRecord = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogUsageRecord, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogUsageRecord} The cloned message.
 * @override
 */
apphosting.LogUsageRecord.prototype.clone;


/**
 * Gets the value of the version_id field.
 * @return {?string} The value.
 */
apphosting.LogUsageRecord.prototype.getVersionId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the version_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogUsageRecord.prototype.getVersionIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the version_id field.
 * @param {string} value The value.
 */
apphosting.LogUsageRecord.prototype.setVersionId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the version_id field has a value.
 */
apphosting.LogUsageRecord.prototype.hasVersionId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the version_id field.
 */
apphosting.LogUsageRecord.prototype.versionIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the version_id field.
 */
apphosting.LogUsageRecord.prototype.clearVersionId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the start_time field.
 * @return {?number} The value.
 */
apphosting.LogUsageRecord.prototype.getStartTime = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the start_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRecord.prototype.getStartTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the start_time field.
 * @param {number} value The value.
 */
apphosting.LogUsageRecord.prototype.setStartTime = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the start_time field has a value.
 */
apphosting.LogUsageRecord.prototype.hasStartTime = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the start_time field.
 */
apphosting.LogUsageRecord.prototype.startTimeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the start_time field.
 */
apphosting.LogUsageRecord.prototype.clearStartTime = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the end_time field.
 * @return {?number} The value.
 */
apphosting.LogUsageRecord.prototype.getEndTime = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the end_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRecord.prototype.getEndTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the end_time field.
 * @param {number} value The value.
 */
apphosting.LogUsageRecord.prototype.setEndTime = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the end_time field has a value.
 */
apphosting.LogUsageRecord.prototype.hasEndTime = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the end_time field.
 */
apphosting.LogUsageRecord.prototype.endTimeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the end_time field.
 */
apphosting.LogUsageRecord.prototype.clearEndTime = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the count field.
 * @return {?string} The value.
 */
apphosting.LogUsageRecord.prototype.getCount = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the count field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogUsageRecord.prototype.getCountOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the count field.
 * @param {string} value The value.
 */
apphosting.LogUsageRecord.prototype.setCount = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the count field has a value.
 */
apphosting.LogUsageRecord.prototype.hasCount = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the count field.
 */
apphosting.LogUsageRecord.prototype.countCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the count field.
 */
apphosting.LogUsageRecord.prototype.clearCount = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the total_size field.
 * @return {?string} The value.
 */
apphosting.LogUsageRecord.prototype.getTotalSize = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the total_size field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogUsageRecord.prototype.getTotalSizeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the total_size field.
 * @param {string} value The value.
 */
apphosting.LogUsageRecord.prototype.setTotalSize = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the total_size field has a value.
 */
apphosting.LogUsageRecord.prototype.hasTotalSize = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the total_size field.
 */
apphosting.LogUsageRecord.prototype.totalSizeCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the total_size field.
 */
apphosting.LogUsageRecord.prototype.clearTotalSize = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the records field.
 * @return {?number} The value.
 */
apphosting.LogUsageRecord.prototype.getRecords = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the records field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRecord.prototype.getRecordsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the records field.
 * @param {number} value The value.
 */
apphosting.LogUsageRecord.prototype.setRecords = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the records field has a value.
 */
apphosting.LogUsageRecord.prototype.hasRecords = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the records field.
 */
apphosting.LogUsageRecord.prototype.recordsCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the records field.
 */
apphosting.LogUsageRecord.prototype.clearRecords = function() {
  this.clear$Field(6);
};



/**
 * Message LogUsageRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogUsageRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogUsageRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogUsageRequest} The cloned message.
 * @override
 */
apphosting.LogUsageRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.LogUsageRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.LogUsageRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.LogUsageRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.LogUsageRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.LogUsageRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.LogUsageRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version_id field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.LogUsageRequest.prototype.getVersionId = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the version_id field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.LogUsageRequest.prototype.getVersionIdOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the version_id field.
 * @param {string} value The value to add.
 */
apphosting.LogUsageRequest.prototype.addVersionId = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the version_id field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.LogUsageRequest.prototype.versionIdArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the version_id field has a value.
 */
apphosting.LogUsageRequest.prototype.hasVersionId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version_id field.
 */
apphosting.LogUsageRequest.prototype.versionIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version_id field.
 */
apphosting.LogUsageRequest.prototype.clearVersionId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the start_time field.
 * @return {?number} The value.
 */
apphosting.LogUsageRequest.prototype.getStartTime = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the start_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRequest.prototype.getStartTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the start_time field.
 * @param {number} value The value.
 */
apphosting.LogUsageRequest.prototype.setStartTime = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the start_time field has a value.
 */
apphosting.LogUsageRequest.prototype.hasStartTime = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the start_time field.
 */
apphosting.LogUsageRequest.prototype.startTimeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the start_time field.
 */
apphosting.LogUsageRequest.prototype.clearStartTime = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the end_time field.
 * @return {?number} The value.
 */
apphosting.LogUsageRequest.prototype.getEndTime = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the end_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRequest.prototype.getEndTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the end_time field.
 * @param {number} value The value.
 */
apphosting.LogUsageRequest.prototype.setEndTime = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the end_time field has a value.
 */
apphosting.LogUsageRequest.prototype.hasEndTime = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the end_time field.
 */
apphosting.LogUsageRequest.prototype.endTimeCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the end_time field.
 */
apphosting.LogUsageRequest.prototype.clearEndTime = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the resolution_hours field.
 * @return {?number} The value.
 */
apphosting.LogUsageRequest.prototype.getResolutionHours = function() {
  return /** @type {?number} */ (this.get$Value(5));
};


/**
 * Gets the value of the resolution_hours field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRequest.prototype.getResolutionHoursOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the resolution_hours field.
 * @param {number} value The value.
 */
apphosting.LogUsageRequest.prototype.setResolutionHours = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the resolution_hours field has a value.
 */
apphosting.LogUsageRequest.prototype.hasResolutionHours = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the resolution_hours field.
 */
apphosting.LogUsageRequest.prototype.resolutionHoursCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the resolution_hours field.
 */
apphosting.LogUsageRequest.prototype.clearResolutionHours = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the combine_versions field.
 * @return {?boolean} The value.
 */
apphosting.LogUsageRequest.prototype.getCombineVersions = function() {
  return /** @type {?boolean} */ (this.get$Value(6));
};


/**
 * Gets the value of the combine_versions field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogUsageRequest.prototype.getCombineVersionsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the combine_versions field.
 * @param {boolean} value The value.
 */
apphosting.LogUsageRequest.prototype.setCombineVersions = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the combine_versions field has a value.
 */
apphosting.LogUsageRequest.prototype.hasCombineVersions = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the combine_versions field.
 */
apphosting.LogUsageRequest.prototype.combineVersionsCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the combine_versions field.
 */
apphosting.LogUsageRequest.prototype.clearCombineVersions = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the usage_version field.
 * @return {?number} The value.
 */
apphosting.LogUsageRequest.prototype.getUsageVersion = function() {
  return /** @type {?number} */ (this.get$Value(7));
};


/**
 * Gets the value of the usage_version field or the default value if not set.
 * @return {number} The value.
 */
apphosting.LogUsageRequest.prototype.getUsageVersionOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the usage_version field.
 * @param {number} value The value.
 */
apphosting.LogUsageRequest.prototype.setUsageVersion = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the usage_version field has a value.
 */
apphosting.LogUsageRequest.prototype.hasUsageVersion = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the usage_version field.
 */
apphosting.LogUsageRequest.prototype.usageVersionCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the usage_version field.
 */
apphosting.LogUsageRequest.prototype.clearUsageVersion = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the versions_only field.
 * @return {?boolean} The value.
 */
apphosting.LogUsageRequest.prototype.getVersionsOnly = function() {
  return /** @type {?boolean} */ (this.get$Value(8));
};


/**
 * Gets the value of the versions_only field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.LogUsageRequest.prototype.getVersionsOnlyOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the versions_only field.
 * @param {boolean} value The value.
 */
apphosting.LogUsageRequest.prototype.setVersionsOnly = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the versions_only field has a value.
 */
apphosting.LogUsageRequest.prototype.hasVersionsOnly = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the versions_only field.
 */
apphosting.LogUsageRequest.prototype.versionsOnlyCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the versions_only field.
 */
apphosting.LogUsageRequest.prototype.clearVersionsOnly = function() {
  this.clear$Field(8);
};



/**
 * Message LogUsageResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.LogUsageResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.LogUsageResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.LogUsageResponse} The cloned message.
 * @override
 */
apphosting.LogUsageResponse.prototype.clone;


/**
 * Gets the value of the usage field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.LogUsageRecord} The value.
 */
apphosting.LogUsageResponse.prototype.getUsage = function(index) {
  return /** @type {apphosting.LogUsageRecord} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the usage field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.LogUsageRecord} The value.
 */
apphosting.LogUsageResponse.prototype.getUsageOrDefault = function(index) {
  return /** @type {!apphosting.LogUsageRecord} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the usage field.
 * @param {!apphosting.LogUsageRecord} value The value to add.
 */
apphosting.LogUsageResponse.prototype.addUsage = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the usage field.
 * @return {!Array.<!apphosting.LogUsageRecord>} The values in the field.
 */
apphosting.LogUsageResponse.prototype.usageArray = function() {
  return /** @type {!Array.<!apphosting.LogUsageRecord>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the usage field has a value.
 */
apphosting.LogUsageResponse.prototype.hasUsage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the usage field.
 */
apphosting.LogUsageResponse.prototype.usageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the usage field.
 */
apphosting.LogUsageResponse.prototype.clearUsage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the summary field.
 * @return {apphosting.LogUsageRecord} The value.
 */
apphosting.LogUsageResponse.prototype.getSummary = function() {
  return /** @type {apphosting.LogUsageRecord} */ (this.get$Value(2));
};


/**
 * Gets the value of the summary field or the default value if not set.
 * @return {!apphosting.LogUsageRecord} The value.
 */
apphosting.LogUsageResponse.prototype.getSummaryOrDefault = function() {
  return /** @type {!apphosting.LogUsageRecord} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the summary field.
 * @param {!apphosting.LogUsageRecord} value The value.
 */
apphosting.LogUsageResponse.prototype.setSummary = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the summary field has a value.
 */
apphosting.LogUsageResponse.prototype.hasSummary = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the summary field.
 */
apphosting.LogUsageResponse.prototype.summaryCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the summary field.
 */
apphosting.LogUsageResponse.prototype.clearSummary = function() {
  this.clear$Field(2);
};


goog.proto2.Message.set$Metadata(apphosting.LogServiceError, {
  0: {
    name: 'LogServiceError',
    fullName: 'apphosting.LogServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.UserAppLogLine, {
  0: {
    name: 'UserAppLogLine',
    fullName: 'apphosting.UserAppLogLine'
  },
  1: {
    name: 'timestamp_usec',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  2: {
    name: 'level',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'message',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.UserAppLogGroup, {
  0: {
    name: 'UserAppLogGroup',
    fullName: 'apphosting.UserAppLogGroup'
  },
  2: {
    name: 'log_line',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.UserAppLogLine
  }
});


goog.proto2.Message.set$Metadata(apphosting.FlushRequest, {
  0: {
    name: 'FlushRequest',
    fullName: 'apphosting.FlushRequest'
  },
  1: {
    name: 'logs',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.SetStatusRequest, {
  0: {
    name: 'SetStatusRequest',
    fullName: 'apphosting.SetStatusRequest'
  },
  1: {
    name: 'status',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogOffset, {
  0: {
    name: 'LogOffset',
    fullName: 'apphosting.LogOffset'
  },
  1: {
    name: 'request_id',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogLine, {
  0: {
    name: 'LogLine',
    fullName: 'apphosting.LogLine'
  },
  1: {
    name: 'time',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  2: {
    name: 'level',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'log_message',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.RequestLog, {
  0: {
    name: 'RequestLog',
    fullName: 'apphosting.RequestLog'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  37: {
    name: 'module_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: 'default',
    type: String
  },
  2: {
    name: 'version_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'request_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  35: {
    name: 'offset',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogOffset
  },
  4: {
    name: 'ip',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'nickname',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  6: {
    name: 'start_time',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  7: {
    name: 'end_time',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  8: {
    name: 'latency',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  9: {
    name: 'mcycles',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  10: {
    name: 'method',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  11: {
    name: 'resource',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  12: {
    name: 'http_version',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  13: {
    name: 'status',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  14: {
    name: 'response_size',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  15: {
    name: 'referrer',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  16: {
    name: 'user_agent',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  17: {
    name: 'url_map_entry',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  18: {
    name: 'combined',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  19: {
    name: 'api_mcycles',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  20: {
    name: 'host',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  21: {
    name: 'cost',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  22: {
    name: 'task_queue_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  23: {
    name: 'task_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  24: {
    name: 'was_loading_request',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  25: {
    name: 'pending_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  26: {
    name: 'replica_index',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: -1,
    type: Number
  },
  27: {
    name: 'finished',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: true,
    type: Boolean
  },
  28: {
    name: 'clone_key',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  29: {
    name: 'line',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogLine
  },
  36: {
    name: 'lines_incomplete',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  38: {
    name: 'app_engine_release',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  30: {
    name: 'exit_reason',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  31: {
    name: 'was_throttled_for_time',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  32: {
    name: 'was_throttled_for_requests',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  33: {
    name: 'throttled_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  34: {
    name: 'server_name',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogModuleVersion, {
  0: {
    name: 'LogModuleVersion',
    fullName: 'apphosting.LogModuleVersion'
  },
  1: {
    name: 'module_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: 'default',
    type: String
  },
  2: {
    name: 'version_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogReadRequest, {
  0: {
    name: 'LogReadRequest',
    fullName: 'apphosting.LogReadRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version_id',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  19: {
    name: 'module_version',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogModuleVersion
  },
  3: {
    name: 'start_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'end_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'offset',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogOffset
  },
  6: {
    name: 'request_id',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  7: {
    name: 'minimum_log_level',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  8: {
    name: 'include_incomplete',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  9: {
    name: 'count',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  14: {
    name: 'combined_log_regex',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  15: {
    name: 'host_regex',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  16: {
    name: 'replica_index',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  10: {
    name: 'include_app_logs',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  17: {
    name: 'app_logs_per_request',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  11: {
    name: 'include_host',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  12: {
    name: 'include_all',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  13: {
    name: 'cache_iterator',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  18: {
    name: 'num_shards',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogReadResponse, {
  0: {
    name: 'LogReadResponse',
    fullName: 'apphosting.LogReadResponse'
  },
  1: {
    name: 'log',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.RequestLog
  },
  2: {
    name: 'offset',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogOffset
  },
  3: {
    name: 'last_end_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogUsageRecord, {
  0: {
    name: 'LogUsageRecord',
    fullName: 'apphosting.LogUsageRecord'
  },
  1: {
    name: 'version_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'start_time',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'end_time',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  4: {
    name: 'count',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'total_size',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  6: {
    name: 'records',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogUsageRequest, {
  0: {
    name: 'LogUsageRequest',
    fullName: 'apphosting.LogUsageRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version_id',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'start_time',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  4: {
    name: 'end_time',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  5: {
    name: 'resolution_hours',
    fieldType: goog.proto2.Message.FieldType.UINT32,
    defaultValue: 1,
    type: Number
  },
  6: {
    name: 'combine_versions',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  7: {
    name: 'usage_version',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  8: {
    name: 'versions_only',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.LogUsageResponse, {
  0: {
    name: 'LogUsageResponse',
    fullName: 'apphosting.LogUsageResponse'
  },
  1: {
    name: 'usage',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogUsageRecord
  },
  2: {
    name: 'summary',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.LogUsageRecord
  }
});
