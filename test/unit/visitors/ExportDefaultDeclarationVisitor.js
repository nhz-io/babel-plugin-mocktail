import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ExportDefaultDeclarationVisitor from "../../../src/visitors/ExportDefaultDeclarationVisitor"

Should()

/** @test {ExportDefaultDeclarationVisitor} */
describe("ExportDefaultDeclarationVisitor", () => {
  let visitor
  beforeEach(() => visitor = new ExportDefaultDeclarationVisitor())

  it('is a subclass of ASTVisitor', () => {
    ExportDefaultDeclarationVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of ExportDefaultDeclarationVisitor", () => visitor.should.be.an.instanceOf(ExportDefaultDeclarationVisitor))

  /** @test {ExportDefaultDeclarationVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ExportDefaultDeclarationVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ExportDefaultDeclarationVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {ExportDefaultDeclarationVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new ExportDefaultDeclarationVisitor())

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {

  })

})
