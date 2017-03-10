String.parseAsClass = function(className, HTML5) {
  if (!String.isString(className))
    throw new TypeError('The passed argument must be a string.');
  if (className === '')
    throw new SyntaxError('The string provided must not be empty.');

  if (!HTML5) {
    className = className.replace(/^[ \t\n\f\r\u200b]+|[ \t\n\f\r\u200b]+$/g, '');
    if (/[ \t\n\f\r\0\u200b]/.test(className)) // INVALID_CHARACTER_ERR 5
      throw new Error(className.inspect() + ' contains an invalid character at position ' + className.indexOf(className.match(/[ \t\n\f\r\0\u200b]/)[0]));
  } else if (/[ \t\n\f\r\0]/.test(className)) // INVALID_CHARACTER_ERR 5
      throw new Error(className.inspect() + ' contains an invalid character at position ' + className.indexOf(className.match(/[ \t\n\f\r\0]/)[0]));
};