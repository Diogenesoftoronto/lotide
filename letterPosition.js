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
module.exports = letterPosition;
