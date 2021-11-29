const chai = require('chai');
const expect = chai.expect;
const middle = require('../middle');

describe('#middle', () => {
  it('should be able to find the middle of an even array', () => {
    actual = middle([1, 2, 3, 4]);
    expect(actual).to.eql([2, 3]);
  })
  it ('should be able to find the middle of an odd array', () => {
    actual = middle([1, 2, 3, 4, 5]);
    expect(actual).to.eql([3]);
  })
  it ('should be able to find the middle of a single element array', () => {
    actual = middle([1]);
    expect(actual).to.eql([1]);
  })

});