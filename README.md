
qstringify.js - querystring-ify any JavaScript object
==================================================

Parse unlimited your nested querystring in 15 Lines of Code. Both available at Node.js 
and most morden browsers.

## Installation

```sh
$ npm install querystringify --save
```

## Usage

```
var stringify = require('querystringify');
stringify({
  foo: bar
});
stringify({
  foo: {
    filter: {
      name: 10
    }
  }
});
```

## license

MIT @ WeFlex, Inc
