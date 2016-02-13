# babel-plugin-mocktail

mocktail babel plugin

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
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
