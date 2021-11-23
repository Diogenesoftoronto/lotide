const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = arr => {
  return arr[0];
}
assertEqual(head([1,2,3]), 1);
assertEqual(head(["Hello", "World", "Labs"]), "Hello");
assertEqual(head(), undefined);