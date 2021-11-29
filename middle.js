const middle = (arr) => {
  if (arr.length === 1) return arr;
  if (arr.length % 2 === 0) {
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
  } else {
    return [arr[Math.floor(arr.length / 2)]];
  }
}

module.exports = middle;