import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ExportNamedDeclarationVisitor from "../../../src/visitors/ExportNamedDeclarationVisitor"

Should()

/** @test {ExportNamedDeclarationVisitor} */
describe("ExportNamedDeclarationVisitor", () => {
  let visitor
  beforeEach(() => visitor = new ExportNamedDeclarationVisitor())

  it('is a subclass of ASTVisitor', () => {
    ExportNamedDeclarationVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of ExportNamedDeclarationVisitor", () => visitor.should.be.an.instanceOf(ExportNamedDeclarationVisitor))

  /** @test {ExportNamedDeclarationVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ExportNamedDeclarationVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ExportNamedDeclarationVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {ExportNamedDeclarationVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new ExportNamedDeclarationVisitor())

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {

  })

})
