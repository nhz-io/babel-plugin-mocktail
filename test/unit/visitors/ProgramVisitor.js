import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import ASTVisitor from "../../../src/visitors/ASTVisitor"
import ProgramVisitor from "../../../src/visitors/ProgramVisitor"

Should()
chai.use(sinonChai)

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
  })

  /** @test {ProgramVisitor#enter} */
  describe("#enter(path, state)", () => {
    let visitor, nestedVisitors, pathMock, stateMock
    beforeEach(() => {
      nestedVisitors = { Test: {} }
      visitor = new ProgramVisitor(nestedVisitors)
      pathMock = {
        traverse: sinon.spy(),
        parent: {
          type: "File",
          hub: { opts: { filename: "test.js" } },
        },
      }
      stateMock = {}
    })

    it('throws `TypeError` if no `path` is passed', () => {
      expect(() => visitor.enter()).to.throw(TypeError)
    })

    it('throws `TypeError` if `path` is invalid', () => {
      expect(() => visitor.enter(null)).to.throw(TypeError)
    })

    it('throws `TypeError` if no state is passed', () => {
      expect(() => visitor.enter(pathMock)).to.throw(TypeError)
    })

    it('throws `TypeError` if `state` is invalid', () => {
      expect(() => visitor.enter(pathMock, null)).to.throw(TypeError)
    })

    it('throws Error if no `path.parent`', () => {
      pathMock.parent = null
      expect(() => visitor.enter(pathMock, {})).to.throw(Error)
    })

    it('throws Error if `path.parent` is not `File`', () => {
      pathMock.parent = {}
      expect(() => visitor.enter(pathMock, {})).to.throw(Error)
    })

    it('initializes the `state.mocktail`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail.should.be.ok.and.be.an('object')
    })

    it('initializes the `state.mocktail.imports`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail["imports"].should.be.ok.and.be.an.instanceOf(Array)
    })

    it('initializes the `state.mocktail.exports`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail["exports"].should.be.ok.and.be.an.instanceOf(Array)
    })

    it('sets the `state.mocktail.path`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail.path.should.be.equal("test.js")
    })

    it('sets the `state.mocktail.name`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail.name.should.be.equal("test")
    })

    it('sets the `state.mocktail.module`', () => {
      visitor.enter(pathMock, stateMock)
      stateMock.mocktail.module.should.be.equal("test")
    })

    it('traverses nested visitors', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledOnce
    })

    it('does not traverse if there are no nested visitors', () => {
      visitor = new ProgramVisitor()
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.not.have.been.called
    })

    it('passes the state to nested visitors while traversing', () => {
      visitor.enter(pathMock, stateMock)
      pathMock.traverse.should.have.been.calledWith(nestedVisitors, stateMock)
    })
  })

  describe("#exit(path, state)", () => {
    it('patches the AST')
  })

})
