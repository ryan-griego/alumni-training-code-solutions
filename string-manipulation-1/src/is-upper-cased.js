'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  let answer = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return answer;
}
