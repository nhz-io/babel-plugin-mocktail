import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.Should()
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import ClassDeclarationVisitor from "../../../src/visitors/ClassDeclarationVisitor"

describe("ClassDeclarationVisitor", () => {
  let spy, enter, path

  /** @test ClassDeclarationVisitor */
  describe("ClassDeclarationVisitor#constructor(defaultState)", () => {
    it("should return a function", () => {
      expect(new ClassDeclarationVisitor()).to.be.an.instanceOf(Function)
    })
  })

  /** @test ClassDeclarationVisitor#enter(path, state) - parent: ExportDefaultDeclaration */
  describe("ClassDeclarationVisitor#enter(path, state) - parent: ExportDefaultDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new ClassDeclarationVisitor({ export: spy })
      path = transform("export default class {}").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new ClassDeclarationVisitor()
      path = transform("export default class {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(null, path.node.body[0].declaration)
    })
  })

  /** @test ClassDeclarationVisitor#enter(path, state) - parent: InvalidType */
  describe("ClassDeclarationVisitor#enter(path, state) - parent: InvalidType", () => {
    /** @test using default state */
    it("should not export anything using default state", () => {
      spy = sinon.spy()
      enter = new ClassDeclarationVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } })
      spy.should.not.have.been.called
    })

    /** @test using provided state */
    it("should not export anything using provided state", () => {
      spy = sinon.spy()
      enter = new ClassDeclarationVisitor()
      spy = sinon.spy()
      enter = new ClassDeclarationVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } }, { export: spy })
      spy.should.not.have.been.called
    })
  })
})
