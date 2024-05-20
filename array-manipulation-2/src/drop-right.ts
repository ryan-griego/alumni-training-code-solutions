/* exported dropRight */
function dropRight(array: Array<unknown>, count: any): unknown {
  const newArray: Array<unknown> = [];
  for (let i = 0; i <= array.length - count - 1; i++) {
    if (array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
