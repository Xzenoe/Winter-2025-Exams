// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (array) => {
  for (const element in array) {
    if ((typeof array[element]).charAt(0).toUpperCase() === 'N') {
      array[element] = array[element] + 1;
    }
  }
  return array;
};

module.exports = incNumbers;
