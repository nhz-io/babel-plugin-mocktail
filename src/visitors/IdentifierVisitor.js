/**
  * @example
  * const visitor = new IdentifierVisitor()
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#identifier
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tidentifiername
  * @see https://github.com/babel/babel/blob/5b89849f432cfc034860f495b5001039123e7754/packages/babel-types/src/definitions/core.js#L304
  */
export default class IdentifierVisitor {

  constructor() {
    return function enter(path, state) {
      if(path.type === "Identifier") {
        const parent = path.parent.type
        switch(parent) {
          case "ExportDefaultDeclaration":
            state.export()
            break

          case "ExportSpecifier":
            state.export()
            break

          case "FunctionExpression":
            state.export()
            break

          case "FunctionDeclaration":
            state.export()
            break

          case "ClassDeclaration":
            state.export()
            break

          case "VariableDeclarator":
            state.export()
            break

          default:
            throw new TypeError("Invalid parent: " + parent)
        }
      }
    }
  }

}
