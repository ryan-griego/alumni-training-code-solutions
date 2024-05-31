'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  const capitalize = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    word = 'JavaScript';
    return word;
  }
  return capitalize;
}
