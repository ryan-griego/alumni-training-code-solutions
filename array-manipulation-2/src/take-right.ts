/* exported takeRight */
function takeRight(array: Array<unknown>, count: any): unknown {
  const newArray: Array<unknown> = [];
  count = Math.min(count, array.length);

  for (let i = array.length - count; i <= array.length - 1; i++) {
    if (array.length) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
