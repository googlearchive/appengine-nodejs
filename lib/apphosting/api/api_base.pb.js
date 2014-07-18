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

goog.provide('apphosting.base.StringProto');
goog.provide('apphosting.base.Integer32Proto');
goog.provide('apphosting.base.Integer64Proto');
goog.provide('apphosting.base.BoolProto');
goog.provide('apphosting.base.DoubleProto');
goog.provide('apphosting.base.BytesProto');
goog.provide('apphosting.base.VoidProto');

goog.require('goog.proto2.Message');



/**
 * Message StringProto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.StringProto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.StringProto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.StringProto} The cloned message.
 * @override
 */
apphosting.base.StringProto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.base.StringProto.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.base.StringProto.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.base.StringProto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.StringProto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.StringProto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.StringProto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message Integer32Proto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.Integer32Proto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.Integer32Proto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.Integer32Proto} The cloned message.
 * @override
 */
apphosting.base.Integer32Proto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?number} The value.
 */
apphosting.base.Integer32Proto.prototype.getValue = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {number} The value.
 */
apphosting.base.Integer32Proto.prototype.getValueOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {number} value The value.
 */
apphosting.base.Integer32Proto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.Integer32Proto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.Integer32Proto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.Integer32Proto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message Integer64Proto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.Integer64Proto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.Integer64Proto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.Integer64Proto} The cloned message.
 * @override
 */
apphosting.base.Integer64Proto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.base.Integer64Proto.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.base.Integer64Proto.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.base.Integer64Proto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.Integer64Proto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.Integer64Proto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.Integer64Proto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message BoolProto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.BoolProto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.BoolProto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.BoolProto} The cloned message.
 * @override
 */
apphosting.base.BoolProto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?boolean} The value.
 */
apphosting.base.BoolProto.prototype.getValue = function() {
  return /** @type {?boolean} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {boolean} The value.
 */
apphosting.base.BoolProto.prototype.getValueOrDefault = function() {
  return /** @type {boolean} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {boolean} value The value.
 */
apphosting.base.BoolProto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.BoolProto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.BoolProto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.BoolProto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message DoubleProto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.DoubleProto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.DoubleProto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.DoubleProto} The cloned message.
 * @override
 */
apphosting.base.DoubleProto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?number} The value.
 */
apphosting.base.DoubleProto.prototype.getValue = function() {
  return /** @type {?number} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {number} The value.
 */
apphosting.base.DoubleProto.prototype.getValueOrDefault = function() {
  return /** @type {number} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {number} value The value.
 */
apphosting.base.DoubleProto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.DoubleProto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.DoubleProto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.DoubleProto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message BytesProto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.BytesProto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.BytesProto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.BytesProto} The cloned message.
 * @override
 */
apphosting.base.BytesProto.prototype.clone;


/**
 * Gets the value of the value field.
 * @return {?string} The value.
 */
apphosting.base.BytesProto.prototype.getValue = function() {
  return /** @type {?string} */ (this.get$Value(1));
};


/**
 * Gets the value of the value field or the default value if not set.
 * @return {string} The value.
 */
apphosting.base.BytesProto.prototype.getValueOrDefault = function() {
  return /** @type {string} */ (this.get$ValueOrDefault(1));
};


/**
 * Sets the value of the value field.
 * @param {string} value The value.
 */
apphosting.base.BytesProto.prototype.setValue = function(value) {
  this.set$Value(1, value);
};


/**
 * @return {boolean} Whether the value field has a value.
 */
apphosting.base.BytesProto.prototype.hasValue = function() {
  return this.has$Value(1);
};


/**
 * @return {number} The number of values in the value field.
 */
apphosting.base.BytesProto.prototype.valueCount = function() {
  return this.count$Values(1);
};


/**
 * Clears the values in the value field.
 */
apphosting.base.BytesProto.prototype.clearValue = function() {
  this.clear$Field(1);
};



/**
 * Message VoidProto.
 * @constructor
 * @extends {goog.proto2.Message}
 */
apphosting.base.VoidProto = function() {
  goog.proto2.Message.apply(this);
};
goog.inherits(apphosting.base.VoidProto, goog.proto2.Message);


/**
 * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
 * @return {!apphosting.base.VoidProto} The cloned message.
 * @override
 */
apphosting.base.VoidProto.prototype.clone;


goog.proto2.Message.set$Metadata(apphosting.base.StringProto, {
  0: {
    name: 'StringProto',
    fullName: 'apphosting.base.StringProto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.STRING,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.Integer32Proto, {
  0: {
    name: 'Integer32Proto',
    fullName: 'apphosting.base.Integer32Proto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT32,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.Integer64Proto, {
  0: {
    name: 'Integer64Proto',
    fullName: 'apphosting.base.Integer64Proto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.INT64,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.BoolProto, {
  0: {
    name: 'BoolProto',
    fullName: 'apphosting.base.BoolProto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BOOL,
    type: Boolean
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.DoubleProto, {
  0: {
    name: 'DoubleProto',
    fullName: 'apphosting.base.DoubleProto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.DOUBLE,
    type: Number
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.BytesProto, {
  0: {
    name: 'BytesProto',
    fullName: 'apphosting.base.BytesProto'
  },
  1: {
    name: 'value',
    required: true,
    fieldType: goog.proto2.Message.FieldType.BYTES,
    type: String
  }
});


goog.proto2.Message.set$Metadata(apphosting.base.VoidProto, {
  0: {
    name: 'VoidProto',
    fullName: 'apphosting.base.VoidProto'
  }
});
