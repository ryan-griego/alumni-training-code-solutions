/* exported filterOutStrings */
function filterOutStrings(values: Array<T>): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= values.length - 1; i++) {
    if (typeof values[i] !== 'string') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
