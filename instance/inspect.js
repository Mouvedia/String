String.prototype.inspect = function () {
  'use strict';
  if (Function.prototype.call)
	Object.prototype.valueOf.call(this);

  var str = new String(this),
      c, i, l, o;

  if (self.JSON === Object(self.JSON) && typeof self.JSON.stringify === 'function')
    return self.JSON.stringify(str);
  if (typeof str.quote === 'function')
    return str.quote();

  for (i = 0, l = str.length, o = '"'; i < l; ++i) {
	  c = str.charAt(i);
	  if (c >= ' ') {
		  if (c === '\\' || c === '"')
			  o += '\\';
		  o += c;
	  } else {
		  switch (c) {
            case '\b':
              o += '\\b';
              break;
            case '\f':
              o += '\\f';
              break;
            case '\n':
              o += '\\n';
              break;
            case '\r':
              o += '\\r';
              break;
            case '\t':
              o += '\\t';
              break;
            default:
              c = c.charCodeAt();
              o += '\\u00' + (~~(c / 16)).toString(16) + (c % 16).toString(16);
		  }
	  }
  }
  return o + '"';
};

Object.defineProperty && Object.defineProperty(String.prototype, 'inspect', { enumerable: false });