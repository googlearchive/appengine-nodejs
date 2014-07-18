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
 * @fileoverview Protocol Buffer 2 Serializer which serializes and deserializes
 * messages using the wire format. Note that this serializer requires protocol
 * buffer reflection, which carries some overhead.
 * @supported any browser with DataView implemented. For now Chrome9, FF15, IE10
 *
 * @see https://developers.google.com/protocol-buffers/docs/encoding
 */


goog.provide('net.proto2.contrib.WireSerializer');

goog.require('goog.asserts');
goog.require('goog.math.Long');
goog.require('goog.proto2.Message');
goog.require('goog.proto2.Serializer');



/**
 * Wire format serializer.
 *
 * @constructor
 * @extends {goog.proto2.Serializer}
 */
net.proto2.contrib.WireSerializer = function() {
  /**
   * This array is where proto bytes go during serialization.
   * It must be reset for each serialization.
   * @type {!Array.<number>}
   * @private
   */
  this.buffer_ = [];

  /**
   * Scratch workspace to avoid allocations during serialization.
   * @type {{value: number, length: number}}
   * @private
   */
  this.scratchTag32_ = {value: 0, length: 0};

  /**
   * Scratch workspace to avoid allocations during serialization.
   * @type {{value: !goog.math.Long, length: number}}
   * @private
   */
  this.scratchTag64_ = {value: goog.math.Long.ZERO, length: 0};

  /**
   * Scratch data view for coding/decoding little-endian numbers.
   * @type {!DataView}
   * @private
   */
  this.dataView_ = new DataView(new ArrayBuffer(8));
};
goog.inherits(net.proto2.contrib.WireSerializer, goog.proto2.Serializer);


/**
 * @return {!Array.<number>} The serialized form of the message.
 * @override
 */
net.proto2.contrib.WireSerializer.prototype.serialize = function(message) {
  if (message == null) {
    return [];
  }

  this.buffer_ = [];

  var descriptor = message.getDescriptor();
  var fields = descriptor.getFields();

  // Add the known fields.
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];

    if (!message.has(field)) {
      continue;
    }

    if (field.isRepeated()) {
      for (var j = 0, n = message.countOf(field); j < n; j++) {
        var val = message.get(field, j);
        this.getSerializedValue(field, val);
      }
    } else {
      this.getSerializedValue(field, message.get(field));
    }
  }

  return this.buffer_;
};


/**
 * Append the serialized field tag to our serialization buffer.
 * @param {goog.proto2.FieldDescriptor} field The field to serialize.
 * @return {boolean} Whether the field tag was serialized.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeFieldTag_ =
    function(field) {
  var wireType = 0;
  switch (field.getFieldType()) {
    default:
      return false;
    case goog.proto2.Message.FieldType.SINT32:
    case goog.proto2.Message.FieldType.SINT64:
    case goog.proto2.Message.FieldType.BOOL:
    case goog.proto2.Message.FieldType.INT64:
    case goog.proto2.Message.FieldType.ENUM:
    case goog.proto2.Message.FieldType.INT32:
    case goog.proto2.Message.FieldType.UINT32:
    case goog.proto2.Message.FieldType.UINT64:
      wireType = 0;
      break;
    case goog.proto2.Message.FieldType.FIXED64:
    case goog.proto2.Message.FieldType.SFIXED64:
    case goog.proto2.Message.FieldType.DOUBLE:
      wireType = 1;
      break;
    case goog.proto2.Message.FieldType.STRING:
    case goog.proto2.Message.FieldType.BYTES:
    case goog.proto2.Message.FieldType.MESSAGE:
      wireType = 2;
      break;
    case goog.proto2.Message.FieldType.GROUP:
      wireType = 3;
      break;
    case goog.proto2.Message.FieldType.FIXED32:
    case goog.proto2.Message.FieldType.SFIXED32:
    case goog.proto2.Message.FieldType.FLOAT:
      wireType = 5;
      break;
  }
  this.serializeVarint_((field.getTag() << 3) | wireType);
  return true;
};

/** @override */
net.proto2.contrib.WireSerializer.prototype.getSerializedValue =
    function(field, value) {
  if (!this.serializeFieldTag_(field)) {
    return false;
  }

  switch (field.getFieldType()) {
    default:
      throw new Error('Unknown field type ' + field.getFieldType());
    case goog.proto2.Message.FieldType.SINT32:
      this.serializeVarint_(this.zigZagEncode(/** @type {number} */ (value)));
      break;
    case goog.proto2.Message.FieldType.SINT64:
      this.serializeVarint64_(this.zigZagEncode64_(
          goog.math.Long.fromString(/** @type {string} */(value))));
      break;
    case goog.proto2.Message.FieldType.BOOL:
      this.serializeVarint_(value ? 1 : 0);
      break;
    case goog.proto2.Message.FieldType.INT64:
      this.serializeVarint64_(
          goog.math.Long.fromString(/** @type {string} */(value)));
      break;
    case goog.proto2.Message.FieldType.ENUM:
    case goog.proto2.Message.FieldType.INT32:
    case goog.proto2.Message.FieldType.UINT32:
    case goog.proto2.Message.FieldType.UINT64:
      this.serializeVarint_(/** @type {number} */ (value));
      break;
    case goog.proto2.Message.FieldType.FIXED64:
    case goog.proto2.Message.FieldType.SFIXED64:
      this.serializeFixed_(/** @type {number} */ (value), 8);
      break;
    case goog.proto2.Message.FieldType.DOUBLE:
      this.serializeDouble_(/** @type {number} */ (value));
      break;
    case goog.proto2.Message.FieldType.STRING:
    case goog.proto2.Message.FieldType.BYTES:
      this.serializeString(value);
      break;
    case goog.proto2.Message.FieldType.GROUP:
      var serialized = new net.proto2.contrib.WireSerializer().serialize(
          /** @type {goog.proto2.Message} */ (value));
      Array.prototype.push.apply(this.buffer_, serialized);
      this.serializeVarint_((field.getTag() << 3) | 4);
      break;
    case goog.proto2.Message.FieldType.MESSAGE:
      var serialized = new net.proto2.contrib.WireSerializer().serialize(
          /** @type {goog.proto2.Message} */ (value));
      this.serializeVarint_(serialized.length);
      Array.prototype.push.apply(this.buffer_, serialized);
      break;
    case goog.proto2.Message.FieldType.FIXED32:
    case goog.proto2.Message.FieldType.SFIXED32:
      this.serializeFixed_(/** @type {number} */ (value), 4);
      break;
    case goog.proto2.Message.FieldType.FLOAT:
      this.serializeFloat_(/** @type {number} */ (value));
      break;
  }
  // To avoid allocations, this method serializes into a pre-existing buffer,
  // rather than serializing into a new value object.
  return null;
};


/** @override */
net.proto2.contrib.WireSerializer.prototype.deserializeTo =
    function(message, buffer) {
  if (buffer == null) {
    // Since value double-equals null, it may be either null or undefined.
    // Ensure we return the same one, since they have different meanings.
    return buffer;
  }

  var descriptor = message.getDescriptor();

  while (true) {
    var tag = this.parseUnsignedVarInt_(buffer);
    var tagValue = tag.value;
    var tagLength = tag.length;
    var index = tagValue >> 3;
    // For future reference, the wiretype is tagValue & 0x7.
    var value = {value: undefined, length: 0};
    var field = descriptor.findFieldByTag(index);
    if (field) {
      value = this.getDeserializedValue(field, buffer.subarray(tagLength));
      if (value && value.value !== null) {
        if (field.isRepeated()) {
          message.add(field, value.value);
        } else {
          message.set(field, value.value);
        }
      }
    }
    if (buffer.length < tagLength + value.length) {
      break;
    }
    buffer = buffer.subarray(tagLength + value.length);
  }
};


/**
 * Deserializes a message from the expected format and places the
 * data in the message. The message must correspond to a group. Moreover
 * the buffer must be positioned after the initial START_GROUP tag for the
 * group. The message will be terminated by the first END_GROUP tag at the
 * same nesting level. It is the responsibility of the caller to validate that
 * its field index matches the one in the opening START_GROUP tag. Since groups
 * are not length-delimited, this method returns the length of the parsed
 * data excluding the END_GROUP tag.
 *
 * @param {goog.proto2.Message} message The message in which to
 *     place the information.
 * @param {*} buffer The data of the message.
 * @return {number} the length of the parsed message, excluding the closing tag.
 * @protected
 */
 net.proto2.contrib.WireSerializer.prototype.deserializeGroupTo =
    function(message, buffer) {
  if (buffer == null) {
    return 0;
  }

  var descriptor = message.getDescriptor();
  var parsedLength = 0;

  while (true) {
    var tag = this.parseUnsignedVarInt_(buffer);
    var tagValue = tag.value;
    var tagLength = tag.length;
    var index = tagValue >> 3;
    var wiretype = tagValue & 7;
    if (wiretype == 4) {
      // Got an end group.
      break;
    }
    parsedLength += tagLength;
    var value = {value: undefined, length: 0};
    var field = descriptor.findFieldByTag(index);
    if (field) {
      value = this.getDeserializedValue(field, buffer.subarray(tagLength));
      if (value && value.value !== null) {
        if (field.isRepeated()) {
          message.add(field, value.value);
        } else {
          message.set(field, value.value);
        }
      }
    }
    parsedLength += value.length;
    if (buffer.length < tagLength + value.length) {
      break;
    }
    buffer = buffer.subarray(tagLength + value.length);
  }
  return parsedLength;
};


/**
 * @override
 */
net.proto2.contrib.WireSerializer.prototype.getDeserializedValue =
    function(field, buffer) {
  var value = null;
  var t = field.getFieldType();
  var varInt = this.parseVarInt64_(buffer);
  var length = varInt.length;
  switch (t) {
    case goog.proto2.Message.FieldType.SINT32:
      value = this.zigZagDecode_(varInt.value.toInt());
      break;
    case goog.proto2.Message.FieldType.SINT64:
      value = this.zigZagDecode64_(varInt.value).toString();
      break;
    case goog.proto2.Message.FieldType.BOOL:
      value = varInt.value.equals(goog.math.Long.ONE);
      break;
    case goog.proto2.Message.FieldType.INT64:
    case goog.proto2.Message.FieldType.UINT64:
      value = varInt.value.toString();
      break;
    case goog.proto2.Message.FieldType.ENUM:
    case goog.proto2.Message.FieldType.INT32:
    case goog.proto2.Message.FieldType.UINT32:
      value = varInt.value.toInt();
      break;
    case goog.proto2.Message.FieldType.FIXED64:
    case goog.proto2.Message.FieldType.SFIXED64:
      value = this.parseFixed_(buffer.subarray(0, 8)).toString();
      length = 8;
      break;
    case goog.proto2.Message.FieldType.DOUBLE:
      value = this.parseDouble_(buffer.subarray(0, 8));
      length = 8;
      break;
    case goog.proto2.Message.FieldType.STRING:
      var strBuffer =
          buffer.subarray(varInt.length, varInt.length + varInt.value.toInt());
      value = String.fromCharCode.apply(null, strBuffer);
      length = varInt.length + varInt.value.toInt();
      break;
    case goog.proto2.Message.FieldType.BYTES:
      var strBuffer =
          buffer.subarray(varInt.length, varInt.length + varInt.value.toInt());
      value = String.fromCharCode.apply(null, strBuffer);
      length = varInt.length + varInt.value.toInt();
      break;
    case goog.proto2.Message.FieldType.GROUP:
      value = field.getFieldMessageType().createMessageInstance();
      var groupLength = this.deserializeGroupTo(value, buffer);
      var next = buffer.subarray(groupLength);
      var closingTag = this.parseVarInt64_(next);
      var expected = (field.getTag() << 3) | 4;
      goog.asserts.assert(closingTag.value.toInt() == expected,
          'Error deserializing group');
      length = groupLength + closingTag.length;
      break;
    case goog.proto2.Message.FieldType.MESSAGE:
      length = varInt.length + varInt.value.toInt();
      var data = buffer.subarray(varInt.length, length);
      value = field.getFieldMessageType().createMessageInstance();
      this.deserializeTo(value, data);
      break;
    case goog.proto2.Message.FieldType.FIXED32:
    case goog.proto2.Message.FieldType.SFIXED32:
      value = this.parseFixed_(buffer.subarray(0, 4));
      length = 4;
      break;
    case goog.proto2.Message.FieldType.FLOAT:
      value = this.parseFloat_(buffer.subarray(0, 4));
      length = 4;
      break;
  }
  return {value: value, length: length};
};


/**
 * @param {*} value String that needs to be converted to bytes.
 */
net.proto2.contrib.WireSerializer.prototype.serializeString = function(value) {
  if (goog.isDefAndNotNull(value)) {
    // Serialize length.
    this.serializeVarint_(value.length);
    for (var i = 0; i < value.length; i++) {
      this.buffer_.push(value.charCodeAt(i));
    }
  }
};


/**
 * @param {*} buffer to parse as String.
 * @return {{value: string, length: number}}
 */
net.proto2.contrib.WireSerializer.prototype.parseString = function(buffer) {
  var length = this.parseUnsignedVarInt_(buffer);
  var strBuffer = buffer.subarray(length.length, length.length + length.value);
  return {
    value: String.fromCharCode.apply(null, strBuffer),
    length: length.length + length.value
  };
};


/**
 * @param {number} number signed number that needs to be converted to unsigned.
 * @return {number}
 */
net.proto2.contrib.WireSerializer.prototype.zigZagEncode =
    function(number) {
  var sign = number >>> 31;
  return (number << 1) ^ -sign;
};


/**
 * @param {number} number Unsigned number in zigzag format that needs
                   to be converted to signed.
 * @return {number} signed.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.zigZagDecode_ =
    function(number) {
  return (number >>> 1) ^ -(number & 1);
};


/**
 * @param {!goog.math.Long} number signed number that needs to be converted to
 * unsigned.
 * @return {!goog.math.Long}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.zigZagEncode64_ =
    function(number) {
  var sign = number.shiftRightUnsigned(63);
  return number.shiftLeft(1).xor(sign.negate());
};


/**
 * @param {!goog.math.Long} number Unsigned number in zigzag format that needs
                   to be converted to signed.
 * @return {!goog.math.Long}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.zigZagDecode64_ =
    function(number) {
  return number.shiftRightUnsigned(1).xor(
      number.and(goog.math.Long.ONE).negate());
};


/**
 * Serialize the given number as a varint into our buffer.
 * @param {number} number that needs to be converted to varint.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeVarint_ =
    function(number) {
  do {
    var chunk = number & 0x7F;
    number = number >>> 7;
    if (number > 0) {
      chunk = chunk | 0x80;
    }
    this.buffer_.push(chunk);
  } while (number > 0);
};


/**
 * Serialize the given 64-bit number as a varint into our buffer.
 * @param {!goog.math.Long} number that needs to be encoded as varint.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeVarint64_ =
    function(number) {
  var mask = goog.math.Long.fromInt(0x7F);
  do {
    var chunk = number.and(mask).toInt();
    number = number.shiftRightUnsigned(7);
    if (number.greaterThan(goog.math.Long.ZERO)) {
      chunk = chunk | 0x80;
    }
    this.buffer_.push(chunk);
  } while (number.greaterThan(goog.math.Long.ZERO));
};


/**
 * @param {*} buffer from which field number and type needs to be extracted.
 * @return {{value: !goog.math.Long, length: number}}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.parseVarInt64_ = function(buffer) {
  var valueInfo = this.scratchTag64_;
  var number = goog.math.Long.fromNumber(0);
  var i = 0;
  for (; i < buffer.length; i++) {
    var bits = goog.math.Long.fromInt(buffer[i] & 0x7F).shiftLeft(i * 7);
    number = number.or(bits);
    if ((buffer[i] & 0x80) == 0) {
      break;
    }
  }
  valueInfo.value = number;
  valueInfo.length = i + 1;
  return valueInfo;
};


/**
 * A special case parser for unsigned 32-bit varints, which can fit comfortably
 * in 32 bits during decoding.
 * @param {*} buffer from which field number and type needs to be extracted.
 * @return {{value: number, length: number}}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.parseUnsignedVarInt_ =
    function(buffer) {
  var valueInfo = this.scratchTag32_;
  var result = 0;
  var i = 0;
  for (; i < buffer.length; i++) {
    result = result | ((buffer[i] & 0x7F) << (i * 7));
    if ((buffer[i] & 0x80) == 0) {
      break;
    }
  }
  valueInfo.value = result;
  valueInfo.length = i + 1;
  return valueInfo;
};


/**
 * @param {number} number that needs to be converted to little endian order.
 * @param {number} size of the result array (4 = 32bit, 8 = 64bit).
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeFixed_ =
    function(number, size) {
  for (var i = 0; i < size; i++) {
    this.buffer_.push(number & 0xFF);
    number = number >>> 8;
  }
};


/**
 * @param {*} buffer from which field number and type needs
 * to be extracted.
 * @return {number}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.parseFixed_ = function(buffer) {
  var number = 0;
  for (var i = 0; i < buffer.length; i++) {
    number = number | (buffer[i] << (i * 8));
  }
  return number;
};


/**
 * @param {*} buffer from which double needs to be extracted.
 * @return {number}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.parseDouble_ = function(buffer) {
  for (var i = 0; i < 8; i++) {
    this.dataView_.setUint8(i, buffer[i]);
  }
  return this.dataView_.getFloat64(0, true);  // little-endian
};


/**
 * @param {*} buffer from which float needs to be extracted.
 * @return {number}
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.parseFloat_ = function(buffer) {
  for (var i = 0; i < 4; i++) {
    this.dataView_.setUint8(i, buffer[i]);
  }
  return this.dataView_.getFloat32(0, true);  // little-endian
};


/**
 * @param {number} number to be serialized to 8 bytes.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeDouble_ =
    function(number) {
  this.dataView_.setFloat64(0, number, true);  // little-endian
  for (var i = 0; i < 8; i++) {
    this.buffer_.push(this.dataView_.getUint8(i));
  }
};


/**
 * @param {number} number to be serialized to 4 bytes.
 * @private
 */
net.proto2.contrib.WireSerializer.prototype.serializeFloat_ = function(number) {
  this.dataView_.setFloat32(0, number, true);  // little-endian
  for (var i = 0; i < 4; i++) {
    this.buffer_.push(this.dataView_.getUint8(i));
  }
};
