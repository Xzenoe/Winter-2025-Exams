// Refactor following solution
// Reverse an array, you can't use .reverse()
'use strict';
const invert = (array) => {
  const result = Object.keys(array);
  result.forEach((i) => (result[i] = array.pop()));
  return result;
};

module.exports = invert;
