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

goog.provide('apphosting.MailServiceError');
goog.provide('apphosting.MailServiceError.ErrorCode');
goog.provide('apphosting.MailAttachment');
goog.provide('apphosting.MailHeader');
goog.provide('apphosting.MailMessage');

goog.require('goog.proto2.Message');



/**
 * Message MailServiceError.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MailServiceError = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MailServiceError, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MailServiceError} The cloned message.
 * @override
 */
apphosting.MailServiceError.prototype.clone;


/**
 * Enumeration ErrorCode.
 * @enum {number}
 */
apphosting.MailServiceError.ErrorCode = {
  OK: 0,
  INTERNAL_ERROR: 1,
  BAD_REQUEST: 2,
  UNAUTHORIZED_SENDER: 3,
  INVALID_ATTACHMENT_TYPE: 4,
  INVALID_HEADER_NAME: 5,
  INVALID_CONTENT_ID: 6
};



/**
 * Message MailAttachment.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MailAttachment = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MailAttachment, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MailAttachment} The cloned message.
 * @override
 */
apphosting.MailAttachment.prototype.clone;


/**
 * Gets the value of the FileName field.
 * @return {?string} The value.
 */
apphosting.MailAttachment.prototype.getFileName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the FileName field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailAttachment.prototype.getFileNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the FileName field.
 * @param {string} value The value.
 */
apphosting.MailAttachment.prototype.setFileName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the FileName field has a value.
 */
apphosting.MailAttachment.prototype.hasFileName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the FileName field.
 */
apphosting.MailAttachment.prototype.fileNameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the FileName field.
 */
apphosting.MailAttachment.prototype.clearFileName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the Data field.
 * @return {?string} The value.
 */
apphosting.MailAttachment.prototype.getData = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the Data field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailAttachment.prototype.getDataOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the Data field.
 * @param {string} value The value.
 */
apphosting.MailAttachment.prototype.setData = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the Data field has a value.
 */
apphosting.MailAttachment.prototype.hasData = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the Data field.
 */
apphosting.MailAttachment.prototype.dataCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the Data field.
 */
apphosting.MailAttachment.prototype.clearData = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the ContentID field.
 * @return {?string} The value.
 */
apphosting.MailAttachment.prototype.getContentID = function() {
  return /** @type {?string} */ (this.get$Value(3));
};


/**
 * Gets the value of the ContentID field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailAttachment.prototype.getContentIDOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(3));
};


/**
 * Sets the value of the ContentID field.
 * @param {string} value The value.
 */
apphosting.MailAttachment.prototype.setContentID = function(value) {
  this.set$Value(3, value);
};


/**
 * @return {boolean} Whether the ContentID field has a value.
 */
apphosting.MailAttachment.prototype.hasContentID = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the ContentID field.
 */
apphosting.MailAttachment.prototype.contentIDCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the ContentID field.
 */
apphosting.MailAttachment.prototype.clearContentID = function() {
  this.clear$Field(3);
};



/**
 * Message MailHeader.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MailHeader = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MailHeader, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MailHeader} The cloned message.
 * @override
 */
apphosting.MailHeader.prototype.clone;


/**
 * Gets the value of the name field.
 * @return {?string} The value.
 */
apphosting.MailHeader.prototype.getName = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the name field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailHeader.prototype.getNameOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the name field.
 * @param {string} value The value.
 */
apphosting.MailHeader.prototype.setName = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the name field has a value.
 */
apphosting.MailHeader.prototype.hasName = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the name field.
 */
apphosting.MailHeader.prototype.nameCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the name field.
 */
apphosting.MailHeader.prototype.clearName = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.MailHeader.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailHeader.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.MailHeader.prototype.setValue = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.MailHeader.prototype.hasValue = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.MailHeader.prototype.valueCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the value field.
 */
apphosting.MailHeader.prototype.clearValue = function() {
  this.clear$Field(2);
};



/**
 * Message MailMessage.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.MailMessage = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.MailMessage, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.MailMessage} The cloned message.
 * @override
 */
apphosting.MailMessage.prototype.clone;


/**
 * Gets the value of the Sender field.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getSender = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the Sender field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getSenderOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the Sender field.
 * @param {string} value The value.
 */
apphosting.MailMessage.prototype.setSender = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the Sender field has a value.
 */
apphosting.MailMessage.prototype.hasSender = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the Sender field.
 */
apphosting.MailMessage.prototype.senderCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the Sender field.
 */
apphosting.MailMessage.prototype.clearSender = function() {
  this.clear$Field(1);
};


/**
 * Gets the value of the ReplyTo field.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getReplyTo = function() {
  return /** @type {?string} */ (this.get$Value(2));
};


/**
 * Gets the value of the ReplyTo field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getReplyToOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(2));
};


/**
 * Sets the value of the ReplyTo field.
 * @param {string} value The value.
 */
apphosting.MailMessage.prototype.setReplyTo = function(value) {
  this.set$Value(2, value);
};


/**
 * @return {boolean} Whether the ReplyTo field has a value.
 */
apphosting.MailMessage.prototype.hasReplyTo = function() {
  return this.has$Value(2);
};


/**
 * @return {number} The number of values in the ReplyTo field.
 */
apphosting.MailMessage.prototype.replyToCount = function() {
  return this.count$Values(2);
};


/**
 * Clears the values in the ReplyTo field.
 */
apphosting.MailMessage.prototype.clearReplyTo = function() {
  this.clear$Field(2);
};


/**
 * Gets the value of the To field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getTo = function(index) {
  return /** @type {?string} */ (this.get$Value(3, index));
};


/**
 * Gets the value of the To field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getToOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(3, index));
};


/**
 * Adds a value to the To field.
 * @param {string} value The value to add.
 */
apphosting.MailMessage.prototype.addTo = function(value) {
  this.add$Value(3, value);
};


/**
 * Returns the array of values in the To field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.MailMessage.prototype.toArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(3));
};


/**
 * @return {boolean} Whether the To field has a value.
 */
apphosting.MailMessage.prototype.hasTo = function() {
  return this.has$Value(3);
};


/**
 * @return {number} The number of values in the To field.
 */
apphosting.MailMessage.prototype.toCount = function() {
  return this.count$Values(3);
};


/**
 * Clears the values in the To field.
 */
apphosting.MailMessage.prototype.clearTo = function() {
  this.clear$Field(3);
};


/**
 * Gets the value of the Cc field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getCc = function(index) {
  return /** @type {?string} */ (this.get$Value(4, index));
};


/**
 * Gets the value of the Cc field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getCcOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(4, index));
};


/**
 * Adds a value to the Cc field.
 * @param {string} value The value to add.
 */
apphosting.MailMessage.prototype.addCc = function(value) {
  this.add$Value(4, value);
};


/**
 * Returns the array of values in the Cc field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.MailMessage.prototype.ccArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(4));
};


/**
 * @return {boolean} Whether the Cc field has a value.
 */
apphosting.MailMessage.prototype.hasCc = function() {
  return this.has$Value(4);
};


/**
 * @return {number} The number of values in the Cc field.
 */
apphosting.MailMessage.prototype.ccCount = function() {
  return this.count$Values(4);
};


/**
 * Clears the values in the Cc field.
 */
apphosting.MailMessage.prototype.clearCc = function() {
  this.clear$Field(4);
};


/**
 * Gets the value of the Bcc field at the index given.
 * @param {number} index The index to lookup.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getBcc = function(index) {
  return /** @type {?string} */ (this.get$Value(5, index));
};


/**
 * Gets the value of the Bcc field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getBccOrDefault = function(index) {
  return /** @type {string} */ (this.get$ValueOrDefault(5, index));
};


/**
 * Adds a value to the Bcc field.
 * @param {string} value The value to add.
 */
apphosting.MailMessage.prototype.addBcc = function(value) {
  this.add$Value(5, value);
};


/**
 * Returns the array of values in the Bcc field.
 * @return {!Array.<string>} The values in the field.
 */
apphosting.MailMessage.prototype.bccArray = function() {
  return /** @type {!Array.<string>} */ (this.array$Values(5));
};


/**
 * @return {boolean} Whether the Bcc field has a value.
 */
apphosting.MailMessage.prototype.hasBcc = function() {
  return this.has$Value(5);
};


/**
 * @return {number} The number of values in the Bcc field.
 */
apphosting.MailMessage.prototype.bccCount = function() {
  return this.count$Values(5);
};


/**
 * Clears the values in the Bcc field.
 */
apphosting.MailMessage.prototype.clearBcc = function() {
  this.clear$Field(5);
};


/**
 * Gets the value of the Subject field.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getSubject = function() {
  return /** @type {?string} */ (this.get$Value(6));
};


/**
 * Gets the value of the Subject field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getSubjectOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(6));
};


/**
 * Sets the value of the Subject field.
 * @param {string} value The value.
 */
apphosting.MailMessage.prototype.setSubject = function(value) {
  this.set$Value(6, value);
};


/**
 * @return {boolean} Whether the Subject field has a value.
 */
apphosting.MailMessage.prototype.hasSubject = function() {
  return this.has$Value(6);
};


/**
 * @return {number} The number of values in the Subject field.
 */
apphosting.MailMessage.prototype.subjectCount = function() {
  return this.count$Values(6);
};


/**
 * Clears the values in the Subject field.
 */
apphosting.MailMessage.prototype.clearSubject = function() {
  this.clear$Field(6);
};


/**
 * Gets the value of the TextBody field.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getTextBody = function() {
  return /** @type {?string} */ (this.get$Value(7));
};


/**
 * Gets the value of the TextBody field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getTextBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(7));
};


/**
 * Sets the value of the TextBody field.
 * @param {string} value The value.
 */
apphosting.MailMessage.prototype.setTextBody = function(value) {
  this.set$Value(7, value);
};


/**
 * @return {boolean} Whether the TextBody field has a value.
 */
apphosting.MailMessage.prototype.hasTextBody = function() {
  return this.has$Value(7);
};


/**
 * @return {number} The number of values in the TextBody field.
 */
apphosting.MailMessage.prototype.textBodyCount = function() {
  return this.count$Values(7);
};


/**
 * Clears the values in the TextBody field.
 */
apphosting.MailMessage.prototype.clearTextBody = function() {
  this.clear$Field(7);
};


/**
 * Gets the value of the HtmlBody field.
 * @return {?string} The value.
 */
apphosting.MailMessage.prototype.getHtmlBody = function() {
  return /** @type {?string} */ (this.get$Value(8));
};


/**
 * Gets the value of the HtmlBody field or the default value if not set.
 * @return {string} The value.
 */
apphosting.MailMessage.prototype.getHtmlBodyOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(8));
};


/**
 * Sets the value of the HtmlBody field.
 * @param {string} value The value.
 */
apphosting.MailMessage.prototype.setHtmlBody = function(value) {
  this.set$Value(8, value);
};


/**
 * @return {boolean} Whether the HtmlBody field has a value.
 */
apphosting.MailMessage.prototype.hasHtmlBody = function() {
  return this.has$Value(8);
};


/**
 * @return {number} The number of values in the HtmlBody field.
 */
apphosting.MailMessage.prototype.htmlBodyCount = function() {
  return this.count$Values(8);
};


/**
 * Clears the values in the HtmlBody field.
 */
apphosting.MailMessage.prototype.clearHtmlBody = function() {
  this.clear$Field(8);
};


/**
 * Gets the value of the Attachment field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MailAttachment} The value.
 */
apphosting.MailMessage.prototype.getAttachment = function(index) {
  return /** @type {apphosting.MailAttachment} */ (this.get$Value(9, index));
};


/**
 * Gets the value of the Attachment field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MailAttachment} The value.
 */
apphosting.MailMessage.prototype.getAttachmentOrDefault = function(index) {
  return /** @type {!apphosting.MailAttachment} */ (this.get$ValueOrDefault(9, index));
};


/**
 * Adds a value to the Attachment field.
 * @param {!apphosting.MailAttachment} value The value to add.
 */
apphosting.MailMessage.prototype.addAttachment = function(value) {
  this.add$Value(9, value);
};


/**
 * Returns the array of values in the Attachment field.
 * @return {!Array.<!apphosting.MailAttachment>} The values in the field.
 */
apphosting.MailMessage.prototype.attachmentArray = function() {
  return /** @type {!Array.<!apphosting.MailAttachment>} */ (this.array$Values(9));
};


/**
 * @return {boolean} Whether the Attachment field has a value.
 */
apphosting.MailMessage.prototype.hasAttachment = function() {
  return this.has$Value(9);
};


/**
 * @return {number} The number of values in the Attachment field.
 */
apphosting.MailMessage.prototype.attachmentCount = function() {
  return this.count$Values(9);
};


/**
 * Clears the values in the Attachment field.
 */
apphosting.MailMessage.prototype.clearAttachment = function() {
  this.clear$Field(9);
};


/**
 * Gets the value of the Header field at the index given.
 * @param {number} index The index to lookup.
 * @return {apphosting.MailHeader} The value.
 */
apphosting.MailMessage.prototype.getHeader = function(index) {
  return /** @type {apphosting.MailHeader} */ (this.get$Value(10, index));
};


/**
 * Gets the value of the Header field at the index given or the default value if not set.
 * @param {number} index The index to lookup.
 * @return {!apphosting.MailHeader} The value.
 */
apphosting.MailMessage.prototype.getHeaderOrDefault = function(index) {
  return /** @type {!apphosting.MailHeader} */ (this.get$ValueOrDefault(10, index));
};


/**
 * Adds a value to the Header field.
 * @param {!apphosting.MailHeader} value The value to add.
 */
apphosting.MailMessage.prototype.addHeader = function(value) {
  this.add$Value(10, value);
};


/**
 * Returns the array of values in the Header field.
 * @return {!Array.<!apphosting.MailHeader>} The values in the field.
 */
apphosting.MailMessage.prototype.headerArray = function() {
  return /** @type {!Array.<!apphosting.MailHeader>} */ (this.array$Values(10));
};


/**
 * @return {boolean} Whether the Header field has a value.
 */
apphosting.MailMessage.prototype.hasHeader = function() {
  return this.has$Value(10);
};


/**
 * @return {number} The number of values in the Header field.
 */
apphosting.MailMessage.prototype.headerCount = function() {
  return this.count$Values(10);
};


/**
 * Clears the values in the Header field.
 */
apphosting.MailMessage.prototype.clearHeader = function() {
  this.clear$Field(10);
};


goog.proto2.Message.set$Metadata(apphosting.MailServiceError, {
  0: {
    name: 'MailServiceError',
    fullName: 'apphosting.MailServiceError'
  }
});


goog.proto2.Message.set$Metadata(apphosting.MailAttachment, {
  0: {
    name: 'MailAttachment',
    fullName: 'apphosting.MailAttachment'
  },
  1: {
    name: 'FileName',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'Data',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  },
  3: {
    name: 'ContentID',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.MailHeader, {
  0: {
    name: 'MailHeader',
    fullName: 'apphosting.MailHeader'
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


goog.proto2.Message.set$Metadata(apphosting.MailMessage, {
  0: {
    name: 'MailMessage',
    fullName: 'apphosting.MailMessage'
  },
  1: {
    name: 'Sender',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  2: {
    name: 'ReplyTo',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  3: {
    name: 'To',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  4: {
    name: 'Cc',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  5: {
    name: 'Bcc',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  6: {
    name: 'Subject',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  7: {
    name: 'TextBody',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  8: {
    name: 'HtmlBody',
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  },
  9: {
    name: 'Attachment',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.MailAttachment
  },
  10: {
    name: 'Header',
    repeated: true,
    fieldType: goog.proto2.Message.FieldType.MESSAGE,
    type: apphosting.MailHeader
  }
});
