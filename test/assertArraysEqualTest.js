const chai = require('chai');
const assertArraysEqual = require('../assertArraysEqual');
const expect = chai.expect;

describe('#assertArraysEqualTest', function() {
  it('should return true if arrays are equal', function() {
    const expected = assertArraysEqual([1, 2, 3], [1, 2, 3]);
    expect(expected).to.equal(true);
  });
  it('should return false if arrays are not equal', function() {
    const expected = assertArraysEqual([1, 2, 3], [1, 2, 4]);
    expect(expected).to.equal(false);
  });
});