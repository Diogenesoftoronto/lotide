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

module.exports = countLetters;
