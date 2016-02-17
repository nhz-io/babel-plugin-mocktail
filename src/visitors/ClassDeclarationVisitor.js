import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new ClassDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#classdeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tclassdeclarationid-superclass-body-decorators
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/es2015.js#L62
  */
export default class ClassDeclarationVisitor extends ASTVisitor {

  /** Create an instance of ClassDeclarationVisitor
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
