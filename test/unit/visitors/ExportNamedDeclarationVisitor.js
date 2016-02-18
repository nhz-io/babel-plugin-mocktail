import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ExportNamedDeclarationVisitor from "../../../src/visitors/ExportNamedDeclarationVisitor"

Should()
chai.use(sinonChai)

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

  describe("#enter(path, state)", () => {
    let visitor, nestedVisitors, pathMock, stateMock
    beforeEach(() => {
      nestedVisitors = { Test: {} }
      visitor = new ExportNamedDeclarationVisitor(nestedVisitors)
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

    it('throws TypeError when no `path.parent`', () => {
      pathMock.parent = null
      expect(() => visitor.enter(pathMock, {})).to.throw(TypeError)
    })

    it('throws TypeError if `path.parent` is not `Program`', () => {
      pathMock.parent = {}
      expect(() => visitor.enter(pathMock, {})).to.throw(TypeError)
    })

    it('throws `TypeError` when no `path` is passed', () => {
      expect(() => visitor.enter()).to.throw(TypeError)
    })

    it('throws `TypeError` if `path` is invalid', () => {
      expect(() => visitor.enter(null)).to.throw(TypeError)
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

    it('traverses nested visitors', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledOnce
    })

    it('does not traverse when there are no nested visitors', () => {
      visitor = new ExportNamedDeclarationVisitor()
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.not.have.been.called
    })

    it('passes the state to nested visitors while traversing', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledWith(nestedVisitors, stateMock)
    })
  })

})
