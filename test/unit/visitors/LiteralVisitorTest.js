import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.Should()
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import LiteralVisitor from "../../../src/visitors/LiteralVisitor"

describe("LiteralVisitor", () => {
  let spy, enter, path

  /** @test LiteralVisitor */
  describe("LiteralVisitor#constructor(defaultState)", () => {
    it("should return a function", () => {
      expect(new LiteralVisitor()).to.be.an.instanceOf(Function)
    })
  })

  /** @test LiteralVisitor#enter(path, state) - parent: ExportDefaultDeclaration */
  describe("LiteralVisitor#enter(path, state) - parent: ExportDefaultDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new LiteralVisitor({ export: spy })
      path = transform('export default "test"').ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new LiteralVisitor()
      path = transform('export default "test"').ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })
  })

  /** @test LiteralVisitor#enter(path, state) - parent: InvalidType */
  describe("LiteralVisitor#enter(path, state) - parent: InvalidType", () => {
    /** @test using default state */
    it("should not export anything using default state", () => {
      spy = sinon.spy()
      enter = new LiteralVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } })
      spy.should.not.have.been.called
    })

    /** @test using provided state */
    it("should not export anything using provided state", () => {
      spy = sinon.spy()
      enter = new LiteralVisitor()
      spy = sinon.spy()
      enter = new LiteralVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } }, { export: spy })
      spy.should.not.have.been.called
    })
  })
})
