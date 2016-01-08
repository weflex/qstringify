
qstringify.js - querystring-ify nested object or not
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
                      vs node
          18,431 op/s » node
           8,251 op/s » qs
          14,926 op/s » qstringify


  Suites:  1
  Benches: 3
  Elapsed: 470.23 ms
```

## license

MIT @ WeFlex, Inc
