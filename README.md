# Safe-nav

This is an experimental [sweet.js](http://sweetjs.org) macro
that implements [existential accessor operator](http://coffeescript.org/#try:a%3F.b()%3F.c%0A%0Aif%20a%3F.b()%3F.c%0A%20%20d()) (aka "?.") of CoffeeScript
or the [Safe-Navigation](http://docs.codehaus.org/display/GROOVY/Operators#Operators-SafeNavigationOperator%28%3F.%29) operator of Groovy.

So you can easily change a piece of code of this type:

````js
if (parent) {
  var child = parent.querySelector(".class");
  if (child)
    child.remove();
}
````

to

````js
parent?.querySelector(".class")?.remove();
````

Simpler, isn't it?

## Installing

````bash
$ npm install sweet.js safe-nav
````

## Using

````bash
$ sjs -m safe-nav -o compiled.js my_sweet_code.js
````

If you pass -c to sjs along with -o output.js, it will generate a sourcemap so you get good debugging too!

## Licence

    Copyright © 2014 Florent Fayolle

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

## TODO

* Tests
* Optimizations
