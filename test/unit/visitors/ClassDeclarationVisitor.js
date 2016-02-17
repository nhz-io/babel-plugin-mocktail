import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ClassDeclarationVisitor from "../../../src/visitors/ClassDeclarationVisitor"

Should()

/** @test {ClassDeclarationVisitor} */
describe("ClassDeclarationVisitor", () => {
  let visitor
  beforeEach(() => visitor = new ClassDeclarationVisitor())

  it('is a subclass of ASTVisitor', () => {
    ClassDeclarationVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of ClassDeclarationVisitor", () => visitor.should.be.an.instanceOf(ClassDeclarationVisitor))

  /** @test {ClassDeclarationVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ClassDeclarationVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ClassDeclarationVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {ClassDeclarationVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new ClassDeclarationVisitor())

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {

  })

})
