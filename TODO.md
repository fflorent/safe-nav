# TODO

## Tests

Some expressions to test (none of them should raise exceptions nor syntax errors ; if not preceded with "?.", all the properties are non-null):
- a?.b.c =>
  * if a == null: a
  * otherwise: a.b.c
- a?.b.c?.d.e =>
  * if a == null: a
  * otherwise if a.b.c == null: a.b.c
  * otherwise a.b.c.d.e
- a?.b.c["key"].d =>
  * if a == null: a
  * otherwise if a.b.c["key"].d
- a?.b.c[k.e.y].d =>
  * if a == null: a
  * otheriwse: a.b.c[k.e.y].d
- a.b.c[k.e.y]?.d =>
  * if a.b.c[k.e.y] == null: a.b.c[k.e.y] == null
  * otheriwse: a.b.c[k.e.y].d
- a.b?.c(a, r, g).d =>
  * if a.b == null: a.b
  * otherwise: a.b.c(a, r, g).d
- if (a?.b.c) { print(`Condition Fulfilled, evaluate: ${a.b.c.d.?e}`); } else { print("Condition Rejected"); }
  * if a == null: "Condition Rejected"
  * if a.b.c == null: "Condition Rejected"
  * if a.b.c.d == null: "Condition Fulfilled, evaluate: null"
  * otherwise: "Condition Fulfilled, evaluate: <result of a.b.c.d.e>"
- (function test(arg) { print(arg); })(a?.b.c)
  * if a == null: print a
  * otherwise: print a.b.c
- tests with switch-case

These expressions should raise syntax error:
- a?.
- a.b?.("ko")
- a.?b["ko"]

These expressions should raise exceptions:
- a?.b.c
  * (a != null and b == null)
