'use strict';
/* exported lastChars */
function lastChars(length, string) {
  let newString = '';
  if (length > string.length) {
    length = string.length;
  }
  for (let i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
