// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * No matter how control leaves the embedded 'Statement',
 * the scope chain is always restored to its former state
 *
 * @id: S12.10_A3.4_T4;
 * @section: 12.10;
 * @description: Using "with" statement within iteration statement, leading to completion by break;
 * @strict_only;
 * @strict_mode_negative;
 */

this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

do {
    with(myObj){
        p1 = 'x1';
        break;
    }
} while(false);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== "x1"){
  $ERROR('#2: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////


