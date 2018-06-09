/*
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import mocha from 'mocha';
import { assert } from 'chai';

import XRVector3 from '../../src/api/XRVector3.js';

describe('API - XRVector3', () => {
  it('defaults to <0,0,0>', () => {
    const vec = new XRVector3();
    assert.equal(vec.x, 0);
    assert.equal(vec.y, 0);
    assert.equal(vec.z, 0);
  });

  it('throws if modifying any property', () => {
    const vec = new XRVector3();
    assert.throws(() => vec.x = 1);
    assert.throws(() => vec.y = 1);
    assert.throws(() => vec.z = 1);
    assert.equal(vec.x, 0);
    assert.equal(vec.y, 0);
    assert.equal(vec.z, 0);
  });

  it('takes an array as argument for x,y,z values', () => {
    const vec = new XRVector3([2.5, -10.5, 4]);
    assert.equal(vec.x, 2.5);
    assert.equal(vec.y, -10.5);
    assert.equal(vec.z, 4);
  });

  it('takes a Float32Array as argument for x,y,z values', () => {
    const vec = new XRVector3(new Float32Array([2.5, -10.5, 4]));
    assert.equal(vec.x, 2.5);
    assert.equal(vec.y, -10.5);
    assert.equal(vec.z, 4);
  });

  it('throws if given a non length 3 array-like', () => {
    const args = [];
    for (let i = 0; i < 10; i++) {
      if (args.length !== 3) {
        assert.throws(() => new XRVector3(args), /invalid/i, `throws with array of length ${i}`);
      }
      args.push(Math.random());
    }
  });

  it('throws if given a non array', () => {
    const args = [
      null,
      20,
      'hello',
      {}
    ];
    for (let i = 0; i < args.length; i++) {
      assert.throws(() => new XRVector3(args[i]), /invalid/i, `throws with a ${typeof args[i]} arg`);
    }
  });
});
