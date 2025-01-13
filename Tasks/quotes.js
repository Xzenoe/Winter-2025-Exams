// Refactor following solution
// Change double quotation to open or close quotation
'use strict';
const EMPTY = '';

const quotes = (string) => {
  const result = [];
  let open = false;
  for (const c of string) {
    if (c === '"') {
      for (const i of c) {
        if (!open) {
          result.push('«');
          open = true;
        } else {
          result.push('»');
          open = false;
        }
      }
    } else {
      if (c !== '"') {
        for (const i of c) {
          result.push(i);
        }
      }
    }
  }
  return result.join(EMPTY);
};

module.exports = quotes;
