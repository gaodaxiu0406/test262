// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 15.1.1
description: >
    ScriptBody : StatementList

    It is a Syntax Error if the LexicallyDeclaredNames of StatementList contains any duplicate entries.
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";
class A {}
class A {}
