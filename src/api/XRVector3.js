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

export default class XRVector3 {
  /**
   * @param {Float32Array} values
   * @param {number} values[0]
   * @param {number} values[1]
   * @param {number} values[2]
   */
  constructor(values) {
    if (values === undefined) {
      values = [0, 0, 0];
    }

    if (!values || values.length !== 3 || !values.every(x => typeof x === 'number')) {
      throw new Error('Invalid constructor to XRVector3. Must be an array-like of numbers.');
    }

    Object.defineProperties(this, {
      x: {
        value: values[0],
        writable: false,
      },
      y: {
        value: values[1],
        writable: false,
      },
      z: {
        value: values[2],
        writable: false,
      },
    });
  }
}
