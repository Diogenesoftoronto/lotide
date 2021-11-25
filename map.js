const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
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
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, function(input){return input}), words)
assertArraysEqual(map(words, function(input){return input.length}), [6, 7, 2, 5, 3])
assertArraysEqual(map(words, function(input){return input + " holy smokes"}), ["ground holy smokes", "control holy smokes", "to holy smokes", "major holy smokes", "tom holy smokes"])