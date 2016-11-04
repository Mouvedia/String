A bunch of cross-browser methods that extend `String`.

## Static methods
### isString
```sh
npm install --save @string/isstring
```
```js
String.isString(Any)
    => Boolean
```
### parseAsId
```js
String.parseAsId(id: String, 'HTML4'? | 'HTML5' | 'XML1')
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect
```
### parseAsClass
```js
String.parseAsClass(class: String, HTML5?: !!Any)
    => Void,
    throws: TypeError | SyntaxError | DOMException,
    requires: String.isString, String.prototype.inspect
```

## Instance methods
### \#has
```sh
npm install --save @string/prototype.has
```
```js
String.prototype.has(String, insensitive?: !!Any)
    => Boolean,
    throws: TypeError
```
### \#insert
```sh
npm install --save @string/prototype.insert
```
```js
String.prototype.insert(index: Number, String)
    => String,
    throws: TypeError
```
### \#inspect
```sh
npm install --save @string/prototype.inspect
```
```js
String.prototype.inspect(String)
    => String,
    throws: TypeError
```
