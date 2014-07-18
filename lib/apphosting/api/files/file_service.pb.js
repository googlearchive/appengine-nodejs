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

goog.provide('apphosting.files.FileServiceErrors');
goog.provide('apphosting.files.FileServiceErrors.ErrorCode');
goog.provide('apphosting.files.KeyValue');
goog.provide('apphosting.files.KeyValues');
goog.provide('apphosting.files.FileContentType');
goog.provide('apphosting.files.FileContentType.ContentType');
goog.provide('apphosting.files.CreateRequest');
goog.provide('apphosting.files.CreateRequest.Parameter');
goog.provide('apphosting.files.CreateResponse');
goog.provide('apphosting.files.OpenRequest');
goog.provide('apphosting.files.OpenRequest.OpenMode');
goog.provide('apphosting.files.OpenResponse');
goog.provide('apphosting.files.CloseRequest');
goog.provide('apphosting.files.CloseResponse');
goog.provide('apphosting.files.FileStat');
goog.provide('apphosting.files.StatRequest');
goog.provide('apphosting.files.StatResponse');
goog.provide('apphosting.files.AppendRequest');
goog.provide('apphosting.files.AppendResponse');
goog.provide('apphosting.files.DeleteRequest');
goog.provide('apphosting.files.DeleteResponse');
goog.provide('apphosting.files.ReadRequest');
goog.provide('apphosting.files.ReadResponse');
goog.provide('apphosting.files.ReadKeyValueRequest');
goog.provide('apphosting.files.ReadKeyValueResponse');
goog.provide('apphosting.files.ReadKeyValueResponse.KeyValue');
goog.provide('apphosting.files.ShuffleEnums');
goog.provide('apphosting.files.ShuffleEnums.InputFormat');
goog.provide('apphosting.files.ShuffleEnums.OutputFormat');
goog.provide('apphosting.files.ShuffleEnums.Status');
goog.provide('apphosting.files.ShuffleInputSpecification');
goog.provide('apphosting.files.ShuffleOutputSpecification');
goog.provide('apphosting.files.ShuffleRequest');
goog.provide('apphosting.files.ShuffleRequest.Callback');
goog.provide('apphosting.files.ShuffleResponse');
goog.provide('apphosting.files.GetShuffleStatusRequest');
goog.provide('apphosting.files.GetShuffleStatusResponse');
goog.provide('apphosting.files.GetCapabilitiesRequest');
goog.provide('apphosting.files.GetCapabilitiesResponse');
goog.provide('apphosting.files.FinalizeRequest');
goog.provide('apphosting.files.FinalizeResponse');
goog.provide('apphosting.files.GetDefaultGsBucketNameRequest');
goog.provide('apphosting.files.GetDefaultGsBucketNameResponse');
goog.provide('apphosting.files.ListDirRequest');
goog.provide('apphosting.files.ListDirResponse');

goog.require('goog.proto2.Message');



/**
 * Message FileServiceErrors.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.FileServiceErrors = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.FileServiceErrors, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.FileServiceErrors} The cloned message.
 * @override
 */
apphosting.files.FileServiceErrors.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.files.FileServiceErrors.ErrorCode = {
  OK: 0,
  API_TEMPORARILY_UNAVAILABLE: 1,
  REQUEST_TOO_LARGE: 3,
  RESPONSE_TOO_LARGE: 4,
  INVALID_FILE_NAME: 5,
  OPERATION_NOT_SUPPORTED: 6,
  IO_ERROR: 7,
  PERMISSION_DENIED: 8,
  WRONG_CONTENT_TYPE: 9,
  FILE_NOT_OPENED: 10,
  WRONG_OPEN_MODE: 11,
  EXCLUSIVE_LOCK_REQUIRED: 12,
  FILE_TEMPORARILY_UNAVAILABLE: 13,
  EXISTENCE_ERROR: 100,
  FINALIZATION_ERROR: 101,
  UNSUPPORTED_CONTENT_TYPE: 102,
  READ_ONLY: 103,
  EXCLUSIVE_LOCK_FAILED: 104,
  EXISTENCE_ERROR_METADATA_NOT_FOUND: 105,
  EXISTENCE_ERROR_METADATA_FOUND: 106,
  EXISTENCE_ERROR_SHARDING_MISMATCH: 107,
  FINALIZATION_IN_PROGRESS: 108,
  EXISTENCE_ERROR_OBJECT_NOT_FOUND: 109,
  EXISTENCE_ERROR_BUCKET_NOT_FOUND: 110,
  SEQUENCE_KEY_OUT_OF_ORDER: 300,
  OUT_OF_BOUNDS: 500,
  GLOBS_NOT_SUPPORTED: 600,
  FILE_NAME_NOT_SPECIFIED: 701,
  FILE_NAME_SPECIFIED: 702,
  FILE_ALREADY_EXISTS: 703,
  UNSUPPORTED_FILE_SYSTEM: 704,
  INVALID_PARAMETER: 705,
  SHUFFLER_INTERNAL_ERROR: 800,
  SHUFFLE_REQUEST_TOO_LARGE: 801,
  DUPLICATE_SHUFFLE_NAME: 802,
  SHUFFLE_NOT_AVAILABLE: 803,
  SHUFFLER_TEMPORARILY_UNAVAILABLE: 900,
  MAX_ERROR_CODE: 9999
};



/**
 * Message KeyValue.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.KeyValue = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.KeyValue, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.KeyValue} The cloned message.
 * @override
 */
apphosting.files.KeyValue.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.files.KeyValue.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.KeyValue.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.files.KeyValue.prototype.setKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.files.KeyValue.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.files.KeyValue.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.files.KeyValue.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.files.KeyValue.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.KeyValue.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.files.KeyValue.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.files.KeyValue.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.files.KeyValue.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.files.KeyValue.prototype.clearValue = function() {
  this.clear$Field(2);
};



/**
 * Message KeyValues.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.KeyValues = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.KeyValues, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.KeyValues} The cloned message.
 * @override
 */
apphosting.files.KeyValues.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.files.KeyValues.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.KeyValues.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.files.KeyValues.prototype.setKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.files.KeyValues.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.files.KeyValues.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.files.KeyValues.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.files.KeyValues.prototype.getValue = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the value field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.files.KeyValues.prototype.getValueOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the value field.
 * @param {string} value The value to add.
 */
apphosting.files.KeyValues.prototype.addValue = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the value field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.files.KeyValues.prototype.valueArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.files.KeyValues.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.files.KeyValues.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.files.KeyValues.prototype.clearValue = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the partial field.
 * @return {?boolean} The value.
 */
apphosting.files.KeyValues.prototype.getPartial = function() {
  return /** @type {?boolean} */ (this.get$Value(3));
};


/**
 * Gets the value of the partial field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.KeyValues.prototype.getPartialOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the partial field.
 * @param {boolean} value The value.
 */
apphosting.files.KeyValues.prototype.setPartial = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the partial field has a value.
 */
apphosting.files.KeyValues.prototype.hasPartial = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the partial field.
 */
apphosting.files.KeyValues.prototype.partialCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the partial field.
 */
apphosting.files.KeyValues.prototype.clearPartial = function() {
  this.clear$Field(3);
};



/**
 * Message FileContentType.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.FileContentType = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.FileContentType, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.FileContentType} The cloned message.
 * @override
 */
apphosting.files.FileContentType.prototype.clone;


/**
 * Enumeration ContentType.
 * @enum {number}
 */
apphosting.files.FileContentType.ContentType = {
  RAW: 0,
  DEPRECATED_1: 2,
  INVALID_TYPE: 127
};



/**
 * Message CreateRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.CreateRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.CreateRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.CreateRequest} The cloned message.
 * @override
 */
apphosting.files.CreateRequest.prototype.clone;


/**
 * Gets the value of the filesystem field.
 * @return {?string} The value.
 */
apphosting.files.CreateRequest.prototype.getFilesystem = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filesystem field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateRequest.prototype.getFilesystemOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filesystem field.
 * @param {string} value The value.
 */
apphosting.files.CreateRequest.prototype.setFilesystem = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filesystem field has a value.
 */
apphosting.files.CreateRequest.prototype.hasFilesystem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filesystem field.
 */
apphosting.files.CreateRequest.prototype.filesystemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filesystem field.
 */
apphosting.files.CreateRequest.prototype.clearFilesystem = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the content_type field.
 * @return {?apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.CreateRequest.prototype.getContentType = function() {
  return /** @type {?apphosting.files.FileContentType.ContentType} */ (this.get$Value(2));
};


/**
 * Gets the value of the content_type field or the default value if not set.
 * @return {apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.CreateRequest.prototype.getContentTypeOrDefault = function() {
  return /** @type {apphosting.files.FileContentType.ContentType} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the content_type field.
 * @param {apphosting.files.FileContentType.ContentType} value The value.
 */
apphosting.files.CreateRequest.prototype.setContentType = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the content_type field has a value.
 */
apphosting.files.CreateRequest.prototype.hasContentType = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the content_type field.
 */
apphosting.files.CreateRequest.prototype.contentTypeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the content_type field.
 */
apphosting.files.CreateRequest.prototype.clearContentType = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.CreateRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.CreateRequest.prototype.setFilename = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.CreateRequest.prototype.hasFilename = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.CreateRequest.prototype.filenameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.CreateRequest.prototype.clearFilename = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the parameters field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.files.CreateRequest.Parameter} The value.
 */
apphosting.files.CreateRequest.prototype.getParameters = function(index) {
  return /** @type {apphosting.files.CreateRequest.Parameter} */ (this.get$Value(4, index));
};


/**
 * Gets the value of the parameters field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.files.CreateRequest.Parameter} The value.
 */
apphosting.files.CreateRequest.prototype.getParametersOrDefault = function(index) {
  return /** @type {!apphosting.files.CreateRequest.Parameter} */ (this.get$ValueOrDefault(4, index));
};


/**
 * Adds a value to the parameters field.
 * @param {!apphosting.files.CreateRequest.Parameter} value The value to add.
 */
apphosting.files.CreateRequest.prototype.addParameters = function(value) {
  this.add$Value(4, value);
};


/**
 * Returns the array of values in the parameters field.
 * @return {!Array.<!apphosting.files.CreateRequest.Parameter>} The values in the field.
 */
apphosting.files.CreateRequest.prototype.parametersArray = function() {
  return /** @type {!Array.<!apphosting.files.CreateRequest.Parameter>} */ (this.array$Values(4));
};


/**
 * @return {boolean} Whether the parameters field has a value.
 */
apphosting.files.CreateRequest.prototype.hasParameters = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the parameters field.
 */
apphosting.files.CreateRequest.prototype.parametersCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the parameters field.
 */
apphosting.files.CreateRequest.prototype.clearParameters = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the expiration_time_seconds field.
 * @return {?string} The value.
 */
apphosting.files.CreateRequest.prototype.getExpirationTimeSeconds = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the expiration_time_seconds field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateRequest.prototype.getExpirationTimeSecondsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the expiration_time_seconds field.
 * @param {string} value The value.
 */
apphosting.files.CreateRequest.prototype.setExpirationTimeSeconds = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the expiration_time_seconds field has a value.
 */
apphosting.files.CreateRequest.prototype.hasExpirationTimeSeconds = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the expiration_time_seconds field.
 */
apphosting.files.CreateRequest.prototype.expirationTimeSecondsCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the expiration_time_seconds field.
 */
apphosting.files.CreateRequest.prototype.clearExpirationTimeSeconds = function() {
  this.clear$Field(5);
};



/**
 * Message Parameter.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.CreateRequest.Parameter = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.CreateRequest.Parameter, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.CreateRequest.Parameter} The cloned message.
 * @override
 */
apphosting.files.CreateRequest.Parameter.prototype.clone;


/**
 * Gets the value of the name field.
 * @return {?string} The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.getName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.getNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the name field.
 * @param {string} value The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.setName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the name field has a value.
 */
apphosting.files.CreateRequest.Parameter.prototype.hasName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the name field.
 */
apphosting.files.CreateRequest.Parameter.prototype.nameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the name field.
 */
apphosting.files.CreateRequest.Parameter.prototype.clearName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.files.CreateRequest.Parameter.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.files.CreateRequest.Parameter.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.files.CreateRequest.Parameter.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.files.CreateRequest.Parameter.prototype.clearValue = function() {
  this.clear$Field(2);
};



/**
 * Message CreateResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.CreateResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.CreateResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.CreateResponse} The cloned message.
 * @override
 */
apphosting.files.CreateResponse.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.CreateResponse.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CreateResponse.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.CreateResponse.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.CreateResponse.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.CreateResponse.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.CreateResponse.prototype.clearFilename = function() {
  this.clear$Field(1);
};



/**
 * Message OpenRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.OpenRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.OpenRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.OpenRequest} The cloned message.
 * @override
 */
apphosting.files.OpenRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.OpenRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.OpenRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.OpenRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.OpenRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.OpenRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.OpenRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the content_type field.
 * @return {?apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.OpenRequest.prototype.getContentType = function() {
  return /** @type {?apphosting.files.FileContentType.ContentType} */ (this.get$Value(2));
};


/**
 * Gets the value of the content_type field or the default value if not set.
 * @return {apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.OpenRequest.prototype.getContentTypeOrDefault = function() {
  return /** @type {apphosting.files.FileContentType.ContentType} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the content_type field.
 * @param {apphosting.files.FileContentType.ContentType} value The value.
 */
apphosting.files.OpenRequest.prototype.setContentType = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the content_type field has a value.
 */
apphosting.files.OpenRequest.prototype.hasContentType = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the content_type field.
 */
apphosting.files.OpenRequest.prototype.contentTypeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the content_type field.
 */
apphosting.files.OpenRequest.prototype.clearContentType = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the open_mode field.
 * @return {?apphosting.files.OpenRequest.OpenMode} The value.
 */
apphosting.files.OpenRequest.prototype.getOpenMode = function() {
  return /** @type {?apphosting.files.OpenRequest.OpenMode} */ (this.get$Value(3));
};


/**
 * Gets the value of the open_mode field or the default value if not set.
 * @return {apphosting.files.OpenRequest.OpenMode} The value.
 */
apphosting.files.OpenRequest.prototype.getOpenModeOrDefault = function() {
  return /** @type {apphosting.files.OpenRequest.OpenMode} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the open_mode field.
 * @param {apphosting.files.OpenRequest.OpenMode} value The value.
 */
apphosting.files.OpenRequest.prototype.setOpenMode = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the open_mode field has a value.
 */
apphosting.files.OpenRequest.prototype.hasOpenMode = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the open_mode field.
 */
apphosting.files.OpenRequest.prototype.openModeCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the open_mode field.
 */
apphosting.files.OpenRequest.prototype.clearOpenMode = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the exclusive_lock field.
 * @return {?boolean} The value.
 */
apphosting.files.OpenRequest.prototype.getExclusiveLock = function() {
  return /** @type {?boolean} */ (this.get$Value(4));
};


/**
 * Gets the value of the exclusive_lock field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.OpenRequest.prototype.getExclusiveLockOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the exclusive_lock field.
 * @param {boolean} value The value.
 */
apphosting.files.OpenRequest.prototype.setExclusiveLock = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the exclusive_lock field has a value.
 */
apphosting.files.OpenRequest.prototype.hasExclusiveLock = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the exclusive_lock field.
 */
apphosting.files.OpenRequest.prototype.exclusiveLockCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the exclusive_lock field.
 */
apphosting.files.OpenRequest.prototype.clearExclusiveLock = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the buffered_output field.
 * @return {?boolean} The value.
 */
apphosting.files.OpenRequest.prototype.getBufferedOutput = function() {
  return /** @type {?boolean} */ (this.get$Value(5));
};


/**
 * Gets the value of the buffered_output field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.OpenRequest.prototype.getBufferedOutputOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the buffered_output field.
 * @param {boolean} value The value.
 */
apphosting.files.OpenRequest.prototype.setBufferedOutput = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the buffered_output field has a value.
 */
apphosting.files.OpenRequest.prototype.hasBufferedOutput = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the buffered_output field.
 */
apphosting.files.OpenRequest.prototype.bufferedOutputCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the buffered_output field.
 */
apphosting.files.OpenRequest.prototype.clearBufferedOutput = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the open_lease_time_seconds field.
 * @return {?number} The value.
 */
apphosting.files.OpenRequest.prototype.getOpenLeaseTimeSeconds = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the open_lease_time_seconds field or the default value if not set.
 * @return {number} The value.
 */
apphosting.files.OpenRequest.prototype.getOpenLeaseTimeSecondsOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the open_lease_time_seconds field.
 * @param {number} value The value.
 */
apphosting.files.OpenRequest.prototype.setOpenLeaseTimeSeconds = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the open_lease_time_seconds field has a value.
 */
apphosting.files.OpenRequest.prototype.hasOpenLeaseTimeSeconds = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the open_lease_time_seconds field.
 */
apphosting.files.OpenRequest.prototype.openLeaseTimeSecondsCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the open_lease_time_seconds field.
 */
apphosting.files.OpenRequest.prototype.clearOpenLeaseTimeSeconds = function() {
  this.clear$Field(6);
};


/**
 * Enumeration OpenMode.
 * @enum {number}
 */
apphosting.files.OpenRequest.OpenMode = {
  APPEND: 1,
  READ: 2
};



/**
 * Message OpenResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.OpenResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.OpenResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.OpenResponse} The cloned message.
 * @override
 */
apphosting.files.OpenResponse.prototype.clone;



/**
 * Message CloseRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.CloseRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.CloseRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.CloseRequest} The cloned message.
 * @override
 */
apphosting.files.CloseRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.CloseRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.CloseRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.CloseRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.CloseRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.CloseRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.CloseRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the finalize field.
 * @return {?boolean} The value.
 */
apphosting.files.CloseRequest.prototype.getFinalize = function() {
  return /** @type {?boolean} */ (this.get$Value(2));
};


/**
 * Gets the value of the finalize field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.CloseRequest.prototype.getFinalizeOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the finalize field.
 * @param {boolean} value The value.
 */
apphosting.files.CloseRequest.prototype.setFinalize = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the finalize field has a value.
 */
apphosting.files.CloseRequest.prototype.hasFinalize = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the finalize field.
 */
apphosting.files.CloseRequest.prototype.finalizeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the finalize field.
 */
apphosting.files.CloseRequest.prototype.clearFinalize = function() {
  this.clear$Field(2);
};



/**
 * Message CloseResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.CloseResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.CloseResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.CloseResponse} The cloned message.
 * @override
 */
apphosting.files.CloseResponse.prototype.clone;



/**
 * Message FileStat.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.FileStat = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.FileStat, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.FileStat} The cloned message.
 * @override
 */
apphosting.files.FileStat.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.FileStat.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.FileStat.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.FileStat.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.FileStat.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.FileStat.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.FileStat.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the content_type field.
 * @return {?apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.FileStat.prototype.getContentType = function() {
  return /** @type {?apphosting.files.FileContentType.ContentType} */ (this.get$Value(2));
};


/**
 * Gets the value of the content_type field or the default value if not set.
 * @return {apphosting.files.FileContentType.ContentType} The value.
 */
apphosting.files.FileStat.prototype.getContentTypeOrDefault = function() {
  return /** @type {apphosting.files.FileContentType.ContentType} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the content_type field.
 * @param {apphosting.files.FileContentType.ContentType} value The value.
 */
apphosting.files.FileStat.prototype.setContentType = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the content_type field has a value.
 */
apphosting.files.FileStat.prototype.hasContentType = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the content_type field.
 */
apphosting.files.FileStat.prototype.contentTypeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the content_type field.
 */
apphosting.files.FileStat.prototype.clearContentType = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the finalized field.
 * @return {?boolean} The value.
 */
apphosting.files.FileStat.prototype.getFinalized = function() {
  return /** @type {?boolean} */ (this.get$Value(3));
};


/**
 * Gets the value of the finalized field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.FileStat.prototype.getFinalizedOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the finalized field.
 * @param {boolean} value The value.
 */
apphosting.files.FileStat.prototype.setFinalized = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the finalized field has a value.
 */
apphosting.files.FileStat.prototype.hasFinalized = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the finalized field.
 */
apphosting.files.FileStat.prototype.finalizedCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the finalized field.
 */
apphosting.files.FileStat.prototype.clearFinalized = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the length field.
 * @return {?string} The value.
 */
apphosting.files.FileStat.prototype.getLength = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the length field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.FileStat.prototype.getLengthOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the length field.
 * @param {string} value The value.
 */
apphosting.files.FileStat.prototype.setLength = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the length field has a value.
 */
apphosting.files.FileStat.prototype.hasLength = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the length field.
 */
apphosting.files.FileStat.prototype.lengthCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the length field.
 */
apphosting.files.FileStat.prototype.clearLength = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the ctime field.
 * @return {?string} The value.
 */
apphosting.files.FileStat.prototype.getCtime = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the ctime field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.FileStat.prototype.getCtimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the ctime field.
 * @param {string} value The value.
 */
apphosting.files.FileStat.prototype.setCtime = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the ctime field has a value.
 */
apphosting.files.FileStat.prototype.hasCtime = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the ctime field.
 */
apphosting.files.FileStat.prototype.ctimeCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the ctime field.
 */
apphosting.files.FileStat.prototype.clearCtime = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the mtime field.
 * @return {?string} The value.
 */
apphosting.files.FileStat.prototype.getMtime = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the mtime field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.FileStat.prototype.getMtimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the mtime field.
 * @param {string} value The value.
 */
apphosting.files.FileStat.prototype.setMtime = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the mtime field has a value.
 */
apphosting.files.FileStat.prototype.hasMtime = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the mtime field.
 */
apphosting.files.FileStat.prototype.mtimeCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the mtime field.
 */
apphosting.files.FileStat.prototype.clearMtime = function() {
  this.clear$Field(6);
};



/**
 * Message StatRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.StatRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.StatRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.StatRequest} The cloned message.
 * @override
 */
apphosting.files.StatRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.StatRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.StatRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.StatRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.StatRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.StatRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.StatRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the file_glob field.
 * @return {?string} The value.
 */
apphosting.files.StatRequest.prototype.getFileGlob = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the file_glob field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.StatRequest.prototype.getFileGlobOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the file_glob field.
 * @param {string} value The value.
 */
apphosting.files.StatRequest.prototype.setFileGlob = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the file_glob field has a value.
 */
apphosting.files.StatRequest.prototype.hasFileGlob = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the file_glob field.
 */
apphosting.files.StatRequest.prototype.fileGlobCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the file_glob field.
 */
apphosting.files.StatRequest.prototype.clearFileGlob = function() {
  this.clear$Field(2);
};



/**
 * Message StatResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.StatResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.StatResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.StatResponse} The cloned message.
 * @override
 */
apphosting.files.StatResponse.prototype.clone;


/**
 * Gets the value of the stat field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.files.FileStat} The value.
 */
apphosting.files.StatResponse.prototype.getStat = function(index) {
  return /** @type {apphosting.files.FileStat} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the stat field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.files.FileStat} The value.
 */
apphosting.files.StatResponse.prototype.getStatOrDefault = function(index) {
  return /** @type {!apphosting.files.FileStat} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the stat field.
 * @param {!apphosting.files.FileStat} value The value to add.
 */
apphosting.files.StatResponse.prototype.addStat = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the stat field.
 * @return {!Array.<!apphosting.files.FileStat>} The values in the field.
 */
apphosting.files.StatResponse.prototype.statArray = function() {
  return /** @type {!Array.<!apphosting.files.FileStat>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the stat field has a value.
 */
apphosting.files.StatResponse.prototype.hasStat = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the stat field.
 */
apphosting.files.StatResponse.prototype.statCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the stat field.
 */
apphosting.files.StatResponse.prototype.clearStat = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the more_files_found field.
 * @return {?boolean} The value.
 */
apphosting.files.StatResponse.prototype.getMoreFilesFound = function() {
  return /** @type {?boolean} */ (this.get$Value(2));
};


/**
 * Gets the value of the more_files_found field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.StatResponse.prototype.getMoreFilesFoundOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the more_files_found field.
 * @param {boolean} value The value.
 */
apphosting.files.StatResponse.prototype.setMoreFilesFound = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the more_files_found field has a value.
 */
apphosting.files.StatResponse.prototype.hasMoreFilesFound = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the more_files_found field.
 */
apphosting.files.StatResponse.prototype.moreFilesFoundCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the more_files_found field.
 */
apphosting.files.StatResponse.prototype.clearMoreFilesFound = function() {
  this.clear$Field(2);
};



/**
 * Message AppendRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.AppendRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.AppendRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.AppendRequest} The cloned message.
 * @override
 */
apphosting.files.AppendRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.AppendRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.AppendRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.AppendRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.AppendRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.AppendRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.AppendRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the data field.
 * @return {?string} The value.
 */
apphosting.files.AppendRequest.prototype.getData = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the data field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.AppendRequest.prototype.getDataOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the data field.
 * @param {string} value The value.
 */
apphosting.files.AppendRequest.prototype.setData = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the data field has a value.
 */
apphosting.files.AppendRequest.prototype.hasData = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the data field.
 */
apphosting.files.AppendRequest.prototype.dataCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the data field.
 */
apphosting.files.AppendRequest.prototype.clearData = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the sequence_key field.
 * @return {?string} The value.
 */
apphosting.files.AppendRequest.prototype.getSequenceKey = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the sequence_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.AppendRequest.prototype.getSequenceKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the sequence_key field.
 * @param {string} value The value.
 */
apphosting.files.AppendRequest.prototype.setSequenceKey = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the sequence_key field has a value.
 */
apphosting.files.AppendRequest.prototype.hasSequenceKey = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the sequence_key field.
 */
apphosting.files.AppendRequest.prototype.sequenceKeyCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the sequence_key field.
 */
apphosting.files.AppendRequest.prototype.clearSequenceKey = function() {
  this.clear$Field(3);
};



/**
 * Message AppendResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.AppendResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.AppendResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.AppendResponse} The cloned message.
 * @override
 */
apphosting.files.AppendResponse.prototype.clone;



/**
 * Message DeleteRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.DeleteRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.DeleteRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.DeleteRequest} The cloned message.
 * @override
 */
apphosting.files.DeleteRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.DeleteRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.DeleteRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.DeleteRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.DeleteRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.DeleteRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.DeleteRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};



/**
 * Message DeleteResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.DeleteResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.DeleteResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.DeleteResponse} The cloned message.
 * @override
 */
apphosting.files.DeleteResponse.prototype.clone;



/**
 * Message ReadRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ReadRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ReadRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ReadRequest} The cloned message.
 * @override
 */
apphosting.files.ReadRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.ReadRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.ReadRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.ReadRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.ReadRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.ReadRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the pos field.
 * @return {?string} The value.
 */
apphosting.files.ReadRequest.prototype.getPos = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the pos field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadRequest.prototype.getPosOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the pos field.
 * @param {string} value The value.
 */
apphosting.files.ReadRequest.prototype.setPos = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the pos field has a value.
 */
apphosting.files.ReadRequest.prototype.hasPos = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the pos field.
 */
apphosting.files.ReadRequest.prototype.posCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the pos field.
 */
apphosting.files.ReadRequest.prototype.clearPos = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_bytes field.
 * @return {?string} The value.
 */
apphosting.files.ReadRequest.prototype.getMaxBytes = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadRequest.prototype.getMaxBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_bytes field.
 * @param {string} value The value.
 */
apphosting.files.ReadRequest.prototype.setMaxBytes = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_bytes field has a value.
 */
apphosting.files.ReadRequest.prototype.hasMaxBytes = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_bytes field.
 */
apphosting.files.ReadRequest.prototype.maxBytesCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_bytes field.
 */
apphosting.files.ReadRequest.prototype.clearMaxBytes = function() {
  this.clear$Field(3);
};



/**
 * Message ReadResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ReadResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ReadResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ReadResponse} The cloned message.
 * @override
 */
apphosting.files.ReadResponse.prototype.clone;


/**
 * Gets the value of the data field.
 * @return {?string} The value.
 */
apphosting.files.ReadResponse.prototype.getData = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the data field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadResponse.prototype.getDataOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the data field.
 * @param {string} value The value.
 */
apphosting.files.ReadResponse.prototype.setData = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the data field has a value.
 */
apphosting.files.ReadResponse.prototype.hasData = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the data field.
 */
apphosting.files.ReadResponse.prototype.dataCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the data field.
 */
apphosting.files.ReadResponse.prototype.clearData = function() {
  this.clear$Field(1);
};



/**
 * Message ReadKeyValueRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ReadKeyValueRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ReadKeyValueRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ReadKeyValueRequest} The cloned message.
 * @override
 */
apphosting.files.ReadKeyValueRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.ReadKeyValueRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.ReadKeyValueRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.ReadKeyValueRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the start_key field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getStartKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the start_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getStartKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the start_key field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.setStartKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the start_key field has a value.
 */
apphosting.files.ReadKeyValueRequest.prototype.hasStartKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the start_key field.
 */
apphosting.files.ReadKeyValueRequest.prototype.startKeyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the start_key field.
 */
apphosting.files.ReadKeyValueRequest.prototype.clearStartKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_bytes field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getMaxBytes = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getMaxBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_bytes field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.setMaxBytes = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_bytes field has a value.
 */
apphosting.files.ReadKeyValueRequest.prototype.hasMaxBytes = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_bytes field.
 */
apphosting.files.ReadKeyValueRequest.prototype.maxBytesCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_bytes field.
 */
apphosting.files.ReadKeyValueRequest.prototype.clearMaxBytes = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the value_pos field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getValuePos = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the value_pos field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.getValuePosOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the value_pos field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueRequest.prototype.setValuePos = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the value_pos field has a value.
 */
apphosting.files.ReadKeyValueRequest.prototype.hasValuePos = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the value_pos field.
 */
apphosting.files.ReadKeyValueRequest.prototype.valuePosCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the value_pos field.
 */
apphosting.files.ReadKeyValueRequest.prototype.clearValuePos = function() {
  this.clear$Field(4);
};



/**
 * Message ReadKeyValueResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ReadKeyValueResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ReadKeyValueResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ReadKeyValueResponse} The cloned message.
 * @override
 */
apphosting.files.ReadKeyValueResponse.prototype.clone;


/**
 * Gets the value of the data field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.files.ReadKeyValueResponse.KeyValue} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getData = function(index) {
  return /** @type {apphosting.files.ReadKeyValueResponse.KeyValue} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the data field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.files.ReadKeyValueResponse.KeyValue} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getDataOrDefault = function(index) {
  return /** @type {!apphosting.files.ReadKeyValueResponse.KeyValue} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the data field.
 * @param {!apphosting.files.ReadKeyValueResponse.KeyValue} value The value to add.
 */
apphosting.files.ReadKeyValueResponse.prototype.addData = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the data field.
 * @return {!Array.<!apphosting.files.ReadKeyValueResponse.KeyValue>} The values in the field.
 */
apphosting.files.ReadKeyValueResponse.prototype.dataArray = function() {
  return /** @type {!Array.<!apphosting.files.ReadKeyValueResponse.KeyValue>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the data field has a value.
 */
apphosting.files.ReadKeyValueResponse.prototype.hasData = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the data field.
 */
apphosting.files.ReadKeyValueResponse.prototype.dataCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the data field.
 */
apphosting.files.ReadKeyValueResponse.prototype.clearData = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the next_key field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getNextKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the next_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getNextKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the next_key field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.setNextKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the next_key field has a value.
 */
apphosting.files.ReadKeyValueResponse.prototype.hasNextKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the next_key field.
 */
apphosting.files.ReadKeyValueResponse.prototype.nextKeyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the next_key field.
 */
apphosting.files.ReadKeyValueResponse.prototype.clearNextKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the truncated_value field.
 * @return {?boolean} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getTruncatedValue = function() {
  return /** @type {?boolean} */ (this.get$Value(3));
};


/**
 * Gets the value of the truncated_value field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.getTruncatedValueOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the truncated_value field.
 * @param {boolean} value The value.
 */
apphosting.files.ReadKeyValueResponse.prototype.setTruncatedValue = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the truncated_value field has a value.
 */
apphosting.files.ReadKeyValueResponse.prototype.hasTruncatedValue = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the truncated_value field.
 */
apphosting.files.ReadKeyValueResponse.prototype.truncatedValueCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the truncated_value field.
 */
apphosting.files.ReadKeyValueResponse.prototype.clearTruncatedValue = function() {
  this.clear$Field(3);
};



/**
 * Message KeyValue.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ReadKeyValueResponse.KeyValue = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ReadKeyValueResponse.KeyValue, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ReadKeyValueResponse.KeyValue} The cloned message.
 * @override
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.clone;


/**
 * Gets the value of the key field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.setKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key field has a value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.hasKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key field.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.keyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key field.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.clearKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.files.ReadKeyValueResponse.KeyValue.prototype.clearValue = function() {
  this.clear$Field(2);
};



/**
 * Message ShuffleEnums.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleEnums = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleEnums, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleEnums} The cloned message.
 * @override
 */
apphosting.files.ShuffleEnums.prototype.clone;


/**
 * Enumeration InputFormat.
 * @enum {number}
 */
apphosting.files.ShuffleEnums.InputFormat = {
  RECORDS_KEY_VALUE_PROTO_INPUT: 1
};


/**
 * Enumeration OutputFormat.
 * @enum {number}
 */
apphosting.files.ShuffleEnums.OutputFormat = {
  RECORDS_KEY_MULTI_VALUE_PROTO_OUTPUT: 1
};


/**
 * Enumeration Status.
 * @enum {number}
 */
apphosting.files.ShuffleEnums.Status = {
  UNKNOWN: 1,
  RUNNING: 2,
  SUCCESS: 3,
  FAILURE: 4,
  INVALID_INPUT: 5,
  OUTPUT_ALREADY_EXISTS: 6,
  INCORRECT_SHUFFLE_SIZE_BYTES: 7
};



/**
 * Message ShuffleInputSpecification.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleInputSpecification = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleInputSpecification, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleInputSpecification} The cloned message.
 * @override
 */
apphosting.files.ShuffleInputSpecification.prototype.clone;


/**
 * Gets the value of the format field.
 * @return {?apphosting.files.ShuffleEnums.InputFormat} The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.getFormat = function() {
  return /** @type {?apphosting.files.ShuffleEnums.InputFormat} */ (this.get$Value(1));
};


/**
 * Gets the value of the format field or the default value if not set.
 * @return {apphosting.files.ShuffleEnums.InputFormat} The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.getFormatOrDefault = function() {
  return /** @type {apphosting.files.ShuffleEnums.InputFormat} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the format field.
 * @param {apphosting.files.ShuffleEnums.InputFormat} value The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.setFormat = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the format field has a value.
 */
apphosting.files.ShuffleInputSpecification.prototype.hasFormat = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the format field.
 */
apphosting.files.ShuffleInputSpecification.prototype.formatCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the format field.
 */
apphosting.files.ShuffleInputSpecification.prototype.clearFormat = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the path field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.getPath = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the path field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.getPathOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the path field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleInputSpecification.prototype.setPath = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the path field has a value.
 */
apphosting.files.ShuffleInputSpecification.prototype.hasPath = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the path field.
 */
apphosting.files.ShuffleInputSpecification.prototype.pathCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the path field.
 */
apphosting.files.ShuffleInputSpecification.prototype.clearPath = function() {
  this.clear$Field(2);
};



/**
 * Message ShuffleOutputSpecification.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleOutputSpecification = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleOutputSpecification, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleOutputSpecification} The cloned message.
 * @override
 */
apphosting.files.ShuffleOutputSpecification.prototype.clone;


/**
 * Gets the value of the format field.
 * @return {?apphosting.files.ShuffleEnums.OutputFormat} The value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.getFormat = function() {
  return /** @type {?apphosting.files.ShuffleEnums.OutputFormat} */ (this.get$Value(1));
};


/**
 * Gets the value of the format field or the default value if not set.
 * @return {apphosting.files.ShuffleEnums.OutputFormat} The value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.getFormatOrDefault = function() {
  return /** @type {apphosting.files.ShuffleEnums.OutputFormat} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the format field.
 * @param {apphosting.files.ShuffleEnums.OutputFormat} value The value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.setFormat = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the format field has a value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.hasFormat = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the format field.
 */
apphosting.files.ShuffleOutputSpecification.prototype.formatCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the format field.
 */
apphosting.files.ShuffleOutputSpecification.prototype.clearFormat = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the path field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.getPath = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the path field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.getPathOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the path field.
 * @param {string} value The value to add.
 */
apphosting.files.ShuffleOutputSpecification.prototype.addPath = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the path field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.files.ShuffleOutputSpecification.prototype.pathArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the path field has a value.
 */
apphosting.files.ShuffleOutputSpecification.prototype.hasPath = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the path field.
 */
apphosting.files.ShuffleOutputSpecification.prototype.pathCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the path field.
 */
apphosting.files.ShuffleOutputSpecification.prototype.clearPath = function() {
  this.clear$Field(2);
};



/**
 * Message ShuffleRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleRequest} The cloned message.
 * @override
 */
apphosting.files.ShuffleRequest.prototype.clone;


/**
 * Gets the value of the shuffle_name field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.prototype.getShuffleName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the shuffle_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.prototype.getShuffleNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the shuffle_name field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.prototype.setShuffleName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the shuffle_name field has a value.
 */
apphosting.files.ShuffleRequest.prototype.hasShuffleName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the shuffle_name field.
 */
apphosting.files.ShuffleRequest.prototype.shuffleNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the shuffle_name field.
 */
apphosting.files.ShuffleRequest.prototype.clearShuffleName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the input field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.files.ShuffleInputSpecification} The value.
 */
apphosting.files.ShuffleRequest.prototype.getInput = function(index) {
  return /** @type {apphosting.files.ShuffleInputSpecification} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the input field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.files.ShuffleInputSpecification} The value.
 */
apphosting.files.ShuffleRequest.prototype.getInputOrDefault = function(index) {
  return /** @type {!apphosting.files.ShuffleInputSpecification} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the input field.
 * @param {!apphosting.files.ShuffleInputSpecification} value The value to add.
 */
apphosting.files.ShuffleRequest.prototype.addInput = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the input field.
 * @return {!Array.<!apphosting.files.ShuffleInputSpecification>} The values in the field.
 */
apphosting.files.ShuffleRequest.prototype.inputArray = function() {
  return /** @type {!Array.<!apphosting.files.ShuffleInputSpecification>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the input field has a value.
 */
apphosting.files.ShuffleRequest.prototype.hasInput = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the input field.
 */
apphosting.files.ShuffleRequest.prototype.inputCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the input field.
 */
apphosting.files.ShuffleRequest.prototype.clearInput = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the output field.
 * @return {apphosting.files.ShuffleOutputSpecification} The value.
 */
apphosting.files.ShuffleRequest.prototype.getOutput = function() {
  return /** @type {apphosting.files.ShuffleOutputSpecification} */ (this.get$Value(3));
};


/**
 * Gets the value of the output field or the default value if not set.
 * @return {!apphosting.files.ShuffleOutputSpecification} The value.
 */
apphosting.files.ShuffleRequest.prototype.getOutputOrDefault = function() {
  return /** @type {!apphosting.files.ShuffleOutputSpecification} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the output field.
 * @param {!apphosting.files.ShuffleOutputSpecification} value The value.
 */
apphosting.files.ShuffleRequest.prototype.setOutput = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the output field has a value.
 */
apphosting.files.ShuffleRequest.prototype.hasOutput = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the output field.
 */
apphosting.files.ShuffleRequest.prototype.outputCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the output field.
 */
apphosting.files.ShuffleRequest.prototype.clearOutput = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the shuffle_size_bytes field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.prototype.getShuffleSizeBytes = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the shuffle_size_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.prototype.getShuffleSizeBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the shuffle_size_bytes field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.prototype.setShuffleSizeBytes = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the shuffle_size_bytes field has a value.
 */
apphosting.files.ShuffleRequest.prototype.hasShuffleSizeBytes = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the shuffle_size_bytes field.
 */
apphosting.files.ShuffleRequest.prototype.shuffleSizeBytesCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the shuffle_size_bytes field.
 */
apphosting.files.ShuffleRequest.prototype.clearShuffleSizeBytes = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the callback field.
 * @return {apphosting.files.ShuffleRequest.Callback} The value.
 */
apphosting.files.ShuffleRequest.prototype.getCallback = function() {
  return /** @type {apphosting.files.ShuffleRequest.Callback} */ (this.get$Value(5));
};


/**
 * Gets the value of the callback field or the default value if not set.
 * @return {!apphosting.files.ShuffleRequest.Callback} The value.
 */
apphosting.files.ShuffleRequest.prototype.getCallbackOrDefault = function() {
  return /** @type {!apphosting.files.ShuffleRequest.Callback} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the callback field.
 * @param {!apphosting.files.ShuffleRequest.Callback} value The value.
 */
apphosting.files.ShuffleRequest.prototype.setCallback = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the callback field has a value.
 */
apphosting.files.ShuffleRequest.prototype.hasCallback = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the callback field.
 */
apphosting.files.ShuffleRequest.prototype.callbackCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the callback field.
 */
apphosting.files.ShuffleRequest.prototype.clearCallback = function() {
  this.clear$Field(5);
};



/**
 * Message Callback.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleRequest.Callback = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleRequest.Callback, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleRequest.Callback} The cloned message.
 * @override
 */
apphosting.files.ShuffleRequest.Callback.prototype.clone;


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.setUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the url field has a value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.hasUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the url field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.urlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the url field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.clearUrl = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the app_version_id field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getAppVersionId = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the app_version_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getAppVersionIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the app_version_id field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.setAppVersionId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the app_version_id field has a value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.hasAppVersionId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the app_version_id field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.appVersionIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the app_version_id field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.clearAppVersionId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the method field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getMethod = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the method field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getMethodOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the method field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.setMethod = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the method field has a value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.hasMethod = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the method field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.methodCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the method field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.clearMethod = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the queue field.
 * @return {?string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getQueue = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the queue field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.getQueueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the queue field.
 * @param {string} value The value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.setQueue = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the queue field has a value.
 */
apphosting.files.ShuffleRequest.Callback.prototype.hasQueue = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the queue field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.queueCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the queue field.
 */
apphosting.files.ShuffleRequest.Callback.prototype.clearQueue = function() {
  this.clear$Field(4);
};



/**
 * Message ShuffleResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ShuffleResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ShuffleResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ShuffleResponse} The cloned message.
 * @override
 */
apphosting.files.ShuffleResponse.prototype.clone;



/**
 * Message GetShuffleStatusRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetShuffleStatusRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetShuffleStatusRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetShuffleStatusRequest} The cloned message.
 * @override
 */
apphosting.files.GetShuffleStatusRequest.prototype.clone;


/**
 * Gets the value of the shuffle_name field.
 * @return {?string} The value.
 */
apphosting.files.GetShuffleStatusRequest.prototype.getShuffleName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the shuffle_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.GetShuffleStatusRequest.prototype.getShuffleNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the shuffle_name field.
 * @param {string} value The value.
 */
apphosting.files.GetShuffleStatusRequest.prototype.setShuffleName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the shuffle_name field has a value.
 */
apphosting.files.GetShuffleStatusRequest.prototype.hasShuffleName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the shuffle_name field.
 */
apphosting.files.GetShuffleStatusRequest.prototype.shuffleNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the shuffle_name field.
 */
apphosting.files.GetShuffleStatusRequest.prototype.clearShuffleName = function() {
  this.clear$Field(1);
};



/**
 * Message GetShuffleStatusResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetShuffleStatusResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetShuffleStatusResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetShuffleStatusResponse} The cloned message.
 * @override
 */
apphosting.files.GetShuffleStatusResponse.prototype.clone;


/**
 * Gets the value of the status field.
 * @return {?apphosting.files.ShuffleEnums.Status} The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.getStatus = function() {
  return /** @type {?apphosting.files.ShuffleEnums.Status} */ (this.get$Value(1));
};


/**
 * Gets the value of the status field or the default value if not set.
 * @return {apphosting.files.ShuffleEnums.Status} The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.getStatusOrDefault = function() {
  return /** @type {apphosting.files.ShuffleEnums.Status} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the status field.
 * @param {apphosting.files.ShuffleEnums.Status} value The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.setStatus = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the status field has a value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.hasStatus = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the status field.
 */
apphosting.files.GetShuffleStatusResponse.prototype.statusCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the status field.
 */
apphosting.files.GetShuffleStatusResponse.prototype.clearStatus = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the description field.
 * @return {?string} The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.getDescription = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the description field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.getDescriptionOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the description field.
 * @param {string} value The value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.setDescription = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the description field has a value.
 */
apphosting.files.GetShuffleStatusResponse.prototype.hasDescription = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the description field.
 */
apphosting.files.GetShuffleStatusResponse.prototype.descriptionCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the description field.
 */
apphosting.files.GetShuffleStatusResponse.prototype.clearDescription = function() {
  this.clear$Field(2);
};



/**
 * Message GetCapabilitiesRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetCapabilitiesRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetCapabilitiesRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetCapabilitiesRequest} The cloned message.
 * @override
 */
apphosting.files.GetCapabilitiesRequest.prototype.clone;



/**
 * Message GetCapabilitiesResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetCapabilitiesResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetCapabilitiesResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetCapabilitiesResponse} The cloned message.
 * @override
 */
apphosting.files.GetCapabilitiesResponse.prototype.clone;


/**
 * Gets the value of the filesystem field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.getFilesystem = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the filesystem field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.getFilesystemOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the filesystem field.
 * @param {string} value The value to add.
 */
apphosting.files.GetCapabilitiesResponse.prototype.addFilesystem = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the filesystem field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.files.GetCapabilitiesResponse.prototype.filesystemArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the filesystem field has a value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.hasFilesystem = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filesystem field.
 */
apphosting.files.GetCapabilitiesResponse.prototype.filesystemCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filesystem field.
 */
apphosting.files.GetCapabilitiesResponse.prototype.clearFilesystem = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the shuffle_available field.
 * @return {?boolean} The value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.getShuffleAvailable = function() {
  return /** @type {?boolean} */ (this.get$Value(2));
};


/**
 * Gets the value of the shuffle_available field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.getShuffleAvailableOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the shuffle_available field.
 * @param {boolean} value The value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.setShuffleAvailable = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the shuffle_available field has a value.
 */
apphosting.files.GetCapabilitiesResponse.prototype.hasShuffleAvailable = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the shuffle_available field.
 */
apphosting.files.GetCapabilitiesResponse.prototype.shuffleAvailableCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the shuffle_available field.
 */
apphosting.files.GetCapabilitiesResponse.prototype.clearShuffleAvailable = function() {
  this.clear$Field(2);
};



/**
 * Message FinalizeRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.FinalizeRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.FinalizeRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.FinalizeRequest} The cloned message.
 * @override
 */
apphosting.files.FinalizeRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.files.FinalizeRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.FinalizeRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.files.FinalizeRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.files.FinalizeRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.files.FinalizeRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.files.FinalizeRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};



/**
 * Message FinalizeResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.FinalizeResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.FinalizeResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.FinalizeResponse} The cloned message.
 * @override
 */
apphosting.files.FinalizeResponse.prototype.clone;



/**
 * Message GetDefaultGsBucketNameRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetDefaultGsBucketNameRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetDefaultGsBucketNameRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetDefaultGsBucketNameRequest} The cloned message.
 * @override
 */
apphosting.files.GetDefaultGsBucketNameRequest.prototype.clone;



/**
 * Message GetDefaultGsBucketNameResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.GetDefaultGsBucketNameResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.GetDefaultGsBucketNameResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.GetDefaultGsBucketNameResponse} The cloned message.
 * @override
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.clone;


/**
 * Gets the value of the default_gs_bucket_name field.
 * @return {?string} The value.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.getDefaultGsBucketName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the default_gs_bucket_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.getDefaultGsBucketNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the default_gs_bucket_name field.
 * @param {string} value The value.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.setDefaultGsBucketName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the default_gs_bucket_name field has a value.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.hasDefaultGsBucketName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the default_gs_bucket_name field.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.defaultGsBucketNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the default_gs_bucket_name field.
 */
apphosting.files.GetDefaultGsBucketNameResponse.prototype.clearDefaultGsBucketName = function() {
  this.clear$Field(1);
};



/**
 * Message ListDirRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ListDirRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ListDirRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ListDirRequest} The cloned message.
 * @override
 */
apphosting.files.ListDirRequest.prototype.clone;


/**
 * Gets the value of the path field.
 * @return {?string} The value.
 */
apphosting.files.ListDirRequest.prototype.getPath = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the path field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ListDirRequest.prototype.getPathOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the path field.
 * @param {string} value The value.
 */
apphosting.files.ListDirRequest.prototype.setPath = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the path field has a value.
 */
apphosting.files.ListDirRequest.prototype.hasPath = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the path field.
 */
apphosting.files.ListDirRequest.prototype.pathCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the path field.
 */
apphosting.files.ListDirRequest.prototype.clearPath = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the marker field.
 * @return {?string} The value.
 */
apphosting.files.ListDirRequest.prototype.getMarker = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the marker field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ListDirRequest.prototype.getMarkerOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the marker field.
 * @param {string} value The value.
 */
apphosting.files.ListDirRequest.prototype.setMarker = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the marker field has a value.
 */
apphosting.files.ListDirRequest.prototype.hasMarker = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the marker field.
 */
apphosting.files.ListDirRequest.prototype.markerCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the marker field.
 */
apphosting.files.ListDirRequest.prototype.clearMarker = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_keys field.
 * @return {?string} The value.
 */
apphosting.files.ListDirRequest.prototype.getMaxKeys = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_keys field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ListDirRequest.prototype.getMaxKeysOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_keys field.
 * @param {string} value The value.
 */
apphosting.files.ListDirRequest.prototype.setMaxKeys = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_keys field has a value.
 */
apphosting.files.ListDirRequest.prototype.hasMaxKeys = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_keys field.
 */
apphosting.files.ListDirRequest.prototype.maxKeysCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_keys field.
 */
apphosting.files.ListDirRequest.prototype.clearMaxKeys = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the prefix field.
 * @return {?string} The value.
 */
apphosting.files.ListDirRequest.prototype.getPrefix = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the prefix field or the default value if not set.
 * @return {string} The value.
 */
apphosting.files.ListDirRequest.prototype.getPrefixOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the prefix field.
 * @param {string} value The value.
 */
apphosting.files.ListDirRequest.prototype.setPrefix = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the prefix field has a value.
 */
apphosting.files.ListDirRequest.prototype.hasPrefix = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the prefix field.
 */
apphosting.files.ListDirRequest.prototype.prefixCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the prefix field.
 */
apphosting.files.ListDirRequest.prototype.clearPrefix = function() {
  this.clear$Field(4);
};



/**
 * Message ListDirResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.files.ListDirResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.files.ListDirResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.files.ListDirResponse} The cloned message.
 * @override
 */
apphosting.files.ListDirResponse.prototype.clone;


/**
 * Gets the value of the filenames field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.files.ListDirResponse.prototype.getFilenames = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the filenames field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.files.ListDirResponse.prototype.getFilenamesOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the filenames field.
 * @param {string} value The value to add.
 */
apphosting.files.ListDirResponse.prototype.addFilenames = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the filenames field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.files.ListDirResponse.prototype.filenamesArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the filenames field has a value.
 */
apphosting.files.ListDirResponse.prototype.hasFilenames = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filenames field.
 */
apphosting.files.ListDirResponse.prototype.filenamesCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filenames field.
 */
apphosting.files.ListDirResponse.prototype.clearFilenames = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.files.FileServiceErrors, {
  0: {
    name: 'FileServiceErrors',
    fullName: 'apphosting.files.FileServiceErrors'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.KeyValue, {
  0: {
    name: 'KeyValue',
    fullName: 'apphosting.files.KeyValue'
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


goog.proto2.Message.set$Metadata(apphosting.files.KeyValues, {
  0: {
    name: 'KeyValues',
    fullName: 'apphosting.files.KeyValues'
  },
  1: {
    name: 'key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'value',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'partial',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.FileContentType, {
  0: {
    name: 'FileContentType',
    fullName: 'apphosting.files.FileContentType'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.CreateRequest, {
  0: {
    name: 'CreateRequest',
    fullName: 'apphosting.files.CreateRequest'
  },
  1: {
    name: 'filesystem',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'content_type',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.FileContentType.ContentType.RAW,
    type: apphosting.files.FileContentType.ContentType
  },
  3: {
    name: 'filename',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  4: {
    name: 'parameters',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.CreateRequest.Parameter
  },
  5: {
    name: 'expiration_time_seconds',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.CreateRequest.Parameter, {
  0: {
    name: 'Parameter',
    containingType: apphosting.files.CreateRequest,
    fullName: 'apphosting.files.CreateRequest.Parameter'
  },
  1: {
    name: 'name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.CreateResponse, {
  0: {
    name: 'CreateResponse',
    fullName: 'apphosting.files.CreateResponse'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.OpenRequest, {
  0: {
    name: 'OpenRequest',
    fullName: 'apphosting.files.OpenRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'content_type',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.FileContentType.ContentType.RAW,
    type: apphosting.files.FileContentType.ContentType
  },
  3: {
    name: 'open_mode',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.OpenRequest.OpenMode.APPEND,
    type: apphosting.files.OpenRequest.OpenMode
  },
  4: {
    name: 'exclusive_lock',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  5: {
    name: 'buffered_output',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  6: {
    name: 'open_lease_time_seconds',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 30,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.OpenResponse, {
  0: {
    name: 'OpenResponse',
    fullName: 'apphosting.files.OpenResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.CloseRequest, {
  0: {
    name: 'CloseRequest',
    fullName: 'apphosting.files.CloseRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'finalize',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.CloseResponse, {
  0: {
    name: 'CloseResponse',
    fullName: 'apphosting.files.CloseResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.FileStat, {
  0: {
    name: 'FileStat',
    fullName: 'apphosting.files.FileStat'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'content_type',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.FileContentType.ContentType.RAW,
    type: apphosting.files.FileContentType.ContentType
  },
  3: {
    name: 'finalized',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  },
  4: {
    name: 'length',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'ctime',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  6: {
    name: 'mtime',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.StatRequest, {
  0: {
    name: 'StatRequest',
    fullName: 'apphosting.files.StatRequest'
  },
  1: {
    name: 'filename',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'file_glob',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.StatResponse, {
  0: {
    name: 'StatResponse',
    fullName: 'apphosting.files.StatResponse'
  },
  1: {
    name: 'stat',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.FileStat
  },
  2: {
    name: 'more_files_found',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.AppendRequest, {
  0: {
    name: 'AppendRequest',
    fullName: 'apphosting.files.AppendRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'data',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'sequence_key',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.AppendResponse, {
  0: {
    name: 'AppendResponse',
    fullName: 'apphosting.files.AppendResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.DeleteRequest, {
  0: {
    name: 'DeleteRequest',
    fullName: 'apphosting.files.DeleteRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.DeleteResponse, {
  0: {
    name: 'DeleteResponse',
    fullName: 'apphosting.files.DeleteResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ReadRequest, {
  0: {
    name: 'ReadRequest',
    fullName: 'apphosting.files.ReadRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'pos',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'max_bytes',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ReadResponse, {
  0: {
    name: 'ReadResponse',
    fullName: 'apphosting.files.ReadResponse'
  },
  1: {
    name: 'data',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ReadKeyValueRequest, {
  0: {
    name: 'ReadKeyValueRequest',
    fullName: 'apphosting.files.ReadKeyValueRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'start_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'max_bytes',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'value_pos',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ReadKeyValueResponse, {
  0: {
    name: 'ReadKeyValueResponse',
    fullName: 'apphosting.files.ReadKeyValueResponse'
  },
  1: {
    name: 'data',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.ReadKeyValueResponse.KeyValue
  },
  2: {
    name: 'next_key',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'truncated_value',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ReadKeyValueResponse.KeyValue, {
  0: {
    name: 'KeyValue',
    containingType: apphosting.files.ReadKeyValueResponse,
    fullName: 'apphosting.files.ReadKeyValueResponse.KeyValue'
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


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleEnums, {
  0: {
    name: 'ShuffleEnums',
    fullName: 'apphosting.files.ShuffleEnums'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleInputSpecification, {
  0: {
    name: 'ShuffleInputSpecification',
    fullName: 'apphosting.files.ShuffleInputSpecification'
  },
  1: {
    name: 'format',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.ShuffleEnums.InputFormat.RECORDS_KEY_VALUE_PROTO_INPUT,
    type: apphosting.files.ShuffleEnums.InputFormat
  },
  2: {
    name: 'path',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleOutputSpecification, {
  0: {
    name: 'ShuffleOutputSpecification',
    fullName: 'apphosting.files.ShuffleOutputSpecification'
  },
  1: {
    name: 'format',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.ShuffleEnums.OutputFormat.RECORDS_KEY_MULTI_VALUE_PROTO_OUTPUT,
    type: apphosting.files.ShuffleEnums.OutputFormat
  },
  2: {
    name: 'path',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleRequest, {
  0: {
    name: 'ShuffleRequest',
    fullName: 'apphosting.files.ShuffleRequest'
  },
  1: {
    name: 'shuffle_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'input',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.ShuffleInputSpecification
  },
  3: {
    name: 'output',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.ShuffleOutputSpecification
  },
  4: {
    name: 'shuffle_size_bytes',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'callback',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.files.ShuffleRequest.Callback
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleRequest.Callback, {
  0: {
    name: 'Callback',
    containingType: apphosting.files.ShuffleRequest,
    fullName: 'apphosting.files.ShuffleRequest.Callback'
  },
  1: {
    name: 'url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'app_version_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'method',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: 'POST',
    type: String
  },
  4: {
    name: 'queue',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: 'default',
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ShuffleResponse, {
  0: {
    name: 'ShuffleResponse',
    fullName: 'apphosting.files.ShuffleResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetShuffleStatusRequest, {
  0: {
    name: 'GetShuffleStatusRequest',
    fullName: 'apphosting.files.GetShuffleStatusRequest'
  },
  1: {
    name: 'shuffle_name',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetShuffleStatusResponse, {
  0: {
    name: 'GetShuffleStatusResponse',
    fullName: 'apphosting.files.GetShuffleStatusResponse'
  },
  1: {
    name: 'status',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.files.ShuffleEnums.Status.UNKNOWN,
    type: apphosting.files.ShuffleEnums.Status
  },
  2: {
    name: 'description',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetCapabilitiesRequest, {
  0: {
    name: 'GetCapabilitiesRequest',
    fullName: 'apphosting.files.GetCapabilitiesRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetCapabilitiesResponse, {
  0: {
    name: 'GetCapabilitiesResponse',
    fullName: 'apphosting.files.GetCapabilitiesResponse'
  },
  1: {
    name: 'filesystem',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'shuffle_available',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.FinalizeRequest, {
  0: {
    name: 'FinalizeRequest',
    fullName: 'apphosting.files.FinalizeRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.FinalizeResponse, {
  0: {
    name: 'FinalizeResponse',
    fullName: 'apphosting.files.FinalizeResponse'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetDefaultGsBucketNameRequest, {
  0: {
    name: 'GetDefaultGsBucketNameRequest',
    fullName: 'apphosting.files.GetDefaultGsBucketNameRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.GetDefaultGsBucketNameResponse, {
  0: {
    name: 'GetDefaultGsBucketNameResponse',
    fullName: 'apphosting.files.GetDefaultGsBucketNameResponse'
  },
  1: {
    name: 'default_gs_bucket_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ListDirRequest, {
  0: {
    name: 'ListDirRequest',
    fullName: 'apphosting.files.ListDirRequest'
  },
  1: {
    name: 'path',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'marker',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'max_keys',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'prefix',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.files.ListDirResponse, {
  0: {
    name: 'ListDirResponse',
    fullName: 'apphosting.files.ListDirResponse'
  },
  1: {
    name: 'filenames',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
