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

goog.provide('apphosting.IsEnabledRequest');
goog.provide('apphosting.IsEnabledResponse');
goog.provide('apphosting.IsEnabledResponse.SummaryStatus');

goog.require('apphosting.CapabilityConfig');
goog.require('goog.proto2.Message');



/**
 * Message IsEnabledRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.IsEnabledRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.IsEnabledRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.IsEnabledRequest} The cloned message.
 * @override
 */
apphosting.IsEnabledRequest.prototype.clone;


/**
 * Gets the value of the package field.
 * @return {?string} The value.
 */
apphosting.IsEnabledRequest.prototype.getPackage = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the package field or the default value if not set.
 * @return {string} The value.
 */
apphosting.IsEnabledRequest.prototype.getPackageOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the package field.
 * @param {string} value The value.
 */
apphosting.IsEnabledRequest.prototype.setPackage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the package field has a value.
 */
apphosting.IsEnabledRequest.prototype.hasPackage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the package field.
 */
apphosting.IsEnabledRequest.prototype.packageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the package field.
 */
apphosting.IsEnabledRequest.prototype.clearPackage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the capability field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.IsEnabledRequest.prototype.getCapability = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the capability field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.IsEnabledRequest.prototype.getCapabilityOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the capability field.
 * @param {string} value The value to add.
 */
apphosting.IsEnabledRequest.prototype.addCapability = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the capability field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.IsEnabledRequest.prototype.capabilityArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the capability field has a value.
 */
apphosting.IsEnabledRequest.prototype.hasCapability = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the capability field.
 */
apphosting.IsEnabledRequest.prototype.capabilityCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the capability field.
 */
apphosting.IsEnabledRequest.prototype.clearCapability = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the call field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.IsEnabledRequest.prototype.getCall = function(index) {
  return /** @type {?string} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the call field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.IsEnabledRequest.prototype.getCallOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the call field.
 * @param {string} value The value to add.
 */
apphosting.IsEnabledRequest.prototype.addCall = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the call field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.IsEnabledRequest.prototype.callArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the call field has a value.
 */
apphosting.IsEnabledRequest.prototype.hasCall = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the call field.
 */
apphosting.IsEnabledRequest.prototype.callCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the call field.
 */
apphosting.IsEnabledRequest.prototype.clearCall = function() {
  this.clear$Field(3);
};



/**
 * Message IsEnabledResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.IsEnabledResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.IsEnabledResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.IsEnabledResponse} The cloned message.
 * @override
 */
apphosting.IsEnabledResponse.prototype.clone;


/**
 * Gets the value of the summary_status field.
 * @return {?apphosting.IsEnabledResponse.SummaryStatus} The value.
 */
apphosting.IsEnabledResponse.prototype.getSummaryStatus = function() {
  return /** @type {?apphosting.IsEnabledResponse.SummaryStatus} */ (this.get$Value(1));
};


/**
 * Gets the value of the summary_status field or the default value if not set.
 * @return {apphosting.IsEnabledResponse.SummaryStatus} The value.
 */
apphosting.IsEnabledResponse.prototype.getSummaryStatusOrDefault = function() {
  return /** @type {apphosting.IsEnabledResponse.SummaryStatus} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the summary_status field.
 * @param {apphosting.IsEnabledResponse.SummaryStatus} value The value.
 */
apphosting.IsEnabledResponse.prototype.setSummaryStatus = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the summary_status field has a value.
 */
apphosting.IsEnabledResponse.prototype.hasSummaryStatus = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the summary_status field.
 */
apphosting.IsEnabledResponse.prototype.summaryStatusCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the summary_status field.
 */
apphosting.IsEnabledResponse.prototype.clearSummaryStatus = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the time_until_scheduled field.
 * @return {?string} The value.
 */
apphosting.IsEnabledResponse.prototype.getTimeUntilScheduled = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the time_until_scheduled field or the default value if not set.
 * @return {string} The value.
 */
apphosting.IsEnabledResponse.prototype.getTimeUntilScheduledOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the time_until_scheduled field.
 * @param {string} value The value.
 */
apphosting.IsEnabledResponse.prototype.setTimeUntilScheduled = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the time_until_scheduled field has a value.
 */
apphosting.IsEnabledResponse.prototype.hasTimeUntilScheduled = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the time_until_scheduled field.
 */
apphosting.IsEnabledResponse.prototype.timeUntilScheduledCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the time_until_scheduled field.
 */
apphosting.IsEnabledResponse.prototype.clearTimeUntilScheduled = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the config field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.CapabilityConfig} The value.
 */
apphosting.IsEnabledResponse.prototype.getConfig = function(index) {
  return /** @type {apphosting.CapabilityConfig} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the config field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.CapabilityConfig} The value.
 */
apphosting.IsEnabledResponse.prototype.getConfigOrDefault = function(index) {
  return /** @type {!apphosting.CapabilityConfig} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the config field.
 * @param {!apphosting.CapabilityConfig} value The value to add.
 */
apphosting.IsEnabledResponse.prototype.addConfig = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the config field.
 * @return {!Array.<!apphosting.CapabilityConfig>} The values in the field.
 */
apphosting.IsEnabledResponse.prototype.configArray = function() {
  return /** @type {!Array.<!apphosting.CapabilityConfig>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the config field has a value.
 */
apphosting.IsEnabledResponse.prototype.hasConfig = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the config field.
 */
apphosting.IsEnabledResponse.prototype.configCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the config field.
 */
apphosting.IsEnabledResponse.prototype.clearConfig = function() {
  this.clear$Field(3);
};


/**
 * Enumeration SummaryStatus.
 * @enum {number}
 */
apphosting.IsEnabledResponse.SummaryStatus = {
  ENABLED: 1,
  SCHEDULED_FUTURE: 2,
  SCHEDULED_NOW: 3,
  DISABLED: 4,
  UNKNOWN: 5
};


goog.proto2.Message.set$Metadata(apphosting.IsEnabledRequest, {
  0: {
    name: 'IsEnabledRequest',
    fullName: 'apphosting.IsEnabledRequest'
  },
  1: {
    name: 'package',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'capability',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'call',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.IsEnabledResponse, {
  0: {
    name: 'IsEnabledResponse',
    fullName: 'apphosting.IsEnabledResponse'
  },
  1: {
    name: 'summary_status',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.IsEnabledResponse.SummaryStatus.ENABLED,
    type: apphosting.IsEnabledResponse.SummaryStatus
  },
  2: {
    name: 'time_until_scheduled',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'config',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.CapabilityConfig
  }
});
