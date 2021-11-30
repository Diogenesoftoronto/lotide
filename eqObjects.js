// check if objects are the same
const eqObjects = (obj1, obj2) => {
  let result = true;
  for (key in obj1){
    if (obj1[key] !== obj2[key]){
      result = false;
    }
  }
  return result;
};
module.exports = eqObjects;