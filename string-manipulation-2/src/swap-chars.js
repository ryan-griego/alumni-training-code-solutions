'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[firstIndex]) {
      newString += string[secondIndex];
    } else if (string[i] === string[secondIndex] && i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
