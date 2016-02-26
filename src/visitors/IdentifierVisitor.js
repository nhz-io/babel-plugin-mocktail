/**
  * @example
  * const visitor = new IdentifierVisitor({export: function(name, node) { ... }})
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#identifier
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tidentifiername
  * @see https://github.com/babel/babel/blob/5b89849f432cfc034860f495b5001039123e7754/packages/babel-types/src/definitions/core.js#L304
  */
export default class IdentifierVisitor {

  static PARENTS = [
    "ExportDefaultDeclaration",
    "ExportSpecifier",
    "FunctionDeclaration",
    "ClassDeclaration",
    "VariableDeclarator",
  ]

  constructor(defaultState = {}) {
    return function enter(path, state = defaultState) {
      if(path.type === "Identifier") {
        for(let parent of IdentifierVisitor.PARENTS) {
          if(parent === path.parent.type) {
            state.export(path.node.name, path.node)
            return
          }
        }
      }
    }
  }

}
