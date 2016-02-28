import { mock as _mock } from "mocktail";
const Foo = null;

const _Foo = _mock(Foo, "Foo");

export { _Foo as Foo };
class Bar {}

const _Bar = _mock(Bar, "Bar");

export { _Bar as Bar };
function foo() {}

const _foo = _mock(foo, "foo");

export { _foo as foo };

const _Foo2 = _mock(Foo, "Foobar");

export { _Foo2 as Foobar };

const _foobar = _mock(foobar, "foobar");

export { _foobar as foobar };
