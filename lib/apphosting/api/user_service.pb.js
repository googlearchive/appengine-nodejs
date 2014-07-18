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

goog.provide('apphosting.UserServiceError');
goog.provide('apphosting.UserServiceError.ErrorCode');
goog.provide('apphosting.CreateLoginURLRequest');
goog.provide('apphosting.CreateLoginURLResponse');
goog.provide('apphosting.CreateLogoutURLRequest');
goog.provide('apphosting.CreateLogoutURLResponse');
goog.provide('apphosting.GetOAuthUserRequest');
goog.provide('apphosting.GetOAuthUserResponse');
goog.provide('apphosting.CheckOAuthSignatureRequest');
goog.provide('apphosting.CheckOAuthSignatureResponse');

goog.require('goog.proto2.Message');



/**
 * Message UserServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.UserServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.UserServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.UserServiceError} The cloned message.
 * @override
 */
apphosting.UserServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.UserServiceError.ErrorCode = {
  OK: 0,
  REDIRECT_URL_TOO_LONG: 1,
  NOT_ALLOWED: 2,
  OAUTH_INVALID_TOKEN: 3,
  OAUTH_INVALID_REQUEST: 4,
  OAUTH_ERROR: 5
};



/**
 * Message CreateLoginURLRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateLoginURLRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateLoginURLRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateLoginURLRequest} The cloned message.
 * @override
 */
apphosting.CreateLoginURLRequest.prototype.clone;


/**
 * Gets the value of the destination_url field.
 * @return {?string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getDestinationUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the destination_url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getDestinationUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the destination_url field.
 * @param {string} value The value.
 */
apphosting.CreateLoginURLRequest.prototype.setDestinationUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the destination_url field has a value.
 */
apphosting.CreateLoginURLRequest.prototype.hasDestinationUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the destination_url field.
 */
apphosting.CreateLoginURLRequest.prototype.destinationUrlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the destination_url field.
 */
apphosting.CreateLoginURLRequest.prototype.clearDestinationUrl = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the auth_domain field.
 * @return {?string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getAuthDomain = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the auth_domain field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getAuthDomainOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the auth_domain field.
 * @param {string} value The value.
 */
apphosting.CreateLoginURLRequest.prototype.setAuthDomain = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the auth_domain field has a value.
 */
apphosting.CreateLoginURLRequest.prototype.hasAuthDomain = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the auth_domain field.
 */
apphosting.CreateLoginURLRequest.prototype.authDomainCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the auth_domain field.
 */
apphosting.CreateLoginURLRequest.prototype.clearAuthDomain = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the federated_identity field.
 * @return {?string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getFederatedIdentity = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the federated_identity field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLoginURLRequest.prototype.getFederatedIdentityOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the federated_identity field.
 * @param {string} value The value.
 */
apphosting.CreateLoginURLRequest.prototype.setFederatedIdentity = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the federated_identity field has a value.
 */
apphosting.CreateLoginURLRequest.prototype.hasFederatedIdentity = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the federated_identity field.
 */
apphosting.CreateLoginURLRequest.prototype.federatedIdentityCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the federated_identity field.
 */
apphosting.CreateLoginURLRequest.prototype.clearFederatedIdentity = function() {
  this.clear$Field(3);
};



/**
 * Message CreateLoginURLResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateLoginURLResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateLoginURLResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateLoginURLResponse} The cloned message.
 * @override
 */
apphosting.CreateLoginURLResponse.prototype.clone;


/**
 * Gets the value of the login_url field.
 * @return {?string} The value.
 */
apphosting.CreateLoginURLResponse.prototype.getLoginUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the login_url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLoginURLResponse.prototype.getLoginUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the login_url field.
 * @param {string} value The value.
 */
apphosting.CreateLoginURLResponse.prototype.setLoginUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the login_url field has a value.
 */
apphosting.CreateLoginURLResponse.prototype.hasLoginUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the login_url field.
 */
apphosting.CreateLoginURLResponse.prototype.loginUrlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the login_url field.
 */
apphosting.CreateLoginURLResponse.prototype.clearLoginUrl = function() {
  this.clear$Field(1);
};



/**
 * Message CreateLogoutURLRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateLogoutURLRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateLogoutURLRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateLogoutURLRequest} The cloned message.
 * @override
 */
apphosting.CreateLogoutURLRequest.prototype.clone;


/**
 * Gets the value of the destination_url field.
 * @return {?string} The value.
 */
apphosting.CreateLogoutURLRequest.prototype.getDestinationUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the destination_url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLogoutURLRequest.prototype.getDestinationUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the destination_url field.
 * @param {string} value The value.
 */
apphosting.CreateLogoutURLRequest.prototype.setDestinationUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the destination_url field has a value.
 */
apphosting.CreateLogoutURLRequest.prototype.hasDestinationUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the destination_url field.
 */
apphosting.CreateLogoutURLRequest.prototype.destinationUrlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the destination_url field.
 */
apphosting.CreateLogoutURLRequest.prototype.clearDestinationUrl = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the auth_domain field.
 * @return {?string} The value.
 */
apphosting.CreateLogoutURLRequest.prototype.getAuthDomain = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the auth_domain field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLogoutURLRequest.prototype.getAuthDomainOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the auth_domain field.
 * @param {string} value The value.
 */
apphosting.CreateLogoutURLRequest.prototype.setAuthDomain = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the auth_domain field has a value.
 */
apphosting.CreateLogoutURLRequest.prototype.hasAuthDomain = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the auth_domain field.
 */
apphosting.CreateLogoutURLRequest.prototype.authDomainCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the auth_domain field.
 */
apphosting.CreateLogoutURLRequest.prototype.clearAuthDomain = function() {
  this.clear$Field(2);
};



/**
 * Message CreateLogoutURLResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CreateLogoutURLResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CreateLogoutURLResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CreateLogoutURLResponse} The cloned message.
 * @override
 */
apphosting.CreateLogoutURLResponse.prototype.clone;


/**
 * Gets the value of the logout_url field.
 * @return {?string} The value.
 */
apphosting.CreateLogoutURLResponse.prototype.getLogoutUrl = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the logout_url field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CreateLogoutURLResponse.prototype.getLogoutUrlOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the logout_url field.
 * @param {string} value The value.
 */
apphosting.CreateLogoutURLResponse.prototype.setLogoutUrl = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the logout_url field has a value.
 */
apphosting.CreateLogoutURLResponse.prototype.hasLogoutUrl = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the logout_url field.
 */
apphosting.CreateLogoutURLResponse.prototype.logoutUrlCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the logout_url field.
 */
apphosting.CreateLogoutURLResponse.prototype.clearLogoutUrl = function() {
  this.clear$Field(1);
};



/**
 * Message GetOAuthUserRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetOAuthUserRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetOAuthUserRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetOAuthUserRequest} The cloned message.
 * @override
 */
apphosting.GetOAuthUserRequest.prototype.clone;


/**
 * Gets the value of the scope field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserRequest.prototype.getScope = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the scope field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserRequest.prototype.getScopeOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the scope field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserRequest.prototype.setScope = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the scope field has a value.
 */
apphosting.GetOAuthUserRequest.prototype.hasScope = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the scope field.
 */
apphosting.GetOAuthUserRequest.prototype.scopeCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the scope field.
 */
apphosting.GetOAuthUserRequest.prototype.clearScope = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the scopes field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserRequest.prototype.getScopes = function(index) {
  return /** @type {?string} */ (this.get$Value(2, index));
};


/**
 * Gets the value of the scopes field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.GetOAuthUserRequest.prototype.getScopesOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(2, index));
};


/**
 * Adds a value to the scopes field.
 * @param {string} value The value to add.
 */
apphosting.GetOAuthUserRequest.prototype.addScopes = function(value) {
  this.add$Value(2, value);
};


/**
 * Returns the array of values in the scopes field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.GetOAuthUserRequest.prototype.scopesArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(2));
};


/**
 * @return {boolean} Whether the scopes field has a value.
 */
apphosting.GetOAuthUserRequest.prototype.hasScopes = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the scopes field.
 */
apphosting.GetOAuthUserRequest.prototype.scopesCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the scopes field.
 */
apphosting.GetOAuthUserRequest.prototype.clearScopes = function() {
  this.clear$Field(2);
};



/**
 * Message GetOAuthUserResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.GetOAuthUserResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.GetOAuthUserResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.GetOAuthUserResponse} The cloned message.
 * @override
 */
apphosting.GetOAuthUserResponse.prototype.clone;


/**
 * Gets the value of the email field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getEmail = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the email field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getEmailOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the email field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setEmail = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the email field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasEmail = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the email field.
 */
apphosting.GetOAuthUserResponse.prototype.emailCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the email field.
 */
apphosting.GetOAuthUserResponse.prototype.clearEmail = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the user_id field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getUserId = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the user_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getUserIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the user_id field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setUserId = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the user_id field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasUserId = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the user_id field.
 */
apphosting.GetOAuthUserResponse.prototype.userIdCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the user_id field.
 */
apphosting.GetOAuthUserResponse.prototype.clearUserId = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the auth_domain field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getAuthDomain = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the auth_domain field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getAuthDomainOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the auth_domain field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setAuthDomain = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the auth_domain field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasAuthDomain = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the auth_domain field.
 */
apphosting.GetOAuthUserResponse.prototype.authDomainCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the auth_domain field.
 */
apphosting.GetOAuthUserResponse.prototype.clearAuthDomain = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the user_organization field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getUserOrganization = function() {
  return /** @type {?string} */ (this.get$Value(4));
};


/**
 * Gets the value of the user_organization field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getUserOrganizationOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(4));
};


/**
 * Sets the value of the user_organization field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setUserOrganization = function(value) {
  this.set$Value(4, value);
};


/**
 * @return {boolean} Whether the user_organization field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasUserOrganization = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the user_organization field.
 */
apphosting.GetOAuthUserResponse.prototype.userOrganizationCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the user_organization field.
 */
apphosting.GetOAuthUserResponse.prototype.clearUserOrganization = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the is_admin field.
 * @return {?boolean} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getIsAdmin = function() {
  return /** @type {?boolean} */ (this.get$Value(5));
};


/**
 * Gets the value of the is_admin field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getIsAdminOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(5));
};


/**
 * Sets the value of the is_admin field.
 * @param {boolean} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setIsAdmin = function(value) {
  this.set$Value(5, value);
};


/**
 * @return {boolean} Whether the is_admin field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasIsAdmin = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the is_admin field.
 */
apphosting.GetOAuthUserResponse.prototype.isAdminCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the is_admin field.
 */
apphosting.GetOAuthUserResponse.prototype.clearIsAdmin = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the client_id field.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getClientId = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the client_id field or the default value if not set.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getClientIdOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the client_id field.
 * @param {string} value The value.
 */
apphosting.GetOAuthUserResponse.prototype.setClientId = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the client_id field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasClientId = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the client_id field.
 */
apphosting.GetOAuthUserResponse.prototype.clientIdCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the client_id field.
 */
apphosting.GetOAuthUserResponse.prototype.clearClientId = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the scopes field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getScopes = function(index) {
  return /** @type {?string} */ (this.get$Value(7, index));
};


/**
 * Gets the value of the scopes field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.GetOAuthUserResponse.prototype.getScopesOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(7, index));
};


/**
 * Adds a value to the scopes field.
 * @param {string} value The value to add.
 */
apphosting.GetOAuthUserResponse.prototype.addScopes = function(value) {
  this.add$Value(7, value);
};


/**
 * Returns the array of values in the scopes field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.GetOAuthUserResponse.prototype.scopesArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(7));
};


/**
 * @return {boolean} Whether the scopes field has a value.
 */
apphosting.GetOAuthUserResponse.prototype.hasScopes = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the scopes field.
 */
apphosting.GetOAuthUserResponse.prototype.scopesCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the scopes field.
 */
apphosting.GetOAuthUserResponse.prototype.clearScopes = function() {
  this.clear$Field(7);
};



/**
 * Message CheckOAuthSignatureRequest.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CheckOAuthSignatureRequest = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CheckOAuthSignatureRequest, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CheckOAuthSignatureRequest} The cloned message.
 * @override
 */
apphosting.CheckOAuthSignatureRequest.prototype.clone;



/**
 * Message CheckOAuthSignatureResponse.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.CheckOAuthSignatureResponse = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.CheckOAuthSignatureResponse, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.CheckOAuthSignatureResponse} The cloned message.
 * @override
 */
apphosting.CheckOAuthSignatureResponse.prototype.clone;


/**
 * Gets the value of the oauth_consumer_key field.
 * @return {?string} The value.
 */
apphosting.CheckOAuthSignatureResponse.prototype.getOauthConsumerKey = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the oauth_consumer_key field or the default value if not set.
 * @return {string} The value.
 */
apphosting.CheckOAuthSignatureResponse.prototype.getOauthConsumerKeyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the oauth_consumer_key field.
 * @param {string} value The value.
 */
apphosting.CheckOAuthSignatureResponse.prototype.setOauthConsumerKey = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the oauth_consumer_key field has a value.
 */
apphosting.CheckOAuthSignatureResponse.prototype.hasOauthConsumerKey = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the oauth_consumer_key field.
 */
apphosting.CheckOAuthSignatureResponse.prototype.oauthConsumerKeyCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the oauth_consumer_key field.
 */
apphosting.CheckOAuthSignatureResponse.prototype.clearOauthConsumerKey = function() {
  this.clear$Field(1);
};


goog.proto2.Message.set$Metadata(apphosting.UserServiceError, {
  0: {
    name: 'UserServiceError',
    fullName: 'apphosting.UserServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateLoginURLRequest, {
  0: {
    name: 'CreateLoginURLRequest',
    fullName: 'apphosting.CreateLoginURLRequest'
  },
  1: {
    name: 'destination_url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'auth_domain',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'federated_identity',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateLoginURLResponse, {
  0: {
    name: 'CreateLoginURLResponse',
    fullName: 'apphosting.CreateLoginURLResponse'
  },
  1: {
    name: 'login_url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateLogoutURLRequest, {
  0: {
    name: 'CreateLogoutURLRequest',
    fullName: 'apphosting.CreateLogoutURLRequest'
  },
  1: {
    name: 'destination_url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'auth_domain',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CreateLogoutURLResponse, {
  0: {
    name: 'CreateLogoutURLResponse',
    fullName: 'apphosting.CreateLogoutURLResponse'
  },
  1: {
    name: 'logout_url',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetOAuthUserRequest, {
  0: {
    name: 'GetOAuthUserRequest',
    fullName: 'apphosting.GetOAuthUserRequest'
  },
  1: {
    name: 'scope',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'scopes',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.GetOAuthUserResponse, {
  0: {
    name: 'GetOAuthUserResponse',
    fullName: 'apphosting.GetOAuthUserResponse'
  },
  1: {
    name: 'email',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'user_id',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'auth_domain',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'user_organization',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  5: {
    name: 'is_admin',
    fieldType: goog.proto2.Message.FieldType.BOOL,
    defaultValue: false,
    type: Boolean
  },
  6: {
    name: 'client_id',
    fieldType: goog.proto2.Message.FieldType.STRING,
    defaultValue: '',
    type: String
  },
  7: {
    name: 'scopes',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.CheckOAuthSignatureRequest, {
  0: {
    name: 'CheckOAuthSignatureRequest',
    fullName: 'apphosting.CheckOAuthSignatureRequest'
  }
});


goog.proto2.Message.set$Metadata(apphosting.CheckOAuthSignatureResponse, {
  0: {
    name: 'CheckOAuthSignatureResponse',
    fullName: 'apphosting.CheckOAuthSignatureResponse'
  },
  1: {
    name: 'oauth_consumer_key',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});
