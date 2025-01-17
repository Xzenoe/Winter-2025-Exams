// Refactor following solution
// Extract substring between prefix and suffix
'use strict';
const getvaluebetween = (string, prefix, suffix) => {
  const firstCharPos = string.indexOf(prefix) + prefix.length;
  const lastCharPosx = string.indexOf(suffix);
  if (prefix && suffix) {
    string = string.substring(firstCharPos, lastCharPosx);
  }
  return string;
};

module.exports = getvaluebetween;

