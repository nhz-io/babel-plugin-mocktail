/**
  * @example
  * const visitor = new ArrowFunctionExpressionVisitor({export: function(name, node) { ... }})
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tarrowfunctionexpressionparams-body-async
  * @see https://github.com/babel/babel/blob/93e5c0e64b1a14f3b138a01c55082225084f47b4/packages/babel-types/src/definitions/es2015.js#L35
  */
export default class ArrowFunctionExpressionVisitor {

  /**
    * @static
    * @type Array
    */
  static PARENTS = [
    "ExportDefaultDeclaration",
  ]

  /** Create an ArrowFunctionExpressionVisitor with optional default state
    * @param {Object}   defaultState                    - Default state for Visitor enter(path, state) method
    * @param {Function} defaultState.export             - Default Exporter function
    * @return {Function} enter                          - Visitor enter(path, state) method
    */
  constructor(defaultState = {}) {
    return function enter(path, state = defaultState) {
      if(path.type === "ArrowFunctionExpression") {
        for(let parent of ArrowFunctionExpressionVisitor.PARENTS) {
          if(parent === path.parent.type) {
            state.export(null, path.node)
            return
          }
        }
      }
    }
  }

}
