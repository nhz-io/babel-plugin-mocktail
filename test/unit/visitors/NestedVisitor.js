import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import PathMock from "../../mocks/visitors/PathMock"
import StateMock from "../../mocks/visitors/StateMock"

import NestedVisitor from "../../../src/visitors/NestedVisitor"
import ASTVisitorTests from "./ASTVisitor"

Should()
chai.use(sinonChai)

const NAME  = "NestedVisitor"
const CLASS = NestedVisitor

export default class NestedVisitorTests {
  constructor({NAME, CLASS} = {}) {
    this.NAME = NAME || "NestedVisitor"
    this.CLASS = CLASS || NestedVisitor
  }

  testConstructor() {
    const { NAME, CLASS } = this
    describe("#constructor(nestedVisitors)" , () => {
      let visitor;
      beforeEach(() => visitor = new CLASS())

      it("creates an instance of NestedVisitor", () => visitor.should.be.an.instanceOf(NestedVisitor))
    })
  }

  testEnter({parent}) {
    const {CLASS} = this
    describe("#enter(path, state)", () => {
      let path, state, visitor
      beforeEach(() => {
        visitor = new CLASS({ Test: {} })
        path = new PathMock({parent})
        state = new StateMock()
      })

      it('throws `TypeError` when no `path` is passed', () => {
        expect(() => visitor.enter()).to.throw(TypeError)
      })

      it('throws `TypeError` if `path` is invalid', () => {
        expect(() => visitor.enter(null)).to.throw(TypeError)
      })

      it('throws `TypeError` when no `path.parent`', () => {
        expect(() => visitor.enter({parent:null}, {})).to.throw(TypeError)
      })

      it('throws `TypeError` when no `state` is passed', () => {
        expect(() => visitor.enter(path)).to.throw(TypeError)
      })

      it('throws `TypeError` when `state` is invalid', () => {
        const path = new
        expect(() => visitor.enter(path, null)).to.throw(TypeError)
        expect(() => visitor.enter(path, {})).to.throw(TypeError)
        expect(() => visitor.enter(path, {mocktail:null})).to.throw(TypeError)
      })

      it('throws `TypeError` when `state.mocktail.path` is invalid', () => {
        state.mocktail.path = null
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.path = ""
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.path = {}
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
      })

      it('throws `TypeError` when `state.mocktail.name` is invalid', () => {
        state.mocktail.name = null
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.name = ""
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.name = {}
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
      })

      it('throws `TypeError` when `state.mocktail.module` is invalid', () => {
        state.mocktail.module = null
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.module = ""
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
        state.mocktail.module = {}
        expect(() => visitor.enter(path, state)).to.throw(TypeError)
      })
    })
  }
}

/** @test {NestedVisitor} */
describe("NestedVisitor", () => {
  const astVisitorSuite = new ASTVisitorTests({NAME, CLASS})
  const nestedVisitorSuite = new NestedVisitorTests({NAME, CLASS})

  /** @test {NestedVisitor#contructor} */
  astVisitorSuite.testConstructor()
  nestedVisitorSuite.testConstructor()

  /** @test {NestedVisitor#enter} */
  nestedVisitorSuite.testEnter({parent:'Program'})
})
