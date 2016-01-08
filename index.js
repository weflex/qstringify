
function stringify(obj, prevKey, sep) {
  "use strict";
  var result = '';
  sep = sep || '?';
  for (var key in obj) {
    const val = obj[key];
    const globalKey = !prevKey ? key : (prevKey + '[' + key + ']');
    if (Array.isArray(val) || typeof val !== 'object') {
      result += sep + globalKey + '=' + val;
      if (sep === '?') {
        sep = '&';
      }
    } else {
      result += stringify(val, globalKey, sep);
    }
  }
  return result;
}

module.exports = stringify;