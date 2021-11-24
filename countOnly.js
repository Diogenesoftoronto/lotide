const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// array that counts the number of elements in array and returns an object with the amount of time element occurs in the array. 
const countOnly = (sourcArr, expectObject) => {

  // defines the count
  let count = 0;
  // defines the comparison variable
  let compVar = sourcArr[0];
  
  // defines the resulting object
  const result = {};
  
  // loops through the array
  for (let ele of sourcArr) {
    
    // checks if the comparison variable is equal to the current element of the array
    sourcArr.forEach(item => {
      
      if (compVar === item) {
        
        // count the number of times the element occurs in the array
        count++;
      }
      
    });
    
    // checks if the element is set to true in the expectObject
    if (expectObject[ele]) {
      
      //add the element to the keys of the object
      result[ele] = count; 
    }

    // reset count
    count = 0;

  // set the comparison to the current element
    compVar = ele;
  };
  return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
