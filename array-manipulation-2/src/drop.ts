/* exported drop */
function drop(array: Array<unknown>, count: any): unknown {
  const newArray: Array<unknown> = [];
  for (let i = count; i <= array.length - 1; i++) {
    if (array.length) newArray.push(array[i]);
  }
  return newArray;
}
