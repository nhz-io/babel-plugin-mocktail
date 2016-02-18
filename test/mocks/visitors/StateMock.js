export default class StateMock {
  constructor(args = {}) {
    return {
      mocktail: {
        name    : args.name    || "test",
        path    : args.path    || "test.js",
        module  : args.module  || "test",
        imports : args.imports || [],
        exports : args.exports || [],
      },
    }
  }
}
