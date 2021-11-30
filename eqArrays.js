const eqArrays = (arr1, arr2) => {
  if (arr1 === undefined && arr2 === undefined) return false;
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
module.exports = eqArrays;

