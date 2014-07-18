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

goog.provide('apphosting.ImagesServiceError');
goog.provide('apphosting.ImagesServiceError.ErrorCode');
goog.provide('apphosting.ImagesServiceTransform');
goog.provide('apphosting.ImagesServiceTransform.Type');
goog.provide('apphosting.Transform');
goog.provide('apphosting.ImageData');
goog.provide('apphosting.InputSettings');
goog.provide('apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE');
goog.provide('apphosting.OutputSettings');
goog.provide('apphosting.OutputSettings.MIME_TYPE');
goog.provide('apphosting.ImagesTransformRequest');
goog.provide('apphosting.ImagesTransformResponse');
goog.provide('apphosting.CompositeImageOptions');
goog.provide('apphosting.CompositeImageOptions.ANCHOR');
goog.provide('apphosting.ImagesCanvas');
goog.provide('apphosting.ImagesCompositeRequest');
goog.provide('apphosting.ImagesCompositeResponse');
goog.provide('apphosting.ImagesHistogramRequest');
goog.provide('apphosting.ImagesHistogram');
goog.provide('apphosting.ImagesHistogramResponse');
goog.provide('apphosting.ImagesGetUrlBaseRequest');
goog.provide('apphosting.ImagesGetUrlBaseResponse');
goog.provide('apphosting.ImagesDeleteUrlBaseRequest');
goog.provide('apphosting.ImagesDeleteUrlBaseResponse');

goog.require('goog.proto2.Message');



/**
 * Message ImagesServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesServiceError} The cloned message.
 * @override
 */
apphosting.ImagesServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.ImagesServiceError.ErrorCode = {
  UNSPECIFIED_ERROR: 1,
  BAD_TRANSFORM_DATA: 2,
  NOT_IMAGE: 3,
  BAD_IMAGE_DATA: 4,
  IMAGE_TOO_LARGE: 5,
  INVALID_BLOB_KEY: 6,
  ACCESS_DENIED: 7,
  OBJECT_NOT_FOUND: 8
};



/**
 * Message ImagesServiceTransform.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesServiceTransform = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesServiceTransform, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesServiceTransform} The cloned message.
 * @override
 */
apphosting.ImagesServiceTransform.prototype.clone;


/**
 * Enumeration Type.
 * @enum {number}
 */
apphosting.ImagesServiceTransform.Type = {
  RESIZE: 1,
  ROTATE: 2,
  HORIZONTAL_FLIP: 3,
  VERTICAL_FLIP: 4,
  CROP: 5,
  IM_FEELING_LUCKY: 6
};



/**
 * Message Transform.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.Transform = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.Transform, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.Transform} The cloned message.
 * @override
 */
apphosting.Transform.prototype.clone;


/**
 * Gets the value of the width field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getWidth = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the width field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getWidthOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the width field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setWidth = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the width field has a value.
 */
apphosting.Transform.prototype.hasWidth = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the width field.
 */
apphosting.Transform.prototype.widthCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the width field.
 */
apphosting.Transform.prototype.clearWidth = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the height field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getHeight = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the height field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getHeightOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the height field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setHeight = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the height field has a value.
 */
apphosting.Transform.prototype.hasHeight = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the height field.
 */
apphosting.Transform.prototype.heightCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the height field.
 */
apphosting.Transform.prototype.clearHeight = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the crop_to_fit field.
 * @return {?boolean} The value.
 */
apphosting.Transform.prototype.getCropToFit = function() {
  return /** @type {?boolean} */ (this.get$Value(11));
};


/**
 * Gets the value of the crop_to_fit field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.Transform.prototype.getCropToFitOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the crop_to_fit field.
 * @param {boolean} value The value.
 */
apphosting.Transform.prototype.setCropToFit = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the crop_to_fit field has a value.
 */
apphosting.Transform.prototype.hasCropToFit = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the crop_to_fit field.
 */
apphosting.Transform.prototype.cropToFitCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the crop_to_fit field.
 */
apphosting.Transform.prototype.clearCropToFit = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the crop_offset_x field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropOffsetX = function() {
  return /** @type {?number} */ (this.get$Value(12));
};


/**
 * Gets the value of the crop_offset_x field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropOffsetXOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the crop_offset_x field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropOffsetX = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the crop_offset_x field has a value.
 */
apphosting.Transform.prototype.hasCropOffsetX = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the crop_offset_x field.
 */
apphosting.Transform.prototype.cropOffsetXCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the crop_offset_x field.
 */
apphosting.Transform.prototype.clearCropOffsetX = function() {
  this.clear$Field(12);
};


/**
 * Gets the value of the crop_offset_y field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropOffsetY = function() {
  return /** @type {?number} */ (this.get$Value(13));
};


/**
 * Gets the value of the crop_offset_y field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropOffsetYOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(13));
};


/**
 * Sets the value of the crop_offset_y field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropOffsetY = function(value) {
  this.set$Value(13, value);
};


/**
 * @return {boolean} Whether the crop_offset_y field has a value.
 */
apphosting.Transform.prototype.hasCropOffsetY = function() {
  return this.has$Value(13);
};


/**
 * @return {number} The number of values in the crop_offset_y field.
 */
apphosting.Transform.prototype.cropOffsetYCount = function() {
  return this.count$Values(13);
};


/**
 * Clears the values in the crop_offset_y field.
 */
apphosting.Transform.prototype.clearCropOffsetY = function() {
  this.clear$Field(13);
};


/**
 * Gets the value of the rotate field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getRotate = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the rotate field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getRotateOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the rotate field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setRotate = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the rotate field has a value.
 */
apphosting.Transform.prototype.hasRotate = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the rotate field.
 */
apphosting.Transform.prototype.rotateCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the rotate field.
 */
apphosting.Transform.prototype.clearRotate = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the horizontal_flip field.
 * @return {?boolean} The value.
 */
apphosting.Transform.prototype.getHorizontalFlip = function() {
  return /** @type {?boolean} */ (this.get$Value(4));
};


/**
 * Gets the value of the horizontal_flip field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.Transform.prototype.getHorizontalFlipOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the horizontal_flip field.
 * @param {boolean} value The value.
 */
apphosting.Transform.prototype.setHorizontalFlip = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the horizontal_flip field has a value.
 */
apphosting.Transform.prototype.hasHorizontalFlip = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the horizontal_flip field.
 */
apphosting.Transform.prototype.horizontalFlipCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the horizontal_flip field.
 */
apphosting.Transform.prototype.clearHorizontalFlip = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the vertical_flip field.
 * @return {?boolean} The value.
 */
apphosting.Transform.prototype.getVerticalFlip = function() {
  return /** @type {?boolean} */ (this.get$Value(5));
};


/**
 * Gets the value of the vertical_flip field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.Transform.prototype.getVerticalFlipOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the vertical_flip field.
 * @param {boolean} value The value.
 */
apphosting.Transform.prototype.setVerticalFlip = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the vertical_flip field has a value.
 */
apphosting.Transform.prototype.hasVerticalFlip = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the vertical_flip field.
 */
apphosting.Transform.prototype.verticalFlipCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the vertical_flip field.
 */
apphosting.Transform.prototype.clearVerticalFlip = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the crop_left_x field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropLeftX = function() {
  return /** @type {?number} */ (this.get$Value(6));
};


/**
 * Gets the value of the crop_left_x field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropLeftXOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the crop_left_x field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropLeftX = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the crop_left_x field has a value.
 */
apphosting.Transform.prototype.hasCropLeftX = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the crop_left_x field.
 */
apphosting.Transform.prototype.cropLeftXCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the crop_left_x field.
 */
apphosting.Transform.prototype.clearCropLeftX = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the crop_top_y field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropTopY = function() {
  return /** @type {?number} */ (this.get$Value(7));
};


/**
 * Gets the value of the crop_top_y field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropTopYOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the crop_top_y field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropTopY = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the crop_top_y field has a value.
 */
apphosting.Transform.prototype.hasCropTopY = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the crop_top_y field.
 */
apphosting.Transform.prototype.cropTopYCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the crop_top_y field.
 */
apphosting.Transform.prototype.clearCropTopY = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the crop_right_x field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropRightX = function() {
  return /** @type {?number} */ (this.get$Value(8));
};


/**
 * Gets the value of the crop_right_x field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropRightXOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the crop_right_x field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropRightX = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the crop_right_x field has a value.
 */
apphosting.Transform.prototype.hasCropRightX = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the crop_right_x field.
 */
apphosting.Transform.prototype.cropRightXCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the crop_right_x field.
 */
apphosting.Transform.prototype.clearCropRightX = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the crop_bottom_y field.
 * @return {?number} The value.
 */
apphosting.Transform.prototype.getCropBottomY = function() {
  return /** @type {?number} */ (this.get$Value(9));
};


/**
 * Gets the value of the crop_bottom_y field or the default value if not set.
 * @return {number} The value.
 */
apphosting.Transform.prototype.getCropBottomYOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the crop_bottom_y field.
 * @param {number} value The value.
 */
apphosting.Transform.prototype.setCropBottomY = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the crop_bottom_y field has a value.
 */
apphosting.Transform.prototype.hasCropBottomY = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the crop_bottom_y field.
 */
apphosting.Transform.prototype.cropBottomYCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the crop_bottom_y field.
 */
apphosting.Transform.prototype.clearCropBottomY = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the autolevels field.
 * @return {?boolean} The value.
 */
apphosting.Transform.prototype.getAutolevels = function() {
  return /** @type {?boolean} */ (this.get$Value(10));
};


/**
 * Gets the value of the autolevels field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.Transform.prototype.getAutolevelsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the autolevels field.
 * @param {boolean} value The value.
 */
apphosting.Transform.prototype.setAutolevels = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the autolevels field has a value.
 */
apphosting.Transform.prototype.hasAutolevels = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the autolevels field.
 */
apphosting.Transform.prototype.autolevelsCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the autolevels field.
 */
apphosting.Transform.prototype.clearAutolevels = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the allow_stretch field.
 * @return {?boolean} The value.
 */
apphosting.Transform.prototype.getAllowStretch = function() {
  return /** @type {?boolean} */ (this.get$Value(14));
};


/**
 * Gets the value of the allow_stretch field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.Transform.prototype.getAllowStretchOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(14));
};


/**
 * Sets the value of the allow_stretch field.
 * @param {boolean} value The value.
 */
apphosting.Transform.prototype.setAllowStretch = function(value) {
  this.set$Value(14, value);
};


/**
 * @return {boolean} Whether the allow_stretch field has a value.
 */
apphosting.Transform.prototype.hasAllowStretch = function() {
  return this.has$Value(14);
};


/**
 * @return {number} The number of values in the allow_stretch field.
 */
apphosting.Transform.prototype.allowStretchCount = function() {
  return this.count$Values(14);
};


/**
 * Clears the values in the allow_stretch field.
 */
apphosting.Transform.prototype.clearAllowStretch = function() {
  this.clear$Field(14);
};



/**
 * Message ImageData.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImageData = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImageData, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImageData} The cloned message.
 * @override
 */
apphosting.ImageData.prototype.clone;


/**
 * Gets the value of the content field.
 * @return {?string} The value.
 */
apphosting.ImageData.prototype.getContent = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the content field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImageData.prototype.getContentOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the content field.
 * @param {string} value The value.
 */
apphosting.ImageData.prototype.setContent = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the content field has a value.
 */
apphosting.ImageData.prototype.hasContent = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the content field.
 */
apphosting.ImageData.prototype.contentCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the content field.
 */
apphosting.ImageData.prototype.clearContent = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.ImageData.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImageData.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.ImageData.prototype.setBlobKey = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.ImageData.prototype.hasBlobKey = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.ImageData.prototype.blobKeyCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.ImageData.prototype.clearBlobKey = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the width field.
 * @return {?number} The value.
 */
apphosting.ImageData.prototype.getWidth = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the width field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ImageData.prototype.getWidthOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the width field.
 * @param {number} value The value.
 */
apphosting.ImageData.prototype.setWidth = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the width field has a value.
 */
apphosting.ImageData.prototype.hasWidth = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the width field.
 */
apphosting.ImageData.prototype.widthCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the width field.
 */
apphosting.ImageData.prototype.clearWidth = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the height field.
 * @return {?number} The value.
 */
apphosting.ImageData.prototype.getHeight = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the height field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ImageData.prototype.getHeightOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the height field.
 * @param {number} value The value.
 */
apphosting.ImageData.prototype.setHeight = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the height field has a value.
 */
apphosting.ImageData.prototype.hasHeight = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the height field.
 */
apphosting.ImageData.prototype.heightCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the height field.
 */
apphosting.ImageData.prototype.clearHeight = function() {
  this.clear$Field(4);
};



/**
 * Message InputSettings.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.InputSettings = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.InputSettings, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.InputSettings} The cloned message.
 * @override
 */
apphosting.InputSettings.prototype.clone;


/**
 * Gets the value of the correct_exif_orientation field.
 * @return {?apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE} The value.
 */
apphosting.InputSettings.prototype.getCorrectExifOrientation = function() {
  return /** @type {?apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE} */ (this.get$Value(1));
};


/**
 * Gets the value of the correct_exif_orientation field or the default value if not set.
 * @return {apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE} The value.
 */
apphosting.InputSettings.prototype.getCorrectExifOrientationOrDefault = function() {
  return /** @type {apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the correct_exif_orientation field.
 * @param {apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE} value The value.
 */
apphosting.InputSettings.prototype.setCorrectExifOrientation = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the correct_exif_orientation field has a value.
 */
apphosting.InputSettings.prototype.hasCorrectExifOrientation = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the correct_exif_orientation field.
 */
apphosting.InputSettings.prototype.correctExifOrientationCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the correct_exif_orientation field.
 */
apphosting.InputSettings.prototype.clearCorrectExifOrientation = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the parse_metadata field.
 * @return {?boolean} The value.
 */
apphosting.InputSettings.prototype.getParseMetadata = function() {
  return /** @type {?boolean} */ (this.get$Value(2));
};


/**
 * Gets the value of the parse_metadata field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.InputSettings.prototype.getParseMetadataOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the parse_metadata field.
 * @param {boolean} value The value.
 */
apphosting.InputSettings.prototype.setParseMetadata = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the parse_metadata field has a value.
 */
apphosting.InputSettings.prototype.hasParseMetadata = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the parse_metadata field.
 */
apphosting.InputSettings.prototype.parseMetadataCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the parse_metadata field.
 */
apphosting.InputSettings.prototype.clearParseMetadata = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the transparent_substitution_rgb field.
 * @return {?number} The value.
 */
apphosting.InputSettings.prototype.getTransparentSubstitutionRgb = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the transparent_substitution_rgb field or the default value if not set.
 * @return {number} The value.
 */
apphosting.InputSettings.prototype.getTransparentSubstitutionRgbOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the transparent_substitution_rgb field.
 * @param {number} value The value.
 */
apphosting.InputSettings.prototype.setTransparentSubstitutionRgb = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the transparent_substitution_rgb field has a value.
 */
apphosting.InputSettings.prototype.hasTransparentSubstitutionRgb = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the transparent_substitution_rgb field.
 */
apphosting.InputSettings.prototype.transparentSubstitutionRgbCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the transparent_substitution_rgb field.
 */
apphosting.InputSettings.prototype.clearTransparentSubstitutionRgb = function() {
  this.clear$Field(3);
};


/**
 * Enumeration ORIENTATION_CORRECTION_TYPE.
 * @enum {number}
 */
apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE = {
  UNCHANGED_ORIENTATION: 0,
  CORRECT_ORIENTATION: 1
};



/**
 * Message OutputSettings.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.OutputSettings = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.OutputSettings, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.OutputSettings} The cloned message.
 * @override
 */
apphosting.OutputSettings.prototype.clone;


/**
 * Gets the value of the mime_type field.
 * @return {?apphosting.OutputSettings.MIME_TYPE} The value.
 */
apphosting.OutputSettings.prototype.getMimeType = function() {
  return /** @type {?apphosting.OutputSettings.MIME_TYPE} */ (this.get$Value(1));
};


/**
 * Gets the value of the mime_type field or the default value if not set.
 * @return {apphosting.OutputSettings.MIME_TYPE} The value.
 */
apphosting.OutputSettings.prototype.getMimeTypeOrDefault = function() {
  return /** @type {apphosting.OutputSettings.MIME_TYPE} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the mime_type field.
 * @param {apphosting.OutputSettings.MIME_TYPE} value The value.
 */
apphosting.OutputSettings.prototype.setMimeType = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the mime_type field has a value.
 */
apphosting.OutputSettings.prototype.hasMimeType = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the mime_type field.
 */
apphosting.OutputSettings.prototype.mimeTypeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the mime_type field.
 */
apphosting.OutputSettings.prototype.clearMimeType = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the quality field.
 * @return {?number} The value.
 */
apphosting.OutputSettings.prototype.getQuality = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the quality field or the default value if not set.
 * @return {number} The value.
 */
apphosting.OutputSettings.prototype.getQualityOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the quality field.
 * @param {number} value The value.
 */
apphosting.OutputSettings.prototype.setQuality = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the quality field has a value.
 */
apphosting.OutputSettings.prototype.hasQuality = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the quality field.
 */
apphosting.OutputSettings.prototype.qualityCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the quality field.
 */
apphosting.OutputSettings.prototype.clearQuality = function() {
  this.clear$Field(2);
};


/**
 * Enumeration MIME_TYPE.
 * @enum {number}
 */
apphosting.OutputSettings.MIME_TYPE = {
  PNG: 0,
  JPEG: 1,
  WEBP: 2
};



/**
 * Message ImagesTransformRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesTransformRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesTransformRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesTransformRequest} The cloned message.
 * @override
 */
apphosting.ImagesTransformRequest.prototype.clone;


/**
 * Gets the value of the image field.
 * @return {apphosting.ImageData} The value.
 */
apphosting.ImagesTransformRequest.prototype.getImage = function() {
  return /** @type {apphosting.ImageData} */ (this.get$Value(1));
};


/**
 * Gets the value of the image field or the default value if not set.
 * @return {!apphosting.ImageData} The value.
 */
apphosting.ImagesTransformRequest.prototype.getImageOrDefault = function() {
  return /** @type {!apphosting.ImageData} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the image field.
 * @param {!apphosting.ImageData} value The value.
 */
apphosting.ImagesTransformRequest.prototype.setImage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the image field has a value.
 */
apphosting.ImagesTransformRequest.prototype.hasImage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the image field.
 */
apphosting.ImagesTransformRequest.prototype.imageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the image field.
 */
apphosting.ImagesTransformRequest.prototype.clearImage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the transform field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.Transform} The value.
 */
apphosting.ImagesTransformRequest.prototype.getTransform = function(index) {
  return /** @type {apphosting.Transform} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the transform field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.Transform} The value.
 */
apphosting.ImagesTransformRequest.prototype.getTransformOrDefault = function(index) {
  return /** @type {!apphosting.Transform} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the transform field.
 * @param {!apphosting.Transform} value The value to add.
 */
apphosting.ImagesTransformRequest.prototype.addTransform = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the transform field.
 * @return {!Array.<!apphosting.Transform>} The values in the field.
 */
apphosting.ImagesTransformRequest.prototype.transformArray = function() {
  return /** @type {!Array.<!apphosting.Transform>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the transform field has a value.
 */
apphosting.ImagesTransformRequest.prototype.hasTransform = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the transform field.
 */
apphosting.ImagesTransformRequest.prototype.transformCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the transform field.
 */
apphosting.ImagesTransformRequest.prototype.clearTransform = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the output field.
 * @return {apphosting.OutputSettings} The value.
 */
apphosting.ImagesTransformRequest.prototype.getOutput = function() {
  return /** @type {apphosting.OutputSettings} */ (this.get$Value(3));
};


/**
 * Gets the value of the output field or the default value if not set.
 * @return {!apphosting.OutputSettings} The value.
 */
apphosting.ImagesTransformRequest.prototype.getOutputOrDefault = function() {
  return /** @type {!apphosting.OutputSettings} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the output field.
 * @param {!apphosting.OutputSettings} value The value.
 */
apphosting.ImagesTransformRequest.prototype.setOutput = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the output field has a value.
 */
apphosting.ImagesTransformRequest.prototype.hasOutput = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the output field.
 */
apphosting.ImagesTransformRequest.prototype.outputCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the output field.
 */
apphosting.ImagesTransformRequest.prototype.clearOutput = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the input field.
 * @return {apphosting.InputSettings} The value.
 */
apphosting.ImagesTransformRequest.prototype.getInput = function() {
  return /** @type {apphosting.InputSettings} */ (this.get$Value(4));
};


/**
 * Gets the value of the input field or the default value if not set.
 * @return {!apphosting.InputSettings} The value.
 */
apphosting.ImagesTransformRequest.prototype.getInputOrDefault = function() {
  return /** @type {!apphosting.InputSettings} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the input field.
 * @param {!apphosting.InputSettings} value The value.
 */
apphosting.ImagesTransformRequest.prototype.setInput = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the input field has a value.
 */
apphosting.ImagesTransformRequest.prototype.hasInput = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the input field.
 */
apphosting.ImagesTransformRequest.prototype.inputCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the input field.
 */
apphosting.ImagesTransformRequest.prototype.clearInput = function() {
  this.clear$Field(4);
};



/**
 * Message ImagesTransformResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesTransformResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesTransformResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesTransformResponse} The cloned message.
 * @override
 */
apphosting.ImagesTransformResponse.prototype.clone;


/**
 * Gets the value of the image field.
 * @return {apphosting.ImageData} The value.
 */
apphosting.ImagesTransformResponse.prototype.getImage = function() {
  return /** @type {apphosting.ImageData} */ (this.get$Value(1));
};


/**
 * Gets the value of the image field or the default value if not set.
 * @return {!apphosting.ImageData} The value.
 */
apphosting.ImagesTransformResponse.prototype.getImageOrDefault = function() {
  return /** @type {!apphosting.ImageData} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the image field.
 * @param {!apphosting.ImageData} value The value.
 */
apphosting.ImagesTransformResponse.prototype.setImage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the image field has a value.
 */
apphosting.ImagesTransformResponse.prototype.hasImage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the image field.
 */
apphosting.ImagesTransformResponse.prototype.imageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the image field.
 */
apphosting.ImagesTransformResponse.prototype.clearImage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the source_metadata field.
 * @return {?string} The value.
 */
apphosting.ImagesTransformResponse.prototype.getSourceMetadata = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the source_metadata field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImagesTransformResponse.prototype.getSourceMetadataOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the source_metadata field.
 * @param {string} value The value.
 */
apphosting.ImagesTransformResponse.prototype.setSourceMetadata = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the source_metadata field has a value.
 */
apphosting.ImagesTransformResponse.prototype.hasSourceMetadata = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the source_metadata field.
 */
apphosting.ImagesTransformResponse.prototype.sourceMetadataCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the source_metadata field.
 */
apphosting.ImagesTransformResponse.prototype.clearSourceMetadata = function() {
  this.clear$Field(2);
};



/**
 * Message CompositeImageOptions.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CompositeImageOptions = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CompositeImageOptions, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CompositeImageOptions} The cloned message.
 * @override
 */
apphosting.CompositeImageOptions.prototype.clone;


/**
 * Gets the value of the source_index field.
 * @return {?number} The value.
 */
apphosting.CompositeImageOptions.prototype.getSourceIndex = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the source_index field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CompositeImageOptions.prototype.getSourceIndexOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the source_index field.
 * @param {number} value The value.
 */
apphosting.CompositeImageOptions.prototype.setSourceIndex = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the source_index field has a value.
 */
apphosting.CompositeImageOptions.prototype.hasSourceIndex = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the source_index field.
 */
apphosting.CompositeImageOptions.prototype.sourceIndexCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the source_index field.
 */
apphosting.CompositeImageOptions.prototype.clearSourceIndex = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the x_offset field.
 * @return {?number} The value.
 */
apphosting.CompositeImageOptions.prototype.getXOffset = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the x_offset field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CompositeImageOptions.prototype.getXOffsetOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the x_offset field.
 * @param {number} value The value.
 */
apphosting.CompositeImageOptions.prototype.setXOffset = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the x_offset field has a value.
 */
apphosting.CompositeImageOptions.prototype.hasXOffset = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the x_offset field.
 */
apphosting.CompositeImageOptions.prototype.xOffsetCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the x_offset field.
 */
apphosting.CompositeImageOptions.prototype.clearXOffset = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the y_offset field.
 * @return {?number} The value.
 */
apphosting.CompositeImageOptions.prototype.getYOffset = function() {
  return /** @type {?number} */ (this.get$Value(3));
};


/**
 * Gets the value of the y_offset field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CompositeImageOptions.prototype.getYOffsetOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the y_offset field.
 * @param {number} value The value.
 */
apphosting.CompositeImageOptions.prototype.setYOffset = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the y_offset field has a value.
 */
apphosting.CompositeImageOptions.prototype.hasYOffset = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the y_offset field.
 */
apphosting.CompositeImageOptions.prototype.yOffsetCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the y_offset field.
 */
apphosting.CompositeImageOptions.prototype.clearYOffset = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the opacity field.
 * @return {?number} The value.
 */
apphosting.CompositeImageOptions.prototype.getOpacity = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the opacity field or the default value if not set.
 * @return {number} The value.
 */
apphosting.CompositeImageOptions.prototype.getOpacityOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the opacity field.
 * @param {number} value The value.
 */
apphosting.CompositeImageOptions.prototype.setOpacity = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the opacity field has a value.
 */
apphosting.CompositeImageOptions.prototype.hasOpacity = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the opacity field.
 */
apphosting.CompositeImageOptions.prototype.opacityCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the opacity field.
 */
apphosting.CompositeImageOptions.prototype.clearOpacity = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the anchor field.
 * @return {?apphosting.CompositeImageOptions.ANCHOR} The value.
 */
apphosting.CompositeImageOptions.prototype.getAnchor = function() {
  return /** @type {?apphosting.CompositeImageOptions.ANCHOR} */ (this.get$Value(5));
};


/**
 * Gets the value of the anchor field or the default value if not set.
 * @return {apphosting.CompositeImageOptions.ANCHOR} The value.
 */
apphosting.CompositeImageOptions.prototype.getAnchorOrDefault = function() {
  return /** @type {apphosting.CompositeImageOptions.ANCHOR} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the anchor field.
 * @param {apphosting.CompositeImageOptions.ANCHOR} value The value.
 */
apphosting.CompositeImageOptions.prototype.setAnchor = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the anchor field has a value.
 */
apphosting.CompositeImageOptions.prototype.hasAnchor = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the anchor field.
 */
apphosting.CompositeImageOptions.prototype.anchorCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the anchor field.
 */
apphosting.CompositeImageOptions.prototype.clearAnchor = function() {
  this.clear$Field(5);
};


/**
 * Enumeration ANCHOR.
 * @enum {number}
 */
apphosting.CompositeImageOptions.ANCHOR = {
  TOP_LEFT: 0,
  TOP: 1,
  TOP_RIGHT: 2,
  LEFT: 3,
  CENTER: 4,
  RIGHT: 5,
  BOTTOM_LEFT: 6,
  BOTTOM: 7,
  BOTTOM_RIGHT: 8
};



/**
 * Message ImagesCanvas.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesCanvas = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesCanvas, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesCanvas} The cloned message.
 * @override
 */
apphosting.ImagesCanvas.prototype.clone;


/**
 * Gets the value of the width field.
 * @return {?number} The value.
 */
apphosting.ImagesCanvas.prototype.getWidth = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the width field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ImagesCanvas.prototype.getWidthOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the width field.
 * @param {number} value The value.
 */
apphosting.ImagesCanvas.prototype.setWidth = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the width field has a value.
 */
apphosting.ImagesCanvas.prototype.hasWidth = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the width field.
 */
apphosting.ImagesCanvas.prototype.widthCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the width field.
 */
apphosting.ImagesCanvas.prototype.clearWidth = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the height field.
 * @return {?number} The value.
 */
apphosting.ImagesCanvas.prototype.getHeight = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the height field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ImagesCanvas.prototype.getHeightOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the height field.
 * @param {number} value The value.
 */
apphosting.ImagesCanvas.prototype.setHeight = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the height field has a value.
 */
apphosting.ImagesCanvas.prototype.hasHeight = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the height field.
 */
apphosting.ImagesCanvas.prototype.heightCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the height field.
 */
apphosting.ImagesCanvas.prototype.clearHeight = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the output field.
 * @return {apphosting.OutputSettings} The value.
 */
apphosting.ImagesCanvas.prototype.getOutput = function() {
  return /** @type {apphosting.OutputSettings} */ (this.get$Value(3));
};


/**
 * Gets the value of the output field or the default value if not set.
 * @return {!apphosting.OutputSettings} The value.
 */
apphosting.ImagesCanvas.prototype.getOutputOrDefault = function() {
  return /** @type {!apphosting.OutputSettings} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the output field.
 * @param {!apphosting.OutputSettings} value The value.
 */
apphosting.ImagesCanvas.prototype.setOutput = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the output field has a value.
 */
apphosting.ImagesCanvas.prototype.hasOutput = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the output field.
 */
apphosting.ImagesCanvas.prototype.outputCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the output field.
 */
apphosting.ImagesCanvas.prototype.clearOutput = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the color field.
 * @return {?number} The value.
 */
apphosting.ImagesCanvas.prototype.getColor = function() {
  return /** @type {?number} */ (this.get$Value(4));
};


/**
 * Gets the value of the color field or the default value if not set.
 * @return {number} The value.
 */
apphosting.ImagesCanvas.prototype.getColorOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the color field.
 * @param {number} value The value.
 */
apphosting.ImagesCanvas.prototype.setColor = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the color field has a value.
 */
apphosting.ImagesCanvas.prototype.hasColor = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the color field.
 */
apphosting.ImagesCanvas.prototype.colorCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the color field.
 */
apphosting.ImagesCanvas.prototype.clearColor = function() {
  this.clear$Field(4);
};



/**
 * Message ImagesCompositeRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesCompositeRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesCompositeRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesCompositeRequest} The cloned message.
 * @override
 */
apphosting.ImagesCompositeRequest.prototype.clone;


/**
 * Gets the value of the image field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.ImageData} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getImage = function(index) {
  return /** @type {apphosting.ImageData} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the image field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.ImageData} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getImageOrDefault = function(index) {
  return /** @type {!apphosting.ImageData} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the image field.
 * @param {!apphosting.ImageData} value The value to add.
 */
apphosting.ImagesCompositeRequest.prototype.addImage = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the image field.
 * @return {!Array.<!apphosting.ImageData>} The values in the field.
 */
apphosting.ImagesCompositeRequest.prototype.imageArray = function() {
  return /** @type {!Array.<!apphosting.ImageData>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the image field has a value.
 */
apphosting.ImagesCompositeRequest.prototype.hasImage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the image field.
 */
apphosting.ImagesCompositeRequest.prototype.imageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the image field.
 */
apphosting.ImagesCompositeRequest.prototype.clearImage = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the options field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.CompositeImageOptions} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getOptions = function(index) {
  return /** @type {apphosting.CompositeImageOptions} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the options field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.CompositeImageOptions} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getOptionsOrDefault = function(index) {
  return /** @type {!apphosting.CompositeImageOptions} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the options field.
 * @param {!apphosting.CompositeImageOptions} value The value to add.
 */
apphosting.ImagesCompositeRequest.prototype.addOptions = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the options field.
 * @return {!Array.<!apphosting.CompositeImageOptions>} The values in the field.
 */
apphosting.ImagesCompositeRequest.prototype.optionsArray = function() {
  return /** @type {!Array.<!apphosting.CompositeImageOptions>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the options field has a value.
 */
apphosting.ImagesCompositeRequest.prototype.hasOptions = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the options field.
 */
apphosting.ImagesCompositeRequest.prototype.optionsCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the options field.
 */
apphosting.ImagesCompositeRequest.prototype.clearOptions = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the canvas field.
 * @return {apphosting.ImagesCanvas} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getCanvas = function() {
  return /** @type {apphosting.ImagesCanvas} */ (this.get$Value(3));
};


/**
 * Gets the value of the canvas field or the default value if not set.
 * @return {!apphosting.ImagesCanvas} The value.
 */
apphosting.ImagesCompositeRequest.prototype.getCanvasOrDefault = function() {
  return /** @type {!apphosting.ImagesCanvas} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the canvas field.
 * @param {!apphosting.ImagesCanvas} value The value.
 */
apphosting.ImagesCompositeRequest.prototype.setCanvas = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the canvas field has a value.
 */
apphosting.ImagesCompositeRequest.prototype.hasCanvas = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the canvas field.
 */
apphosting.ImagesCompositeRequest.prototype.canvasCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the canvas field.
 */
apphosting.ImagesCompositeRequest.prototype.clearCanvas = function() {
  this.clear$Field(3);
};



/**
 * Message ImagesCompositeResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesCompositeResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesCompositeResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesCompositeResponse} The cloned message.
 * @override
 */
apphosting.ImagesCompositeResponse.prototype.clone;


/**
 * Gets the value of the image field.
 * @return {apphosting.ImageData} The value.
 */
apphosting.ImagesCompositeResponse.prototype.getImage = function() {
  return /** @type {apphosting.ImageData} */ (this.get$Value(1));
};


/**
 * Gets the value of the image field or the default value if not set.
 * @return {!apphosting.ImageData} The value.
 */
apphosting.ImagesCompositeResponse.prototype.getImageOrDefault = function() {
  return /** @type {!apphosting.ImageData} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the image field.
 * @param {!apphosting.ImageData} value The value.
 */
apphosting.ImagesCompositeResponse.prototype.setImage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the image field has a value.
 */
apphosting.ImagesCompositeResponse.prototype.hasImage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the image field.
 */
apphosting.ImagesCompositeResponse.prototype.imageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the image field.
 */
apphosting.ImagesCompositeResponse.prototype.clearImage = function() {
  this.clear$Field(1);
};



/**
 * Message ImagesHistogramRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesHistogramRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesHistogramRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesHistogramRequest} The cloned message.
 * @override
 */
apphosting.ImagesHistogramRequest.prototype.clone;


/**
 * Gets the value of the image field.
 * @return {apphosting.ImageData} The value.
 */
apphosting.ImagesHistogramRequest.prototype.getImage = function() {
  return /** @type {apphosting.ImageData} */ (this.get$Value(1));
};


/**
 * Gets the value of the image field or the default value if not set.
 * @return {!apphosting.ImageData} The value.
 */
apphosting.ImagesHistogramRequest.prototype.getImageOrDefault = function() {
  return /** @type {!apphosting.ImageData} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the image field.
 * @param {!apphosting.ImageData} value The value.
 */
apphosting.ImagesHistogramRequest.prototype.setImage = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the image field has a value.
 */
apphosting.ImagesHistogramRequest.prototype.hasImage = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the image field.
 */
apphosting.ImagesHistogramRequest.prototype.imageCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the image field.
 */
apphosting.ImagesHistogramRequest.prototype.clearImage = function() {
  this.clear$Field(1);
};



/**
 * Message ImagesHistogram.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesHistogram = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesHistogram, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesHistogram} The cloned message.
 * @override
 */
apphosting.ImagesHistogram.prototype.clone;


/**
 * Gets the value of the red field at the index given.
 * @param {number} index The index to lookup.
 * @return {?number} The value.
 */
apphosting.ImagesHistogram.prototype.getRed = function(index) {
  return /** @type {?number} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the red field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {number} The value.
 */
apphosting.ImagesHistogram.prototype.getRedOrDefault = function(index) {
  return /** @type {number} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the red field.
 * @param {number} value The value to add.
 */
apphosting.ImagesHistogram.prototype.addRed = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the red field.
 * @return {!Array.<number>} The values in the field.
 */
apphosting.ImagesHistogram.prototype.redArray = function() {
  return /** @type {!Array.<number>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the red field has a value.
 */
apphosting.ImagesHistogram.prototype.hasRed = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the red field.
 */
apphosting.ImagesHistogram.prototype.redCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the red field.
 */
apphosting.ImagesHistogram.prototype.clearRed = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the green field at the index given.
 * @param {number} index The index to lookup.
 * @return {?number} The value.
 */
apphosting.ImagesHistogram.prototype.getGreen = function(index) {
  return /** @type {?number} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the green field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {number} The value.
 */
apphosting.ImagesHistogram.prototype.getGreenOrDefault = function(index) {
  return /** @type {number} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the green field.
 * @param {number} value The value to add.
 */
apphosting.ImagesHistogram.prototype.addGreen = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the green field.
 * @return {!Array.<number>} The values in the field.
 */
apphosting.ImagesHistogram.prototype.greenArray = function() {
  return /** @type {!Array.<number>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the green field has a value.
 */
apphosting.ImagesHistogram.prototype.hasGreen = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the green field.
 */
apphosting.ImagesHistogram.prototype.greenCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the green field.
 */
apphosting.ImagesHistogram.prototype.clearGreen = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the blue field at the index given.
 * @param {number} index The index to lookup.
 * @return {?number} The value.
 */
apphosting.ImagesHistogram.prototype.getBlue = function(index) {
  return /** @type {?number} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the blue field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {number} The value.
 */
apphosting.ImagesHistogram.prototype.getBlueOrDefault = function(index) {
  return /** @type {number} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the blue field.
 * @param {number} value The value to add.
 */
apphosting.ImagesHistogram.prototype.addBlue = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the blue field.
 * @return {!Array.<number>} The values in the field.
 */
apphosting.ImagesHistogram.prototype.blueArray = function() {
  return /** @type {!Array.<number>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the blue field has a value.
 */
apphosting.ImagesHistogram.prototype.hasBlue = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the blue field.
 */
apphosting.ImagesHistogram.prototype.blueCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the blue field.
 */
apphosting.ImagesHistogram.prototype.clearBlue = function() {
  this.clear$Field(3);
};



/**
 * Message ImagesHistogramResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesHistogramResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesHistogramResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesHistogramResponse} The cloned message.
 * @override
 */
apphosting.ImagesHistogramResponse.prototype.clone;


/**
 * Gets the value of the histogram field.
 * @return {apphosting.ImagesHistogram} The value.
 */
apphosting.ImagesHistogramResponse.prototype.getHistogram = function() {
  return /** @type {apphosting.ImagesHistogram} */ (this.get$Value(1));
};


/**
 * Gets the value of the histogram field or the default value if not set.
 * @return {!apphosting.ImagesHistogram} The value.
 */
apphosting.ImagesHistogramResponse.prototype.getHistogramOrDefault = function() {
  return /** @type {!apphosting.ImagesHistogram} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the histogram field.
 * @param {!apphosting.ImagesHistogram} value The value.
 */
apphosting.ImagesHistogramResponse.prototype.setHistogram = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the histogram field has a value.
 */
apphosting.ImagesHistogramResponse.prototype.hasHistogram = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the histogram field.
 */
apphosting.ImagesHistogramResponse.prototype.histogramCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the histogram field.
 */
apphosting.ImagesHistogramResponse.prototype.clearHistogram = function() {
  this.clear$Field(1);
};



/**
 * Message ImagesGetUrlBaseRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesGetUrlBaseRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesGetUrlBaseRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesGetUrlBaseRequest} The cloned message.
 * @override
 */
apphosting.ImagesGetUrlBaseRequest.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the create_secure_url field.
 * @return {?boolean} The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.getCreateSecureUrl = function() {
  return /** @type {?boolean} */ (this.get$Value(2));
};


/**
 * Gets the value of the create_secure_url field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.getCreateSecureUrlOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the create_secure_url field.
 * @param {boolean} value The value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.setCreateSecureUrl = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the create_secure_url field has a value.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.hasCreateSecureUrl = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the create_secure_url field.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.createSecureUrlCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the create_secure_url field.
 */
apphosting.ImagesGetUrlBaseRequest.prototype.clearCreateSecureUrl = function() {
  this.clear$Field(2);
};



/**
 * Message ImagesGetUrlBaseResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesGetUrlBaseResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesGetUrlBaseResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesGetUrlBaseResponse} The cloned message.
 * @override
 */
apphosting.ImagesGetUrlBaseResponse.prototype.clone;


/**
 * Gets the value of the url field.
 * @return {?string} The value.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the url field.
 * @param {string} value The value.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.setUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the url field has a value.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.hasUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the url field.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.urlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the url field.
 */
apphosting.ImagesGetUrlBaseResponse.prototype.clearUrl = function() {
  this.clear$Field(1);
};



/**
 * Message ImagesDeleteUrlBaseRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesDeleteUrlBaseRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesDeleteUrlBaseRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesDeleteUrlBaseRequest} The cloned message.
 * @override
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.clone;


/**
 * Gets the value of the blob_key field.
 * @return {?string} The value.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.getBlobKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the blob_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.getBlobKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the blob_key field.
 * @param {string} value The value.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.setBlobKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the blob_key field has a value.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.hasBlobKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the blob_key field.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.blobKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the blob_key field.
 */
apphosting.ImagesDeleteUrlBaseRequest.prototype.clearBlobKey = function() {
  this.clear$Field(1);
};



/**
 * Message ImagesDeleteUrlBaseResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.ImagesDeleteUrlBaseResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.ImagesDeleteUrlBaseResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.ImagesDeleteUrlBaseResponse} The cloned message.
 * @override
 */
apphosting.ImagesDeleteUrlBaseResponse.prototype.clone;


goog.proto2.Message.set$Metadata(apphosting.ImagesServiceError, {
  0: {
    name: 'ImagesServiceError',
    fullName: 'apphosting.ImagesServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesServiceTransform, {
  0: {
    name: 'ImagesServiceTransform',
    fullName: 'apphosting.ImagesServiceTransform'
  }
});


goog.proto2.Message.set$Metadata(apphosting.Transform, {
  0: {
    name: 'Transform',
    fullName: 'apphosting.Transform'
  },
  1: {
    name: 'width',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'height',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  11: {
    name: 'crop_to_fit',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  12: {
    name: 'crop_offset_x',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 0.5,
    type: Number
  },
  13: {
    name: 'crop_offset_y',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 0.5,
    type: Number
  },
  3: {
    name: 'rotate',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: 0,
    type: Number
  },
  4: {
    name: 'horizontal_flip',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  5: {
    name: 'vertical_flip',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  6: {
    name: 'crop_left_x',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 0,
    type: Number
  },
  7: {
    name: 'crop_top_y',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 0,
    type: Number
  },
  8: {
    name: 'crop_right_x',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 1,
    type: Number
  },
  9: {
    name: 'crop_bottom_y',
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    defaultValue: 1,
    type: Number
  },
  10: {
    name: 'autolevels',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  14: {
    name: 'allow_stretch',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImageData, {
  0: {
    name: 'ImageData',
    fullName: 'apphosting.ImageData'
  },
  1: {
    name: 'content',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'blob_key',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'width',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  4: {
    name: 'height',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.InputSettings, {
  0: {
    name: 'InputSettings',
    fullName: 'apphosting.InputSettings'
  },
  1: {
    name: 'correct_exif_orientation',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE.UNCHANGED_ORIENTATION,
    type: apphosting.InputSettings.ORIENTATION_CORRECTION_TYPE
  },
  2: {
    name: 'parse_metadata',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  3: {
    name: 'transparent_substitution_rgb',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.OutputSettings, {
  0: {
    name: 'OutputSettings',
    fullName: 'apphosting.OutputSettings'
  },
  1: {
    name: 'mime_type',
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.OutputSettings.MIME_TYPE.PNG,
    type: apphosting.OutputSettings.MIME_TYPE
  },
  2: {
    name: 'quality',
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesTransformRequest, {
  0: {
    name: 'ImagesTransformRequest',
    fullName: 'apphosting.ImagesTransformRequest'
  },
  1: {
    name: 'image',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImageData
  },
  2: {
    name: 'transform',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.Transform
  },
  3: {
    name: 'output',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.OutputSettings
  },
  4: {
    name: 'input',
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.InputSettings
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesTransformResponse, {
  0: {
    name: 'ImagesTransformResponse',
    fullName: 'apphosting.ImagesTransformResponse'
  },
  1: {
    name: 'image',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImageData
  },
  2: {
    name: 'source_metadata',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CompositeImageOptions, {
  0: {
    name: 'CompositeImageOptions',
    fullName: 'apphosting.CompositeImageOptions'
  },
  1: {
    name: 'source_index',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'x_offset',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'y_offset',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  4: {
    name: 'opacity',
    required: true,
    fieldType: goog.proto2.Message.FieldType.FLOAT,
    type: Number
  },
  5: {
    name: 'anchor',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.CompositeImageOptions.ANCHOR.TOP_LEFT,
    type: apphosting.CompositeImageOptions.ANCHOR
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesCanvas, {
  0: {
    name: 'ImagesCanvas',
    fullName: 'apphosting.ImagesCanvas'
  },
  1: {
    name: 'width',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'height',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'output',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.OutputSettings
  },
  4: {
    name: 'color',
    fieldType: goog.proto2.Message.FieldType.INT32,
    defaultValue: -1,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesCompositeRequest, {
  0: {
    name: 'ImagesCompositeRequest',
    fullName: 'apphosting.ImagesCompositeRequest'
  },
  1: {
    name: 'image',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImageData
  },
  2: {
    name: 'options',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.CompositeImageOptions
  },
  3: {
    name: 'canvas',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImagesCanvas
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesCompositeResponse, {
  0: {
    name: 'ImagesCompositeResponse',
    fullName: 'apphosting.ImagesCompositeResponse'
  },
  1: {
    name: 'image',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImageData
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesHistogramRequest, {
  0: {
    name: 'ImagesHistogramRequest',
    fullName: 'apphosting.ImagesHistogramRequest'
  },
  1: {
    name: 'image',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImageData
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesHistogram, {
  0: {
    name: 'ImagesHistogram',
    fullName: 'apphosting.ImagesHistogram'
  },
  1: {
    name: 'red',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  2: {
    name: 'green',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'blue',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesHistogramResponse, {
  0: {
    name: 'ImagesHistogramResponse',
    fullName: 'apphosting.ImagesHistogramResponse'
  },
  1: {
    name: 'histogram',
    required: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.ImagesHistogram
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesGetUrlBaseRequest, {
  0: {
    name: 'ImagesGetUrlBaseRequest',
    fullName: 'apphosting.ImagesGetUrlBaseRequest'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'create_secure_url',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesGetUrlBaseResponse, {
  0: {
    name: 'ImagesGetUrlBaseResponse',
    fullName: 'apphosting.ImagesGetUrlBaseResponse'
  },
  1: {
    name: 'url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesDeleteUrlBaseRequest, {
  0: {
    name: 'ImagesDeleteUrlBaseRequest',
    fullName: 'apphosting.ImagesDeleteUrlBaseRequest'
  },
  1: {
    name: 'blob_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.ImagesDeleteUrlBaseResponse, {
  0: {
    name: 'ImagesDeleteUrlBaseResponse',
    fullName: 'apphosting.ImagesDeleteUrlBaseResponse'
  }
});
