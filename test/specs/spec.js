/* global browser describe it */
var assert = require('assert')

describe('First Spec', () => {
  it('should navigate to the WebdriverIO homepage', () => {
    return browser.url('https://google.co.uk/')
      .getTitle().then(function (title) {
        assert.equal(title, 'Google')
      })
  })
})
