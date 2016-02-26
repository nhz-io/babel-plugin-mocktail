import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.Should()
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import FunctionDeclarationVisitor from "../../../src/visitors/FunctionDeclarationVisitor"

describe("FunctionDeclarationVisitor", () => {
  let spy, enter, path

  /** @test FunctionDeclarationVisitor */
  describe("FunctionDeclarationVisitor#constructor(defaultState)", () => {
    it("should return a function", () => {
      expect(new FunctionDeclarationVisitor()).to.be.an.instanceOf(Function)
    })
  })

  /** @test FunctionDeclarationVisitor#enter(path, state) - parent: ExportDefaultDeclaration */
  describe("FunctionDeclarationVisitor#enter(path, state) - parent: ExportDefaultDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new FunctionDeclarationVisitor({ export: spy })
      path = transform("export default function() {}").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new FunctionDeclarationVisitor()
      path = transform("export default function() {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })
  })

  /** @test FunctionDeclarationVisitor#enter(path, state) - parent: InvalidType */
  describe("FunctionDeclarationVisitor#enter(path, state) - parent: InvalidType", () => {
    /** @test using default state */
    it("should not export anything using default state", () => {
      spy = sinon.spy()
      enter = new FunctionDeclarationVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } })
      spy.should.not.have.been.called
    })

    /** @test using provided state */
    it("should not export anything using provided state", () => {
      spy = sinon.spy()
      enter = new FunctionDeclarationVisitor()
      spy = sinon.spy()
      enter = new FunctionDeclarationVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } }, { export: spy })
      spy.should.not.have.been.called
    })
  })
})
