import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new FunctionDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#functiondeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tfunctiondeclarationid-params-body-generator-async
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js#L246
  */
export default class FunctionDeclarationVisitor extends ASTVisitor {

  /** Create an instance of FunctionDeclarationVisitor
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
