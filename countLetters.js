const assertEqual = require('./assertEqual');

const countLetters = str => {
  
  // define the comparison variable
  let compChar = '';

  // define count variable
  let count = 0;
    
  // split str into array
  strArr = str.split('')
  // define the amount of letters object.
  let amountObject = {};
  
  // loop through str
  for (char of strArr) {  
    count = 0;
    compChar = char;
    for (ele of strArr) {
      // conditional checks if the string is the same as the comparison variable.
      if (compChar === ele) {
        count++;
      }
      amountObject[char] = count;
      // add the data to the object
    }
  }

  return amountObject;
}

// tests
const testresult = countLetters("lighthouse in the house")
console.log(countLetters("head"),{h:1,e:1,a:1,d:1})
console.log(countLetters("hea"),{h:1,e:1,a:1})
console.log(countLetters("lighthouse in the house"))