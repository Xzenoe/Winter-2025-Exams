// Refactor following solution
// Get one random element from an array
'use strict';
const SAMPLE = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  const result = arr[randomIndex];
  return result;
};

module.exports = SAMPLE;
