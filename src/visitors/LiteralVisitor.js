/**
  * @example
  * const visitor = new LiteralVisitor({export: function(name, node) { ... }})
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#literals
  */
export default class LiteralVisitor {

  /**
    * @static
    * @type Array
    */
  static PARENTS = [
    "ExportDefaultDeclaration",
  ]

  /** Create an LiteralVisitor with optional default state
    * @param {Object}   defaultState                    - Default state for Visitor enter(path, state) method
    * @param {Function} defaultState.export             - Default Exporter function
    * @return {Function} enter                          - Visitor enter(path, state) method
    */
  constructor(defaultState = {}) {
    return function enter(path, state = defaultState) {
      if(path.type.match(/Literal$/)) {
        for(let parent of LiteralVisitor.PARENTS) {
          if(parent === path.parent.type) {
            state.export(null, path.node)
            return
          }
        }
      }
    }
  }

}
