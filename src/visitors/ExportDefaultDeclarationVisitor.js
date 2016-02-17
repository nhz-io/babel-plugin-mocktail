import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new ExportDefaultDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#exportdefaultdeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#texportdefaultdeclarationdeclaration
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/es2015.js#L123
  */
export default class ExportDefaultDeclarationVisitor extends ASTVisitor {

  /** Create an instance of ExportDefaultDeclarationVisitor
    * @param {Object} nestedVisitors
    */
  constructor(...args) {
    super(...args)
    /** @type {Object} */

  }

  /** Visit path
    * @abstract
    * @param {Object} path
    * @param {Object} state
    */
  enter(path, state) {
    path.traverse(this.nestedVisitors, state)
  }

  /** Leave path
    * @abstract
    * @param {Object} path
    * @param {Object} state
    */
  exit(path, state) {

  }
}
