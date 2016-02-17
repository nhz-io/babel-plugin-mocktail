import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"

Should()

/** @test {ASTVisitor} */
describe("ASTVisitor", () => {

  /** @test {ASTVisitor#constructor} */
  describe("#constructor(nestedVisitors)", () => {
    let visitor;
    beforeEach(() => visitor = new ASTVisitor)

    it("creates an instance of ASTVisitor", () => visitor.should.be.an.instanceOf(ASTVisitor))

    it("sets ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ASTVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok
      visitor.nestedVisitors.should.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })
  })

  /** @test {ASTVisitor#enter} */
  describe("#enter", () => {
    it("throws a SyntaxError", () => {
      expect(() => (new ASTVisitor).enter()).to.throw(SyntaxError)
    })
  })

  /** @test {ASTVisitor#exit} */
  describe("#exit", () => {
    it("throws a SyntaxError", () => {
      expect(() => (new ASTVisitor).exit()).to.throw(SyntaxError)
    })
  })
})
