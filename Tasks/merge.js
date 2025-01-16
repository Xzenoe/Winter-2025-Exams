// Refactor following solution
// Merge two dictionaries
'use strict';
const mergeTwoObj = (object_1, object_2) => {
  const object_3 = {};
  const objectKeys_1 = Object.keys(object_1);
  const objectKeys_2 = Object.keys(object_2);
  for (const attribute of objectKeys_1)
    object_3[attribute] = object_1[attribute];
  for (const attribute of objectKeys_2)
    object_3[attribute] = object_2[attribute];
  return object_3;
};

module.exports = mergeTwoObj;
