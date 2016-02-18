import {Should, expect, assert} from "chai"
import ASTVisitor from "../../../src/visitors/ASTVisitor"

Should()

export default class ASTVisitorTests {
  constructor({NAME, CLASS} = {}) {
    this.NAME  = NAME || "ASTVisitor"
    this.CLASS = CLASS || ASTVisitor
  }

  testConstructor() {
    describe("#constructor(nestedVisitors)", () => {
      const { NAME, CLASS } = this
      let visitor;
      beforeEach(() => visitor = new CLASS)

      it("creates an instance of ASTVisitor", () => visitor.should.be.an.instanceOf(ASTVisitor))

      it("sets ~nestedVisitors", () => {
        const One = {}, Two = {}, nestedVisitors = { One, Two }

        visitor = new CLASS(nestedVisitors)
        visitor.nestedVisitors.should.be.ok
        visitor.nestedVisitors.should.not.be.equal(nestedVisitors)
        visitor.nestedVisitors.One.should.be.equal(One)
        visitor.nestedVisitors.Two.should.be.equal(Two)
      })
    })
  }

  testEnter() {
    describe("#enter", () => {
      const { CLASS } = this
      it("throws a SyntaxError", () => {
        expect(() => (new CLASS).enter()).to.throw(SyntaxError)
      })
    })
  }

  testExit() {
    describe("#exit", () => {
      const { CLASS } = this
      it("throws a SyntaxError", () => {
        expect(() => (new CLASS).exit()).to.throw(SyntaxError)
      })
    })
  }
}

if(!module.parent) {

  /** @test {ASTVisitor} */
  describe("ASTVisitor", () => {
    const suite = new ASTVisitorTests()
    /** @test {ASTVisitor#constructor} */
    suite.testConstructor()

    /** @TEST {ASTVisitor#enter} */
    suite.testEnter()

    /** @TEST {ASTVisitor#exit} */
    suite.testExit()
  })

}
