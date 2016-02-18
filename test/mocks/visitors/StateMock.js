export default class StateMock {
  constructor(args = {}) {
    return {
      mocktail: {
        imports : args.imports || [],
        exports : args.exports || [],
        path    : args.path || "test.js",
        name    : args.name || "test",
        module  : args.module || "test",
      }
    }
  }
}
