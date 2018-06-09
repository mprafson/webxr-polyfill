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

import XRRay from '../../src/api/XRRay.js';
import XRVector3 from '../../src/api/XRVector3.js';

describe('API - XRRay', () => {
  it('defaults to <0,0,0> origin, direction', () => {
    const ray = new XRRay();
    assert.equal(ray.origin.x, 0);
    assert.equal(ray.origin.y, 0);
    assert.equal(ray.origin.z, 0);
    assert.equal(ray.direction.x, 0);
    assert.equal(ray.direction.y, 0);
    assert.equal(ray.direction.z, 0);
    assert.equal(ray.transformMatrix.length, 16);
  });

  it('throws if modifying any property', () => {
    const ray = new XRRay();
    assert.throws(() => ray.origin = new XRVector3());
    assert.throws(() => ray.direction = new XRVector3());
    assert.throws(() => ray.transformMatrix = new Float32Array());
  });

  it('throws if given non-expected types', () => {
    const args = [
      null,
      20,
      'hello',
      {}
    ];
    for (let arg of args) {
      assert.throws(() => new XRRay(arg, new XRVector3(), new Float32Array(16)));
      assert.throws(() => new XRRay(new XRVector3(), arg, new Float32Array(16)));
      assert.throws(() => new XRRay(new XRVector3(), new XRVector3(), arg));
    }
  });
});
