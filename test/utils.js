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

/* global describe, it */

'use strict';

var assert = require('assert');
var utils = require('../lib/utils.js');

describe('numberArrayToString', function() {
  it('should convert a non-empty array', function() {
    var a = [65, 66];
    var s = utils.numberArrayToString(a);
    assert.strictEqual(s, 'AB');
  });

  it('should convert an empty array', function() {
    var a = [];
    var s = utils.numberArrayToString(a);
    assert.strictEqual(s, '');
  });
});

describe('bufferToUint8Array', function() {
  it('should convert a non-empty buffer', function() {
    var b = new Buffer(2);
    b.writeUInt16BE(0x1234);
    var a = utils.bufferToUint8Array(b);
    assert.deepEqual(a, new Uint8Array([0x12, 0x34]));
  });

  it('should convert an empty buffer', function() {
    var b = new Buffer(0);
    var a = utils.bufferToUint8Array(b);
    assert.deepEqual(a, new Uint8Array([]));
  });
});

describe('stringToUint8Array', function() {
  it('should convert a non-empty string', function() {
    var a = utils.stringToUint8Array('AB');
    assert.deepEqual(a, new Uint8Array([65, 66]));
  });

  it('should convert an empty string', function() {
    var a = utils.stringToUint8Array('');
    assert.deepEqual(a, new Uint8Array([]));
  });
});
