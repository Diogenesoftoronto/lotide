const chai = require('chai');
const expect = chai.expect;
const eqArrays = require('../eqArrays');

describe ('#eqArrays', function () {
  it('should be able to compare arrays', function () {
    expect(eqArrays([1, 2, 3], [1, 2, 3])).to.be.true;
  });
  it('should be able to compare arrays of different lengths', function () {
    expect(eqArrays([1, 2, 3], [1, 2, 3, 4])).to.be.false;
  });
  it('should be able to compare arrays with opposite arrangements', function () {
    expect(eqArrays([3, 2, 1], [1, 2, 3])).to.be.false;
  });
  it('should be able to compare empty arrays', function () {
    expect(eqArrays([], [])).to.be.true;
  });
  it('should be able to compare arrays with different types', function () {
    expect(eqArrays([1, 2, 3], [1, '2', 3])).to.be.false;
  });
  it('should be able to compare arrays with the same types', function () {
    expect(eqArrays(['1', '2', '3'], ['1', '2', '3'])).to.be.true;
  });
});