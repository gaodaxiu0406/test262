// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If thisArg is null or undefined, the called function is passed the global object as the this value
 *
 * @id: S15.3.4.4_A3_T4;
 * @section: 15.3.4.4;
 * @description: Argument at call function is undefined;
 */

Function("this.field=\"oil\"").call(undefined);

//CHECK#1
if (this["field"] !== "oil") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}
