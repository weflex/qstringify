const test = require('tape');
const qstringify = require('./index.js');

test('simple', function (t) {
  const simple = {
    foo: 'bar'
  };
  t.equal(qstringify(simple), '?foo=bar');
  t.end();
});

test('multi', function (t) {
  const multi = {
    foo: 'bar',
    txt: 'run'
  };
  t.equal(qstringify(multi), '?foo=bar&txt=run');
  t.end();
});

test('nested', function (t) {
  const nested = {
    foo: {
      bar: 10
    }
  };
  t.equal(qstringify(nested), '?foo[bar]=10');
  t.end();
});

test('nested and multi', function (t) {
  const nestedAndMulti = {
    foo: {
      bar: 10,
      txt: 20
    }
  };
  t.equal(qstringify(nestedAndMulti), '?foo[bar]=10&foo[txt]=20');
  t.end();
});

test('loopback filter', function (t) {
  const filter = {
    filter: {
      where: {
        sex: {
          in: ['male', 'female']
        }
      }
    }
  };
  t.equal(
    qstringify(filter),
    '?filter[where][sex][in]=male,female'
  );
  t.end();
})