import { should, assert, expect } from "should"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ProgramVisitor from "../../src/visitors/ProgramVisitor"

should()

/** @test {ProgramVisitor} */
describe("ProgramVisitor", () => {

  it('should be a subclass of ASTVisitor', () => {
    assert(ProgramVisitor.prototype instanceof ASTVisitor)
  })

  /** @test {ProgramVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ProgramVisitor())

    it("should call a super constructor", () => {

    })

    it("should initialize a state property", () => {
      visitor.state.should.be.an.instanceof(Object)
      visitor.state.should.be.ok
    })

  })

  /** @test {ProgramVisitor#enter} */
  describe("#enter(path, state)", () => {
    it("should throw a SyntaxError", () => {
      const visitor = new ProgramVisitor()
      should(() => (new ProgramVisitor).enter()).throw(SyntaxError)
    })
  })
})
