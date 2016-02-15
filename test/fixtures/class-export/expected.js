import { mock as _mock } from "mocktail";
class Test {}

const _Test = _mock(Test);

export { _Test as Test };
