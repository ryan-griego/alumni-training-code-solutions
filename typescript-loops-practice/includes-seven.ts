/* exported includesSeven */
function includesSeven(array: Array<T>): boolean {
  // let newArray: array = [];
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
