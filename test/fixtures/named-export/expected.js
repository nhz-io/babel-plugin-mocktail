import { mock as _mock } from "mocktail";

const _foo = _mock(foo);

export { _foo as foo };

const _bar = _mock(bar);

export { _bar as Bar };
