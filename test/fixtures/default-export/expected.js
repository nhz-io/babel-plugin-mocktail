import { mock as _mock } from "mocktail";
const foobar = null;
export default _mock(foobar, "foobar");
export default _mock({}, "actual");
class _actual {}
export default _mock(_actual, "actual");
function _actual2() {}
export default _mock(_actual2, "actual");
function foo() {}
export default _mock(foo, "foo");
class Foo {}
export default _mock(Foo, "Foo");
