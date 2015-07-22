/*jshint laxcomma:true*/

String.prototype.has = function(str, insensitive) {
  var proto   = String.prototype
    , method  = !insensitive ? 'valueOf' : proto.toLocaleLowerCase ? 'toLocaleLowerCase' : 'toLowerCase'
    , ES6     = proto.includes || proto.contains || false;

  return (ES6 || proto.indexOf).call(this[method](), String(str)[method]()) > (ES6 ? 0 : -1);
};
