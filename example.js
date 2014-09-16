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
