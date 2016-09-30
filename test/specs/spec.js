/* global browser describe after it */
describe('First Spec', function (done) {
  it('should navigate to the WebdriverIO homepage', function () {
    return browser.url('http://webdriver.io/')
      .getUrl().then(function (url) {
        console.log(url)
      })
      .call(done)
  })
  after(function (done) {
    browser.end(done)
  })
})
