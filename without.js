// import assertArraysEqual function
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

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const without = (sourceArr, itemsToRemove) => {
  let result = sourceArr;
  for (let element of itemsToRemove)
    result = result.filter(item => item !== element)
  return result;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(without(words, ["lighthouse", "world"]));
console.log(without(words, ["lighthouse"]));
