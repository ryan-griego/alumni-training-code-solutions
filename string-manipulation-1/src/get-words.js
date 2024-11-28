'use strict';
/* exported getWords */
function getWords(string) {
  let splitted = string.split(' ');
  if (string === '') {
    return [];
  }
  return splitted;
}
