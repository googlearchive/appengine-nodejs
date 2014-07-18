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

goog.provide('apphosting.DosServiceError');
goog.provide('apphosting.DosServiceError.ErrorCode');
goog.provide('apphosting.BlacklistEntry');
goog.provide('apphosting.DosConfiguration');
goog.provide('apphosting.SetDosConfigRequest');
goog.provide('apphosting.SetDosConfigResponse');
goog.provide('apphosting.GetDosConfigRequest');
goog.provide('apphosting.GetDosConfigResponse');
goog.provide('apphosting.ListRequest');
goog.provide('apphosting.ListRequest.Category');
goog.provide('apphosting.TopUsersRequest');
goog.provide('apphosting.TopUser');
goog.provide('apphosting.UsersList');
goog.provide('apphosting.TopUsersResponse');

goog.require('goog.proto2.Message');



/**
 * Message DosServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.DosServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.DosServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.DosServiceError} The cloned message.
 * @override
 */
apphosting.DosServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.DosServiceError.ErrorCode = {
  OK: 0,
  INVALID_CONFIGURATION: 1,
  TOO_MANY_BLACKLISTED_SUBNETS: 2,
  PERMISSION_DENIED: 3,
  INTERNAL_ERROR: 4,
  INVALID_REQUEST: 5
};



/**
 * Message BlacklistEntry.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlacklistEntry = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlacklistEntry, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlacklistEntry} The cloned message.
 * @override
 */
apphosting.BlacklistEntry.prototype.clone;


/**
 * Gets the value of the subnet field.
 * @return {?string} The value.
 */
apphosting.BlacklistEntry.prototype.getSubnet = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the subnet field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlacklistEntry.prototype.getSubnetOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the subnet field.
 * @param {string} value The value.
 */
apphosting.BlacklistEntry.prototype.setSubnet = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the subnet field has a value.
 */
apphosting.BlacklistEntry.prototype.hasSubnet = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the subnet field.
 */
apphosting.BlacklistEntry.prototype.subnetCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the subnet field.
 */
apphosting.BlacklistEntry.prototype.clearSubnet = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the description field.
 * @return {?string} The value.
 */
apphosting.BlacklistEntry.prototype.getDescription = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the description field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlacklistEntry.prototype.getDescriptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the description field.
 * @param {string} value The value.
 */
apphosting.BlacklistEntry.prototype.setDescription = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the description field has a value.
 */
apphosting.BlacklistEntry.prototype.hasDescription = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the description field.
 */
apphosting.BlacklistEntry.prototype.descriptionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the description field.
 */
apphosting.BlacklistEntry.prototype.clearDescription = function() {
  this.clear$Field(2);
};



/**
 * Message DosConfiguration.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.DosConfiguration = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.DosConfiguration, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.DosConfiguration} The cloned message.
 * @override
 */
apphosting.DosConfiguration.prototype.clone;


/**
 * Gets the value of the blacklisted_subnets field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.DosConfiguration.prototype.getBlacklistedSubnets = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the blacklisted_subnets field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.DosConfiguration.prototype.getBlacklistedSubnetsOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the blacklisted_subnets field.
 * @param {string} value The value to add.
 */
apphosting.DosConfiguration.prototype.addBlacklistedSubnets = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the blacklisted_subnets field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.DosConfiguration.prototype.blacklistedSubnetsArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the blacklisted_subnets field has a value.
 */
apphosting.DosConfiguration.prototype.hasBlacklistedSubnets = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blacklisted_subnets field.
 */
apphosting.DosConfiguration.prototype.blacklistedSubnetsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blacklisted_subnets field.
 */
apphosting.DosConfiguration.prototype.clearBlacklistedSubnets = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the blacklist_entries field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.BlacklistEntry} The value.
 */
apphosting.DosConfiguration.prototype.getBlacklistEntries = function(index) {
  return /** @type {apphosting.BlacklistEntry} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the blacklist_entries field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.BlacklistEntry} The value.
 */
apphosting.DosConfiguration.prototype.getBlacklistEntriesOrDefault = function(index) {
  return /** @type {!apphosting.BlacklistEntry} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the blacklist_entries field.
 * @param {!apphosting.BlacklistEntry} value The value to add.
 */
apphosting.DosConfiguration.prototype.addBlacklistEntries = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the blacklist_entries field.
 * @return {!Array.<!apphosting.BlacklistEntry>} The values in the field.
 */
apphosting.DosConfiguration.prototype.blacklistEntriesArray = function() {
  return /** @type {!Array.<!apphosting.BlacklistEntry>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the blacklist_entries field has a value.
 */
apphosting.DosConfiguration.prototype.hasBlacklistEntries = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the blacklist_entries field.
 */
apphosting.DosConfiguration.prototype.blacklistEntriesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the blacklist_entries field.
 */
apphosting.DosConfiguration.prototype.clearBlacklistEntries = function() {
  this.clear$Field(2);
};



/**
 * Message SetDosConfigRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SetDosConfigRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SetDosConfigRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SetDosConfigRequest} The cloned message.
 * @override
 */
apphosting.SetDosConfigRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.SetDosConfigRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SetDosConfigRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.SetDosConfigRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.SetDosConfigRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.SetDosConfigRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.SetDosConfigRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the config field.
 * @return {apphosting.DosConfiguration} The value.
 */
apphosting.SetDosConfigRequest.prototype.getConfig = function() {
  return /** @type {apphosting.DosConfiguration} */ (this.get$Value(2));
};


/**
 * Gets the value of the config field or the default value if not set.
 * @return {!apphosting.DosConfiguration} The value.
 */
apphosting.SetDosConfigRequest.prototype.getConfigOrDefault = function() {
  return /** @type {!apphosting.DosConfiguration} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the config field.
 * @param {!apphosting.DosConfiguration} value The value.
 */
apphosting.SetDosConfigRequest.prototype.setConfig = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the config field has a value.
 */
apphosting.SetDosConfigRequest.prototype.hasConfig = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the config field.
 */
apphosting.SetDosConfigRequest.prototype.configCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the config field.
 */
apphosting.SetDosConfigRequest.prototype.clearConfig = function() {
  this.clear$Field(2);
};



/**
 * Message SetDosConfigResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SetDosConfigResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SetDosConfigResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SetDosConfigResponse} The cloned message.
 * @override
 */
apphosting.SetDosConfigResponse.prototype.clone;



/**
 * Message GetDosConfigRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDosConfigRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDosConfigRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDosConfigRequest} The cloned message.
 * @override
 */
apphosting.GetDosConfigRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.GetDosConfigRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetDosConfigRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.GetDosConfigRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.GetDosConfigRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.GetDosConfigRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.GetDosConfigRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};



/**
 * Message GetDosConfigResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDosConfigResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDosConfigResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDosConfigResponse} The cloned message.
 * @override
 */
apphosting.GetDosConfigResponse.prototype.clone;


/**
 * Gets the value of the config field.
 * @return {apphosting.DosConfiguration} The value.
 */
apphosting.GetDosConfigResponse.prototype.getConfig = function() {
  return /** @type {apphosting.DosConfiguration} */ (this.get$Value(1));
};


/**
 * Gets the value of the config field or the default value if not set.
 * @return {!apphosting.DosConfiguration} The value.
 */
apphosting.GetDosConfigResponse.prototype.getConfigOrDefault = function() {
  return /** @type {!apphosting.DosConfiguration} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the config field.
 * @param {!apphosting.DosConfiguration} value The value.
 */
apphosting.GetDosConfigResponse.prototype.setConfig = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the config field has a value.
 */
apphosting.GetDosConfigResponse.prototype.hasConfig = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the config field.
 */
apphosting.GetDosConfigResponse.prototype.configCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the config field.
 */
apphosting.GetDosConfigResponse.prototype.clearConfig = function() {
  this.clear$Field(1);
};



/**
 * Message ListRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ListRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ListRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ListRequest} The cloned message.
 * @override
 */
apphosting.ListRequest.prototype.clone;


/**
 * Gets the value of the category field.
 * @return {?apphosting.ListRequest.Category} The value.
 */
apphosting.ListRequest.prototype.getCategory = function() {
  return /** @type {?apphosting.ListRequest.Category} */ (this.get$Value(1));
};


/**
 * Gets the value of the category field or the default value if not set.
 * @return {apphosting.ListRequest.Category} The value.
 */
apphosting.ListRequest.prototype.getCategoryOrDefault = function() {
  return /** @type {apphosting.ListRequest.Category} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the category field.
 * @param {apphosting.ListRequest.Category} value The value.
 */
apphosting.ListRequest.prototype.setCategory = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the category field has a value.
 */
apphosting.ListRequest.prototype.hasCategory = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the category field.
 */
apphosting.ListRequest.prototype.categoryCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the category field.
 */
apphosting.ListRequest.prototype.clearCategory = function() {
  this.clear$Field(1);
};


/**
 * Enumeration Category.
 * @enum {number}
 */
apphosting.ListRequest.Category = {
  GLOBAL_ALLOWED: 0,
  BLACKLIST_REJECTS: 1
};



/**
 * Message TopUsersRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TopUsersRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TopUsersRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TopUsersRequest} The cloned message.
 * @override
 */
apphosting.TopUsersRequest.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.TopUsersRequest.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TopUsersRequest.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.TopUsersRequest.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.TopUsersRequest.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.TopUsersRequest.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.TopUsersRequest.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the num_users field.
 * @return {?number} The value.
 */
apphosting.TopUsersRequest.prototype.getNumUsers = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the num_users field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TopUsersRequest.prototype.getNumUsersOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the num_users field.
 * @param {number} value The value.
 */
apphosting.TopUsersRequest.prototype.setNumUsers = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the num_users field has a value.
 */
apphosting.TopUsersRequest.prototype.hasNumUsers = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the num_users field.
 */
apphosting.TopUsersRequest.prototype.numUsersCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the num_users field.
 */
apphosting.TopUsersRequest.prototype.clearNumUsers = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the list_request field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.ListRequest} The value.
 */
apphosting.TopUsersRequest.prototype.getListRequest = function(index) {
  return /** @type {apphosting.ListRequest} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the list_request field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.ListRequest} The value.
 */
apphosting.TopUsersRequest.prototype.getListRequestOrDefault = function(index) {
  return /** @type {!apphosting.ListRequest} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the list_request field.
 * @param {!apphosting.ListRequest} value The value to add.
 */
apphosting.TopUsersRequest.prototype.addListRequest = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the list_request field.
 * @return {!Array.<!apphosting.ListRequest>} The values in the field.
 */
apphosting.TopUsersRequest.prototype.listRequestArray = function() {
  return /** @type {!Array.<!apphosting.ListRequest>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the list_request field has a value.
 */
apphosting.TopUsersRequest.prototype.hasListRequest = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the list_request field.
 */
apphosting.TopUsersRequest.prototype.listRequestCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the list_request field.
 */
apphosting.TopUsersRequest.prototype.clearListRequest = function() {
  this.clear$Field(3);
};



/**
 * Message TopUser.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TopUser = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TopUser, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TopUser} The cloned message.
 * @override
 */
apphosting.TopUser.prototype.clone;


/**
 * Gets the value of the user_id field.
 * @return {?string} The value.
 */
apphosting.TopUser.prototype.getUserId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the user_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.TopUser.prototype.getUserIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the user_id field.
 * @param {string} value The value.
 */
apphosting.TopUser.prototype.setUserId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the user_id field has a value.
 */
apphosting.TopUser.prototype.hasUserId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the user_id field.
 */
apphosting.TopUser.prototype.userIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the user_id field.
 */
apphosting.TopUser.prototype.clearUserId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the num_requests field.
 * @return {?number} The value.
 */
apphosting.TopUser.prototype.getNumRequests = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the num_requests field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TopUser.prototype.getNumRequestsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the num_requests field.
 * @param {number} value The value.
 */
apphosting.TopUser.prototype.setNumRequests = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the num_requests field has a value.
 */
apphosting.TopUser.prototype.hasNumRequests = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the num_requests field.
 */
apphosting.TopUser.prototype.numRequestsCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the num_requests field.
 */
apphosting.TopUser.prototype.clearNumRequests = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the timestamp_s field.
 * @return {?number} The value.
 */
apphosting.TopUser.prototype.getTimestampS = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the timestamp_s field or the default value if not set.
 * @return {number} The value.
 */
apphosting.TopUser.prototype.getTimestampSOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the timestamp_s field.
 * @param {number} value The value.
 */
apphosting.TopUser.prototype.setTimestampS = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the timestamp_s field has a value.
 */
apphosting.TopUser.prototype.hasTimestampS = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the timestamp_s field.
 */
apphosting.TopUser.prototype.timestampSCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the timestamp_s field.
 */
apphosting.TopUser.prototype.clearTimestampS = function() {
  this.clear$Field(3);
};



/**
 * Message UsersList.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.UsersList = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.UsersList, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.UsersList} The cloned message.
 * @override
 */
apphosting.UsersList.prototype.clone;


/**
 * Gets the value of the users field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.TopUser} The value.
 */
apphosting.UsersList.prototype.getUsers = function(index) {
  return /** @type {apphosting.TopUser} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the users field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.TopUser} The value.
 */
apphosting.UsersList.prototype.getUsersOrDefault = function(index) {
  return /** @type {!apphosting.TopUser} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the users field.
 * @param {!apphosting.TopUser} value The value to add.
 */
apphosting.UsersList.prototype.addUsers = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the users field.
 * @return {!Array.<!apphosting.TopUser>} The values in the field.
 */
apphosting.UsersList.prototype.usersArray = function() {
  return /** @type {!Array.<!apphosting.TopUser>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the users field has a value.
 */
apphosting.UsersList.prototype.hasUsers = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the users field.
 */
apphosting.UsersList.prototype.usersCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the users field.
 */
apphosting.UsersList.prototype.clearUsers = function() {
  this.clear$Field(1);
};



/**
 * Message TopUsersResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.TopUsersResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.TopUsersResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.TopUsersResponse} The cloned message.
 * @override
 */
apphosting.TopUsersResponse.prototype.clone;


/**
 * Gets the value of the users_list field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.UsersList} The value.
 */
apphosting.TopUsersResponse.prototype.getUsersList = function(index) {
  return /** @type {apphosting.UsersList} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the users_list field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.UsersList} The value.
 */
apphosting.TopUsersResponse.prototype.getUsersListOrDefault = function(index) {
  return /** @type {!apphosting.UsersList} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the users_list field.
 * @param {!apphosting.UsersList} value The value to add.
 */
apphosting.TopUsersResponse.prototype.addUsersList = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the users_list field.
 * @return {!Array.<!apphosting.UsersList>} The values in the field.
 */
apphosting.TopUsersResponse.prototype.usersListArray = function() {
  return /** @type {!Array.<!apphosting.UsersList>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the users_list field has a value.
 */
apphosting.TopUsersResponse.prototype.hasUsersList = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the users_list field.
 */
apphosting.TopUsersResponse.prototype.usersListCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the users_list field.
 */
apphosting.TopUsersResponse.prototype.clearUsersList = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.DosServiceError, {
  0: {
    name: 'DosServiceError',
    fullName: 'apphosting.DosServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.BlacklistEntry, {
  0: {
    name: 'BlacklistEntry',
    fullName: 'apphosting.BlacklistEntry'
  },
  1: {
    name: 'subnet',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'description',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.DosConfiguration, {
  0: {
    name: 'DosConfiguration',
    fullName: 'apphosting.DosConfiguration'
  },
  1: {
    name: 'blacklisted_subnets',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'blacklist_entries',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.BlacklistEntry
  }
});


goog.proto2.Message.set$Metadata(apphosting.SetDosConfigRequest, {
  0: {
    name: 'SetDosConfigRequest',
    fullName: 'apphosting.SetDosConfigRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'config',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.DosConfiguration
  }
});


goog.proto2.Message.set$Metadata(apphosting.SetDosConfigResponse, {
  0: {
    name: 'SetDosConfigResponse',
    fullName: 'apphosting.SetDosConfigResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDosConfigRequest, {
  0: {
    name: 'GetDosConfigRequest',
    fullName: 'apphosting.GetDosConfigRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDosConfigResponse, {
  0: {
    name: 'GetDosConfigResponse',
    fullName: 'apphosting.GetDosConfigResponse'
  },
  1: {
    name: 'config',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.DosConfiguration
  }
});


goog.proto2.Message.set$Metadata(apphosting.ListRequest, {
  0: {
    name: 'ListRequest',
    fullName: 'apphosting.ListRequest'
  },
  1: {
    name: 'category',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.ListRequest.Category.GLOBAL_ALLOWED,
    type: apphosting.ListRequest.Category
  }
});


goog.proto2.Message.set$Metadata(apphosting.TopUsersRequest, {
  0: {
    name: 'TopUsersRequest',
    fullName: 'apphosting.TopUsersRequest'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'num_users',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'list_request',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ListRequest
  }
});


goog.proto2.Message.set$Metadata(apphosting.TopUser, {
  0: {
    name: 'TopUser',
    fullName: 'apphosting.TopUser'
  },
  1: {
    name: 'user_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'num_requests',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'timestamp_s',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.UsersList, {
  0: {
    name: 'UsersList',
    fullName: 'apphosting.UsersList'
  },
  1: {
    name: 'users',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.TopUser
  }
});


goog.proto2.Message.set$Metadata(apphosting.TopUsersResponse, {
  0: {
    name: 'TopUsersResponse',
    fullName: 'apphosting.TopUsersResponse'
  },
  1: {
    name: 'users_list',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.UsersList
  }
});
