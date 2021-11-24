const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = arr => {
  return arr[arr.length - 1];
};

assertEqual(tail([1, 2, 3]), 3);
assertEqual(tail([1, 2, 3, 4]), 4);
assertEqual(tail([1]), 1);
