// Refactor following solution
// Change double quotation to open or close quotation
'use strict';

const quotes = (string) => {
  const result = [];
  let openBracket = false;
  for (const char of string) {
    if (char === '"') {
      if (openBracket === false) {
        result.push('«');
      } else {
        result.push('»');
      }
      openBracket = !openBracket;
    } else {
      if (char !== '"') {
        result.push(char);
      }
    }
  }
  return result.join('');
};

module.exports = quotes;
