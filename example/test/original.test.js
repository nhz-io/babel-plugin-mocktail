import main from "../src/main"
import test from "tape"

test("babel-plugin-mocktail not mocked example", (t) => {
  t.plan(2)
  t.equal(true, main.original, "is `original`")
  t.equal(false, main.mocked, "is `not mocked`")
})
