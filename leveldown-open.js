var fs = require('fs')

  , separator = require('os').platform() === 'win32' ? '\\' : '/'

  , open = function (location, options, callback) {
      if (!callback) {
        callback = options
        options = {}
      }

      var subdir = location.split(separator).slice(0, -1).join(separator)

      fs.exists(subdir, function (subdirExists) {
        if (!subdirExists)
          return callback(new Error(location + ': No such file or directory'))

        fs.exists(location, function (exists) {
          if (!exists && options.createIfMissing === false)
            callback(
              new Error(location + ' does not exist (createIfMissing is false)')
            )
          else if (exists && options.errorIfExists)
            callback(
              new Error(location + ' exists (errorIfExists is true)')
            )
          else if (!exists)
            fs.mkdir(location, callback)
          else
            callback()
        })
      })
    }

module.exports = open
