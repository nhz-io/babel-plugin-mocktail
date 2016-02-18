import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import NestedVisitor from "../../../src/visitors/NestedVisitor"
import IdentifierVisitor from "../../../src/visitors/IdentifierVisitor"

Should()
chai.use(sinonChai)

/** @test {IdentifierVisitor} */
describe("IdentifierVisitor", () => {
  let visitor
  beforeEach(() => visitor = new IdentifierVisitor())

  it('is a subclass of NestedVisitor', () => {
    IdentifierVisitor.prototype.should.be.an.instanceof(NestedVisitor)
  })

  it("creates an instance of IdentifierVisitor", () => visitor.should.be.an.instanceOf(IdentifierVisitor))

  /** @test {IdentifierVisitor#constructor} */
  describe("#constructor - inherited", () => {
    let visitor
    beforeEach(() => visitor = new IdentifierVisitor())

    it("populates ~nestedVisitors", () => {
      const One = {}, Two = {}, nestedVisitors = { One, Two }

      visitor = new IdentifierVisitor(nestedVisitors)
      visitor.nestedVisitors.should.be.ok.and.not.be.equal(nestedVisitors)
      visitor.nestedVisitors.One.should.be.equal(One)
      visitor.nestedVisitors.Two.should.be.equal(Two)
    })
  })

  describe("#enter(path, state) - inherited", () => {
    let visitor, nestedVisitors, pathMock, stateMock
    beforeEach(() => {
      nestedVisitors = { Test: {} }
      visitor = new IdentifierVisitor(nestedVisitors)
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
        },
      }
    })

    it('throws `TypeError` when no `path` is passed', () => {
      expect(() => visitor.enter()).to.throw(TypeError)
    })

    it('throws `TypeError` if `path` is invalid', () => {
      expect(() => visitor.enter(null)).to.throw(TypeError)
    })

    it('throws `TypeError` when no `path.parent`', () => {
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

  /** @test {IdentifierVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor, nestedVisitors, pathMock, stateMock
    beforeEach(() => {
      nestedVisitors = { Test: {} }
      visitor = new IdentifierVisitor(nestedVisitors)
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
        },
      }
    })

    it('throws TypeError if `path.parent` is not `Program`', () => {
      pathMock.parent = {}
      expect(() => visitor.enter(pathMock, {})).to.throw(TypeError)
    })

    it('traverses nested visitors', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledOnce
    })

    it('does not traverse when there are no nested visitors', () => {
      visitor = new IdentifierVisitor()
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.not.have.been.called
    })

    it('passes the state to nested visitors while traversing', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledWith(nestedVisitors, stateMock)
    })
  })

})
