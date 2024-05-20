'use strict';
/* exported take */
function take(array, count) {
  const newArray = [];
  for (let i = 0; i <= count - 1; i++) {
    if (array.length) newArray.push(array[i]);
  }
  return newArray;
}
