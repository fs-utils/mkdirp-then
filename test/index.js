
var fs = require('fs')
var path = require('path')

var mkdirp = require('..')

var build = path.resolve('build')
try {
  fs.rmdirSync(build)
} catch (err) {}

describe('mkdirp().then()', function () {
  it('should work', function () {
    return mkdirp(build).then(function () {
      fs.statSync(build)
      fs.rmdirSync(build)
    })
  })
})
