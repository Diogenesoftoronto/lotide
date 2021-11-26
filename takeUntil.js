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

// const takeWhile = (array, callback) => {
//   const results = [];
//   for (let item of array) {
//     if (callback(item)) results.push(item);
//     else break;
//   } return results;
// } 



// let users = [
//   { 'user': 'barney',  'active': false },
//   { 'user': 'fred',    'active': false },
//   { 'user': 'pebbles', 'active': true }
// ];
 
// takeWhile(users, function(o) { return !o.active; });

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
