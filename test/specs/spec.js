/* global browser describe it */
describe('First Spec', function () {
  it('should navigate to the WebdriverIO homepage', function () {
    return browser.url('http://webdriver.io/')
      .getUrl().then(function (url) {
        console.log(url)
        // outputs the following:
        // "http://webdriver.io"
      })
      // .getUrl().then(function (url) {
      //  console.log(url) // outputs 'http://webdriver.io/guide.html'
      // })
  })
})
