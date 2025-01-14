// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (object) => {
  for (const element in object) {
    if (typeof object[element] === 'number') {
      object[element] = object[element] + 1;
    }
  }
  return object;
};
module.exports = incNumbers;
