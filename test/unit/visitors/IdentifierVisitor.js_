import sinon from "sinon"
import sinonChai from "sinon-chai"
import chai, {Should, expect, assert} from "chai"

import ASTVisitor from "../../../src/visitors/ASTVisitor"
import NestedVisitor from "../../../src/visitors/NestedVisitor"
import IdentifierVisitor from "../../../src/visitors/IdentifierVisitor"

import ASTVisitorTests from "./ASTVisitor"
import NestedVisitorTests from "./NestedVisitor"

Should()
chai.use(sinonChai)

const NAME = "IdentifierVisitor"
const CLASS = IdentifierVisitor

export default class IdentifierVisitorTests {
  constructor({NAME, CLASS} = {}) {
    this.NAME = NAME || "IdentifierVisitor"
    this.CLASS = CLASS || IdentifierVisitor
  }

  testConstructor() {
    const { NAME, CLASS } = this
    describe("#constructor()", () => {
      let visitor
      beforeEach(() => visitor = new CLASS())

      it("creates an instance of IdentifierVisitor", () => {
        visitor.should.be.an.instanceOf(IdentifierVisitor)
      })
    })

  }

  testEnter({parent} = {}) {
    const { CLASS } = this
    describe("#enter(path, state)", () => {
      let path, state, visitor
      beforeEach(() => {
        visitor = new CLASS()
        path = new PathMock({parent})
        state = new StateMock()
      })
      
      it("should register the ClassDeclaration export", () => {
        path.parent
      })
    })
  }

}

/** @test {IdentifierVisitor} */
describe("IdentifierVisitor", () => {
  const astVisitorSuite = new ASTVisitorTests({NAME, CLASS})
  const nestedVisitorSuite = new NestedVisitorTests({NAME, CLASS})
  const identifierVisitorSuite = new IdentifierVisitorTests({NAME, CLASS})

  it('is a subclass of ASTVisitor', () => {
    IdentifierVisitor.prototype.should.be.an.instanceof(ASTVisitor)
  })

  it('is a subclass of NestedVisitor', () => {
    IdentifierVisitor.prototype.should.be.an.instanceof(NestedVisitor)
  })

  /** @test {IdentifierVisitor#constructor} */
  astVisitorSuite.testConstructor()
  nestedVisitorSuite.testConstructor()
  identifierVisitorSuite.testConstructor()

  /** @test {IdentifierVisitor#enter(path, state)} */
  nestedVisitorSuite.testEnter()
  identifierVisitorSuite.testEnter()
})
