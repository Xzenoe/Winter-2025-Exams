// Refactor following solution
// Find an intersection of two dictionaries
'use strict';
const intersection = (object_1, object_2) => {
  const result = {};

  const firstKeys = Object.keys(object_1);
  for (const attribute of firstKeys) {
    if (object_1[attribute] === object_2[attribute])
      result[attribute] = object_1[attribute];
  }
  return result;
};

module.exports = intersection;
