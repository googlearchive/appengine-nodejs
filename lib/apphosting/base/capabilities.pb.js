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

goog.provide('apphosting.CapabilityConfigList');
goog.provide('apphosting.CapabilityConfig');
goog.provide('apphosting.CapabilityConfig.Status');

goog.require('goog.proto2.Message');



/**
 * Message CapabilityConfigList.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CapabilityConfigList = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CapabilityConfigList, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CapabilityConfigList} The cloned message.
 * @override
 */
apphosting.CapabilityConfigList.prototype.clone;


/**
 * Gets the value of the config field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.CapabilityConfig} The value.
 */
apphosting.CapabilityConfigList.prototype.getConfig = function(index) {
  return /** @type {apphosting.CapabilityConfig} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the config field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.CapabilityConfig} The value.
 */
apphosting.CapabilityConfigList.prototype.getConfigOrDefault = function(index) {
  return /** @type {!apphosting.CapabilityConfig} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the config field.
 * @param {!apphosting.CapabilityConfig} value The value to add.
 */
apphosting.CapabilityConfigList.prototype.addConfig = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the config field.
 * @return {!Array.<!apphosting.CapabilityConfig>} The values in the field.
 */
apphosting.CapabilityConfigList.prototype.configArray = function() {
  return /** @type {!Array.<!apphosting.CapabilityConfig>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the config field has a value.
 */
apphosting.CapabilityConfigList.prototype.hasConfig = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the config field.
 */
apphosting.CapabilityConfigList.prototype.configCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the config field.
 */
apphosting.CapabilityConfigList.prototype.clearConfig = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the default_config field.
 * @return {apphosting.CapabilityConfig} The value.
 */
apphosting.CapabilityConfigList.prototype.getDefaultConfig = function() {
  return /** @type {apphosting.CapabilityConfig} */ (this.get$Value(2));
};


/**
 * Gets the value of the default_config field or the default value if not set.
 * @return {!apphosting.CapabilityConfig} The value.
 */
apphosting.CapabilityConfigList.prototype.getDefaultConfigOrDefault = function() {
  return /** @type {!apphosting.CapabilityConfig} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the default_config field.
 * @param {!apphosting.CapabilityConfig} value The value.
 */
apphosting.CapabilityConfigList.prototype.setDefaultConfig = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the default_config field has a value.
 */
apphosting.CapabilityConfigList.prototype.hasDefaultConfig = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the default_config field.
 */
apphosting.CapabilityConfigList.prototype.defaultConfigCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the default_config field.
 */
apphosting.CapabilityConfigList.prototype.clearDefaultConfig = function() {
  this.clear$Field(2);
};



/**
 * Message CapabilityConfig.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CapabilityConfig = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CapabilityConfig, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CapabilityConfig} The cloned message.
 * @override
 */
apphosting.CapabilityConfig.prototype.clone;


/**
 * Gets the value of the package field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getPackage = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the package field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getPackageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the package field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setPackage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the package field has a value.
 */
apphosting.CapabilityConfig.prototype.hasPackage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the package field.
 */
apphosting.CapabilityConfig.prototype.packageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the package field.
 */
apphosting.CapabilityConfig.prototype.clearPackage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the capability field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getCapability = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the capability field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getCapabilityOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the capability field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setCapability = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the capability field has a value.
 */
apphosting.CapabilityConfig.prototype.hasCapability = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the capability field.
 */
apphosting.CapabilityConfig.prototype.capabilityCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the capability field.
 */
apphosting.CapabilityConfig.prototype.clearCapability = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the status field.
 * @return {?apphosting.CapabilityConfig.Status} The value.
 */
apphosting.CapabilityConfig.prototype.getStatus = function() {
  return /** @type {?apphosting.CapabilityConfig.Status} */ (this.get$Value(3));
};


/**
 * Gets the value of the status field or the default value if not set.
 * @return {apphosting.CapabilityConfig.Status} The value.
 */
apphosting.CapabilityConfig.prototype.getStatusOrDefault = function() {
  return /** @type {apphosting.CapabilityConfig.Status} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the status field.
 * @param {apphosting.CapabilityConfig.Status} value The value.
 */
apphosting.CapabilityConfig.prototype.setStatus = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the status field has a value.
 */
apphosting.CapabilityConfig.prototype.hasStatus = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the status field.
 */
apphosting.CapabilityConfig.prototype.statusCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the status field.
 */
apphosting.CapabilityConfig.prototype.clearStatus = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the scheduled_time field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getScheduledTime = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the scheduled_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getScheduledTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the scheduled_time field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setScheduledTime = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the scheduled_time field has a value.
 */
apphosting.CapabilityConfig.prototype.hasScheduledTime = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the scheduled_time field.
 */
apphosting.CapabilityConfig.prototype.scheduledTimeCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the scheduled_time field.
 */
apphosting.CapabilityConfig.prototype.clearScheduledTime = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the internal_message field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getInternalMessage = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the internal_message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getInternalMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the internal_message field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setInternalMessage = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the internal_message field has a value.
 */
apphosting.CapabilityConfig.prototype.hasInternalMessage = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the internal_message field.
 */
apphosting.CapabilityConfig.prototype.internalMessageCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the internal_message field.
 */
apphosting.CapabilityConfig.prototype.clearInternalMessage = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the admin_message field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getAdminMessage = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the admin_message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getAdminMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the admin_message field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setAdminMessage = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the admin_message field has a value.
 */
apphosting.CapabilityConfig.prototype.hasAdminMessage = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the admin_message field.
 */
apphosting.CapabilityConfig.prototype.adminMessageCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the admin_message field.
 */
apphosting.CapabilityConfig.prototype.clearAdminMessage = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the error_message field.
 * @return {?string} The value.
 */
apphosting.CapabilityConfig.prototype.getErrorMessage = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the error_message field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CapabilityConfig.prototype.getErrorMessageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the error_message field.
 * @param {string} value The value.
 */
apphosting.CapabilityConfig.prototype.setErrorMessage = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the error_message field has a value.
 */
apphosting.CapabilityConfig.prototype.hasErrorMessage = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the error_message field.
 */
apphosting.CapabilityConfig.prototype.errorMessageCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the error_message field.
 */
apphosting.CapabilityConfig.prototype.clearErrorMessage = function() {
  this.clear$Field(6);
};


/**
 * Enumeration Status.
 * @enum {number}
 */
apphosting.CapabilityConfig.Status = {
  ENABLED: 1,
  SCHEDULED: 2,
  DISABLED: 3,
  UNKNOWN: 4
};


goog.proto2.Message.set$Metadata(apphosting.CapabilityConfigList, {
  0: {
    name: 'CapabilityConfigList',
    fullName: 'apphosting.CapabilityConfigList'
  },
  1: {
    name: 'config',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.CapabilityConfig
  },
  2: {
    name: 'default_config',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.CapabilityConfig
  }
});


goog.proto2.Message.set$Metadata(apphosting.CapabilityConfig, {
  0: {
    name: 'CapabilityConfig',
    fullName: 'apphosting.CapabilityConfig'
  },
  1: {
    name: 'package',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'capability',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'status',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.CapabilityConfig.Status.UNKNOWN,
    type: apphosting.CapabilityConfig.Status
  },
  7: {
    name: 'scheduled_time',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'internal_message',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'admin_message',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  6: {
    name: 'error_message',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
