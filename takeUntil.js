// Creates a slice of array with elements taken from the beginning. Elements are taken until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
const takeWhile = (array, callback, value, index) => {
  const results = [];

  if (index === undefined) index = 0;

  (value !== undefined) ? value = array[index]: array[index] = value;

  if(callback===undefined) throw new Error('callback is undefined');

  if (array === undefined) throw new Error('array is undefined');

  if (callback(value, index, array)) {

    for (value of array) {

      if(callback(array, value, index)){

        results = array.push(value);

      } else break;

      return results;
  }
}

// const takeWhile = (array, callback) => {
//   const results = [];
//   for (let item of array) {
//     if (callback(item)) results.push(item);
//     else break;
//   } return results;
// } 



let users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
takeWhile(users, function(o) { return !o.active; });