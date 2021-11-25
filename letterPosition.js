const letterPosition = function(sentence) {
  const results = {};
  //define a comparison variable 
  let compChar;

  // define the accumulator variable
  let count;

  // define index of character variable
  let indexOfChar;

  //string can be iterated like arrays

  // loop through the list of characters
  for (char of sentence) {
    compChar = char;
    indexOfChar = [];
    count = 0;
    if (char === ' ') {
      continue; // skip empties
    }
      for (let i = 0; i < sentence.length; i++) {
    // conditional block
      if (sentence[i] === compChar) {
        count++;
        indexOfChar.push(i);
        results[sentence[i]] = indexOfChar; 
      } 
    }
  }
  // return results object
  return results;
};

//import code

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const eqArrays = (arr1, arr2) => {
  // check if the array lengths are different
  if (arr1.length!== arr2.length) return false;
  // loop through elements in an array to each other
  for (let i = 0, j = 0; i < arr1.length; j++,i++) {
    // check whether the two elements of the array are equal
    if (arr1[i] === arr2[j]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

//tests
const testresult = letterPosition("lighthouse in the house")

assertArraysEqual(testresult["l"],[0])
assertArraysEqual(testresult["o"], [6, 19])