function stringify(obj, prevKey, sep) {
  "use strict";
  var result = '';
  sep = sep || '?';
  for (var key in obj) {
    var val = obj[key];
    var globalKey = !prevKey ? key : (prevKey + '[' + key + ']');
    if (Array.isArray(val)) {
      val.forEach(function (subval) {
        set(globalKey, subval);
      });
    } else if (typeof val !== 'object') {
      set(globalKey, val);
    } else {
      result += stringify(val, globalKey, sep);
    }
  }

  function set(globalKey, val) {
    result += sep + globalKey + '=' + val;
    if (sep === '?') {
      sep = '&';
    }
  }
  return result;
}

module.exports = stringify;
