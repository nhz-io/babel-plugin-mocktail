import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.Should()
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import IdentifierVisitor from "../../../src/visitors/IdentifierVisitor"

describe("IdentifierVisitor", () => {
  let spy, enter, path

  /** @test IdentifierVisitor */
  describe("IdentifierVisitor#constructor(defaultState)", () => {
    it("should return a function", () => {
      expect(new IdentifierVisitor()).to.be.an.instanceOf(Function)
    })
  })

  /** @test IdentifierVisitor#enter(path, state) - parent: ExportDefaultDeclaration */
  describe("IdentifierVisitor#enter(path, state) - parent: ExportDefaultDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export default Test").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith("Test", path.node.body[0].declaration)
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor()
      path = transform("export default Test").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith("Test", path.node.body[0].declaration)
    })
  })

  /** @test IdentifierVisitor#enter(path, state) - parent: ExportSpecifier */
  describe("IdentifierVisitor#enter(path, state) - parent: ExportSpecifier", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export { test }").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(
        path.node.body[0].specifiers[0].exported.name,
        path.node.body[0].specifiers[0].local
      )
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export { test }").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(
        path.node.body[0].specifiers[0].exported.name,
        path.node.body[0].specifiers[0].local
      )
    })
  })

  /** @test IdentifierVisitor#enter(path, state) - parent: FunctionDeclaration */
  describe("IdentifierVisitor#enter(path, state) - parent: FunctionDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export function test() {}").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.id.name,
        path.node.body[0].declaration.id
      )
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export function test() {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.id.name,
        path.node.body[0].declaration.id
      )
    })
  })

  /** @test IdentifierVisitor#enter(path, state) - parent: ClassDeclaration */
  describe("IdentifierVisitor#enter(path, state) - parent: ClassDeclaration", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export class Test {}").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.id.name,
        path.node.body[0].declaration.id
      )
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export class Test {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.id.name,
        path.node.body[0].declaration.id
      )
    })
  })


  /** @test IdentifierVisitor#enter(path, state) - parent: VariableDeclarator */
  describe("IdentifierVisitor#enter(path, state) - parent: VariableDeclarator", () => {
    /** @test using default state */
    it("should export the identifier using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export const test = null").ast._paths[0]
      path.traverse({ enter })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.declarations[0].id.name,
        path.node.body[0].declaration.declarations[0].id
      )
    })

    /** @test using provided state */
    it("should export the identifier using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      path = transform("export const test = null").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.calledWith(
        path.node.body[0].declaration.declarations[0].id.name,
        path.node.body[0].declaration.declarations[0].id
      )
    })
  })

  /** @test IdentifierVisitor#enter(path, state) - parent: InvalidType */
  describe("IdentifierVisitor#enter(path, state) - parent: InvalidType", () => {
    /** @test using default state */
    it("should not export anything using default state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } })
      spy.should.not.have.been.called
    })

    /** @test using provided state */
    it("should not export anything using provided state", () => {
      spy = sinon.spy()
      enter = new IdentifierVisitor()
      spy = sinon.spy()
      enter = new IdentifierVisitor({ export: spy })
      enter({ type: "Identifier", parent: { type: "InvalidType" } }, { export: spy })
      spy.should.not.have.been.called
    })
  })
})
