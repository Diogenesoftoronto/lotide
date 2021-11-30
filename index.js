// index
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const takeUntil = require('./takeUntil');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const without = require('./without');
const map = require('./map');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPosition = require('./letterPosition');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertEqual: assertEqual,
  takeUntil: takeUntil,
  without: without,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKeyByValue: findKeyByValue,
  countLetters: countLetters,
  countOnly: countOnly,
  findKey: findKey,
  letterPosition: letterPosition,
  map: map,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  
};