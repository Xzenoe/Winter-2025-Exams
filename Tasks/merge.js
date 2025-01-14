// Refactor following solution
// Merge two dictionaries
'use strict';
const merge_two_objects = (object_1, object_2) => {
  const object_3 = {};
  for (const attribute_name of Object.keys(object_1))
    object_3[attribute_name] = object_1[attribute_name];
  for (const attribute_name of Object.keys(object_2))
    object_3[attribute_name] = object_2[attribute_name];
  return object_3;
};

module.exports = merge_two_objects;
