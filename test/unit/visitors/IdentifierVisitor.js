import chai, { expect } from "chai"
import sinonChai from "sinon-chai"
import sinon from "sinon"
chai.use(sinonChai)

import { transform, traverse } from "babel-core"

import IdentifierVisitor from "../../../src/visitors/IdentifierVisitor"

export default class IdentifierVisitorTestSuite {
  constructor({NAME, CLASS} = {}) {
    this.NAME = NAME || "IdentifierVisitor"
    this.CLASS = CLASS || IdentifierVisitor
  }

  testConstructor() {
    describe("Identifier#constructor()", () => {
      it("should create an instance of IdentifierVisitor", () => {
        expect(new IdentifierVisitor()).to.be.an.instanceOf(IdentifierVisitor)
      })
    })
  }

  testEnter() {
    describe('IdentifierVisitor#enter(path, { type: "ExportDefaultDeclaration" })', () => {
      it("should register the export", () => {
        const identifierVisitor = new IdentifierVisitor()
        const spy = sinon.spy()
        const ast = transform("export default Test").ast
        traverse(ast, { Identifier: new IdentifierVisitor()}, { export: spy })
        spy.should.have.been.called
      })
    })

    describe('IdentifierVisitor#enter(path, { type: "ExportSpecifier" })', () => {
      it("should register the export", () => {
        const identifierVisitor = new IdentifierVisitor()
        const spy = sinon.spy()
        const ast = transform("export default Test").ast
        traverse(ast, { Identifier: new IdentifierVisitor()}, { export: spy })
        spy.should.have.been.called
      })
    })

    describe('IdentifierVisitor#enter(path, { type: "FunctionExpression" })', () => {
      it("should register the export", () => {
        const identifierVisitor = new IdentifierVisitor()
        const spy = sinon.spy()
        const ast = transform("export default Test").ast
        traverse(ast, { Identifier: new IdentifierVisitor()}, { export: spy })
        spy.should.have.been.called
      })
    })

    describe('IdentifierVisitor#enter(path, { type: "ClassDeclaration" })', () => {
      it("should register the export", () => {
        const identifierVisitor = new IdentifierVisitor()
        const spy = sinon.spy()
        const ast = transform("export default Test").ast
        traverse(ast, { Identifier: new IdentifierVisitor()}, { export: spy })
        spy.should.have.been.called
      })
    })

    describe('IdentifierVisitor#enter(path, { type: "VariableDeclarator" })', () => {
      it("should register the export", () => {
        const identifierVisitor = new IdentifierVisitor()
        const spy = sinon.spy()
        const ast = transform("export default Test").ast
        traverse(ast, { Identifier: new IdentifierVisitor()}, { export: spy })
        spy.should.have.been.called
      })
    })
  }
}

/** @test {IdentifierVisitor} */

/** @test {IdentifierVisitor#constructor} */

const testSuite = new IdentifierVisitorTestSuite()

testSuite.testConstructor()

/** @test {IdentifierVisitor#enter(path, state)} */

testSuite.testEnter()
