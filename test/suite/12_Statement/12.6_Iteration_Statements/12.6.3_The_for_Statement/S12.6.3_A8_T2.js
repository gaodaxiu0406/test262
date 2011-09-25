// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Blocks within "for" braces are not allowed
 *
 * @path 12_Statement/12.6_Iteration_Statements/12.6.3_The_for_Statement/S12.6.3_A8_T2.js
 * @description Checking if execution of "for(index=0; {index++;index<100;}; index*2;) {  arr.add(""+index);}" fails
 * @negative
 */

var arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for(index=0; {index++;index<100;}; index*2;) {	arr.add(""+index);};
//
//////////////////////////////////////////////////////////////////////////////
