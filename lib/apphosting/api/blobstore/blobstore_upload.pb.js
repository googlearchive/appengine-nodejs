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

goog.provide('apphosting.BlobstoreUploadInfo');
goog.provide('apphosting.BlobInfo');
goog.provide('apphosting.BlobRecord');
goog.provide('apphosting.BlobUploadCheckpoint');

goog.require('goog.proto2.Message');



/**
 * Message BlobstoreUploadInfo.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlobstoreUploadInfo = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlobstoreUploadInfo, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlobstoreUploadInfo} The cloned message.
 * @override
 */
apphosting.BlobstoreUploadInfo.prototype.clone;


/**
 * Gets the value of the app_id field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getAppId = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the app_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getAppIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the app_id field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setAppId = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the app_id field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasAppId = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the app_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.appIdCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the app_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearAppId = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the success_path field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getSuccessPath = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the success_path field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getSuccessPathOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the success_path field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setSuccessPath = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the success_path field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasSuccessPath = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the success_path field.
 */
apphosting.BlobstoreUploadInfo.prototype.successPathCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the success_path field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearSuccessPath = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the gaia_id field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getGaiaId = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the gaia_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getGaiaIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the gaia_id field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setGaiaId = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the gaia_id field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasGaiaId = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the gaia_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.gaiaIdCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the gaia_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearGaiaId = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the https field.
 * @return {?boolean} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getHttps = function() {
  return /** @type {?boolean} */ (this.get$Value(5));
};


/**
 * Gets the value of the https field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getHttpsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the https field.
 * @param {boolean} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setHttps = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the https field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasHttps = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the https field.
 */
apphosting.BlobstoreUploadInfo.prototype.httpsCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the https field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearHttps = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the max_upload_size_bytes field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getMaxUploadSizeBytes = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the max_upload_size_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getMaxUploadSizeBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the max_upload_size_bytes field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setMaxUploadSizeBytes = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the max_upload_size_bytes field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasMaxUploadSizeBytes = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the max_upload_size_bytes field.
 */
apphosting.BlobstoreUploadInfo.prototype.maxUploadSizeBytesCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the max_upload_size_bytes field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearMaxUploadSizeBytes = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the max_upload_size_per_blob_bytes field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getMaxUploadSizePerBlobBytes = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the max_upload_size_per_blob_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getMaxUploadSizePerBlobBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the max_upload_size_per_blob_bytes field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setMaxUploadSizePerBlobBytes = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the max_upload_size_per_blob_bytes field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasMaxUploadSizePerBlobBytes = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the max_upload_size_per_blob_bytes field.
 */
apphosting.BlobstoreUploadInfo.prototype.maxUploadSizePerBlobBytesCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the max_upload_size_per_blob_bytes field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearMaxUploadSizePerBlobBytes = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the gs_bucket_name field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getGsBucketName = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the gs_bucket_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getGsBucketNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the gs_bucket_name field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setGsBucketName = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the gs_bucket_name field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasGsBucketName = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the gs_bucket_name field.
 */
apphosting.BlobstoreUploadInfo.prototype.gsBucketNameCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the gs_bucket_name field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearGsBucketName = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the robot_gaia_id field.
 * @return {?string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getRobotGaiaId = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the robot_gaia_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobstoreUploadInfo.prototype.getRobotGaiaIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the robot_gaia_id field.
 * @param {string} value The value.
 */
apphosting.BlobstoreUploadInfo.prototype.setRobotGaiaId = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the robot_gaia_id field has a value.
 */
apphosting.BlobstoreUploadInfo.prototype.hasRobotGaiaId = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the robot_gaia_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.robotGaiaIdCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the robot_gaia_id field.
 */
apphosting.BlobstoreUploadInfo.prototype.clearRobotGaiaId = function() {
  this.clear$Field(9);
};



/**
 * Message BlobInfo.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlobInfo = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlobInfo, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlobInfo} The cloned message.
 * @override
 */
apphosting.BlobInfo.prototype.clone;


/**
 * Gets the value of the content_type field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getContentType = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the content_type field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getContentTypeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the content_type field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setContentType = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the content_type field has a value.
 */
apphosting.BlobInfo.prototype.hasContentType = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the content_type field.
 */
apphosting.BlobInfo.prototype.contentTypeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the content_type field.
 */
apphosting.BlobInfo.prototype.clearContentType = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the creation field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getCreation = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the creation field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getCreationOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the creation field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setCreation = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the creation field has a value.
 */
apphosting.BlobInfo.prototype.hasCreation = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the creation field.
 */
apphosting.BlobInfo.prototype.creationCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the creation field.
 */
apphosting.BlobInfo.prototype.clearCreation = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the filename field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getFilename = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the filename field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getFilenameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the filename field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setFilename = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the filename field has a value.
 */
apphosting.BlobInfo.prototype.hasFilename = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the filename field.
 */
apphosting.BlobInfo.prototype.filenameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the filename field.
 */
apphosting.BlobInfo.prototype.clearFilename = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the size field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getSize = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the size field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getSizeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the size field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setSize = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the size field has a value.
 */
apphosting.BlobInfo.prototype.hasSize = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the size field.
 */
apphosting.BlobInfo.prototype.sizeCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the size field.
 */
apphosting.BlobInfo.prototype.clearSize = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the md5_hash field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getMd5Hash = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the md5_hash field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getMd5HashOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the md5_hash field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setMd5Hash = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the md5_hash field has a value.
 */
apphosting.BlobInfo.prototype.hasMd5Hash = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the md5_hash field.
 */
apphosting.BlobInfo.prototype.md5HashCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the md5_hash field.
 */
apphosting.BlobInfo.prototype.clearMd5Hash = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the creation_handle field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getCreationHandle = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the creation_handle field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getCreationHandleOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the creation_handle field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setCreationHandle = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the creation_handle field has a value.
 */
apphosting.BlobInfo.prototype.hasCreationHandle = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the creation_handle field.
 */
apphosting.BlobInfo.prototype.creationHandleCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the creation_handle field.
 */
apphosting.BlobInfo.prototype.clearCreationHandle = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the upload_id field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getUploadId = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the upload_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getUploadIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the upload_id field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setUploadId = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the upload_id field has a value.
 */
apphosting.BlobInfo.prototype.hasUploadId = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the upload_id field.
 */
apphosting.BlobInfo.prototype.uploadIdCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the upload_id field.
 */
apphosting.BlobInfo.prototype.clearUploadId = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the gs_object_name field.
 * @return {?string} The value.
 */
apphosting.BlobInfo.prototype.getGsObjectName = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the gs_object_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobInfo.prototype.getGsObjectNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the gs_object_name field.
 * @param {string} value The value.
 */
apphosting.BlobInfo.prototype.setGsObjectName = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the gs_object_name field has a value.
 */
apphosting.BlobInfo.prototype.hasGsObjectName = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the gs_object_name field.
 */
apphosting.BlobInfo.prototype.gsObjectNameCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the gs_object_name field.
 */
apphosting.BlobInfo.prototype.clearGsObjectName = function() {
  this.clear$Field(8);
};



/**
 * Message BlobRecord.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlobRecord = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlobRecord, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlobRecord} The cloned message.
 * @override
 */
apphosting.BlobRecord.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.BlobRecord.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobRecord.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.BlobRecord.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.BlobRecord.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.BlobRecord.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.BlobRecord.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the blob_info field.
 * @return {apphosting.BlobInfo} The value.
 */
apphosting.BlobRecord.prototype.getBlobInfo = function() {
  return /** @type {apphosting.BlobInfo} */ (this.get$Value(2));
};


/**
 * Gets the value of the blob_info field or the default value if not set.
 * @return {!apphosting.BlobInfo} The value.
 */
apphosting.BlobRecord.prototype.getBlobInfoOrDefault = function() {
  return /** @type {!apphosting.BlobInfo} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the blob_info field.
 * @param {!apphosting.BlobInfo} value The value.
 */
apphosting.BlobRecord.prototype.setBlobInfo = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the blob_info field has a value.
 */
apphosting.BlobRecord.prototype.hasBlobInfo = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the blob_info field.
 */
apphosting.BlobRecord.prototype.blobInfoCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the blob_info field.
 */
apphosting.BlobRecord.prototype.clearBlobInfo = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the gs_object_name field.
 * @return {?string} The value.
 */
apphosting.BlobRecord.prototype.getGsObjectName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the gs_object_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobRecord.prototype.getGsObjectNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the gs_object_name field.
 * @param {string} value The value.
 */
apphosting.BlobRecord.prototype.setGsObjectName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the gs_object_name field has a value.
 */
apphosting.BlobRecord.prototype.hasGsObjectName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the gs_object_name field.
 */
apphosting.BlobRecord.prototype.gsObjectNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the gs_object_name field.
 */
apphosting.BlobRecord.prototype.clearGsObjectName = function() {
  this.clear$Field(3);
};



/**
 * Message BlobUploadCheckpoint.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.BlobUploadCheckpoint = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.BlobUploadCheckpoint, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.BlobUploadCheckpoint} The cloned message.
 * @override
 */
apphosting.BlobUploadCheckpoint.prototype.clone;


/**
 * Gets the value of the total_bytes field.
 * @return {?string} The value.
 */
apphosting.BlobUploadCheckpoint.prototype.getTotalBytes = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the total_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.BlobUploadCheckpoint.prototype.getTotalBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the total_bytes field.
 * @param {string} value The value.
 */
apphosting.BlobUploadCheckpoint.prototype.setTotalBytes = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the total_bytes field has a value.
 */
apphosting.BlobUploadCheckpoint.prototype.hasTotalBytes = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the total_bytes field.
 */
apphosting.BlobUploadCheckpoint.prototype.totalBytesCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the total_bytes field.
 */
apphosting.BlobUploadCheckpoint.prototype.clearTotalBytes = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the blobstore_upload_info field.
 * @return {apphosting.BlobstoreUploadInfo} The value.
 */
apphosting.BlobUploadCheckpoint.prototype.getBlobstoreUploadInfo = function() {
  return /** @type {apphosting.BlobstoreUploadInfo} */ (this.get$Value(2));
};


/**
 * Gets the value of the blobstore_upload_info field or the default value if not set.
 * @return {!apphosting.BlobstoreUploadInfo} The value.
 */
apphosting.BlobUploadCheckpoint.prototype.getBlobstoreUploadInfoOrDefault = function() {
  return /** @type {!apphosting.BlobstoreUploadInfo} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the blobstore_upload_info field.
 * @param {!apphosting.BlobstoreUploadInfo} value The value.
 */
apphosting.BlobUploadCheckpoint.prototype.setBlobstoreUploadInfo = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the blobstore_upload_info field has a value.
 */
apphosting.BlobUploadCheckpoint.prototype.hasBlobstoreUploadInfo = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the blobstore_upload_info field.
 */
apphosting.BlobUploadCheckpoint.prototype.blobstoreUploadInfoCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the blobstore_upload_info field.
 */
apphosting.BlobUploadCheckpoint.prototype.clearBlobstoreUploadInfo = function() {
  this.clear$Field(2);
};


goog.proto2.Message.set$Metadata(apphosting.BlobstoreUploadInfo, {
  0: {
    name: 'BlobstoreUploadInfo',
    fullName: 'apphosting.BlobstoreUploadInfo'
  },
  1: {
    name: 'app_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'success_path',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'gaia_id',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  5: {
    name: 'https',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  6: {
    name: 'max_upload_size_bytes',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  7: {
    name: 'max_upload_size_per_blob_bytes',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  8: {
    name: 'gs_bucket_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  9: {
    name: 'robot_gaia_id',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.BlobInfo, {
  0: {
    name: 'BlobInfo',
    fullName: 'apphosting.BlobInfo'
  },
  1: {
    name: 'content_type',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'creation',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'filename',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'size',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  6: {
    name: 'md5_hash',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'creation_handle',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  7: {
    name: 'upload_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  8: {
    name: 'gs_object_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.BlobRecord, {
  0: {
    name: 'BlobRecord',
    fullName: 'apphosting.BlobRecord'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'blob_info',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.BlobInfo
  },
  3: {
    name: 'gs_object_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.BlobUploadCheckpoint, {
  0: {
    name: 'BlobUploadCheckpoint',
    fullName: 'apphosting.BlobUploadCheckpoint'
  },
  1: {
    name: 'total_bytes',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    defaultValue: '0',
    type: String
  },
  2: {
    name: 'blobstore_upload_info',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.BlobstoreUploadInfo
  }
});
