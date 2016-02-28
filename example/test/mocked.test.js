import "./setup"
import "./example.mock"

import assert from "assert"
import Example from "../src/example"

describe("Mocked Example", () => {
  it("should be mocked", () => assert(Example === "mocked"))
})
