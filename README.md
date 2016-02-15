# babel-plugin-mocktail
[![NPM](https://img.shields.io/npm/v/sass2styl.svg?style=flat)](https://www.npmjs.com/package/babel-plugin-mocktail)
[![Build Status](https://travis-ci.org/nhz-io/babel-plugin-mocktail.svg?branch=master)](https://travis-ci.org/nhz-io/babel-plugin-mocktail)
[![Coverage Status](https://coveralls.io/repos/github/nhz-io/babel-plugin-mocktail/badge.svg?branch=master)](https://coveralls.io/github/nhz-io/babel-plugin-mocktail?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/nhz-io/babel-plugin-mocktail/badges/score.svg)](https://www.bithound.io/github/nhz-io/babel-plugin-mocktail)


[Mocktail](https://github.com/Wildhoney/Mocktail) babel plugin

Will mock all your ES6 exports.

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
