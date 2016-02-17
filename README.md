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
  <a href="https://github.com/Wildhoney/Mocktail#getting-started">Mocktail.mock()</a> your sources
</p>

## Example

**In**

```js
export default {}
```

**Out**

```js
import { mock as _mock } from "mocktail";
export default _mock({});
```

## Installation

```sh
$ npm install babel-plugin-mocktail
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["mocktail"]
}
```

### Via CLI

```sh
$ babel --plugins mocktail script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["mocktail"]
});
```
