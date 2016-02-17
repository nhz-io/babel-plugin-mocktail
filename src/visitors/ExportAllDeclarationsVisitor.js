import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new ExportAllDeclarationsVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#exportalldeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#texportalldeclarationsource
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/es2015.js#L113
  */
export default class ExportAllDeclarationsVisitor extends ASTVisitor {

  /** Create an instance of ExportAllDeclarationsVisitor
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
