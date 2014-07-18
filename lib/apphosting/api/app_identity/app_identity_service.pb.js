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

goog.provide('apphosting.AppIdentityServiceError');
goog.provide('apphosting.AppIdentityServiceError.ErrorCode');
goog.provide('apphosting.SignForAppRequest');
goog.provide('apphosting.SignForAppResponse');
goog.provide('apphosting.GetPublicCertificateForAppRequest');
goog.provide('apphosting.PublicCertificate');
goog.provide('apphosting.GetPublicCertificateForAppResponse');
goog.provide('apphosting.GetServiceAccountNameRequest');
goog.provide('apphosting.GetServiceAccountNameResponse');
goog.provide('apphosting.GetAccessTokenRequest');
goog.provide('apphosting.GetAccessTokenResponse');
goog.provide('apphosting.GetDefaultGcsBucketNameRequest');
goog.provide('apphosting.GetDefaultGcsBucketNameResponse');

goog.require('goog.proto2.Message');



/**
 * Message AppIdentityServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.AppIdentityServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.AppIdentityServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.AppIdentityServiceError} The cloned message.
 * @override
 */
apphosting.AppIdentityServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.AppIdentityServiceError.ErrorCode = {
  SUCCESS: 0,
  UNKNOWN_SCOPE: 9,
  BLOB_TOO_LARGE: 1000,
  DEADLINE_EXCEEDED: 1001,
  NOT_A_VALID_APP: 1002,
  UNKNOWN_ERROR: 1003,
  GAIAMINT_NOT_INITIAILIZED: 1004,
  NOT_ALLOWED: 1005,
  NOT_IMPLEMENTED: 1006
};



/**
 * Message SignForAppRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SignForAppRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SignForAppRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SignForAppRequest} The cloned message.
 * @override
 */
apphosting.SignForAppRequest.prototype.clone;


/**
 * Gets the value of the bytes_to_sign field.
 * @return {?string} The value.
 */
apphosting.SignForAppRequest.prototype.getBytesToSign = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the bytes_to_sign field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SignForAppRequest.prototype.getBytesToSignOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the bytes_to_sign field.
 * @param {string} value The value.
 */
apphosting.SignForAppRequest.prototype.setBytesToSign = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the bytes_to_sign field has a value.
 */
apphosting.SignForAppRequest.prototype.hasBytesToSign = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the bytes_to_sign field.
 */
apphosting.SignForAppRequest.prototype.bytesToSignCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the bytes_to_sign field.
 */
apphosting.SignForAppRequest.prototype.clearBytesToSign = function() {
  this.clear$Field(1);
};



/**
 * Message SignForAppResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.SignForAppResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.SignForAppResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.SignForAppResponse} The cloned message.
 * @override
 */
apphosting.SignForAppResponse.prototype.clone;


/**
 * Gets the value of the key_name field.
 * @return {?string} The value.
 */
apphosting.SignForAppResponse.prototype.getKeyName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SignForAppResponse.prototype.getKeyNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key_name field.
 * @param {string} value The value.
 */
apphosting.SignForAppResponse.prototype.setKeyName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key_name field has a value.
 */
apphosting.SignForAppResponse.prototype.hasKeyName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key_name field.
 */
apphosting.SignForAppResponse.prototype.keyNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key_name field.
 */
apphosting.SignForAppResponse.prototype.clearKeyName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the signature_bytes field.
 * @return {?string} The value.
 */
apphosting.SignForAppResponse.prototype.getSignatureBytes = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the signature_bytes field or the default value if not set.
 * @return {string} The value.
 */
apphosting.SignForAppResponse.prototype.getSignatureBytesOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the signature_bytes field.
 * @param {string} value The value.
 */
apphosting.SignForAppResponse.prototype.setSignatureBytes = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the signature_bytes field has a value.
 */
apphosting.SignForAppResponse.prototype.hasSignatureBytes = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the signature_bytes field.
 */
apphosting.SignForAppResponse.prototype.signatureBytesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the signature_bytes field.
 */
apphosting.SignForAppResponse.prototype.clearSignatureBytes = function() {
  this.clear$Field(2);
};



/**
 * Message GetPublicCertificateForAppRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetPublicCertificateForAppRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetPublicCertificateForAppRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetPublicCertificateForAppRequest} The cloned message.
 * @override
 */
apphosting.GetPublicCertificateForAppRequest.prototype.clone;



/**
 * Message PublicCertificate.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.PublicCertificate = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.PublicCertificate, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.PublicCertificate} The cloned message.
 * @override
 */
apphosting.PublicCertificate.prototype.clone;


/**
 * Gets the value of the key_name field.
 * @return {?string} The value.
 */
apphosting.PublicCertificate.prototype.getKeyName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the key_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.PublicCertificate.prototype.getKeyNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the key_name field.
 * @param {string} value The value.
 */
apphosting.PublicCertificate.prototype.setKeyName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the key_name field has a value.
 */
apphosting.PublicCertificate.prototype.hasKeyName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the key_name field.
 */
apphosting.PublicCertificate.prototype.keyNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the key_name field.
 */
apphosting.PublicCertificate.prototype.clearKeyName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the x509_certificate_pem field.
 * @return {?string} The value.
 */
apphosting.PublicCertificate.prototype.getX509CertificatePem = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the x509_certificate_pem field or the default value if not set.
 * @return {string} The value.
 */
apphosting.PublicCertificate.prototype.getX509CertificatePemOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the x509_certificate_pem field.
 * @param {string} value The value.
 */
apphosting.PublicCertificate.prototype.setX509CertificatePem = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the x509_certificate_pem field has a value.
 */
apphosting.PublicCertificate.prototype.hasX509CertificatePem = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the x509_certificate_pem field.
 */
apphosting.PublicCertificate.prototype.x509CertificatePemCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the x509_certificate_pem field.
 */
apphosting.PublicCertificate.prototype.clearX509CertificatePem = function() {
  this.clear$Field(2);
};



/**
 * Message GetPublicCertificateForAppResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetPublicCertificateForAppResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetPublicCertificateForAppResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetPublicCertificateForAppResponse} The cloned message.
 * @override
 */
apphosting.GetPublicCertificateForAppResponse.prototype.clone;


/**
 * Gets the value of the public_certificate_list field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.PublicCertificate} The value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.getPublicCertificateList = function(index) {
  return /** @type {apphosting.PublicCertificate} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the public_certificate_list field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.PublicCertificate} The value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.getPublicCertificateListOrDefault = function(index) {
  return /** @type {!apphosting.PublicCertificate} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the public_certificate_list field.
 * @param {!apphosting.PublicCertificate} value The value to add.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.addPublicCertificateList = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the public_certificate_list field.
 * @return {!Array.<!apphosting.PublicCertificate>} The values in the field.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.publicCertificateListArray = function() {
  return /** @type {!Array.<!apphosting.PublicCertificate>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the public_certificate_list field has a value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.hasPublicCertificateList = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the public_certificate_list field.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.publicCertificateListCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the public_certificate_list field.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.clearPublicCertificateList = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the max_client_cache_time_in_second field.
 * @return {?string} The value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.getMaxClientCacheTimeInSecond = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the max_client_cache_time_in_second field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.getMaxClientCacheTimeInSecondOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the max_client_cache_time_in_second field.
 * @param {string} value The value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.setMaxClientCacheTimeInSecond = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the max_client_cache_time_in_second field has a value.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.hasMaxClientCacheTimeInSecond = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the max_client_cache_time_in_second field.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.maxClientCacheTimeInSecondCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the max_client_cache_time_in_second field.
 */
apphosting.GetPublicCertificateForAppResponse.prototype.clearMaxClientCacheTimeInSecond = function() {
  this.clear$Field(2);
};



/**
 * Message GetServiceAccountNameRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetServiceAccountNameRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetServiceAccountNameRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetServiceAccountNameRequest} The cloned message.
 * @override
 */
apphosting.GetServiceAccountNameRequest.prototype.clone;



/**
 * Message GetServiceAccountNameResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetServiceAccountNameResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetServiceAccountNameResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetServiceAccountNameResponse} The cloned message.
 * @override
 */
apphosting.GetServiceAccountNameResponse.prototype.clone;


/**
 * Gets the value of the service_account_name field.
 * @return {?string} The value.
 */
apphosting.GetServiceAccountNameResponse.prototype.getServiceAccountName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the service_account_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetServiceAccountNameResponse.prototype.getServiceAccountNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the service_account_name field.
 * @param {string} value The value.
 */
apphosting.GetServiceAccountNameResponse.prototype.setServiceAccountName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the service_account_name field has a value.
 */
apphosting.GetServiceAccountNameResponse.prototype.hasServiceAccountName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the service_account_name field.
 */
apphosting.GetServiceAccountNameResponse.prototype.serviceAccountNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the service_account_name field.
 */
apphosting.GetServiceAccountNameResponse.prototype.clearServiceAccountName = function() {
  this.clear$Field(1);
};



/**
 * Message GetAccessTokenRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetAccessTokenRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetAccessTokenRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetAccessTokenRequest} The cloned message.
 * @override
 */
apphosting.GetAccessTokenRequest.prototype.clone;


/**
 * Gets the value of the scope field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getScope = function(index) {
  return /** @type {?string} */ (this.get$Value(1, index));
};


/**
 * Gets the value of the scope field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getScopeOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(1, index));
};


/**
 * Adds a value to the scope field.
 * @param {string} value The value to add.
 */
apphosting.GetAccessTokenRequest.prototype.addScope = function(value) {
  this.add$Value(1, value);
};


/**
 * Returns the array of values in the scope field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.GetAccessTokenRequest.prototype.scopeArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(1));
};


/**
 * @return {boolean} Whether the scope field has a value.
 */
apphosting.GetAccessTokenRequest.prototype.hasScope = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the scope field.
 */
apphosting.GetAccessTokenRequest.prototype.scopeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the scope field.
 */
apphosting.GetAccessTokenRequest.prototype.clearScope = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the service_account_id field.
 * @return {?string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getServiceAccountId = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the service_account_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getServiceAccountIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the service_account_id field.
 * @param {string} value The value.
 */
apphosting.GetAccessTokenRequest.prototype.setServiceAccountId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the service_account_id field has a value.
 */
apphosting.GetAccessTokenRequest.prototype.hasServiceAccountId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the service_account_id field.
 */
apphosting.GetAccessTokenRequest.prototype.serviceAccountIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the service_account_id field.
 */
apphosting.GetAccessTokenRequest.prototype.clearServiceAccountId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the service_account_name field.
 * @return {?string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getServiceAccountName = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the service_account_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetAccessTokenRequest.prototype.getServiceAccountNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the service_account_name field.
 * @param {string} value The value.
 */
apphosting.GetAccessTokenRequest.prototype.setServiceAccountName = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the service_account_name field has a value.
 */
apphosting.GetAccessTokenRequest.prototype.hasServiceAccountName = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the service_account_name field.
 */
apphosting.GetAccessTokenRequest.prototype.serviceAccountNameCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the service_account_name field.
 */
apphosting.GetAccessTokenRequest.prototype.clearServiceAccountName = function() {
  this.clear$Field(3);
};



/**
 * Message GetAccessTokenResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetAccessTokenResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetAccessTokenResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetAccessTokenResponse} The cloned message.
 * @override
 */
apphosting.GetAccessTokenResponse.prototype.clone;


/**
 * Gets the value of the access_token field.
 * @return {?string} The value.
 */
apphosting.GetAccessTokenResponse.prototype.getAccessToken = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the access_token field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetAccessTokenResponse.prototype.getAccessTokenOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the access_token field.
 * @param {string} value The value.
 */
apphosting.GetAccessTokenResponse.prototype.setAccessToken = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the access_token field has a value.
 */
apphosting.GetAccessTokenResponse.prototype.hasAccessToken = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the access_token field.
 */
apphosting.GetAccessTokenResponse.prototype.accessTokenCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the access_token field.
 */
apphosting.GetAccessTokenResponse.prototype.clearAccessToken = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the expiration_time field.
 * @return {?string} The value.
 */
apphosting.GetAccessTokenResponse.prototype.getExpirationTime = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the expiration_time field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetAccessTokenResponse.prototype.getExpirationTimeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the expiration_time field.
 * @param {string} value The value.
 */
apphosting.GetAccessTokenResponse.prototype.setExpirationTime = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the expiration_time field has a value.
 */
apphosting.GetAccessTokenResponse.prototype.hasExpirationTime = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the expiration_time field.
 */
apphosting.GetAccessTokenResponse.prototype.expirationTimeCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the expiration_time field.
 */
apphosting.GetAccessTokenResponse.prototype.clearExpirationTime = function() {
  this.clear$Field(2);
};



/**
 * Message GetDefaultGcsBucketNameRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDefaultGcsBucketNameRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDefaultGcsBucketNameRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDefaultGcsBucketNameRequest} The cloned message.
 * @override
 */
apphosting.GetDefaultGcsBucketNameRequest.prototype.clone;



/**
 * Message GetDefaultGcsBucketNameResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetDefaultGcsBucketNameResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetDefaultGcsBucketNameResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetDefaultGcsBucketNameResponse} The cloned message.
 * @override
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.clone;


/**
 * Gets the value of the default_gcs_bucket_name field.
 * @return {?string} The value.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.getDefaultGcsBucketName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the default_gcs_bucket_name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.getDefaultGcsBucketNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the default_gcs_bucket_name field.
 * @param {string} value The value.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.setDefaultGcsBucketName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the default_gcs_bucket_name field has a value.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.hasDefaultGcsBucketName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the default_gcs_bucket_name field.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.defaultGcsBucketNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the default_gcs_bucket_name field.
 */
apphosting.GetDefaultGcsBucketNameResponse.prototype.clearDefaultGcsBucketName = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.AppIdentityServiceError, {
  0: {
    name: 'AppIdentityServiceError',
    fullName: 'apphosting.AppIdentityServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.SignForAppRequest, {
  0: {
    name: 'SignForAppRequest',
    fullName: 'apphosting.SignForAppRequest'
  },
  1: {
    name: 'bytes_to_sign',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.SignForAppResponse, {
  0: {
    name: 'SignForAppResponse',
    fullName: 'apphosting.SignForAppResponse'
  },
  1: {
    name: 'key_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'signature_bytes',
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetPublicCertificateForAppRequest, {
  0: {
    name: 'GetPublicCertificateForAppRequest',
    fullName: 'apphosting.GetPublicCertificateForAppRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.PublicCertificate, {
  0: {
    name: 'PublicCertificate',
    fullName: 'apphosting.PublicCertificate'
  },
  1: {
    name: 'key_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'x509_certificate_pem',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetPublicCertificateForAppResponse, {
  0: {
    name: 'GetPublicCertificateForAppResponse',
    fullName: 'apphosting.GetPublicCertificateForAppResponse'
  },
  1: {
    name: 'public_certificate_list',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.PublicCertificate
  },
  2: {
    name: 'max_client_cache_time_in_second',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetServiceAccountNameRequest, {
  0: {
    name: 'GetServiceAccountNameRequest',
    fullName: 'apphosting.GetServiceAccountNameRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetServiceAccountNameResponse, {
  0: {
    name: 'GetServiceAccountNameResponse',
    fullName: 'apphosting.GetServiceAccountNameResponse'
  },
  1: {
    name: 'service_account_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetAccessTokenRequest, {
  0: {
    name: 'GetAccessTokenRequest',
    fullName: 'apphosting.GetAccessTokenRequest'
  },
  1: {
    name: 'scope',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'service_account_id',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  },
  3: {
    name: 'service_account_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetAccessTokenResponse, {
  0: {
    name: 'GetAccessTokenResponse',
    fullName: 'apphosting.GetAccessTokenResponse'
  },
  1: {
    name: 'access_token',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'expiration_time',
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDefaultGcsBucketNameRequest, {
  0: {
    name: 'GetDefaultGcsBucketNameRequest',
    fullName: 'apphosting.GetDefaultGcsBucketNameRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetDefaultGcsBucketNameResponse, {
  0: {
    name: 'GetDefaultGcsBucketNameResponse',
    fullName: 'apphosting.GetDefaultGcsBucketNameResponse'
  },
  1: {
    name: 'default_gcs_bucket_name',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
