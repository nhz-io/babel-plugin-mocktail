import ASTVisitor from './ASTVisitor'
/**
  * @example
  * const Program = new ProgramVisitor({ ... })
  */

export default class ProgramVisitor extends ASTVisitor {
  /** Visit Program node
    * @param {Object} path
    * @param {Object} state
    */

  constructor(...args) {
    super(...args)
    this.state = { name: "", path: "", imports: [], exports: [] }
  }

  enter(path, state) {

  }
}
