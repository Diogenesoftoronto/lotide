const assertEqual = require('./assertEqual');

const findKey = (obj, callback) => {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

// call function findKey
results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

assertEqual(results, "noma");