/**
  * @example
  * class Visitor extends ASTVisitor {
  *   enter(path, state) { ... }
  *   exit(path, state) { ... }
  * }
  */
export default class ASTVisitor {

  /** Create instance of ASTVisitor and store visitors for nested traversing
    * @param {Object} nestedVisitors
    */
  constructor(nestedVisitors) {

    /** @type {Object} */
    this.nestedVisitors = Object.assign({}, nestedVisitors)
  }

  /** Visit path
    * @abstract
    * @throws {SyntaxError}
    * @param {Object} path
    * @param {Object} state
    */
  enter(path, state) { throw new SyntaxError('UNIMPLEMENTED') }

  /** Leave path
    * @abstract
    * @throws {SyntaxError}
    * @param {Object} path
    * @param {Object} state
    */
  exit(path, state) { throw new SyntaxError('UNIMPLEMENTED') }
}
