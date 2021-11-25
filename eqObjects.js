// check if objects are the same
const eqObjects = (obj1, obj2) => {
  let result = true;
  for (key in obj1){
    if (obj1[key] !== obj2[key]){
      result = false;
    }
  }
  return result;
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
