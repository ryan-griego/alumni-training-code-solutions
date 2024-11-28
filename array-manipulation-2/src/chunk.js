'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArray = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      subArray.push(array[j]);
    }
    newArray.push(subArray);
  }
  return newArray;
}
