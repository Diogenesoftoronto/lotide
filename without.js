const without = (sourceArr, itemsToRemove) => {
  // loop through elements in the source array
  let result = sourceArr
  for(let j = 0; j < itemsToRemove.length; j++) {
    let item = itemsToRemove[j]
    if (sourceArr.includes(item)) {
      let indexOfItem = sourceArr.indexOf(item)
      sourceArr.splice(indexOfItem, 1)
    } else {
      return result;
    }
  }
  return result;
}

const words = ["hello", "world", "lighthouse"];

console.log(without(words, ["lighthouse"]));
