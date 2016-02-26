/**
  * @example
  * const visitor = new FunctionDeclarationVisitor(nestedVisitors)
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#functiondeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tfunctiondeclarationid-params-body-generator-async
  * @see https://github.com/babel/babel/blob/master/packages/babel-types/src/definitions/core.js#L246
  */
export default class FunctionDeclarationVisitor {

  /**
    * @static
    * @type Array
    */
  static PARENTS = [
    "ExportDefaultDeclaration",
  ]

  /** Create an FunctionDeclarationVisitor with optional default state
    * @param {Object}   defaultState                    - Default state for Visitor enter(path, state) method
    * @param {Function} defaultState.export             - Default Exporter function
    * @return {Function} enter                          - Visitor enter(path, state) method
    */
  constructor(defaultState = {}) {
    return function enter(path, state = defaultState) {
      if(path.type === "FunctionDeclaration" && !path.id) {
        for(let parent of FunctionDeclarationVisitor.PARENTS) {
          if(parent === path.parent.type) {
            state.export(null, path.node)
            return
          }
        }
      }
    }
  }

}
