// Refactor following solution
// Reverse an array, you can't use .reverse()

invert = (array) => {
  result = Object.keys(array);
  result.forEach((_, i) => (result[i] = array.pop()));
  return result;
};

module.exports = invert;
