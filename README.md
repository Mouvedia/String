A bunch of cross-browser methods that extend `String`.

## Static methods
```js
String.isString(Any)
    => Boolean

String.parseAsClass(class: String, HTML5?: !!Any)
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect

String.parseAsId(id: String, 'HTML4'? | 'HTML5' | 'XML1')
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect
```
## Instance methods
```js
String.prototype.has(String, insensitive?: !!Any)
    => Boolean,
    throws: TypeError

String.prototype.insert(index: Number, String)
    => String,
    throws: TypeError

String.prototype.inspect(String)
    => String,
    throws: TypeError
```
