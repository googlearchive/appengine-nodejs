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

goog.provide('apphosting.URLFetchServiceError');
goog.provide('apphosting.URLFetchServiceError.ErrorCode');
goog.provide('apphosting.URLFetchRequest');
goog.provide('apphosting.URLFetchRequest.Header');
goog.provide('apphosting.URLFetchRequest.RequestMethod');
goog.provide('apphosting.URLFetchResponse');
goog.provide('apphosting.URLFetchResponse.Header');

goog.require('goog.proto2.Message');



/**
 * Message URLFetchServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.URLFetchServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.URLFetchServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.URLFetchServiceError} The cloned message.
 * @override
 */
apphosting.URLFetchServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.URLFetchServiceError.ErrorCode = {
  OK: 0,
  INVALID_URL: 1,
  FETCH_ERROR: 2,
  UNSPECIFIED_ERROR: 3,
  RESPONSE_TOO_LARGE: 4,
  DEADLINE_EXCEEDED: 5,
  SSL_CERTIFICATE_ERROR: 6,
  DNS_ERROR: 7,
  CLOSED: 8,
  INTERNAL_TRANSIENT_ERROR: 9,
  TOO_MANY_REDIRECTS: 10,
  MALFORMED_REPLY: 11,
  CONNECTION_ERROR: 12
};



/**
 * Message URLFetchRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.URLFetchRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.URLFetchRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.URLFetchRequest} The cloned message.
 * @override
 */
apphosting.URLFetchRequest.prototype.clone;


/**
 * Gets the value of the Method field.
 * @return {?apphosting.URLFetchRequest.RequestMethod} The value.
 */
apphosting.URLFetchRequest.prototype.getMethod = function() {
  return /** @type {?apphosting.URLFetchRequest.RequestMethod} */ (this.get$Value(1));
};


/**
 * Gets the value of the Method field or the default value if not set.
 * @return {apphosting.URLFetchRequest.RequestMethod} The value.
 */
apphosting.URLFetchRequest.prototype.getMethodOrDefault = function() {
  return /** @type {apphosting.URLFetchRequest.RequestMethod} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the Method field.
 * @param {apphosting.URLFetchRequest.RequestMethod} value The value.
 */
apphosting.URLFetchRequest.prototype.setMethod = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the Method field has a value.
 */
apphosting.URLFetchRequest.prototype.hasMethod = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the Method field.
 */
apphosting.URLFetchRequest.prototype.methodCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the Method field.
 */
apphosting.URLFetchRequest.prototype.clearMethod = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the Url field.
 * @return {?string} The value.
 */
apphosting.URLFetchRequest.prototype.getUrl = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the Url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchRequest.prototype.getUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the Url field.
 * @param {string} value The value.
 */
apphosting.URLFetchRequest.prototype.setUrl = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the Url field has a value.
 */
apphosting.URLFetchRequest.prototype.hasUrl = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the Url field.
 */
apphosting.URLFetchRequest.prototype.urlCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the Url field.
 */
apphosting.URLFetchRequest.prototype.clearUrl = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the header field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.URLFetchRequest.Header} The value.
 */
apphosting.URLFetchRequest.prototype.getHeader = function(index) {
  return /** @type {apphosting.URLFetchRequest.Header} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the header field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.URLFetchRequest.Header} The value.
 */
apphosting.URLFetchRequest.prototype.getHeaderOrDefault = function(index) {
  return /** @type {!apphosting.URLFetchRequest.Header} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the header field.
 * @param {!apphosting.URLFetchRequest.Header} value The value to add.
 */
apphosting.URLFetchRequest.prototype.addHeader = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the header field.
 * @return {!Array.<!apphosting.URLFetchRequest.Header>} The values in the field.
 */
apphosting.URLFetchRequest.prototype.headerArray = function() {
  return /** @type {!Array.<!apphosting.URLFetchRequest.Header>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the header field has a value.
 */
apphosting.URLFetchRequest.prototype.hasHeader = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the header field.
 */
apphosting.URLFetchRequest.prototype.headerCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the header field.
 */
apphosting.URLFetchRequest.prototype.clearHeader = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the Payload field.
 * @return {?string} The value.
 */
apphosting.URLFetchRequest.prototype.getPayload = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the Payload field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchRequest.prototype.getPayloadOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the Payload field.
 * @param {string} value The value.
 */
apphosting.URLFetchRequest.prototype.setPayload = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the Payload field has a value.
 */
apphosting.URLFetchRequest.prototype.hasPayload = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the Payload field.
 */
apphosting.URLFetchRequest.prototype.payloadCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the Payload field.
 */
apphosting.URLFetchRequest.prototype.clearPayload = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the FollowRedirects field.
 * @return {?boolean} The value.
 */
apphosting.URLFetchRequest.prototype.getFollowRedirects = function() {
  return /** @type {?boolean} */ (this.get$Value(7));
};


/**
 * Gets the value of the FollowRedirects field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.URLFetchRequest.prototype.getFollowRedirectsOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the FollowRedirects field.
 * @param {boolean} value The value.
 */
apphosting.URLFetchRequest.prototype.setFollowRedirects = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the FollowRedirects field has a value.
 */
apphosting.URLFetchRequest.prototype.hasFollowRedirects = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the FollowRedirects field.
 */
apphosting.URLFetchRequest.prototype.followRedirectsCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the FollowRedirects field.
 */
apphosting.URLFetchRequest.prototype.clearFollowRedirects = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the Deadline field.
 * @return {?number} The value.
 */
apphosting.URLFetchRequest.prototype.getDeadline = function() {
  return /** @type {?number} */ (this.get$Value(8));
};


/**
 * Gets the value of the Deadline field or the default value if not set.
 * @return {number} The value.
 */
apphosting.URLFetchRequest.prototype.getDeadlineOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the Deadline field.
 * @param {number} value The value.
 */
apphosting.URLFetchRequest.prototype.setDeadline = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the Deadline field has a value.
 */
apphosting.URLFetchRequest.prototype.hasDeadline = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the Deadline field.
 */
apphosting.URLFetchRequest.prototype.deadlineCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the Deadline field.
 */
apphosting.URLFetchRequest.prototype.clearDeadline = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the MustValidateServerCertificate field.
 * @return {?boolean} The value.
 */
apphosting.URLFetchRequest.prototype.getMustValidateServerCertificate = function() {
  return /** @type {?boolean} */ (this.get$Value(9));
};


/**
 * Gets the value of the MustValidateServerCertificate field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.URLFetchRequest.prototype.getMustValidateServerCertificateOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the MustValidateServerCertificate field.
 * @param {boolean} value The value.
 */
apphosting.URLFetchRequest.prototype.setMustValidateServerCertificate = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the MustValidateServerCertificate field has a value.
 */
apphosting.URLFetchRequest.prototype.hasMustValidateServerCertificate = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the MustValidateServerCertificate field.
 */
apphosting.URLFetchRequest.prototype.mustValidateServerCertificateCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the MustValidateServerCertificate field.
 */
apphosting.URLFetchRequest.prototype.clearMustValidateServerCertificate = function() {
  this.clear$Field(9);
};


/**
 * Enumeration RequestMethod.
 * @enum {number}
 */
apphosting.URLFetchRequest.RequestMethod = {
  GET: 1,
  POST: 2,
  HEAD: 3,
  PUT: 4,
  DELETE: 5,
  PATCH: 6
};



/**
 * Message Header.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.URLFetchRequest.Header = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.URLFetchRequest.Header, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.URLFetchRequest.Header} The cloned message.
 * @override
 */
apphosting.URLFetchRequest.Header.prototype.clone;


/**
 * Gets the value of the Key field.
 * @return {?string} The value.
 */
apphosting.URLFetchRequest.Header.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the Key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchRequest.Header.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the Key field.
 * @param {string} value The value.
 */
apphosting.URLFetchRequest.Header.prototype.setKey = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the Key field has a value.
 */
apphosting.URLFetchRequest.Header.prototype.hasKey = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the Key field.
 */
apphosting.URLFetchRequest.Header.prototype.keyCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the Key field.
 */
apphosting.URLFetchRequest.Header.prototype.clearKey = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the Value field.
 * @return {?string} The value.
 */
apphosting.URLFetchRequest.Header.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the Value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchRequest.Header.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the Value field.
 * @param {string} value The value.
 */
apphosting.URLFetchRequest.Header.prototype.setValue = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the Value field has a value.
 */
apphosting.URLFetchRequest.Header.prototype.hasValue = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the Value field.
 */
apphosting.URLFetchRequest.Header.prototype.valueCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the Value field.
 */
apphosting.URLFetchRequest.Header.prototype.clearValue = function() {
  this.clear$Field(5);
};



/**
 * Message URLFetchResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.URLFetchResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.URLFetchResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.URLFetchResponse} The cloned message.
 * @override
 */
apphosting.URLFetchResponse.prototype.clone;


/**
 * Gets the value of the Content field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getContent = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the Content field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getContentOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the Content field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setContent = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the Content field has a value.
 */
apphosting.URLFetchResponse.prototype.hasContent = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the Content field.
 */
apphosting.URLFetchResponse.prototype.contentCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the Content field.
 */
apphosting.URLFetchResponse.prototype.clearContent = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the StatusCode field.
 * @return {?number} The value.
 */
apphosting.URLFetchResponse.prototype.getStatusCode = function() {
  return /** @type {?number} */ (this.get$Value(2));
};


/**
 * Gets the value of the StatusCode field or the default value if not set.
 * @return {number} The value.
 */
apphosting.URLFetchResponse.prototype.getStatusCodeOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the StatusCode field.
 * @param {number} value The value.
 */
apphosting.URLFetchResponse.prototype.setStatusCode = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the StatusCode field has a value.
 */
apphosting.URLFetchResponse.prototype.hasStatusCode = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the StatusCode field.
 */
apphosting.URLFetchResponse.prototype.statusCodeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the StatusCode field.
 */
apphosting.URLFetchResponse.prototype.clearStatusCode = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the header field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.URLFetchResponse.Header} The value.
 */
apphosting.URLFetchResponse.prototype.getHeader = function(index) {
  return /** @type {apphosting.URLFetchResponse.Header} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the header field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.URLFetchResponse.Header} The value.
 */
apphosting.URLFetchResponse.prototype.getHeaderOrDefault = function(index) {
  return /** @type {!apphosting.URLFetchResponse.Header} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the header field.
 * @param {!apphosting.URLFetchResponse.Header} value The value to add.
 */
apphosting.URLFetchResponse.prototype.addHeader = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the header field.
 * @return {!Array.<!apphosting.URLFetchResponse.Header>} The values in the field.
 */
apphosting.URLFetchResponse.prototype.headerArray = function() {
  return /** @type {!Array.<!apphosting.URLFetchResponse.Header>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the header field has a value.
 */
apphosting.URLFetchResponse.prototype.hasHeader = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the header field.
 */
apphosting.URLFetchResponse.prototype.headerCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the header field.
 */
apphosting.URLFetchResponse.prototype.clearHeader = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the ContentWasTruncated field.
 * @return {?boolean} The value.
 */
apphosting.URLFetchResponse.prototype.getContentWasTruncated = function() {
  return /** @type {?boolean} */ (this.get$Value(6));
};


/**
 * Gets the value of the ContentWasTruncated field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.URLFetchResponse.prototype.getContentWasTruncatedOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the ContentWasTruncated field.
 * @param {boolean} value The value.
 */
apphosting.URLFetchResponse.prototype.setContentWasTruncated = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the ContentWasTruncated field has a value.
 */
apphosting.URLFetchResponse.prototype.hasContentWasTruncated = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the ContentWasTruncated field.
 */
apphosting.URLFetchResponse.prototype.contentWasTruncatedCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the ContentWasTruncated field.
 */
apphosting.URLFetchResponse.prototype.clearContentWasTruncated = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the ExternalBytesSent field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getExternalBytesSent = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the ExternalBytesSent field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getExternalBytesSentOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the ExternalBytesSent field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setExternalBytesSent = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the ExternalBytesSent field has a value.
 */
apphosting.URLFetchResponse.prototype.hasExternalBytesSent = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the ExternalBytesSent field.
 */
apphosting.URLFetchResponse.prototype.externalBytesSentCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the ExternalBytesSent field.
 */
apphosting.URLFetchResponse.prototype.clearExternalBytesSent = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the ExternalBytesReceived field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getExternalBytesReceived = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the ExternalBytesReceived field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getExternalBytesReceivedOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the ExternalBytesReceived field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setExternalBytesReceived = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the ExternalBytesReceived field has a value.
 */
apphosting.URLFetchResponse.prototype.hasExternalBytesReceived = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the ExternalBytesReceived field.
 */
apphosting.URLFetchResponse.prototype.externalBytesReceivedCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the ExternalBytesReceived field.
 */
apphosting.URLFetchResponse.prototype.clearExternalBytesReceived = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the FinalUrl field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getFinalUrl = function() {
  return /** @type {?string} */ (this.get$Value(9));
};


/**
 * Gets the value of the FinalUrl field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getFinalUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(9));
};


/**
 * Sets the value of the FinalUrl field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setFinalUrl = function(value) {
  this.set$Value(9, value);
};


/**
 * @return {boolean} Whether the FinalUrl field has a value.
 */
apphosting.URLFetchResponse.prototype.hasFinalUrl = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the FinalUrl field.
 */
apphosting.URLFetchResponse.prototype.finalUrlCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the FinalUrl field.
 */
apphosting.URLFetchResponse.prototype.clearFinalUrl = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the ApiCpuMilliseconds field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiCpuMilliseconds = function() {
  return /** @type {?string} */ (this.get$Value(10));
};


/**
 * Gets the value of the ApiCpuMilliseconds field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiCpuMillisecondsOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(10));
};


/**
 * Sets the value of the ApiCpuMilliseconds field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setApiCpuMilliseconds = function(value) {
  this.set$Value(10, value);
};


/**
 * @return {boolean} Whether the ApiCpuMilliseconds field has a value.
 */
apphosting.URLFetchResponse.prototype.hasApiCpuMilliseconds = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the ApiCpuMilliseconds field.
 */
apphosting.URLFetchResponse.prototype.apiCpuMillisecondsCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the ApiCpuMilliseconds field.
 */
apphosting.URLFetchResponse.prototype.clearApiCpuMilliseconds = function() {
  this.clear$Field(10);
};


/**
 * Gets the value of the ApiBytesSent field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiBytesSent = function() {
  return /** @type {?string} */ (this.get$Value(11));
};


/**
 * Gets the value of the ApiBytesSent field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiBytesSentOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(11));
};


/**
 * Sets the value of the ApiBytesSent field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setApiBytesSent = function(value) {
  this.set$Value(11, value);
};


/**
 * @return {boolean} Whether the ApiBytesSent field has a value.
 */
apphosting.URLFetchResponse.prototype.hasApiBytesSent = function() {
  return this.has$Value(11);
};


/**
 * @return {number} The number of values in the ApiBytesSent field.
 */
apphosting.URLFetchResponse.prototype.apiBytesSentCount = function() {
  return this.count$Values(11);
};


/**
 * Clears the values in the ApiBytesSent field.
 */
apphosting.URLFetchResponse.prototype.clearApiBytesSent = function() {
  this.clear$Field(11);
};


/**
 * Gets the value of the ApiBytesReceived field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiBytesReceived = function() {
  return /** @type {?string} */ (this.get$Value(12));
};


/**
 * Gets the value of the ApiBytesReceived field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.prototype.getApiBytesReceivedOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(12));
};


/**
 * Sets the value of the ApiBytesReceived field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.prototype.setApiBytesReceived = function(value) {
  this.set$Value(12, value);
};


/**
 * @return {boolean} Whether the ApiBytesReceived field has a value.
 */
apphosting.URLFetchResponse.prototype.hasApiBytesReceived = function() {
  return this.has$Value(12);
};


/**
 * @return {number} The number of values in the ApiBytesReceived field.
 */
apphosting.URLFetchResponse.prototype.apiBytesReceivedCount = function() {
  return this.count$Values(12);
};


/**
 * Clears the values in the ApiBytesReceived field.
 */
apphosting.URLFetchResponse.prototype.clearApiBytesReceived = function() {
  this.clear$Field(12);
};



/**
 * Message Header.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.URLFetchResponse.Header = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.URLFetchResponse.Header, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.URLFetchResponse.Header} The cloned message.
 * @override
 */
apphosting.URLFetchResponse.Header.prototype.clone;


/**
 * Gets the value of the Key field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.Header.prototype.getKey = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the Key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.Header.prototype.getKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the Key field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.Header.prototype.setKey = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the Key field has a value.
 */
apphosting.URLFetchResponse.Header.prototype.hasKey = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the Key field.
 */
apphosting.URLFetchResponse.Header.prototype.keyCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the Key field.
 */
apphosting.URLFetchResponse.Header.prototype.clearKey = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the Value field.
 * @return {?string} The value.
 */
apphosting.URLFetchResponse.Header.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(5));
};


/**
 * Gets the value of the Value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.URLFetchResponse.Header.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the Value field.
 * @param {string} value The value.
 */
apphosting.URLFetchResponse.Header.prototype.setValue = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the Value field has a value.
 */
apphosting.URLFetchResponse.Header.prototype.hasValue = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the Value field.
 */
apphosting.URLFetchResponse.Header.prototype.valueCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the Value field.
 */
apphosting.URLFetchResponse.Header.prototype.clearValue = function() {
  this.clear$Field(5);
};


goog.proto2.Message.set$Metadata(apphosting.URLFetchServiceError, {
  0: {
    name: 'URLFetchServiceError',
    fullName: 'apphosting.URLFetchServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.URLFetchRequest, {
  0: {
    name: 'URLFetchRequest',
    fullName: 'apphosting.URLFetchRequest'
  },
  1: {
    name: 'Method',
    required: true,
    fieldType: goog.proto2.Message.FieldType.ENUM,
    defaultValue: apphosting.URLFetchRequest.RequestMethod.GET,
    type: apphosting.URLFetchRequest.RequestMethod
  },
  2: {
    name: 'Url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'header',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.URLFetchRequest.Header
  },
  6: {
    name: 'Payload',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  7: {
    name: 'FollowRedirects',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: true,
    type: Boolean
  },
  8: {
    name: 'Deadline',
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  },
  9: {
    name: 'MustValidateServerCertificate',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: true,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.URLFetchRequest.Header, {
  0: {
    name: 'Header',
    containingType: apphosting.URLFetchRequest,
    fullName: 'apphosting.URLFetchRequest.Header'
  },
  4: {
    name: 'Key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'Value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.URLFetchResponse, {
  0: {
    name: 'URLFetchResponse',
    fullName: 'apphosting.URLFetchResponse'
  },
  1: {
    name: 'Content',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  2: {
    name: 'StatusCode',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  },
  3: {
    name: 'header',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.GROUP,
    type: apphosting.URLFetchResponse.Header
  },
  6: {
    name: 'ContentWasTruncated',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  7: {
    name: 'ExternalBytesSent',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  8: {
    name: 'ExternalBytesReceived',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  9: {
    name: 'FinalUrl',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  10: {
    name: 'ApiCpuMilliseconds',
    fieldType: goog.proto2.Message.FieldType.INT64,
    defaultValue: '0',
    type: String
  },
  11: {
    name: 'ApiBytesSent',
    fieldType: goog.proto2.Message.FieldType.INT64,
    defaultValue: '0',
    type: String
  },
  12: {
    name: 'ApiBytesReceived',
    fieldType: goog.proto2.Message.FieldType.INT64,
    defaultValue: '0',
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.URLFetchResponse.Header, {
  0: {
    name: 'Header',
    containingType: apphosting.URLFetchResponse,
    fullName: 'apphosting.URLFetchResponse.Header'
  },
  4: {
    name: 'Key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'Value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
