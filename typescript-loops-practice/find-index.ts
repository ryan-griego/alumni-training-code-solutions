/* exported findIndex */
function findIndex(array: Array<T>, value: number): number {
  // let newArray: array = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
