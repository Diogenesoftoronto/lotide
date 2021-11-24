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
  let result = sourceArr.filter(item => !itemsToRemove.includes(item));
  return result;
}

const middle = (arr) => {
  if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
}

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);