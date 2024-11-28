'use strict';
/* exported capitalize */
function capitalize(word) {
  let capital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capital;
}
