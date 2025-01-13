// Refactor following solution
// Change double quotation to open or close quotation
'use strict';

const quotes = (string) => {
  const result = [];
  let openBracket = false;
  for (const char of string) {
    if (char === '"') {
      !openBracket ? result.push('«') : result.push('»');
      openBracket = !openBracket;
    } else result.push(char);
  }
  return result.join('');
};

module.exports = quotes;
