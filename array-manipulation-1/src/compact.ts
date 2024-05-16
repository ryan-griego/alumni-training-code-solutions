/* exported compact */

function compact(
  array: (number | boolean | string)[]
): (number | boolean | string)[] {
  const newArray: (number | boolean | string)[] = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'boolean' && array[i] === true) {
      newArray.push(array[i]);
    }
    if (typeof array[i] === 'object' && array[i] !== null) {
      newArray.push(array[i]);
    }
    if (
      typeof array[i] === 'number' &&
      !Number.isNaN(array[i]) &&
      array[i] !== 0
    ) {
      newArray.push(array[i]);
    }
    if (typeof array[i] === 'string' && array[i] !== '') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
