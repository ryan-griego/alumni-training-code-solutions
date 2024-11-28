'use strict';
/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  count = Math.min(count, array.length);
  for (let i = array.length - count; i <= array.length - 1; i++) {
    if (array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
