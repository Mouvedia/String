String.prototype.insert = function (index, substr) {
  'use strict';
  if (Function.prototype.call)
    Object.prototype.valueOf.call(this);

  var str = new String(this),
      len = str.length;
  substr  = new String(substr);
  index   = index < 0 ? len + ~~index : ~~index;

  if (!substr)
    return str;
  if (!str)
    return substr;
  if (!index)
    return substr + str;
  if (index >= len)
    return str + substr;
  return str.substring(0, index) + substr + str.substring(index);
};

Object.defineProperty && Object.defineProperty(String.prototype, 'insert', { enumerable: false });