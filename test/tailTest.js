const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail');
describe('#tail', () => {
  it ('should return the end of an array when passed an array', function () {
    const result = tail([1,2,3]);
    assert.deepEqual(result, [2,3]);
  })
  it  ('should return empty when passed an empty array', function () {
    const result = tail([]);
    assert.deepEqual(result, []);
  }) 
  

});
