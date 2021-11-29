// import the eqArrays function from the "eqArrays.js" module
const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    return true;
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return false; 
  } 
};


module.exports = assertArraysEqual;