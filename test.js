var fs = require('fs')

  , test       = require('tape')
  , testCommon = require('abstract-leveldown/testCommon')
  , openTest = require('abstract-leveldown/abstract/open-test')
  , open  = require('./leveldown-open')
  , testBuffer = require('fs').readFileSync(__filename)
  , factory = function (location) {
      return {
        open: function (options, callback) {
          if (!callback) {
            callback = options
            options = {}
          }
          open(location, options, callback)
        },
        close: function (callback) {
          callback()
        }
      }
    }

openTest.setUp(test, testCommon)
openTest.open(factory, test, testCommon)
openTest.openAdvanced(factory, test, testCommon)
openTest.tearDown(test, testCommon)

test('open existing directory', function (t) {
  var location = testCommon.location()
    , filename = location + '/beep'

  fs.mkdirSync(location)
  fs.closeSync(fs.openSync(filename, 'w'))

  open(location, {}, function (err) {
    if (err)
      return t.end(err)

    t.equal(fs.existsSync(filename), true)
    t.end()
  })
})
