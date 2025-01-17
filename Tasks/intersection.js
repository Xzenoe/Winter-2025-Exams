// Refactor following solution
// Find an intersection of two dictionaries
'use strict';
const intersection = (firstObj, secondObj) => {
  const result = {};

  const firstKeys = Object.keys(firstObj);
  for (const attribute of firstKeys) {
    if (firstObj[attribute] === secondObj[attribute]) {
      result[attribute] = firstObj[attribute];
    }
  }
  return result;
};

module.exports = intersection;
