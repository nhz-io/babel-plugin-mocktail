import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import ASTVisitor from "../../../src/visitors/ASTVisitor"
import NestedVisitor from "../../../src/visitors/NestedVisitor"

Should()
chai.use(sinonChai)

/** @test {NestedVisitor} */
describe("NestedVisitor", () => {
  let visitor
  beforeEach(() => visitor = new NestedVisitor())

  it('is a subclass of ASTVisitor', () => {
    NestedVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it("creates an instance of NestedVisitor", () => visitor.should.be.an.instanceOf(NestedVisitor))

  /** @test {NestedVisitor#constructor} */
  describe("#constructor", () => {
    let visitor
    beforeEach(() => visitor = new NestedVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new NestedVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })

  })

  /** @test {NestedVisitor#enter} */  
  describe("#enter(path, state)", () => {
    let visitor, nestedVisitors, pathMock, stateMock
    beforeEach(() => {
      nestedVisitors = { Test: {} }
      visitor = new NestedVisitor(nestedVisitors)
      pathMock = {
        traverse: sinon.spy(),
        parent: {
          type: "Program",
        },
      }
      stateMock = {
        mocktail: {
          imports: [],
          exports: [],
          path: "test.js",
          name: "test",
          module: "test",
        }
      }
    })

    it('throws `TypeError` when no `path` is passed', () => {
      expect(() => visitor.enter()).to.throw(TypeError)
    })

    it('throws `TypeError` if `path` is invalid', () => {
      expect(() => visitor.enter(null)).to.throw(TypeError)
    })

    it('throws TypeError when no `path.parent`', () => {
      pathMock.parent = null
      expect(() => visitor.enter(pathMock, {})).to.throw(TypeError)
    })


    it('throws `TypeError` when no state is passed', () => {
      expect(() => visitor.enter(pathMock)).to.throw(TypeError)
    })

    it('throws `TypeError` when `state` is invalid', () => {
      expect(() => visitor.enter(pathMock, null)).to.throw(TypeError)
      expect(() => visitor.enter(pathMock, {})).to.throw(TypeError)
      expect(() => visitor.enter(pathMock, {mocktail:null})).to.throw(TypeError)
    })

    it('throws `TypeError` when `state.mocktail.path` is invalid', () => {
      stateMock.mocktail.path = null
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.path = ""
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.path = {}
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
    })

    it('throws `TypeError` when `state.mocktail.name` is invalid', () => {
      stateMock.mocktail.name = null
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.name = ""
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.name = {}
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
    })

    it('throws `TypeError` when `state.mocktail.module` is invalid', () => {
      stateMock.mocktail.module = null
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.module = ""
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
      stateMock.mocktail.module = {}
      expect(() => visitor.enter(pathMock, stateMock)).to.throw(TypeError)
    })

  })

})
