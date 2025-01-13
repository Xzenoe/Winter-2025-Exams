// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';
const invert = (array) => {
  const result = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    result.push(array.pop());
  }
  return result;
};
module.exports = invert;
