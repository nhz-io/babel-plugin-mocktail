import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new ExportNamedDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#exportnameddeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#texportnameddeclarationdeclaration-specifiers-source
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/es2015.js#L133
  */
export default class ExportNamedDeclarationVisitor extends ASTVisitor {

  /** Create an instance of ExportNamedDeclarationVisitor
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
