const tail = arr => {
  if (arr.length === 0) return [];
  return arr.shift();
};
module.exports = tail;