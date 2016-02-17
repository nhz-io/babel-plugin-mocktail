import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ExportAllDeclarationsVisitor from "../../../src/visitors/ExportAllDeclarationsVisitor"

Should()

/** @test {ExportAllDeclarationsVisitor} */
describe("ExportAllDeclarationsVisitor", () => {
  let visitor
  beforeEach(() => visitor = new ExportAllDeclarationsVisitor())

  it('is a subclass of ASTVisitor', () => {
    ExportAllDeclarationsVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of ExportAllDeclarationsVisitor", () => visitor.should.be.an.instanceOf(ExportAllDeclarationsVisitor))

  /** @test {ExportAllDeclarationsVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ExportAllDeclarationsVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ExportAllDeclarationsVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {ExportAllDeclarationsVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new ExportAllDeclarationsVisitor())

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {

  })

})
