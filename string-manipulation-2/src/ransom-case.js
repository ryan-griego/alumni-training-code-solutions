'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();
    }
  }
  return word;
}
