// This file was procedurally generated from the following sources:
// - src/class-fields/computed-name-zero-initializer-new-line-empty-bar-asi.case
// - src/class-fields/default/cls-decl-extends.template
/*---
description: computed name zero initialized var and newline, empty var (ASI) (class fields)
flags: [generated]
includes: [propertyHelper.js]
info: |
    1.1 New Productions

    [...]

    FieldDefinitionList [Yield, Await]:
      FieldDefinition [?Yield, ?Await]
      FieldDefinitionList  [?Yield, ?Await], FieldDefinition [?Yield, ?Await]

---*/


class Base {}
class C extends Base {
  ['a'] = 0
    b
  constructor() {
    super();
    assert.sameValue(this.a, 0);
      verifyEnumerable(this, "a");
      verifyWritable(this, "a");
      verifyConfigurable(this, "a");

      assert.sameValue(this.b, undefined);
      verifyEnumerable(this, "b");
      verifyWritable(this, "b");
      verifyConfigurable(this, "b");
  }
}

const c = new C();
