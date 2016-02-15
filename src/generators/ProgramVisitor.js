import ASTVisitor from './ASTVisitor'
/**
  * @example
  * @implements {ASTVisitor}
  * const Program = new ProgramVisitor()
  */

export default class ProgramVisitor extends ASTVisitor {
  /** Visit program node
    * @param {Object} path
    * @param {Object} state
    */
  enter(path, state) {

  };
}
