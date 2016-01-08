qstringify.js
==================================================

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

Parse unlimited your nested querystring in 15 Lines of Code. Both available at Node.js 
and most morden browsers.

## Installation

```sh
$ npm install querystringify --save
```

## Usage

```js
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

## Run test

```sh
$ npm test
```

## Run benchmark

```sh
$ npm run benchmark
```

Lastest benchmark result

```
18,431 op/s » node
 8,251 op/s » qs
14,926 op/s » qstringify

Suites:  1
Benches: 3
Elapsed: 470.23 ms
```

## license

MIT @ WeFlex, Inc

[npm-image]: https://img.shields.io/npm/v/qstringify.svg?style=flat-square
[npm-url]: https://npmjs.org/package/qstringify
[travis-image]: https://img.shields.io/travis/weflex/qstringify.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/qstringify
[david-image]: http://img.shields.io/david/weflex/qstringify.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/qstringify
[downloads-image]: http://img.shields.io/npm/dm/qstringify.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/qstringify
