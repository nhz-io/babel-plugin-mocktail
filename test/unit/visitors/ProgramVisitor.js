import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ProgramVisitor from "../../../src/visitors/ProgramVisitor"

Should()

/** @test {ProgramVisitor} */
describe("ProgramVisitor", () => {

  it('should be a subclass of ASTVisitor', () => {
    ProgramVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  /** @test {ProgramVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new ProgramVisitor())

    it("populates ProgramVisitor~nestedVisitors from the first argument", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new ProgramVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok
      visitor.nestedVisitors.should.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

    it("should initialize a state property", () => {
      visitor.state.should.be.an.instanceof(Object)
      visitor.state.should.be.ok
    })

  })

  describe("~state", () => {
    let visitor
    const properties = {
      "name"    : String,
      "path"    : String,
      "imports" : Array,
      "exports" : Array
    }
    beforeEach(() => visitor = new ProgramVisitor())

    Object.keys(properties).forEach((name) => {
      const type = properties[name]
      it(`should have '${name}' property of type '${type.name}'`, () => {
        visitor.state[name].should.be.ok.and.be.an.instanceof(type)
      })
    })

  })

  /** @test {ProgramVisitor#enter} */
  describe("#enter(path, state)", () => {

  })
})
