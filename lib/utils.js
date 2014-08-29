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

'use strict';

module.exports = {
  numberArrayToString: numberArrayToString,
  bufferToUint8Array: bufferToUint8Array,
  stringToUint8Array: stringToUint8Array,
};

/**
 * Convert an array of numbers to a string.
 *
 * @param {Array.<number>} a array to convert
 * @return {!string} resulting string
 */
function numberArrayToString(a) {
  var s = '';
  for (var i in a) {
    s += String.fromCharCode(a[i]);
  }
  return s;
}

/**
 * Convert a node.js Buffer to a UInt8Array.
 *
 * @param {!Buffer} buffer buffer to convert
 * @return {!Uint8Array} resulting array
 */
function bufferToUint8Array(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return view;
}

/**
 * Convert a string to a Uint8Array.
 * @param {!string} s string to convert
 * @return {UInt8Array} resulting array
 */
function stringToUint8Array(s) {
    var a = new Uint8Array(s.length);
    for(var i = 0, j = s.length; i < j; ++i) {
        a[i] = s.charCodeAt(i);
    }
    return a;
}
