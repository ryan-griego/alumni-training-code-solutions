'use strict';
/* exported firstChars */
function firstChars(length, string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      newString += string[i];
    }
  }
  return newString;
}
