// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const inc = (object) => {
  const objectKeys = Object.keys(object);
  for (const element of objectKeys) {
    if (typeof object[element] === 'number') {
      object[element] = object[element] + 1;
    }
  }
  return object;
};
module.exports = inc;
