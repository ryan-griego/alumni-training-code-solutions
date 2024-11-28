'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArray = [];
  for (let i = 0; i <= array.length - count - 1; i++) {
    if (array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
