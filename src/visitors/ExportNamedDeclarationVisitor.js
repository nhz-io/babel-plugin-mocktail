import ASTVisitor from "./ASTVisitor"

/**
  * @example
  * const visitor = new ExportNamedDeclarationVisitor(nestedVisitors)
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
