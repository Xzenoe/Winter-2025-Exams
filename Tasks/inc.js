// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (object) => {
  const objectKeys = Object.keys(object);
  for (const element of objectKeys) {
    if (typeof object[element] === 'number') {
      object[element] += 1;
    }
  }
  return object;
};
module.exports = incNumbers;
