import should from "should"
import ASTVisitor from "../../src/visitors/ASTVisitor"

/** @test {ASTVisitor} */
describe("ASTVisitor", () => {

  /** @test {ASTVisitor#constructor} */
  describe("#constructor(...nestedVisitors)", () => {
    it("returns an instance of ASTVisitor", () => {
      should(new ASTVisitor()).be.an.instanceOf(ASTVisitor)
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
