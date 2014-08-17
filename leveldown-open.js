var fs = require('fs')
  , open = function (location, options, callback) {
      var subdir = location.split('/').slice(0, -1).join('/')

      fs.exists(subdir, function (exists) {
        if (!exists) {
          callback(new Error(location + ': No such file or directory'))
        } else if (options.createIfMissing === false || options.errorIfExists) {
          fs.exists(location, function (exists) {
            if (!exists && options.createIfMissing === false)
              callback(
                new Error(location + ' does not exist (createIfMissing is false)')
              )
            else if (exists && options.errorIfExists)
              callback(
                new Error(location + ' exists (errorIfExists is true)')
              )
            else
              fs.mkdir(location, callback)
          })
        } else {
          fs.mkdir(location, callback)
        }
      })
    }

module.exports = open
