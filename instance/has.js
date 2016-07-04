String.prototype.has = function (query, insensitive) {
  'use strict';

  /*@cc_on@if(@_jscript_version>=5.5)@*/
  if (self.TypeError && Object.prototype.toString.call(new TypeError) === '[object Error]' && this == null)
      throw new TypeError('The caller must be object-coercible');
  /*@end@*/

  var proto   = String.prototype
    , hasCall = Function.prototype && Function.prototype.call
    , method  = insensitive ? proto.toLocaleLowerCase ? 'toLocaleLowerCase' : 'toLowerCase' : 'valueOf'
    , caller  = (new String(this))[method]()
    , str     = (new String(query))[method]()
    , ES6     = proto.includes || proto.contains;

  return hasCall && ES6 ? ES6.call(caller, str) : !!~caller.indexOf(str);
};

Object.defineProperty && Object.defineProperty(String.prototype, 'has', { enumerable: false });