const assertEqual = require('./assertEqual');

const tail = arr => {
  if (arr.length === 0) return [];
  return arr[arr.length - 1];
};
module.exports = tail;