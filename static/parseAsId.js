String.parseAsId = function(id, type) {
  var startChar, NCName;

  if (!String.isString(id))
    throw new TypeError('The passed argument must be a string.');
  if (id === '')
    throw new SyntaxError('The string provided must not be empty.');

  switch (type) {
    case 'HTML5':
      if (/[ \t\n\f\r\0]/.test(id)) // INVALID_CHARACTER_ERR 5
        throw new Error(id.inspect() + ' contains an invalid character at position ' + id.indexOf(id.match(/[ \t\n\f\r\0]/)[0]));
      break;
    case 'XML1':
      startChar = 'a-z_A-Z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD';
      NCName    = new RegExp('^[' + startChar + '][-' + startChar + '.\\d\xB7\u0300-\u036F\u203F-\u2040]*$');
      if (!/^[\u0020-\uD7FF\n\t\r\uE000-\uFFFD]+$/.test(id)) // INVALID_CHARACTER_ERR 5
        throw new Error(id.inspect() + ' contains an invalid character at position ' + id.indexOf(id.match(/[^\u0020-\uD7FF\n\t\r\uE000-\uFFFD]/)[0]));
      if (!NCName.test(id))
        throw new SyntaxError(id.inspect() + ' must be a valid XML non-colonized name.');
      if (/^xml/i.test(id) && console && console.warn)
        console.warn('Names beginning with "' + id.substring(0, 3) + '" are reserved for XML standardization.');
      break;
    case 'HTML4':
      /* falls through */
    default:
      id = id.replace(/^[ \t\n\f\r\u200b]+|[ \t\n\f\r\u200b]+$/g, '');
      if (!/^[a-zA-Z][\w:.-]*$/.test(id))
        throw new SyntaxError(id.inspect() + ' must be a valid ID token.');
  }
};
