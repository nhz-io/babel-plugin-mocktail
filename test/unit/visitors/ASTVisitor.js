import should from "should"
import ASTVisitor from "../../../src/visitors/ASTVisitor"

/** @test {ASTVisitor} */
describe("ASTVisitor", () => {

  /** @test {ASTVisitor#constructor} */
  describe("#constructor(nestedVisitors)", () => {
    let visitor;
    beforeEach(() => visitor = new ASTVisitor)

    it("returns an instance of ASTVisitor", () => visitor.should.be.an.instanceOf(ASTVisitor))

    it("populates ASTVisitor~nestedVisitors from the first argument", () => {
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
    it("should throw a SyntaxError", () => {
      should(() => (new ASTVisitor).enter()).throw(SyntaxError)
    })
  })

  /** @test {ASTVisitor#exit} */
  describe("#exit", () => {
    it("should throw a SyntaxError", () => {
      should(() => (new ASTVisitor).exit()).throw(SyntaxError)
    })
  })
})
