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

goog.provide('apphosting.MemcacheServiceError');
goog.provide('apphosting.MemcacheServiceError.ErrorCode');
goog.provide('apphosting.AppOverride');
goog.provide('apphosting.MemcacheGetRequest');
goog.provide('apphosting.MemcacheGetResponse');
goog.provide('apphosting.MemcacheGetResponse.Item');
goog.provide('apphosting.MemcacheSetRequest');
goog.provide('apphosting.MemcacheSetRequest.Item');
goog.provide('apphosting.MemcacheSetRequest.SetPolicy');
goog.provide('apphosting.MemcacheSetResponse');
goog.provide('apphosting.MemcacheSetResponse.SetStatusCode');
goog.provide('apphosting.MemcacheDeleteRequest');
goog.provide('apphosting.MemcacheDeleteRequest.Item');
goog.provide('apphosting.MemcacheDeleteResponse');
goog.provide('apphosting.MemcacheDeleteResponse.DeleteStatusCode');
goog.provide('apphosting.MemcacheIncrementRequest');
goog.provide('apphosting.MemcacheIncrementRequest.Direction');
goog.provide('apphosting.MemcacheIncrementResponse');
goog.provide('apphosting.MemcacheIncrementResponse.IncrementStatusCode');
goog.provide('apphosting.MemcacheBatchIncrementRequest');
goog.provide('apphosting.MemcacheBatchIncrementResponse');
goog.provide('apphosting.MemcacheFlushRequest');
goog.provide('apphosting.MemcacheFlushResponse');
goog.provide('apphosting.MemcacheStatsRequest');
goog.provide('apphosting.MergedNamespaceStats');
goog.provide('apphosting.MemcacheStatsResponse');
goog.provide('apphosting.MemcacheGrabTailRequest');
goog.provide('apphosting.MemcacheGrabTailResponse');
goog.provide('apphosting.MemcacheGrabTailResponse.Item');

goog.require('goog.proto2.Message');



/**
 * Message MemcacheServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheServiceError} The cloned message.
 * @override
 */
apphosting.MemcacheServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.MemcacheServiceError.ErrorCode = {
  OK: 0,
  UNSPECIFIED_ERROR: 1,
  NAMESPACE_NOT_SET: 2,
  PERMISSION_DENIED: 3,
  INVALID_VALUE: 6
};



/**
 * Message AppOverride.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.AppOverride = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.AppOverride, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.AppOverride} The cloned message.
 * @override
 */
apphosting.AppOverride.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.AppOverride.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.AppOverride.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.AppOverride.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.AppOverride.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.AppOverride.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.AppOverride.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the num_memcacheg_backends field.
 * @return {?number} The value.
 */
apphosting.AppOverride.prototype.getNumMemcachegBackends = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the num_memcacheg_backends field or the default value if not set.
 * @return {number} The value.
 */
apphosting.AppOverride.prototype.getNumMemcachegBackendsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the num_memcacheg_backends field.
 * @param {number} value The value.
 */
apphosting.AppOverride.prototype.setNumMemcachegBackends = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the num_memcacheg_backends field has a value.
 */
apphosting.AppOverride.prototype.hasNumMemcachegBackends = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the num_memcacheg_backends field.
 */
apphosting.AppOverride.prototype.numMemcachegBackendsCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the num_memcacheg_backends field.
 */
apphosting.AppOverride.prototype.clearNumMemcachegBackends = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the ignore_shardlock field.
 * @return {?boolean} The value.
 */
apphosting.AppOverride.prototype.getIgnoreShardlock = function() {
  return /** @type {?boolean} */ (this.get$Value(3));
};


/**
 * Gets the value of the ignore_shardlock field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.AppOverride.prototype.getIgnoreShardlockOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the ignore_shardlock field.
 * @param {boolean} value The value.
 */
apphosting.AppOverride.prototype.setIgnoreShardlock = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the ignore_shardlock field has a value.
 */
apphosting.AppOverride.prototype.hasIgnoreShardlock = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the ignore_shardlock field.
 */
apphosting.AppOverride.prototype.ignoreShardlockCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the ignore_shardlock field.
 */
apphosting.AppOverride.prototype.clearIgnoreShardlock = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the memcache_pool_hint field.
 * @return {?string} The value.
 */
apphosting.AppOverride.prototype.getMemcachePoolHint = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the memcache_pool_hint field or the default value if not set.
 * @return {string} The value.
 */
apphosting.AppOverride.prototype.getMemcachePoolHintOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the memcache_pool_hint field.
 * @param {string} value The value.
 */
apphosting.AppOverride.prototype.setMemcachePoolHint = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the memcache_pool_hint field has a value.
 */
apphosting.AppOverride.prototype.hasMemcachePoolHint = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the memcache_pool_hint field.
 */
apphosting.AppOverride.prototype.memcachePoolHintCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the memcache_pool_hint field.
 */
apphosting.AppOverride.prototype.clearMemcachePoolHint = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the memcache_sharding_strategy field.
 * @return {?string} The value.
 */
apphosting.AppOverride.prototype.getMemcacheShardingStrategy = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the memcache_sharding_strategy field or the default value if not set.
 * @return {string} The value.
 */
apphosting.AppOverride.prototype.getMemcacheShardingStrategyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the memcache_sharding_strategy field.
 * @param {string} value The value.
 */
apphosting.AppOverride.prototype.setMemcacheShardingStrategy = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the memcache_sharding_strategy field has a value.
 */
apphosting.AppOverride.prototype.hasMemcacheShardingStrategy = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the memcache_sharding_strategy field.
 */
apphosting.AppOverride.prototype.memcacheShardingStrategyCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the memcache_sharding_strategy field.
 */
apphosting.AppOverride.prototype.clearMemcacheShardingStrategy = function() {
  this.clear$Field(5);
};



/**
 * Message MemcacheGetRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGetRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGetRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGetRequest} The cloned message.
 * @override
 */
apphosting.MemcacheGetRequest.prototype.clone;


/**
 * Gets the value of the key field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.MemcacheGetRequest.prototype.getKey = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the key field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.MemcacheGetRequest.prototype.getKeyOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the key field.
 * @param {string} value The value to add.
 */
apphosting.MemcacheGetRequest.prototype.addKey = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the key field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.MemcacheGetRequest.prototype.keyArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.MemcacheGetRequest.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.MemcacheGetRequest.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.MemcacheGetRequest.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheGetRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGetRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheGetRequest.prototype.setNameSpace = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheGetRequest.prototype.hasNameSpace = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheGetRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheGetRequest.prototype.clearNameSpace = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the for_cas field.
 * @return {?boolean} The value.
 */
apphosting.MemcacheGetRequest.prototype.getForCas = function() {
  return /** @type {?boolean} */ (this.get$Value(4));
};


/**
 * Gets the value of the for_cas field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.MemcacheGetRequest.prototype.getForCasOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the for_cas field.
 * @param {boolean} value The value.
 */
apphosting.MemcacheGetRequest.prototype.setForCas = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the for_cas field has a value.
 */
apphosting.MemcacheGetRequest.prototype.hasForCas = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the for_cas field.
 */
apphosting.MemcacheGetRequest.prototype.forCasCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the for_cas field.
 */
apphosting.MemcacheGetRequest.prototype.clearForCas = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheGetRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(5));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheGetRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheGetRequest.prototype.setOverride = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheGetRequest.prototype.hasOverride = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheGetRequest.prototype.overrideCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheGetRequest.prototype.clearOverride = function() {
  this.clear$Field(5);
};



/**
 * Message MemcacheGetResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGetResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGetResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGetResponse} The cloned message.
 * @override
 */
apphosting.MemcacheGetResponse.prototype.clone;


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheGetResponse.Item} The value.
 */
apphosting.MemcacheGetResponse.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheGetResponse.Item} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheGetResponse.Item} The value.
 */
apphosting.MemcacheGetResponse.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheGetResponse.Item} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheGetResponse.Item} value The value to add.
 */
apphosting.MemcacheGetResponse.prototype.addItem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheGetResponse.Item>} The values in the field.
 */
apphosting.MemcacheGetResponse.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheGetResponse.Item>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheGetResponse.prototype.hasItem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheGetResponse.prototype.itemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheGetResponse.prototype.clearItem = function() {
  this.clear$Field(1);
};



/**
 * Message Item.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGetResponse.Item = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGetResponse.Item, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGetResponse.Item} The cloned message.
 * @override
 */
apphosting.MemcacheGetResponse.Item.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.setKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.MemcacheGetResponse.Item.prototype.hasKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.MemcacheGetResponse.Item.prototype.keyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the key field.
 */
apphosting.MemcacheGetResponse.Item.prototype.clearKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.setValue = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.MemcacheGetResponse.Item.prototype.hasValue = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.MemcacheGetResponse.Item.prototype.valueCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the value field.
 */
apphosting.MemcacheGetResponse.Item.prototype.clearValue = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the flags field.
 * @return {?number} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getFlags = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the flags field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getFlagsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the flags field.
 * @param {number} value The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.setFlags = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the flags field has a value.
 */
apphosting.MemcacheGetResponse.Item.prototype.hasFlags = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the flags field.
 */
apphosting.MemcacheGetResponse.Item.prototype.flagsCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the flags field.
 */
apphosting.MemcacheGetResponse.Item.prototype.clearFlags = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the cas_id field.
 * @return {?string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getCasId = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the cas_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getCasIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the cas_id field.
 * @param {string} value The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.setCasId = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the cas_id field has a value.
 */
apphosting.MemcacheGetResponse.Item.prototype.hasCasId = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the cas_id field.
 */
apphosting.MemcacheGetResponse.Item.prototype.casIdCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the cas_id field.
 */
apphosting.MemcacheGetResponse.Item.prototype.clearCasId = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the expires_in_seconds field.
 * @return {?number} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getExpiresInSeconds = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the expires_in_seconds field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.getExpiresInSecondsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the expires_in_seconds field.
 * @param {number} value The value.
 */
apphosting.MemcacheGetResponse.Item.prototype.setExpiresInSeconds = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the expires_in_seconds field has a value.
 */
apphosting.MemcacheGetResponse.Item.prototype.hasExpiresInSeconds = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the expires_in_seconds field.
 */
apphosting.MemcacheGetResponse.Item.prototype.expiresInSecondsCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the expires_in_seconds field.
 */
apphosting.MemcacheGetResponse.Item.prototype.clearExpiresInSeconds = function() {
  this.clear$Field(6);
};



/**
 * Message MemcacheSetRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheSetRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheSetRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheSetRequest} The cloned message.
 * @override
 */
apphosting.MemcacheSetRequest.prototype.clone;


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheSetRequest.Item} The value.
 */
apphosting.MemcacheSetRequest.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheSetRequest.Item} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheSetRequest.Item} The value.
 */
apphosting.MemcacheSetRequest.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheSetRequest.Item} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheSetRequest.Item} value The value to add.
 */
apphosting.MemcacheSetRequest.prototype.addItem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheSetRequest.Item>} The values in the field.
 */
apphosting.MemcacheSetRequest.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheSetRequest.Item>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheSetRequest.prototype.hasItem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheSetRequest.prototype.itemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheSetRequest.prototype.clearItem = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheSetRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheSetRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheSetRequest.prototype.setNameSpace = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheSetRequest.prototype.hasNameSpace = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheSetRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheSetRequest.prototype.clearNameSpace = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheSetRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(10));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheSetRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheSetRequest.prototype.setOverride = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheSetRequest.prototype.hasOverride = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheSetRequest.prototype.overrideCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheSetRequest.prototype.clearOverride = function() {
  this.clear$Field(10);
};


/**
 * Enumeration SetPolicy.
 * @enum {number}
 */
apphosting.MemcacheSetRequest.SetPolicy = {
  SET: 1,
  ADD: 2,
  REPLACE: 3,
  CAS: 4
};



/**
 * Message Item.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheSetRequest.Item = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheSetRequest.Item, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheSetRequest.Item} The cloned message.
 * @override
 */
apphosting.MemcacheSetRequest.Item.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.MemcacheSetRequest.Item.prototype.keyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the key field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setValue = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasValue = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.MemcacheSetRequest.Item.prototype.valueCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the value field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearValue = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the flags field.
 * @return {?number} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getFlags = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the flags field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getFlagsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the flags field.
 * @param {number} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setFlags = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the flags field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasFlags = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the flags field.
 */
apphosting.MemcacheSetRequest.Item.prototype.flagsCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the flags field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearFlags = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the set_policy field.
 * @return {?apphosting.MemcacheSetRequest.SetPolicy} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getSetPolicy = function() {
  return /** @type {?apphosting.MemcacheSetRequest.SetPolicy} */ (this.get$Value(5));
};


/**
 * Gets the value of the set_policy field or the default value if not set.
 * @return {apphosting.MemcacheSetRequest.SetPolicy} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getSetPolicyOrDefault = function() {
  return /** @type {apphosting.MemcacheSetRequest.SetPolicy} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the set_policy field.
 * @param {apphosting.MemcacheSetRequest.SetPolicy} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setSetPolicy = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the set_policy field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasSetPolicy = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the set_policy field.
 */
apphosting.MemcacheSetRequest.Item.prototype.setPolicyCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the set_policy field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearSetPolicy = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the expiration_time field.
 * @return {?number} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getExpirationTime = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the expiration_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getExpirationTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the expiration_time field.
 * @param {number} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setExpirationTime = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the expiration_time field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasExpirationTime = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the expiration_time field.
 */
apphosting.MemcacheSetRequest.Item.prototype.expirationTimeCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the expiration_time field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearExpirationTime = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the cas_id field.
 * @return {?string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getCasId = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the cas_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getCasIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the cas_id field.
 * @param {string} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setCasId = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the cas_id field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasCasId = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the cas_id field.
 */
apphosting.MemcacheSetRequest.Item.prototype.casIdCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the cas_id field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearCasId = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the for_cas field.
 * @return {?boolean} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getForCas = function() {
  return /** @type {?boolean} */ (this.get$Value(9));
};


/**
 * Gets the value of the for_cas field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.getForCasOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the for_cas field.
 * @param {boolean} value The value.
 */
apphosting.MemcacheSetRequest.Item.prototype.setForCas = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the for_cas field has a value.
 */
apphosting.MemcacheSetRequest.Item.prototype.hasForCas = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the for_cas field.
 */
apphosting.MemcacheSetRequest.Item.prototype.forCasCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the for_cas field.
 */
apphosting.MemcacheSetRequest.Item.prototype.clearForCas = function() {
  this.clear$Field(9);
};



/**
 * Message MemcacheSetResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheSetResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheSetResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheSetResponse} The cloned message.
 * @override
 */
apphosting.MemcacheSetResponse.prototype.clone;


/**
 * Gets the value of the set_status field at the index given.
 * @param {number} index The index to lookup.
 * @return {?apphosting.MemcacheSetResponse.SetStatusCode} The value.
 */
apphosting.MemcacheSetResponse.prototype.getSetStatus = function(index) {
  return /** @type {?apphosting.MemcacheSetResponse.SetStatusCode} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the set_status field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheSetResponse.SetStatusCode} The value.
 */
apphosting.MemcacheSetResponse.prototype.getSetStatusOrDefault = function(index) {
  return /** @type {apphosting.MemcacheSetResponse.SetStatusCode} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the set_status field.
 * @param {apphosting.MemcacheSetResponse.SetStatusCode} value The value to add.
 */
apphosting.MemcacheSetResponse.prototype.addSetStatus = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the set_status field.
 * @return {!Array.<apphosting.MemcacheSetResponse.SetStatusCode>} The values in the field.
 */
apphosting.MemcacheSetResponse.prototype.setStatusArray = function() {
  return /** @type {!Array.<apphosting.MemcacheSetResponse.SetStatusCode>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the set_status field has a value.
 */
apphosting.MemcacheSetResponse.prototype.hasSetStatus = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the set_status field.
 */
apphosting.MemcacheSetResponse.prototype.setStatusCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the set_status field.
 */
apphosting.MemcacheSetResponse.prototype.clearSetStatus = function() {
  this.clear$Field(1);
};


/**
 * Enumeration SetStatusCode.
 * @enum {number}
 */
apphosting.MemcacheSetResponse.SetStatusCode = {
  STORED: 1,
  NOT_STORED: 2,
  ERROR: 3,
  EXISTS: 4
};



/**
 * Message MemcacheDeleteRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheDeleteRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheDeleteRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheDeleteRequest} The cloned message.
 * @override
 */
apphosting.MemcacheDeleteRequest.prototype.clone;


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheDeleteRequest.Item} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheDeleteRequest.Item} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheDeleteRequest.Item} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheDeleteRequest.Item} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheDeleteRequest.Item} value The value to add.
 */
apphosting.MemcacheDeleteRequest.prototype.addItem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheDeleteRequest.Item>} The values in the field.
 */
apphosting.MemcacheDeleteRequest.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheDeleteRequest.Item>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheDeleteRequest.prototype.hasItem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheDeleteRequest.prototype.itemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheDeleteRequest.prototype.clearItem = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheDeleteRequest.prototype.setNameSpace = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheDeleteRequest.prototype.hasNameSpace = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheDeleteRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheDeleteRequest.prototype.clearNameSpace = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(5));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheDeleteRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheDeleteRequest.prototype.setOverride = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheDeleteRequest.prototype.hasOverride = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheDeleteRequest.prototype.overrideCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheDeleteRequest.prototype.clearOverride = function() {
  this.clear$Field(5);
};



/**
 * Message Item.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheDeleteRequest.Item = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheDeleteRequest.Item, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheDeleteRequest.Item} The cloned message.
 * @override
 */
apphosting.MemcacheDeleteRequest.Item.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.setKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.hasKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.keyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the key field.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.clearKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the delete_time field.
 * @return {?number} The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.getDeleteTime = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the delete_time field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.getDeleteTimeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the delete_time field.
 * @param {number} value The value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.setDeleteTime = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the delete_time field has a value.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.hasDeleteTime = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the delete_time field.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.deleteTimeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the delete_time field.
 */
apphosting.MemcacheDeleteRequest.Item.prototype.clearDeleteTime = function() {
  this.clear$Field(3);
};



/**
 * Message MemcacheDeleteResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheDeleteResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheDeleteResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheDeleteResponse} The cloned message.
 * @override
 */
apphosting.MemcacheDeleteResponse.prototype.clone;


/**
 * Gets the value of the delete_status field at the index given.
 * @param {number} index The index to lookup.
 * @return {?apphosting.MemcacheDeleteResponse.DeleteStatusCode} The value.
 */
apphosting.MemcacheDeleteResponse.prototype.getDeleteStatus = function(index) {
  return /** @type {?apphosting.MemcacheDeleteResponse.DeleteStatusCode} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the delete_status field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheDeleteResponse.DeleteStatusCode} The value.
 */
apphosting.MemcacheDeleteResponse.prototype.getDeleteStatusOrDefault = function(index) {
  return /** @type {apphosting.MemcacheDeleteResponse.DeleteStatusCode} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the delete_status field.
 * @param {apphosting.MemcacheDeleteResponse.DeleteStatusCode} value The value to add.
 */
apphosting.MemcacheDeleteResponse.prototype.addDeleteStatus = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the delete_status field.
 * @return {!Array.<apphosting.MemcacheDeleteResponse.DeleteStatusCode>} The values in the field.
 */
apphosting.MemcacheDeleteResponse.prototype.deleteStatusArray = function() {
  return /** @type {!Array.<apphosting.MemcacheDeleteResponse.DeleteStatusCode>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the delete_status field has a value.
 */
apphosting.MemcacheDeleteResponse.prototype.hasDeleteStatus = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the delete_status field.
 */
apphosting.MemcacheDeleteResponse.prototype.deleteStatusCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the delete_status field.
 */
apphosting.MemcacheDeleteResponse.prototype.clearDeleteStatus = function() {
  this.clear$Field(1);
};


/**
 * Enumeration DeleteStatusCode.
 * @enum {number}
 */
apphosting.MemcacheDeleteResponse.DeleteStatusCode = {
  DELETED: 1,
  NOT_FOUND: 2
};



/**
 * Message MemcacheIncrementRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheIncrementRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheIncrementRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheIncrementRequest} The cloned message.
 * @override
 */
apphosting.MemcacheIncrementRequest.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.MemcacheIncrementRequest.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setNameSpace = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasNameSpace = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheIncrementRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearNameSpace = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the delta field.
 * @return {?string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getDelta = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the delta field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getDeltaOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the delta field.
 * @param {string} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setDelta = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the delta field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasDelta = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the delta field.
 */
apphosting.MemcacheIncrementRequest.prototype.deltaCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the delta field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearDelta = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the direction field.
 * @return {?apphosting.MemcacheIncrementRequest.Direction} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getDirection = function() {
  return /** @type {?apphosting.MemcacheIncrementRequest.Direction} */ (this.get$Value(3));
};


/**
 * Gets the value of the direction field or the default value if not set.
 * @return {apphosting.MemcacheIncrementRequest.Direction} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getDirectionOrDefault = function() {
  return /** @type {apphosting.MemcacheIncrementRequest.Direction} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the direction field.
 * @param {apphosting.MemcacheIncrementRequest.Direction} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setDirection = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the direction field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasDirection = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the direction field.
 */
apphosting.MemcacheIncrementRequest.prototype.directionCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the direction field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearDirection = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the initial_value field.
 * @return {?string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getInitialValue = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the initial_value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getInitialValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the initial_value field.
 * @param {string} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setInitialValue = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the initial_value field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasInitialValue = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the initial_value field.
 */
apphosting.MemcacheIncrementRequest.prototype.initialValueCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the initial_value field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearInitialValue = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the initial_flags field.
 * @return {?number} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getInitialFlags = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the initial_flags field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getInitialFlagsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the initial_flags field.
 * @param {number} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setInitialFlags = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the initial_flags field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasInitialFlags = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the initial_flags field.
 */
apphosting.MemcacheIncrementRequest.prototype.initialFlagsCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the initial_flags field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearInitialFlags = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(7));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheIncrementRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheIncrementRequest.prototype.setOverride = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheIncrementRequest.prototype.hasOverride = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheIncrementRequest.prototype.overrideCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheIncrementRequest.prototype.clearOverride = function() {
  this.clear$Field(7);
};


/**
 * Enumeration Direction.
 * @enum {number}
 */
apphosting.MemcacheIncrementRequest.Direction = {
  INCREMENT: 1,
  DECREMENT: 2
};



/**
 * Message MemcacheIncrementResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheIncrementResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheIncrementResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheIncrementResponse} The cloned message.
 * @override
 */
apphosting.MemcacheIncrementResponse.prototype.clone;


/**
 * Gets the value of the new_value field.
 * @return {?string} The value.
 */
apphosting.MemcacheIncrementResponse.prototype.getNewValue = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the new_value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheIncrementResponse.prototype.getNewValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the new_value field.
 * @param {string} value The value.
 */
apphosting.MemcacheIncrementResponse.prototype.setNewValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the new_value field has a value.
 */
apphosting.MemcacheIncrementResponse.prototype.hasNewValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the new_value field.
 */
apphosting.MemcacheIncrementResponse.prototype.newValueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the new_value field.
 */
apphosting.MemcacheIncrementResponse.prototype.clearNewValue = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the increment_status field.
 * @return {?apphosting.MemcacheIncrementResponse.IncrementStatusCode} The value.
 */
apphosting.MemcacheIncrementResponse.prototype.getIncrementStatus = function() {
  return /** @type {?apphosting.MemcacheIncrementResponse.IncrementStatusCode} */ (this.get$Value(2));
};


/**
 * Gets the value of the increment_status field or the default value if not set.
 * @return {apphosting.MemcacheIncrementResponse.IncrementStatusCode} The value.
 */
apphosting.MemcacheIncrementResponse.prototype.getIncrementStatusOrDefault = function() {
  return /** @type {apphosting.MemcacheIncrementResponse.IncrementStatusCode} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the increment_status field.
 * @param {apphosting.MemcacheIncrementResponse.IncrementStatusCode} value The value.
 */
apphosting.MemcacheIncrementResponse.prototype.setIncrementStatus = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the increment_status field has a value.
 */
apphosting.MemcacheIncrementResponse.prototype.hasIncrementStatus = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the increment_status field.
 */
apphosting.MemcacheIncrementResponse.prototype.incrementStatusCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the increment_status field.
 */
apphosting.MemcacheIncrementResponse.prototype.clearIncrementStatus = function() {
  this.clear$Field(2);
};


/**
 * Enumeration IncrementStatusCode.
 * @enum {number}
 */
apphosting.MemcacheIncrementResponse.IncrementStatusCode = {
  OK: 1,
  NOT_CHANGED: 2,
  ERROR: 3
};



/**
 * Message MemcacheBatchIncrementRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheBatchIncrementRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheBatchIncrementRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheBatchIncrementRequest} The cloned message.
 * @override
 */
apphosting.MemcacheBatchIncrementRequest.prototype.clone;


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.setNameSpace = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.hasNameSpace = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.clearNameSpace = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheIncrementRequest} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheIncrementRequest} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheIncrementRequest} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheIncrementRequest} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheIncrementRequest} value The value to add.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.addItem = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheIncrementRequest>} The values in the field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheIncrementRequest>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.hasItem = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.itemCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.clearItem = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(3));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.setOverride = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.hasOverride = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.overrideCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheBatchIncrementRequest.prototype.clearOverride = function() {
  this.clear$Field(3);
};



/**
 * Message MemcacheBatchIncrementResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheBatchIncrementResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheBatchIncrementResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheBatchIncrementResponse} The cloned message.
 * @override
 */
apphosting.MemcacheBatchIncrementResponse.prototype.clone;


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheIncrementResponse} The value.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheIncrementResponse} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheIncrementResponse} The value.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheIncrementResponse} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheIncrementResponse} value The value to add.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.addItem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheIncrementResponse>} The values in the field.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheIncrementResponse>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.hasItem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.itemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheBatchIncrementResponse.prototype.clearItem = function() {
  this.clear$Field(1);
};



/**
 * Message MemcacheFlushRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheFlushRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheFlushRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheFlushRequest} The cloned message.
 * @override
 */
apphosting.MemcacheFlushRequest.prototype.clone;


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheFlushRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(1));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheFlushRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheFlushRequest.prototype.setOverride = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheFlushRequest.prototype.hasOverride = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheFlushRequest.prototype.overrideCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheFlushRequest.prototype.clearOverride = function() {
  this.clear$Field(1);
};



/**
 * Message MemcacheFlushResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheFlushResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheFlushResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheFlushResponse} The cloned message.
 * @override
 */
apphosting.MemcacheFlushResponse.prototype.clone;



/**
 * Message MemcacheStatsRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheStatsRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheStatsRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheStatsRequest} The cloned message.
 * @override
 */
apphosting.MemcacheStatsRequest.prototype.clone;


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheStatsRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(1));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheStatsRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheStatsRequest.prototype.setOverride = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheStatsRequest.prototype.hasOverride = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheStatsRequest.prototype.overrideCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheStatsRequest.prototype.clearOverride = function() {
  this.clear$Field(1);
};



/**
 * Message MergedNamespaceStats.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MergedNamespaceStats = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MergedNamespaceStats, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MergedNamespaceStats} The cloned message.
 * @override
 */
apphosting.MergedNamespaceStats.prototype.clone;


/**
 * Gets the value of the hits field.
 * @return {?string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getHits = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the hits field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getHitsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the hits field.
 * @param {string} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setHits = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the hits field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasHits = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the hits field.
 */
apphosting.MergedNamespaceStats.prototype.hitsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the hits field.
 */
apphosting.MergedNamespaceStats.prototype.clearHits = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the misses field.
 * @return {?string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getMisses = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the misses field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getMissesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the misses field.
 * @param {string} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setMisses = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the misses field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasMisses = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the misses field.
 */
apphosting.MergedNamespaceStats.prototype.missesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the misses field.
 */
apphosting.MergedNamespaceStats.prototype.clearMisses = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the byte_hits field.
 * @return {?string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getByteHits = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the byte_hits field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getByteHitsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the byte_hits field.
 * @param {string} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setByteHits = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the byte_hits field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasByteHits = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the byte_hits field.
 */
apphosting.MergedNamespaceStats.prototype.byteHitsCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the byte_hits field.
 */
apphosting.MergedNamespaceStats.prototype.clearByteHits = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the items field.
 * @return {?string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getItems = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the items field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getItemsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the items field.
 * @param {string} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setItems = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the items field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasItems = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the items field.
 */
apphosting.MergedNamespaceStats.prototype.itemsCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the items field.
 */
apphosting.MergedNamespaceStats.prototype.clearItems = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the bytes field.
 * @return {?string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getBytes = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MergedNamespaceStats.prototype.getBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the bytes field.
 * @param {string} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setBytes = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the bytes field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasBytes = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the bytes field.
 */
apphosting.MergedNamespaceStats.prototype.bytesCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the bytes field.
 */
apphosting.MergedNamespaceStats.prototype.clearBytes = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the oldest_item_age field.
 * @return {?number} The value.
 */
apphosting.MergedNamespaceStats.prototype.getOldestItemAge = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the oldest_item_age field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MergedNamespaceStats.prototype.getOldestItemAgeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the oldest_item_age field.
 * @param {number} value The value.
 */
apphosting.MergedNamespaceStats.prototype.setOldestItemAge = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the oldest_item_age field has a value.
 */
apphosting.MergedNamespaceStats.prototype.hasOldestItemAge = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the oldest_item_age field.
 */
apphosting.MergedNamespaceStats.prototype.oldestItemAgeCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the oldest_item_age field.
 */
apphosting.MergedNamespaceStats.prototype.clearOldestItemAge = function() {
  this.clear$Field(6);
};



/**
 * Message MemcacheStatsResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheStatsResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheStatsResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheStatsResponse} The cloned message.
 * @override
 */
apphosting.MemcacheStatsResponse.prototype.clone;


/**
 * Gets the value of the stats field.
 * @return {apphosting.MergedNamespaceStats} The value.
 */
apphosting.MemcacheStatsResponse.prototype.getStats = function() {
  return /** @type {apphosting.MergedNamespaceStats} */ (this.get$Value(1));
};


/**
 * Gets the value of the stats field or the default value if not set.
 * @return {!apphosting.MergedNamespaceStats} The value.
 */
apphosting.MemcacheStatsResponse.prototype.getStatsOrDefault = function() {
  return /** @type {!apphosting.MergedNamespaceStats} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the stats field.
 * @param {!apphosting.MergedNamespaceStats} value The value.
 */
apphosting.MemcacheStatsResponse.prototype.setStats = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the stats field has a value.
 */
apphosting.MemcacheStatsResponse.prototype.hasStats = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the stats field.
 */
apphosting.MemcacheStatsResponse.prototype.statsCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the stats field.
 */
apphosting.MemcacheStatsResponse.prototype.clearStats = function() {
  this.clear$Field(1);
};



/**
 * Message MemcacheGrabTailRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGrabTailRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGrabTailRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGrabTailRequest} The cloned message.
 * @override
 */
apphosting.MemcacheGrabTailRequest.prototype.clone;


/**
 * Gets the value of the item_count field.
 * @return {?number} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getItemCount = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the item_count field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getItemCountOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the item_count field.
 * @param {number} value The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.setItemCount = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the item_count field has a value.
 */
apphosting.MemcacheGrabTailRequest.prototype.hasItemCount = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item_count field.
 */
apphosting.MemcacheGrabTailRequest.prototype.itemCountCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item_count field.
 */
apphosting.MemcacheGrabTailRequest.prototype.clearItemCount = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the name_space field.
 * @return {?string} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getNameSpace = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the name_space field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getNameSpaceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the name_space field.
 * @param {string} value The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.setNameSpace = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the name_space field has a value.
 */
apphosting.MemcacheGrabTailRequest.prototype.hasNameSpace = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the name_space field.
 */
apphosting.MemcacheGrabTailRequest.prototype.nameSpaceCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the name_space field.
 */
apphosting.MemcacheGrabTailRequest.prototype.clearNameSpace = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the override field.
 * @return {apphosting.AppOverride} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getOverride = function() {
  return /** @type {apphosting.AppOverride} */ (this.get$Value(3));
};


/**
 * Gets the value of the override field or the default value if not set.
 * @return {!apphosting.AppOverride} The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.getOverrideOrDefault = function() {
  return /** @type {!apphosting.AppOverride} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the override field.
 * @param {!apphosting.AppOverride} value The value.
 */
apphosting.MemcacheGrabTailRequest.prototype.setOverride = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the override field has a value.
 */
apphosting.MemcacheGrabTailRequest.prototype.hasOverride = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the override field.
 */
apphosting.MemcacheGrabTailRequest.prototype.overrideCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the override field.
 */
apphosting.MemcacheGrabTailRequest.prototype.clearOverride = function() {
  this.clear$Field(3);
};



/**
 * Message MemcacheGrabTailResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGrabTailResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGrabTailResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGrabTailResponse} The cloned message.
 * @override
 */
apphosting.MemcacheGrabTailResponse.prototype.clone;


/**
 * Gets the value of the item field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MemcacheGrabTailResponse.Item} The value.
 */
apphosting.MemcacheGrabTailResponse.prototype.getItem = function(index) {
  return /** @type {apphosting.MemcacheGrabTailResponse.Item} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the item field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MemcacheGrabTailResponse.Item} The value.
 */
apphosting.MemcacheGrabTailResponse.prototype.getItemOrDefault = function(index) {
  return /** @type {!apphosting.MemcacheGrabTailResponse.Item} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the item field.
 * @param {!apphosting.MemcacheGrabTailResponse.Item} value The value to add.
 */
apphosting.MemcacheGrabTailResponse.prototype.addItem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the item field.
 * @return {!Array.<!apphosting.MemcacheGrabTailResponse.Item>} The values in the field.
 */
apphosting.MemcacheGrabTailResponse.prototype.itemArray = function() {
  return /** @type {!Array.<!apphosting.MemcacheGrabTailResponse.Item>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the item field has a value.
 */
apphosting.MemcacheGrabTailResponse.prototype.hasItem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the item field.
 */
apphosting.MemcacheGrabTailResponse.prototype.itemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the item field.
 */
apphosting.MemcacheGrabTailResponse.prototype.clearItem = function() {
  this.clear$Field(1);
};



/**
 * Message Item.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MemcacheGrabTailResponse.Item = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MemcacheGrabTailResponse.Item, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MemcacheGrabTailResponse.Item} The cloned message.
 * @override
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.clearValue = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the flags field.
 * @return {?number} The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.getFlags = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the flags field or the default value if not set.
 * @return {number} The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.getFlagsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the flags field.
 * @param {number} value The value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.setFlags = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the flags field has a value.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.hasFlags = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the flags field.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.flagsCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the flags field.
 */
apphosting.MemcacheGrabTailResponse.Item.prototype.clearFlags = function() {
  this.clear$Field(3);
};


goog.proto2.Message.set$Metadata(apphosting.MemcacheServiceError, {
  0: {
    name: 'MemcacheServiceError',
    fullName: 'apphosting.MemcacheServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.AppOverride, {
  0: {
    name: 'AppOverride',
    fullName: 'apphosting.AppOverride'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'num_memcacheg_backends',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'ignore_shardlock',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  4: {
    name: 'memcache_pool_hint',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'memcache_sharding_strategy',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGetRequest, {
  0: {
    name: 'MemcacheGetRequest',
    fullName: 'apphosting.MemcacheGetRequest'
  },
  1: {
    name: 'key',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  4: {
    name: 'for_cas',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  5: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGetResponse, {
  0: {
    name: 'MemcacheGetResponse',
    fullName: 'apphosting.MemcacheGetResponse'
  },
  1: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.MemcacheGetResponse.Item
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGetResponse.Item, {
  0: {
    name: 'Item',
    containingType: apphosting.MemcacheGetResponse,
    fullName: 'apphosting.MemcacheGetResponse.Item'
  },
  2: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  4: {
    name: 'flags',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    type: Number
  },
  5: {
    name: 'cas_id',
    fieldType: goog.proto2.Message.FieldType.FIXED64,
    type: String
  },
  6: {
    name: 'expires_in_seconds',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheSetRequest, {
  0: {
    name: 'MemcacheSetRequest',
    fullName: 'apphosting.MemcacheSetRequest'
  },
  1: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.MemcacheSetRequest.Item
  },
  7: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  10: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheSetRequest.Item, {
  0: {
    name: 'Item',
    containingType: apphosting.MemcacheSetRequest,
    fullName: 'apphosting.MemcacheSetRequest.Item'
  },
  2: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  4: {
    name: 'flags',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    type: Number
  },
  5: {
    name: 'set_policy',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.MemcacheSetRequest.SetPolicy.SET,
    type: apphosting.MemcacheSetRequest.SetPolicy
  },
  6: {
    name: 'expiration_time',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    defaultValue: 0,
    type: Number
  },
  8: {
    name: 'cas_id',
    fieldType: goog.proto2.Message.FieldType.FIXED64,
    type: String
  },
  9: {
    name: 'for_cas',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheSetResponse, {
  0: {
    name: 'MemcacheSetResponse',
    fullName: 'apphosting.MemcacheSetResponse'
  },
  1: {
    name: 'set_status',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.MemcacheSetResponse.SetStatusCode.STORED,
    type: apphosting.MemcacheSetResponse.SetStatusCode
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheDeleteRequest, {
  0: {
    name: 'MemcacheDeleteRequest',
    fullName: 'apphosting.MemcacheDeleteRequest'
  },
  1: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.MemcacheDeleteRequest.Item
  },
  4: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  5: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheDeleteRequest.Item, {
  0: {
    name: 'Item',
    containingType: apphosting.MemcacheDeleteRequest,
    fullName: 'apphosting.MemcacheDeleteRequest.Item'
  },
  2: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'delete_time',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    defaultValue: 0,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheDeleteResponse, {
  0: {
    name: 'MemcacheDeleteResponse',
    fullName: 'apphosting.MemcacheDeleteResponse'
  },
  1: {
    name: 'delete_status',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.MemcacheDeleteResponse.DeleteStatusCode.DELETED,
    type: apphosting.MemcacheDeleteResponse.DeleteStatusCode
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheIncrementRequest, {
  0: {
    name: 'MemcacheIncrementRequest',
    fullName: 'apphosting.MemcacheIncrementRequest'
  },
  1: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  4: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  2: {
    name: 'delta',
    fieldType: goog.proto2.Message.FieldType.UINT64,
    defaultValue: '1',
    type: String
  },
  3: {
    name: 'direction',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.MemcacheIncrementRequest.Direction.INCREMENT,
    type: apphosting.MemcacheIncrementRequest.Direction
  },
  5: {
    name: 'initial_value',
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  6: {
    name: 'initial_flags',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    type: Number
  },
  7: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheIncrementResponse, {
  0: {
    name: 'MemcacheIncrementResponse',
    fullName: 'apphosting.MemcacheIncrementResponse'
  },
  1: {
    name: 'new_value',
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  2: {
    name: 'increment_status',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.MemcacheIncrementResponse.IncrementStatusCode.OK,
    type: apphosting.MemcacheIncrementResponse.IncrementStatusCode
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheBatchIncrementRequest, {
  0: {
    name: 'MemcacheBatchIncrementRequest',
    fullName: 'apphosting.MemcacheBatchIncrementRequest'
  },
  1: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  2: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.MemcacheIncrementRequest
  },
  3: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheBatchIncrementResponse, {
  0: {
    name: 'MemcacheBatchIncrementResponse',
    fullName: 'apphosting.MemcacheBatchIncrementResponse'
  },
  1: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.MemcacheIncrementResponse
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheFlushRequest, {
  0: {
    name: 'MemcacheFlushRequest',
    fullName: 'apphosting.MemcacheFlushRequest'
  },
  1: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheFlushResponse, {
  0: {
    name: 'MemcacheFlushResponse',
    fullName: 'apphosting.MemcacheFlushResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheStatsRequest, {
  0: {
    name: 'MemcacheStatsRequest',
    fullName: 'apphosting.MemcacheStatsRequest'
  },
  1: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MergedNamespaceStats, {
  0: {
    name: 'MergedNamespaceStats',
    fullName: 'apphosting.MergedNamespaceStats'
  },
  1: {
    name: 'hits',
    required: true,
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  2: {
    name: 'misses',
    required: true,
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  3: {
    name: 'byte_hits',
    required: true,
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  4: {
    name: 'items',
    required: true,
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  5: {
    name: 'bytes',
    required: true,
    fieldType: goog.proto2.Message.FieldType.UINT64,
    type: String
  },
  6: {
    name: 'oldest_item_age',
    required: true,
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheStatsResponse, {
  0: {
    name: 'MemcacheStatsResponse',
    fullName: 'apphosting.MemcacheStatsResponse'
  },
  1: {
    name: 'stats',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.MergedNamespaceStats
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGrabTailRequest, {
  0: {
    name: 'MemcacheGrabTailRequest',
    fullName: 'apphosting.MemcacheGrabTailRequest'
  },
  1: {
    name: 'item_count',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'name_space',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  3: {
    name: 'override',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.AppOverride
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGrabTailResponse, {
  0: {
    name: 'MemcacheGrabTailResponse',
    fullName: 'apphosting.MemcacheGrabTailResponse'
  },
  1: {
    name: 'item',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.MemcacheGrabTailResponse.Item
  }
});


goog.proto2.Message.set$Metadata(apphosting.MemcacheGrabTailResponse.Item, {
  0: {
    name: 'Item',
    containingType: apphosting.MemcacheGrabTailResponse,
    fullName: 'apphosting.MemcacheGrabTailResponse.Item'
  },
  2: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'flags',
    fieldType: goog.proto2.Message.FieldType.FIXED32,
    type: Number
  }
});
