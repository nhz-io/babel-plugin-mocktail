/**
  * @example
  * const visitor = new ClassDeclarationVisitor({export: function(name, node) { ... }})
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#classdeclaration
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tclassdeclarationid-superclass-body-decorators
  * @see https://github.com/babel/babel/5b89849f432cfc034860f495b5001039123e7754/master/packages/babel-types/src/definitions/es2015.js#L62
  */

export default class ClassDeclarationVisitor {

  /**
    * @static
    * @type {Array}
    */
  static PARENTS = [
    "ExportDefaultDeclaration",
  ]

  /** Create an ClassDeclarationVisitor with optional default state
    * @param {Object}   defaultState                    - Default state for Visitor enter(path, state) method
    * @param {Function} defaultState.export             - Default Exporter function
    * @return {Function} enter                          - Visitor enter(path, state) method
    */
  constructor(defaultState = {}) {
    return function enter(path, state = defaultState) {
      if(path.type === "ClassDeclaration" && !path.id) {
        for(let parent of ClassDeclarationVisitor.PARENTS) {
          if(parent === path.parent.type) {
            state.export(null, path.node)
            return
          }
        }
      }
    }
  }

}
