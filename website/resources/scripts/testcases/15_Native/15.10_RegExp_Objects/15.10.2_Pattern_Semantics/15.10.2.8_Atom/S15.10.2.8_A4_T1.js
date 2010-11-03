// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A4_T1;
* @section: 15.10.2.8;
* @assertion: The production Atom :: . evaluates as follows: 
* i) Let A be the set of all characters except the four line terminator characters <LF>, <CR>, <LS>, or <PS> 
* ii) Call CharacterSetMatcher(A, false) and return its Matcher result;
* @description: Execute /ab.de/.exec("abcde") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A4_T1",

path: "15.10.2.8",

description: "Execute /ab.de/.exec(\"abcde\") and check results",

test: function testcase() {
   __string = "abcde";
__executed = /ab.de/.exec(__string);

__expected = ["abcde"];
__expected.index = 0;
__expected.input = __string;

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __string = "abcde"; __executed = /ab.de/.exec(__string); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __string = "abcde"; __executed = /ab.de/.exec(__string); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __string = "abcde"; __executed = /ab.de/.exec(__string); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __string = "abcde"; __executed = /ab.de/.exec(__string); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});
