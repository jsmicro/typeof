# JSMicro TypeOf

An extended Javascript object type getter. JSMicro TypeOf will allow us to register our own object type.

***

## Installation

```bash
bower install --save jsmicro-typeof
```

```bash
npm install --save jsmicro-typeof
```

***

## Usage

For browser usage, simply load the `index.js` and `typeOf` will available on `window`. Example:

```html
<script src="bower_components/jsmicro-typeof/index.js"></script>
```

```js
console.log(typeOf('Test')); // string
console.log(typeOf([])); // array

// Create a class and register the object type.
function People() {
  // Register the object type.
  typeOf.add('People', this);
  
  return this;
}

var john = new People();

console.log(typeOf(john)); // people
```

***

For NodeJS usage, simply load the `jsmicro-typeof` module and `typeOf` will available on `global`. Example:

```js
'use strict';

require('jsmicro-typeof');

// Create a class and register the object type.
class People {
  constructor() {
    // Register the object type.
    typeOf.add('People', this);
  }
}

// Extend Object and register as new type.
class Library extends Array {
  constructor(items) {
    super(items);
    typeOf.add('Library', this);
  }
}

// Create a People and Library instance.
var john = new People();
var libs = new Library();

console.log(typeOf(john)); // people
console.log(typeOf(libs)); // library
console.log(typeOf([])); // array
```

***

## Methods

### **`typeOf(OBJECT)`**

Get the type of javascript objects. This method will return a single string type of the object. E.g: `string`, `array`, `object`, etc.

*   **OBJECT** - A javascript object to get the type of. E.g: `[]`, `''`, `{}`.

***

### **`typeOf.add(NAME, OBJECT)`**

Register custom object type, so the `typeOf()` will understand the type of it. This method will return nothing.

*   **NAME** - String type name. We prefer to use uppercase for first letter, e.g: `People`, `User`, etc. The registered type will be in constructor format. E.g: `[object People]`, `[object User]`.
*   **OBJECT** - Object to register the type of.

***

### **`typeOf.raw(OBJECT)`**

Get raw type of javascript objects. While the `typeOf()` return a single string object type, raw method will return the constructor type. E.g: `[object Array]`, `[object String]`, `[object Boolean]`, etc.

*   **OBJECT** - A javascript object to get the type of. E.g: `[]`, `''`, `{}`.

***

## Changelog

#### **`v1.0.1 - Apr 9, 2016`**

*   Move node dependency to dev-dependency.

#### **`v1.0.0 - Apr 8, 2016`**

*   Initial commit and release.

***

## The MIT License **`(MIT)`**

Copyright © 2016 Nanang Mahdaen El Agung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

