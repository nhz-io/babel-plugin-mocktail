import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ProgramVisitor from "../../../src/visitors/ProgramVisitor"

Should()

/** @test {ProgramVisitor} */
describe("ProgramVisitor", () => {
  let visitor
  beforeEach(() => visitor = new ProgramVisitor())

  it('is a subclass of ASTVisitor', () => {
    ProgramVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of ProgramVisitor", () => visitor.should.be.an.instanceOf(ProgramVisitor))

  /** @test {ProgramVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ProgramVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ProgramVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

    it("creates the ~state property", () => {
      visitor.state.should.be.ok
      visitor.state.should.be.an.instanceof(Object)
    })
  })

  describe("~state", () => {
    let visitor
    const properties = {
      "name"    : String,
      "path"    : String,
      "imports" : Array,
      "exports" : Array,
    }
    beforeEach(() => visitor = new ProgramVisitor())

    Object.keys(properties).forEach((name) => {
      const type = properties[name]
      it(`has '${name}' x of type '${type.name}'`, () => {
        let value = visitor.state[name]
        assert((value instanceof type) || (typeof(value) === type.name.toLowerCase()))
      })
    })

  })

  /** @test {ProgramVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor
    beforeEach(() => visitor = new ProgramVisitor())

    it('sets the ~state.name property')

    it('sets the ~state.path property')

    it('traverses nested visitors')
  })

  describe("#exit(path, state)", () => {
    it('patches the AST')
  })

})
