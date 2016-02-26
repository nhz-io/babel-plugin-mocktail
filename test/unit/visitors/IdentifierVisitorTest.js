import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.Should()
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import IdentifierVisitor from "../../../src/visitors/IdentifierVisitor"

describe("IdentifierVisitor", () => {
  /** @test IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" }) */
  describe('IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" })', () => {
    it("should call the export()", () => {
      const enter = new IdentifierVisitor()
      const spy = sinon.spy()
      const path = transform("export default Test").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.called
    })
  })

  /** @test IdentifierVisitor#enter(path, { type: "ExportSpecifier" }) */
  describe('IdentifierVisitor#enter(path, { type: "ExportSpecifier" })', () => {
    it("should call the export()", () => {
      const enter = new IdentifierVisitor()
      const spy = sinon.spy()
      const path = transform("export { test }").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.called
    })
  })

  /** @test IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" }) */
  describe('IdentifierVisitor#enter(path, { type: "FunctionDeclaration" })', () => {
    it("should call the export()", () => {
      const enter = new IdentifierVisitor()
      const spy = sinon.spy()
      const path = transform("export function test() {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.called
    })
  })

  /** @test IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" }) */
  describe('IdentifierVisitor#enter(path, { type: "ClassDeclaration" })', () => {
    it("should call the export()", () => {
      const enter = new IdentifierVisitor()
      const spy = sinon.spy()
      const path = transform("export class Test {}").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.called
    })
  })


  /** @test IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" }) */
  describe('IdentifierVisitor#enter(path, { type: "VariableDeclarator" })', () => {
    it("should call the export()", () => {
      const enter = new IdentifierVisitor()
      const spy = sinon.spy()
      const path = transform("export const test = null").ast._paths[0]
      path.traverse({ enter }, { export: spy })
      spy.should.have.been.called
    })
  })

  /** @test IdentifierVisitor#enter(pathl, { type: InvalidType }) */
  describe("IdentifierVisitor#enter(path, { type: InvalidType })", () => {
    it("should throw a TypeError", () => {
      const enter = new IdentifierVisitor()
      expect(() => enter({ type: "Identifier", parent: { type: "InvalidType" } })).to.throw(TypeError)
    })
  })

})
