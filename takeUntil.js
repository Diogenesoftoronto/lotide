// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
const takeUntil = (array, callback, value, index) => {
  const results = [];

  if (index === undefined) index = 0;

  (value === undefined) ? value = array[index]: array[index] = value;

  if(callback===undefined) throw new Error('callback is undefined');

  if (array === undefined) throw new Error('array is undefined');

  for (value of array) {

    if(!callback(value)){

      results.push(value);
      
    } else break;
  }
  return results;
}
module.exports = takeUntil;