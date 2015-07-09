
var fs = require('fs')
var path = require('path')
var assert = require('assert')

var mkdirp = require('..')

var build = path.resolve('build')
try {
  fs.rmdirSync(build)
} catch (err) {}

describe('mkdirp().then()', function () {
  afterEach(function(){
    fs.rmdirSync(build)
  })

  it('should work', function (done) {
    return mkdirp(build).then(function () {
      fs.statSync(build)
      done()
    })
  })

  it('should use "mode"', function (done) {
    mkdirp(build, 0600).then(function(){
      var stats = fs.statSync(build)
      assert.equal(stats.mode & 0777, 0600)
      done()
    })
  })
})
