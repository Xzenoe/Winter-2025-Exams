// Refactor following solution
// Extract substring between prefix and suffix
'use strict';
const getvaluebetween = (string, prefix, suffix) => {
  let i = string.indexOf(prefix);
  if (i === -1) return '';
  else {
    const k = i + prefix.length;
    str = str.substring(k);
    if (suffix) {
      i = string.indexOf(suffix);
      if (i === -1) return '';
      else string = string.substring(0, i);
    }
  }
  return string;
};

module.exports = getvaluebetween;
