import "./setup"
import main from "../src/main"
import test from "tape"

test("babel-plugin-mocktail mocked example", (t) => {
  t.plan(2)
  t.equal(true, main.mocked, "is `mocked`")
  t.equal(false, main.original, "is `not original`")
})
