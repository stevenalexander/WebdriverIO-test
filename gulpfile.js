var gulp = require('gulp')
var selenium = require('selenium-standalone')
var webdriver = require('gulp-webdriver')

gulp.task('selenium', function (done) {
  selenium.install({
    logger: function (message) { }
  }, function (err) {
    if (err) return done(err)

    selenium.start(function (err, child) {
      if (err) return done(err)
      selenium.child = child

      done()
    })
  })
})

gulp.task('integration', ['selenium'], function () {
  return gulp.src('wdio.conf.js').pipe(webdriver({
    logLevel: 'verbose',
    waitforTimeout: 10000
  }))
})

gulp.task('test', ['integration', 'selenium'], function () {
  selenium.child.kill()
})
