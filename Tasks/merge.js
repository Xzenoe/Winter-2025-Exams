// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObjects = (firstObj, secondObj) => {
  const result = {};
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);
  for (const attribute of firstObjKeys) {
    result[attribute] = firstObj[attribute];
  }
  for (const attribute of secondObjKeys) {
    result[attribute] = secondObj[attribute];
  }
  return result;
};

module.exports = mergeTwoObjects;
