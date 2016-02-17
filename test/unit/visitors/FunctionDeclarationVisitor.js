import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import FunctionDeclarationVisitor from "../../../src/visitors/FunctionDeclarationVisitor"

Should()

/** @test {FunctionDeclarationVisitor} */
describe("FunctionDeclarationVisitor", () => {
  let visitor
  beforeEach(() => visitor = new FunctionDeclarationVisitor())

  it('is a subclass of ASTVisitor', () => {
    FunctionDeclarationVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of FunctionDeclarationVisitor", () => visitor.should.be.an.instanceOf(FunctionDeclarationVisitor))

  /** @test {FunctionDeclarationVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new FunctionDeclarationVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new FunctionDeclarationVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {FunctionDeclarationVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new FunctionDeclarationVisitor())

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {

  })

})
