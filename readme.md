# leveldown-open[![build status](https://secure.travis-ci.org/kesla/leveldown-open.svg)](http://travis-ci.org/kesla/leveldown-open)

Handle the logic needed to open a leveldown db

[![NPM](https://nodei.co/npm/leveldown-open.png?downloads&stars)](https://nodei.co/npm/leveldown-open/)

[![NPM](https://nodei.co/npm-dl/leveldown-open.png)](https://nodei.co/npm/leveldown-open/)

## Installation

```
npm install leveldown-open
```

## Example

### Input

```javascript
var fs = require('fs')

  , open = require('./leveldown-open')
  , directory = __dirname + '/example-dir'

// open takes the same arguments as leveldown.open
open(__dirname + '/not/exists', function (err) {
  console.log('this should be an error')
  console.log(err)

  fs.mkdirSync(directory)

  open(directory, { errorIfExists: true } , function (err) {
    console.log('this should also error')
    console.log(err)

    open(directory, function (err) {
      console.log('this however is fine')
      console.log(err)
      fs.rmdirSync(directory)
    })

  })

})
```

### Output

```
this should be an error
[Error: /Users/davidbjorklund/projects/leveldown-open/not/exists: No such file or directory]
this should also error
[Error: /Users/davidbjorklund/projects/leveldown-open/example-dir exists (errorIfExists is true)]
this however is fine
undefined
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

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
