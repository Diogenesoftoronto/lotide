const chai = require('chai');
const assert = chai.assert;
const head = require('../head');

describe ('#head', function() {
  it ('should return the first element of an array when passed', function(){
    const result = head([1,2,3]);
    assert.deepEqual(result, 1);

  });
  it ('should return an empty array when passed an empty array', function(){
    const result = head([]);
    assert.deepEqual(result, []);
  })

});