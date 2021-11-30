
const without = (sourceArr, itemsToRemove) => {
  let result = sourceArr.filter(item => !itemsToRemove.includes(item));
  return result;
}
module.exports = without;