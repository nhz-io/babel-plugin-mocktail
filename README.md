# babel-plugin-mocktail
[![Build Status](https://travis-ci.org/nhz-io/babel-plugin-mocktail.svg?branch=master)](https://travis-ci.org/nhz-io/babel-plugin-mocktail)

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
