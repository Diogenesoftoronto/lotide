const chai = require('chai'); // 1
const assert = chai.assert; // 2
const assertEqual = require('../assertEqual');

// TEST CODE

describe('#assertEqual', function() {
  it ('should return false when passed', function() {
    const eq = assertEqual("Lighthouse Labs", "Bootcamp");
    assert.equal(eq, false);
  })

  it ('should return true when passed', function() {
    const eq = assertEqual("Lighthouse Labs", "Lighthouse Labs");
    assert.equal(eq, true);
  })

});