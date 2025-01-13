// Refactor following solution
// Get one random element from an array

const SAMPLE = (arr) => {
  let result;
  let randomIndex = Math.floor(Math.random() * arr.length);
  result = arr[randomIndex];
  return result;
};

module.exports = SAMPLE;
