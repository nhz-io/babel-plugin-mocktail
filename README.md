<h1 align="center">babel-plugin-mocktail</h1>

<p align="center">
  <a href="https://npmjs.org/package/babel-plugin-mocktail">
    <img src="https://img.shields.io/npm/v/babel-plugin-mocktail.svg?style=flat"
         alt="NPM Version">
  </a>

  <a href="https://coveralls.io/r/nhz-io/babel-plugin-mocktail">
    <img src="https://img.shields.io/coveralls/nhz-io/babel-plugin-mocktail.svg?style=flat"
         alt="Coverage Status">
  </a>

  <a href="https://www.bithound.io/github/nhz-io/babel-plugin-mocktail">
    <img src="https://www.bithound.io/github/nhz-io/babel-plugin-mocktail/badges/score.svg"
         alt="Bithound Status">
  </a>

  <a href="https://travis-ci.org/nhz-io/babel-plugin-mocktail">
    <img src="https://img.shields.io/travis/nhz-io/babel-plugin-mocktail.svg?style=flat"
         alt="Build Status">
  </a>

  <a href="https://npmjs.org/package/babel-plugin-mocktail">
    <img src="http://img.shields.io/npm/dm/babel-plugin-mocktail.svg?style=flat"
         alt="Downloads">
  </a>

  <a href="https://david-dm.org/nhz-io/babel-plugin-mocktail.svg">
    <img src="https://david-dm.org/nhz-io/babel-plugin-mocktail.svg?style=flat"
         alt="Dependency Status">
  </a>

  <a href="https://github.com/nhz-io/babel-plugin-mocktail/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/babel-plugin-mocktail.svg?style=flat"
         alt="License">
  </a>
</p>

<p align="center">
  <a href="https://github.com/Wildhoney/Mocktail#getting-started">Mocktail.mock()</a> all your exports
</p>

## Usage (Mocha)

### Setup
```sh
npm install --save-dev babel-cli babel-plugin-mocktail mocha assert
```

### Create example `source` for testing

`File: src/example.js`
```js
const Example = "unmocked"
export default Example
```

### Create `ENV.TESTING` trigger

`File: test/setup.js`
```js
import { env, ENV } from "mocktail"
env(ENV.TESTING)
```

### Create `mock file`

`File: test/example.mock.js`
```js
import { inject } from "mocktail"
inject("Example", "mocked")
```

### Create `test` (unmocked)
`File: test/unmocked.test.js`
```js
import assert from "assert"
import Example from "../src/example"

describe("Unmocked Example", () => {
  it("should be unmocked", () => assert(Example === "unmocked"))
})
```

### Create `unit test` (mocked)

`File: test/mocked.test.js`
```js
import "./setup"
import "./example.mock"
import assert from "assert"
import Example from "../src/example"

describe("Mocked Example", () => {
  it("should be mocked", () => assert(Example === "mocked"))
})
```

### Run the tests

```sh
babel-node --plugins mocktail $(which _mocha) test/unmocked.test.js
babel-node --plugins mocktail $(which _mocha) test/mocked.test.js
```

### Run the tests INCORRECTLY
```sh
babel-node --plugins mocktail $(which _mocha) test/*.test.js
```

### Notes
* [Example Repository](example)
* Avoid using the plugin outside the test context
* Run `mocked` and `unmocked` tests in separate runs
* Name your `default` `export`s to reduce DI collision chance
* `env(ENV.TESTING)` should be in separate file (`setup`)
* `setup` should be imported before any other `import`
* mocks should be in separate `mock file`s
* `mock file`s should be imported before tested `source`s `import`s

## How it works
The plugin walks the `AST` and looks for export declarations.  
When it finds the declaraions, they are replaced with `mock(declaration, name)`.  
The `name` is either the `name` of the `declaration` or camel-cased `filename`.  

## Installation
```sh
npm install --save-dev babel-plugin-mocktail
```

## Documentation (ESDOC)
https://nhz-io.github.io/babel-plugin-mocktail

## LICENSE
[MIT](LICENSE)
