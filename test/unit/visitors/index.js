import chai, { expect } from "chai"
chai.Should()

import Visitors from "../../../src/visitors"

describe("Visitors", () => {
  /** @test Visitors */
  describe("Visitors#constructor(defaultState)", () => {
    describe("result", () => {
      let visitors
      beforeEach(() => visitors = new Visitors())
      it("should be an Object", () => visitors.should.be.an.Object)
      it("should have IdentifierVisitor", () => expect(visitors.Identifier).to.be.an.instanceOf(Function))
      it("should have LiteralVisitor", () => expect(visitors.Literal).to.be.an.instanceOf(Function))
      it("should have FunctionDeclarationVisitor", () => expect(visitors.FunctionDeclaration).to.be.an.instanceOf(Function))
      it("should have ClassDeclarationVisitor", () => expect(visitors.ClassDeclaration).to.be.an.instanceOf(Function))
      it("should have ArrowFunctionExpressionVisitor", () => expect(visitors.ArrowFunctionExpression).to.be.an.instanceOf(Function))
    })
  })
})
