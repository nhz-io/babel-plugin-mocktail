import IdentifierVisitor from "./IdentifierVisitor"
import LiteralVisitor from "./LiteralVisitor"
import FunctionDeclarationVisitor from "./FunctionDeclarationVisitor"
import ClassDeclarationVisitor from "./ClassDeclarationVisitor"
import ArrowFunctionExpressionVisitor from "./ArrowFunctionExpressionVisitor"

/**
  * @example
  * const visitor = new IdentifierVisitor({export: function(name, node) { ... }})
  * @see https://github.com/babel/babel/blob/master/doc/ast/spec.md#identifier
  * @see https://github.com/babel/babel/tree/master/packages/babel-types#tidentifiername
  * @see https://github.com/babel/babel/blob/5b89849f432cfc034860f495b5001039123e7754/packages/babel-types/src/definitions/core.js#L304
  */
export default class Visitors {
  /** Create a Visitors Object for path traversal
    * @param {Object}   defaultState                    - Default state for Visitor enter(path, state) method
    * @param {Function} defaultState.export             - Default Exporter function
    * @return {Function} enter                          - Visitor enter(path, state) method
    */
  constructor(defaultState = {}) {
    return {
      Identifier              : new IdentifierVisitor(defaultState),
      Literal                 : new LiteralVisitor(defaultState),
      FunctionDeclaration     : new FunctionDeclarationVisitor(defaultState),
      ClassDeclaration        : new ClassDeclarationVisitor(defaultState),
      ArrowFunctionExpression : new ArrowFunctionExpressionVisitor(defaultState),
    }
  }
}
