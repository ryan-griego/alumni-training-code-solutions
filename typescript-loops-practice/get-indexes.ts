/* exported getIndexes */

function getIndexes(array: Array<T>): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= array.length - 1; i++) {
    newArray.push(array.indexOf(array[i]));
  }
  return newArray;
}
