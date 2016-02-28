import assert from "assert"
import Example from "../src/example"

describe("Unmocked Example", () => {
  it("should not be mocked", () => assert(Example === "unmocked"))
})
