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

goog.provide('apphosting.ModulesServiceError');
goog.provide('apphosting.ModulesServiceError.ErrorCode');
goog.provide('apphosting.GetModulesRequest');
goog.provide('apphosting.GetModulesResponse');
goog.provide('apphosting.GetVersionsRequest');
goog.provide('apphosting.GetVersionsResponse');
goog.provide('apphosting.GetDefaultVersionRequest');
goog.provide('apphosting.GetDefaultVersionResponse');
goog.provide('apphosting.GetNumInstancesRequest');
goog.provide('apphosting.GetNumInstancesResponse');
goog.provide('apphosting.SetNumInstancesRequest');
goog.provide('apphosting.SetNumInstancesResponse');
goog.provide('apphosting.StartModuleRequest');
goog.provide('apphosting.StartModuleResponse');
goog.provide('apphosting.StopModuleRequest');
goog.provide('apphosting.StopModuleResponse');
goog.provide('apphosting.GetHostnameRequest');
goog.provide('apphosting.GetHostnameResponse');

goog.require('goog.proto2.Message');



/**
 * Message ModulesServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ModulesServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ModulesServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ModulesServiceError} The cloned message.
 * @override
 */
apphosting.ModulesServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.ModulesServiceError.ErrorCode = {
  OK: 0,
  INVALID_MODULE: 1,
  INVALID_VERSION: 2,
  INVALID_INSTANCES: 3,
  TRANSIENT_ERROR: 4,
  UNEXPECTED_STATE: 5
};



/**
 * Message GetModulesRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetModulesRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetModulesRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetModulesRequest} The cloned message.
 * @override
 */
apphosting.GetModulesRequest.prototype.clone;



/**
 * Message GetModulesResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetModulesResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetModulesResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetModulesResponse} The cloned message.
 * @override
 */
apphosting.GetModulesResponse.prototype.clone;


/**
 * Gets the value of the module field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.GetModulesResponse.prototype.getModule = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the module field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.GetModulesResponse.prototype.getModuleOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the module field.
 * @param {string} value The value to add.
 */
apphosting.GetModulesResponse.prototype.addModule = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the module field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.GetModulesResponse.prototype.moduleArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.GetModulesResponse.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.GetModulesResponse.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.GetModulesResponse.prototype.clearModule = function() {
  this.clear$Field(1);
};



/**
 * Message GetVersionsRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetVersionsRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetVersionsRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetVersionsRequest} The cloned message.
 * @override
 */
apphosting.GetVersionsRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.GetVersionsRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetVersionsRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.GetVersionsRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.GetVersionsRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.GetVersionsRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.GetVersionsRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};



/**
 * Message GetVersionsResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetVersionsResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetVersionsResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetVersionsResponse} The cloned message.
 * @override
 */
apphosting.GetVersionsResponse.prototype.clone;


/**
 * Gets the value of the version field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.GetVersionsResponse.prototype.getVersion = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the version field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.GetVersionsResponse.prototype.getVersionOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the version field.
 * @param {string} value The value to add.
 */
apphosting.GetVersionsResponse.prototype.addVersion = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the version field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.GetVersionsResponse.prototype.versionArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.GetVersionsResponse.prototype.hasVersion = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.GetVersionsResponse.prototype.versionCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the version field.
 */
apphosting.GetVersionsResponse.prototype.clearVersion = function() {
  this.clear$Field(1);
};



/**
 * Message GetDefaultVersionRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDefaultVersionRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDefaultVersionRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDefaultVersionRequest} The cloned message.
 * @override
 */
apphosting.GetDefaultVersionRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.GetDefaultVersionRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetDefaultVersionRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.GetDefaultVersionRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.GetDefaultVersionRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.GetDefaultVersionRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.GetDefaultVersionRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};



/**
 * Message GetDefaultVersionResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDefaultVersionResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDefaultVersionResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDefaultVersionResponse} The cloned message.
 * @override
 */
apphosting.GetDefaultVersionResponse.prototype.clone;


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.GetDefaultVersionResponse.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetDefaultVersionResponse.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.GetDefaultVersionResponse.prototype.setVersion = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.GetDefaultVersionResponse.prototype.hasVersion = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.GetDefaultVersionResponse.prototype.versionCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the version field.
 */
apphosting.GetDefaultVersionResponse.prototype.clearVersion = function() {
  this.clear$Field(1);
};



/**
 * Message GetNumInstancesRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetNumInstancesRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetNumInstancesRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetNumInstancesRequest} The cloned message.
 * @override
 */
apphosting.GetNumInstancesRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.GetNumInstancesRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetNumInstancesRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.GetNumInstancesRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.GetNumInstancesRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.GetNumInstancesRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.GetNumInstancesRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.GetNumInstancesRequest.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetNumInstancesRequest.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.GetNumInstancesRequest.prototype.setVersion = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.GetNumInstancesRequest.prototype.hasVersion = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.GetNumInstancesRequest.prototype.versionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version field.
 */
apphosting.GetNumInstancesRequest.prototype.clearVersion = function() {
  this.clear$Field(2);
};



/**
 * Message GetNumInstancesResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetNumInstancesResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetNumInstancesResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetNumInstancesResponse} The cloned message.
 * @override
 */
apphosting.GetNumInstancesResponse.prototype.clone;


/**
 * Gets the value of the instances field.
 * @return {?string} The value.
 */
apphosting.GetNumInstancesResponse.prototype.getInstances = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the instances field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetNumInstancesResponse.prototype.getInstancesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the instances field.
 * @param {string} value The value.
 */
apphosting.GetNumInstancesResponse.prototype.setInstances = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the instances field has a value.
 */
apphosting.GetNumInstancesResponse.prototype.hasInstances = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the instances field.
 */
apphosting.GetNumInstancesResponse.prototype.instancesCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the instances field.
 */
apphosting.GetNumInstancesResponse.prototype.clearInstances = function() {
  this.clear$Field(1);
};



/**
 * Message SetNumInstancesRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SetNumInstancesRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SetNumInstancesRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SetNumInstancesRequest} The cloned message.
 * @override
 */
apphosting.SetNumInstancesRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.SetNumInstancesRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.SetNumInstancesRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.SetNumInstancesRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.SetNumInstancesRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.SetNumInstancesRequest.prototype.setVersion = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.SetNumInstancesRequest.prototype.hasVersion = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.SetNumInstancesRequest.prototype.versionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version field.
 */
apphosting.SetNumInstancesRequest.prototype.clearVersion = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the instances field.
 * @return {?string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getInstances = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the instances field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SetNumInstancesRequest.prototype.getInstancesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the instances field.
 * @param {string} value The value.
 */
apphosting.SetNumInstancesRequest.prototype.setInstances = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the instances field has a value.
 */
apphosting.SetNumInstancesRequest.prototype.hasInstances = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the instances field.
 */
apphosting.SetNumInstancesRequest.prototype.instancesCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the instances field.
 */
apphosting.SetNumInstancesRequest.prototype.clearInstances = function() {
  this.clear$Field(3);
};



/**
 * Message SetNumInstancesResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SetNumInstancesResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SetNumInstancesResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SetNumInstancesResponse} The cloned message.
 * @override
 */
apphosting.SetNumInstancesResponse.prototype.clone;



/**
 * Message StartModuleRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StartModuleRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StartModuleRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StartModuleRequest} The cloned message.
 * @override
 */
apphosting.StartModuleRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.StartModuleRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.StartModuleRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.StartModuleRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.StartModuleRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.StartModuleRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.StartModuleRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.StartModuleRequest.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.StartModuleRequest.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.StartModuleRequest.prototype.setVersion = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.StartModuleRequest.prototype.hasVersion = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.StartModuleRequest.prototype.versionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version field.
 */
apphosting.StartModuleRequest.prototype.clearVersion = function() {
  this.clear$Field(2);
};



/**
 * Message StartModuleResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StartModuleResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StartModuleResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StartModuleResponse} The cloned message.
 * @override
 */
apphosting.StartModuleResponse.prototype.clone;



/**
 * Message StopModuleRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StopModuleRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StopModuleRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StopModuleRequest} The cloned message.
 * @override
 */
apphosting.StopModuleRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.StopModuleRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.StopModuleRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.StopModuleRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.StopModuleRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.StopModuleRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.StopModuleRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.StopModuleRequest.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.StopModuleRequest.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.StopModuleRequest.prototype.setVersion = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.StopModuleRequest.prototype.hasVersion = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.StopModuleRequest.prototype.versionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version field.
 */
apphosting.StopModuleRequest.prototype.clearVersion = function() {
  this.clear$Field(2);
};



/**
 * Message StopModuleResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.StopModuleResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.StopModuleResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.StopModuleResponse} The cloned message.
 * @override
 */
apphosting.StopModuleResponse.prototype.clone;



/**
 * Message GetHostnameRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetHostnameRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetHostnameRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetHostnameRequest} The cloned message.
 * @override
 */
apphosting.GetHostnameRequest.prototype.clone;


/**
 * Gets the value of the module field.
 * @return {?string} The value.
 */
apphosting.GetHostnameRequest.prototype.getModule = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the module field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetHostnameRequest.prototype.getModuleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the module field.
 * @param {string} value The value.
 */
apphosting.GetHostnameRequest.prototype.setModule = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the module field has a value.
 */
apphosting.GetHostnameRequest.prototype.hasModule = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the module field.
 */
apphosting.GetHostnameRequest.prototype.moduleCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the module field.
 */
apphosting.GetHostnameRequest.prototype.clearModule = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the version field.
 * @return {?string} The value.
 */
apphosting.GetHostnameRequest.prototype.getVersion = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the version field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetHostnameRequest.prototype.getVersionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the version field.
 * @param {string} value The value.
 */
apphosting.GetHostnameRequest.prototype.setVersion = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the version field has a value.
 */
apphosting.GetHostnameRequest.prototype.hasVersion = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the version field.
 */
apphosting.GetHostnameRequest.prototype.versionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the version field.
 */
apphosting.GetHostnameRequest.prototype.clearVersion = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the instance field.
 * @return {?string} The value.
 */
apphosting.GetHostnameRequest.prototype.getInstance = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the instance field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetHostnameRequest.prototype.getInstanceOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the instance field.
 * @param {string} value The value.
 */
apphosting.GetHostnameRequest.prototype.setInstance = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the instance field has a value.
 */
apphosting.GetHostnameRequest.prototype.hasInstance = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the instance field.
 */
apphosting.GetHostnameRequest.prototype.instanceCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the instance field.
 */
apphosting.GetHostnameRequest.prototype.clearInstance = function() {
  this.clear$Field(3);
};



/**
 * Message GetHostnameResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetHostnameResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetHostnameResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetHostnameResponse} The cloned message.
 * @override
 */
apphosting.GetHostnameResponse.prototype.clone;


/**
 * Gets the value of the hostname field.
 * @return {?string} The value.
 */
apphosting.GetHostnameResponse.prototype.getHostname = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the hostname field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetHostnameResponse.prototype.getHostnameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the hostname field.
 * @param {string} value The value.
 */
apphosting.GetHostnameResponse.prototype.setHostname = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the hostname field has a value.
 */
apphosting.GetHostnameResponse.prototype.hasHostname = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the hostname field.
 */
apphosting.GetHostnameResponse.prototype.hostnameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the hostname field.
 */
apphosting.GetHostnameResponse.prototype.clearHostname = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.ModulesServiceError, {
  0: {
    name: 'ModulesServiceError',
    fullName: 'apphosting.ModulesServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetModulesRequest, {
  0: {
    name: 'GetModulesRequest',
    fullName: 'apphosting.GetModulesRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetModulesResponse, {
  0: {
    name: 'GetModulesResponse',
    fullName: 'apphosting.GetModulesResponse'
  },
  1: {
    name: 'module',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetVersionsRequest, {
  0: {
    name: 'GetVersionsRequest',
    fullName: 'apphosting.GetVersionsRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetVersionsResponse, {
  0: {
    name: 'GetVersionsResponse',
    fullName: 'apphosting.GetVersionsResponse'
  },
  1: {
    name: 'version',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDefaultVersionRequest, {
  0: {
    name: 'GetDefaultVersionRequest',
    fullName: 'apphosting.GetDefaultVersionRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDefaultVersionResponse, {
  0: {
    name: 'GetDefaultVersionResponse',
    fullName: 'apphosting.GetDefaultVersionResponse'
  },
  1: {
    name: 'version',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetNumInstancesRequest, {
  0: {
    name: 'GetNumInstancesRequest',
    fullName: 'apphosting.GetNumInstancesRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetNumInstancesResponse, {
  0: {
    name: 'GetNumInstancesResponse',
    fullName: 'apphosting.GetNumInstancesResponse'
  },
  1: {
    name: 'instances',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.SetNumInstancesRequest, {
  0: {
    name: 'SetNumInstancesRequest',
    fullName: 'apphosting.SetNumInstancesRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'instances',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.SetNumInstancesResponse, {
  0: {
    name: 'SetNumInstancesResponse',
    fullName: 'apphosting.SetNumInstancesResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.StartModuleRequest, {
  0: {
    name: 'StartModuleRequest',
    fullName: 'apphosting.StartModuleRequest'
  },
  1: {
    name: 'module',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.StartModuleResponse, {
  0: {
    name: 'StartModuleResponse',
    fullName: 'apphosting.StartModuleResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.StopModuleRequest, {
  0: {
    name: 'StopModuleRequest',
    fullName: 'apphosting.StopModuleRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.StopModuleResponse, {
  0: {
    name: 'StopModuleResponse',
    fullName: 'apphosting.StopModuleResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetHostnameRequest, {
  0: {
    name: 'GetHostnameRequest',
    fullName: 'apphosting.GetHostnameRequest'
  },
  1: {
    name: 'module',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'version',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'instance',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetHostnameResponse, {
  0: {
    name: 'GetHostnameResponse',
    fullName: 'apphosting.GetHostnameResponse'
  },
  1: {
    name: 'hostname',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
