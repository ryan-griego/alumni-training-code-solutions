'use strict';
/* exported tail */
function tail(array) {
  const newArray = [];
  for (let i = 1; i <= array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
