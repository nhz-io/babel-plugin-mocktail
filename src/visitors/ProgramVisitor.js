import ASTVisitor from './ASTVisitor'
/**
  * @example
  * const Program = new ProgramVisitor({ ... })
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#programs
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tfileprogram-comments-tokens
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js#L449
  */

export default class ProgramVisitor extends ASTVisitor {
  /** Visit Program node
    * @param {Object} path
    * @param {Object} state
    */

  constructor(...args) {
    super(...args)
    this.state = { name: "", absPath: "", relPath: "", imports: [], exports: [] }
  }

  enter(path, state) {

  }
}
