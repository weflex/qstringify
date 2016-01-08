
suite('vs node', function () {
  "use strict";

  set('type', 'static');
  set('iteration', 10);

  var obj = {
    foo: 1000000,
    bar: 'string'
  };


  bench('node', function () {
    const qs = require('querystring');
    qs.stringify(obj);
  });

  bench('qs', function () {
    const qs = require('qs');
    qs.stringify(obj);
  });

  bench('qstringify', function () {
    const qstringify = require('../index.js');
    qstringify(obj);
  });

});