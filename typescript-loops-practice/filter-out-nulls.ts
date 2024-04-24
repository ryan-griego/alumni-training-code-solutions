/* exported filterOutNulls */

function filterOutNulls(values: Array<T>): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= values.length - 1; i++) {
    if (values[i] !== null) {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
