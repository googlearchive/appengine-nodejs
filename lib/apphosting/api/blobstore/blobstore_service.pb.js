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

goog.provide('apphosting.BlobstoreServiceError');
goog.provide('apphosting.BlobstoreServiceError.ErrorCode');
goog.provide('apphosting.CreateUploadURLRequest');
goog.provide('apphosting.CreateUploadURLResponse');
goog.provide('apphosting.DeleteBlobRequest');
goog.provide('apphosting.FetchDataRequest');
goog.provide('apphosting.FetchDataResponse');
goog.provide('apphosting.CloneBlobRequest');
goog.provide('apphosting.CloneBlobResponse');
goog.provide('apphosting.DecodeBlobKeyRequest');
goog.provide('apphosting.DecodeBlobKeyResponse');
goog.provide('apphosting.CreateEncodedGoogleStorageKeyRequest');
goog.provide('apphosting.CreateEncodedGoogleStorageKeyResponse');

goog.require('goog.proto2.Message');



/**
 * Message BlobstoreServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlobstoreServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlobstoreServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlobstoreServiceError} The cloned message.
 * @override
 */
apphosting.BlobstoreServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.BlobstoreServiceError.ErrorCode = {
  OK: 0,
  INTERNAL_ERROR: 1,
  URL_TOO_LONG: 2,
  PERMISSION_DENIED: 3,
  BLOB_NOT_FOUND: 4,
  DATA_INDEX_OUT_OF_RANGE: 5,
  BLOB_FETCH_SIZE_TOO_LARGE: 6,
  ARGUMENT_OUT_OF_RANGE: 8,
  INVALID_BLOB_KEY: 9
};



/**
 * Message CreateUploadURLRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateUploadURLRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateUploadURLRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateUploadURLRequest} The cloned message.
 * @override
 */
apphosting.CreateUploadURLRequest.prototype.clone;


/**
 * Gets the value of the success_path field.
 * @return {?string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getSuccessPath = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the success_path field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getSuccessPathOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the success_path field.
 * @param {string} value The value.
 */
apphosting.CreateUploadURLRequest.prototype.setSuccessPath = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the success_path field has a value.
 */
apphosting.CreateUploadURLRequest.prototype.hasSuccessPath = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the success_path field.
 */
apphosting.CreateUploadURLRequest.prototype.successPathCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the success_path field.
 */
apphosting.CreateUploadURLRequest.prototype.clearSuccessPath = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the max_upload_size_bytes field.
 * @return {?string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getMaxUploadSizeBytes = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the max_upload_size_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getMaxUploadSizeBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the max_upload_size_bytes field.
 * @param {string} value The value.
 */
apphosting.CreateUploadURLRequest.prototype.setMaxUploadSizeBytes = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the max_upload_size_bytes field has a value.
 */
apphosting.CreateUploadURLRequest.prototype.hasMaxUploadSizeBytes = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the max_upload_size_bytes field.
 */
apphosting.CreateUploadURLRequest.prototype.maxUploadSizeBytesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the max_upload_size_bytes field.
 */
apphosting.CreateUploadURLRequest.prototype.clearMaxUploadSizeBytes = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the max_upload_size_per_blob_bytes field.
 * @return {?string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getMaxUploadSizePerBlobBytes = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the max_upload_size_per_blob_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getMaxUploadSizePerBlobBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the max_upload_size_per_blob_bytes field.
 * @param {string} value The value.
 */
apphosting.CreateUploadURLRequest.prototype.setMaxUploadSizePerBlobBytes = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the max_upload_size_per_blob_bytes field has a value.
 */
apphosting.CreateUploadURLRequest.prototype.hasMaxUploadSizePerBlobBytes = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the max_upload_size_per_blob_bytes field.
 */
apphosting.CreateUploadURLRequest.prototype.maxUploadSizePerBlobBytesCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the max_upload_size_per_blob_bytes field.
 */
apphosting.CreateUploadURLRequest.prototype.clearMaxUploadSizePerBlobBytes = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the gs_bucket_name field.
 * @return {?string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getGsBucketName = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the gs_bucket_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateUploadURLRequest.prototype.getGsBucketNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the gs_bucket_name field.
 * @param {string} value The value.
 */
apphosting.CreateUploadURLRequest.prototype.setGsBucketName = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the gs_bucket_name field has a value.
 */
apphosting.CreateUploadURLRequest.prototype.hasGsBucketName = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the gs_bucket_name field.
 */
apphosting.CreateUploadURLRequest.prototype.gsBucketNameCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the gs_bucket_name field.
 */
apphosting.CreateUploadURLRequest.prototype.clearGsBucketName = function() {
  this.clear$Field(4);
};



/**
 * Message CreateUploadURLResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateUploadURLResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateUploadURLResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateUploadURLResponse} The cloned message.
 * @override
 */
apphosting.CreateUploadURLResponse.prototype.clone;


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
apphosting.CreateUploadURLResponse.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateUploadURLResponse.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
apphosting.CreateUploadURLResponse.prototype.setUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the url field has a value.
 */
apphosting.CreateUploadURLResponse.prototype.hasUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the url field.
 */
apphosting.CreateUploadURLResponse.prototype.urlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the url field.
 */
apphosting.CreateUploadURLResponse.prototype.clearUrl = function() {
  this.clear$Field(1);
};



/**
 * Message DeleteBlobRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.DeleteBlobRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.DeleteBlobRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.DeleteBlobRequest} The cloned message.
 * @override
 */
apphosting.DeleteBlobRequest.prototype.clone;


/**
 * Gets the value of the blob_key field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.DeleteBlobRequest.prototype.getBlobKey = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the blob_key field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.DeleteBlobRequest.prototype.getBlobKeyOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the blob_key field.
 * @param {string} value The value to add.
 */
apphosting.DeleteBlobRequest.prototype.addBlobKey = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the blob_key field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.DeleteBlobRequest.prototype.blobKeyArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.DeleteBlobRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.DeleteBlobRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.DeleteBlobRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the token field.
 * @return {?string} The value.
 */
apphosting.DeleteBlobRequest.prototype.getToken = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the token field or the default value if not set.
 * @return {string} The value.
 */
apphosting.DeleteBlobRequest.prototype.getTokenOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the token field.
 * @param {string} value The value.
 */
apphosting.DeleteBlobRequest.prototype.setToken = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the token field has a value.
 */
apphosting.DeleteBlobRequest.prototype.hasToken = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the token field.
 */
apphosting.DeleteBlobRequest.prototype.tokenCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the token field.
 */
apphosting.DeleteBlobRequest.prototype.clearToken = function() {
  this.clear$Field(2);
};



/**
 * Message FetchDataRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.FetchDataRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.FetchDataRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.FetchDataRequest} The cloned message.
 * @override
 */
apphosting.FetchDataRequest.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.FetchDataRequest.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.FetchDataRequest.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.FetchDataRequest.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.FetchDataRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.FetchDataRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.FetchDataRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the start_index field.
 * @return {?string} The value.
 */
apphosting.FetchDataRequest.prototype.getStartIndex = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the start_index field or the default value if not set.
 * @return {string} The value.
 */
apphosting.FetchDataRequest.prototype.getStartIndexOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the start_index field.
 * @param {string} value The value.
 */
apphosting.FetchDataRequest.prototype.setStartIndex = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the start_index field has a value.
 */
apphosting.FetchDataRequest.prototype.hasStartIndex = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the start_index field.
 */
apphosting.FetchDataRequest.prototype.startIndexCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the start_index field.
 */
apphosting.FetchDataRequest.prototype.clearStartIndex = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the end_index field.
 * @return {?string} The value.
 */
apphosting.FetchDataRequest.prototype.getEndIndex = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the end_index field or the default value if not set.
 * @return {string} The value.
 */
apphosting.FetchDataRequest.prototype.getEndIndexOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the end_index field.
 * @param {string} value The value.
 */
apphosting.FetchDataRequest.prototype.setEndIndex = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the end_index field has a value.
 */
apphosting.FetchDataRequest.prototype.hasEndIndex = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the end_index field.
 */
apphosting.FetchDataRequest.prototype.endIndexCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the end_index field.
 */
apphosting.FetchDataRequest.prototype.clearEndIndex = function() {
  this.clear$Field(3);
};



/**
 * Message FetchDataResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.FetchDataResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.FetchDataResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.FetchDataResponse} The cloned message.
 * @override
 */
apphosting.FetchDataResponse.prototype.clone;


/**
 * Gets the value of the data field.
 * @return {?string} The value.
 */
apphosting.FetchDataResponse.prototype.getData = function() {
  return /** @type {?string} */ (this.get$Value(1000));
};


/**
 * Gets the value of the data field or the default value if not set.
 * @return {string} The value.
 */
apphosting.FetchDataResponse.prototype.getDataOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1000));
};


/**
 * Sets the value of the data field.
 * @param {string} value The value.
 */
apphosting.FetchDataResponse.prototype.setData = function(value) {
  this.set$Value(1000, value);
};


/**
 * @return {boolean} Whether the data field has a value.
 */
apphosting.FetchDataResponse.prototype.hasData = function() {
  return this.has$Value(1000);
};


/**
 * @return {number} The number of values in the data field.
 */
apphosting.FetchDataResponse.prototype.dataCount = function() {
  return this.count$Values(1000);
};


/**
 * Clears the values in the data field.
 */
apphosting.FetchDataResponse.prototype.clearData = function() {
  this.clear$Field(1000);
};



/**
 * Message CloneBlobRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CloneBlobRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CloneBlobRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CloneBlobRequest} The cloned message.
 * @override
 */
apphosting.CloneBlobRequest.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.CloneBlobRequest.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CloneBlobRequest.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.CloneBlobRequest.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.CloneBlobRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.CloneBlobRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.CloneBlobRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the mime_type field.
 * @return {?string} The value.
 */
apphosting.CloneBlobRequest.prototype.getMimeType = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the mime_type field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CloneBlobRequest.prototype.getMimeTypeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the mime_type field.
 * @param {string} value The value.
 */
apphosting.CloneBlobRequest.prototype.setMimeType = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the mime_type field has a value.
 */
apphosting.CloneBlobRequest.prototype.hasMimeType = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the mime_type field.
 */
apphosting.CloneBlobRequest.prototype.mimeTypeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the mime_type field.
 */
apphosting.CloneBlobRequest.prototype.clearMimeType = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the target_app_id field.
 * @return {?string} The value.
 */
apphosting.CloneBlobRequest.prototype.getTargetAppId = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the target_app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CloneBlobRequest.prototype.getTargetAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the target_app_id field.
 * @param {string} value The value.
 */
apphosting.CloneBlobRequest.prototype.setTargetAppId = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the target_app_id field has a value.
 */
apphosting.CloneBlobRequest.prototype.hasTargetAppId = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the target_app_id field.
 */
apphosting.CloneBlobRequest.prototype.targetAppIdCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the target_app_id field.
 */
apphosting.CloneBlobRequest.prototype.clearTargetAppId = function() {
  this.clear$Field(3);
};



/**
 * Message CloneBlobResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CloneBlobResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CloneBlobResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CloneBlobResponse} The cloned message.
 * @override
 */
apphosting.CloneBlobResponse.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.CloneBlobResponse.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CloneBlobResponse.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.CloneBlobResponse.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.CloneBlobResponse.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.CloneBlobResponse.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.CloneBlobResponse.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};



/**
 * Message DecodeBlobKeyRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.DecodeBlobKeyRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.DecodeBlobKeyRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.DecodeBlobKeyRequest} The cloned message.
 * @override
 */
apphosting.DecodeBlobKeyRequest.prototype.clone;


/**
 * Gets the value of the blob_key field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.DecodeBlobKeyRequest.prototype.getBlobKey = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the blob_key field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.DecodeBlobKeyRequest.prototype.getBlobKeyOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the blob_key field.
 * @param {string} value The value to add.
 */
apphosting.DecodeBlobKeyRequest.prototype.addBlobKey = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the blob_key field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.DecodeBlobKeyRequest.prototype.blobKeyArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.DecodeBlobKeyRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.DecodeBlobKeyRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.DecodeBlobKeyRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};



/**
 * Message DecodeBlobKeyResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.DecodeBlobKeyResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.DecodeBlobKeyResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.DecodeBlobKeyResponse} The cloned message.
 * @override
 */
apphosting.DecodeBlobKeyResponse.prototype.clone;


/**
 * Gets the value of the decoded field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.DecodeBlobKeyResponse.prototype.getDecoded = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the decoded field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.DecodeBlobKeyResponse.prototype.getDecodedOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the decoded field.
 * @param {string} value The value to add.
 */
apphosting.DecodeBlobKeyResponse.prototype.addDecoded = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the decoded field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.DecodeBlobKeyResponse.prototype.decodedArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the decoded field has a value.
 */
apphosting.DecodeBlobKeyResponse.prototype.hasDecoded = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the decoded field.
 */
apphosting.DecodeBlobKeyResponse.prototype.decodedCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the decoded field.
 */
apphosting.DecodeBlobKeyResponse.prototype.clearDecoded = function() {
  this.clear$Field(1);
};



/**
 * Message CreateEncodedGoogleStorageKeyRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateEncodedGoogleStorageKeyRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateEncodedGoogleStorageKeyRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateEncodedGoogleStorageKeyRequest} The cloned message.
 * @override
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.clone;


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.setFilename = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.hasFilename = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.filenameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the filename field.
 */
apphosting.CreateEncodedGoogleStorageKeyRequest.prototype.clearFilename = function() {
  this.clear$Field(1);
};



/**
 * Message CreateEncodedGoogleStorageKeyResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateEncodedGoogleStorageKeyResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateEncodedGoogleStorageKeyResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateEncodedGoogleStorageKeyResponse} The cloned message.
 * @override
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.CreateEncodedGoogleStorageKeyResponse.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.BlobstoreServiceError, {
  0: {
    name: 'BlobstoreServiceError',
    fullName: 'apphosting.BlobstoreServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateUploadURLRequest, {
  0: {
    name: 'CreateUploadURLRequest',
    fullName: 'apphosting.CreateUploadURLRequest'
  },
  1: {
    name: 'success_path',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'max_upload_size_bytes',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'max_upload_size_per_blob_bytes',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  4: {
    name: 'gs_bucket_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateUploadURLResponse, {
  0: {
    name: 'CreateUploadURLResponse',
    fullName: 'apphosting.CreateUploadURLResponse'
  },
  1: {
    name: 'url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.DeleteBlobRequest, {
  0: {
    name: 'DeleteBlobRequest',
    fullName: 'apphosting.DeleteBlobRequest'
  },
  1: {
    name: 'blob_key',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'token',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.FetchDataRequest, {
  0: {
    name: 'FetchDataRequest',
    fullName: 'apphosting.FetchDataRequest'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'start_index',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'end_index',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.FetchDataResponse, {
  0: {
    name: 'FetchDataResponse',
    fullName: 'apphosting.FetchDataResponse'
  },
  1000: {
    name: 'data',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CloneBlobRequest, {
  0: {
    name: 'CloneBlobRequest',
    fullName: 'apphosting.CloneBlobRequest'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'mime_type',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'target_app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CloneBlobResponse, {
  0: {
    name: 'CloneBlobResponse',
    fullName: 'apphosting.CloneBlobResponse'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.DecodeBlobKeyRequest, {
  0: {
    name: 'DecodeBlobKeyRequest',
    fullName: 'apphosting.DecodeBlobKeyRequest'
  },
  1: {
    name: 'blob_key',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.DecodeBlobKeyResponse, {
  0: {
    name: 'DecodeBlobKeyResponse',
    fullName: 'apphosting.DecodeBlobKeyResponse'
  },
  1: {
    name: 'decoded',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateEncodedGoogleStorageKeyRequest, {
  0: {
    name: 'CreateEncodedGoogleStorageKeyRequest',
    fullName: 'apphosting.CreateEncodedGoogleStorageKeyRequest'
  },
  1: {
    name: 'filename',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateEncodedGoogleStorageKeyResponse, {
  0: {
    name: 'CreateEncodedGoogleStorageKeyResponse',
    fullName: 'apphosting.CreateEncodedGoogleStorageKeyResponse'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
