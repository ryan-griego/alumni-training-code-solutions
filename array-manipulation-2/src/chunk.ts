/* exported chunk */

function chunk(array: Array<unknown>, size: number): Array<unknown> {
  const newArray: Array<unknown> = [];
  for (let i = 0; i < array.length; i += size) {
    const subArray: Array<unknown> = [];
    for (let j = i; j < i + size && j < array.length; j++) {
      subArray.push(array[j]);
    }
    newArray.push(subArray);
  }
  return newArray;
}
