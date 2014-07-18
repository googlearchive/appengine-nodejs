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

goog.provide('apphosting.ChannelServiceError');
goog.provide('apphosting.ChannelServiceError.ErrorCode');
goog.provide('apphosting.CreateChannelRequest');
goog.provide('apphosting.CreateChannelResponse');
goog.provide('apphosting.SendMessageRequest');

goog.require('goog.proto2.Message');



/**
 * Message ChannelServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ChannelServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ChannelServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ChannelServiceError} The cloned message.
 * @override
 */
apphosting.ChannelServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.ChannelServiceError.ErrorCode = {
  OK: 0,
  INTERNAL_ERROR: 1,
  INVALID_CHANNEL_KEY: 2,
  BAD_MESSAGE: 3,
  INVALID_CHANNEL_TOKEN_DURATION: 4,
  APPID_ALIAS_REQUIRED: 5
};



/**
 * Message CreateChannelRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateChannelRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateChannelRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateChannelRequest} The cloned message.
 * @override
 */
apphosting.CreateChannelRequest.prototype.clone;


/**
 * Gets the value of the application_key field.
 * @return {?string} The value.
 */
apphosting.CreateChannelRequest.prototype.getApplicationKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the application_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateChannelRequest.prototype.getApplicationKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the application_key field.
 * @param {string} value The value.
 */
apphosting.CreateChannelRequest.prototype.setApplicationKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the application_key field has a value.
 */
apphosting.CreateChannelRequest.prototype.hasApplicationKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the application_key field.
 */
apphosting.CreateChannelRequest.prototype.applicationKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the application_key field.
 */
apphosting.CreateChannelRequest.prototype.clearApplicationKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the duration_minutes field.
 * @return {?number} The value.
 */
apphosting.CreateChannelRequest.prototype.getDurationMinutes = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the duration_minutes field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CreateChannelRequest.prototype.getDurationMinutesOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the duration_minutes field.
 * @param {number} value The value.
 */
apphosting.CreateChannelRequest.prototype.setDurationMinutes = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the duration_minutes field has a value.
 */
apphosting.CreateChannelRequest.prototype.hasDurationMinutes = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the duration_minutes field.
 */
apphosting.CreateChannelRequest.prototype.durationMinutesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the duration_minutes field.
 */
apphosting.CreateChannelRequest.prototype.clearDurationMinutes = function() {
  this.clear$Field(2);
};



/**
 * Message CreateChannelResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateChannelResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateChannelResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateChannelResponse} The cloned message.
 * @override
 */
apphosting.CreateChannelResponse.prototype.clone;


/**
 * Gets the value of the token field.
 * @return {?string} The value.
 */
apphosting.CreateChannelResponse.prototype.getToken = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the token field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateChannelResponse.prototype.getTokenOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the token field.
 * @param {string} value The value.
 */
apphosting.CreateChannelResponse.prototype.setToken = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the token field has a value.
 */
apphosting.CreateChannelResponse.prototype.hasToken = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the token field.
 */
apphosting.CreateChannelResponse.prototype.tokenCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the token field.
 */
apphosting.CreateChannelResponse.prototype.clearToken = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the duration_minutes field.
 * @return {?number} The value.
 */
apphosting.CreateChannelResponse.prototype.getDurationMinutes = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the duration_minutes field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CreateChannelResponse.prototype.getDurationMinutesOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the duration_minutes field.
 * @param {number} value The value.
 */
apphosting.CreateChannelResponse.prototype.setDurationMinutes = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the duration_minutes field has a value.
 */
apphosting.CreateChannelResponse.prototype.hasDurationMinutes = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the duration_minutes field.
 */
apphosting.CreateChannelResponse.prototype.durationMinutesCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the duration_minutes field.
 */
apphosting.CreateChannelResponse.prototype.clearDurationMinutes = function() {
  this.clear$Field(3);
};



/**
 * Message SendMessageRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SendMessageRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SendMessageRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SendMessageRequest} The cloned message.
 * @override
 */
apphosting.SendMessageRequest.prototype.clone;


/**
 * Gets the value of the application_key field.
 * @return {?string} The value.
 */
apphosting.SendMessageRequest.prototype.getApplicationKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the application_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SendMessageRequest.prototype.getApplicationKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the application_key field.
 * @param {string} value The value.
 */
apphosting.SendMessageRequest.prototype.setApplicationKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the application_key field has a value.
 */
apphosting.SendMessageRequest.prototype.hasApplicationKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the application_key field.
 */
apphosting.SendMessageRequest.prototype.applicationKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the application_key field.
 */
apphosting.SendMessageRequest.prototype.clearApplicationKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the message field.
 * @return {?string} The value.
 */
apphosting.SendMessageRequest.prototype.getMessage = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SendMessageRequest.prototype.getMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the message field.
 * @param {string} value The value.
 */
apphosting.SendMessageRequest.prototype.setMessage = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the message field has a value.
 */
apphosting.SendMessageRequest.prototype.hasMessage = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the message field.
 */
apphosting.SendMessageRequest.prototype.messageCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the message field.
 */
apphosting.SendMessageRequest.prototype.clearMessage = function() {
  this.clear$Field(2);
};


goog.proto2.Message.set$Metadata(apphosting.ChannelServiceError, {
  0: {
    name: 'ChannelServiceError',
    fullName: 'apphosting.ChannelServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateChannelRequest, {
  0: {
    name: 'CreateChannelRequest',
    fullName: 'apphosting.CreateChannelRequest'
  },
  1: {
    name: 'application_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'duration_minutes',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateChannelResponse, {
  0: {
    name: 'CreateChannelResponse',
    fullName: 'apphosting.CreateChannelResponse'
  },
  2: {
    name: 'token',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'duration_minutes',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.SendMessageRequest, {
  0: {
    name: 'SendMessageRequest',
    fullName: 'apphosting.SendMessageRequest'
  },
  1: {
    name: 'application_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'message',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
