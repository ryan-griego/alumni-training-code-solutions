/* exported getKeys */
function getKeys(object: object): Array {
  const newArray: Array = [];
  for (const property in object) {
    newArray.push(property);
  }
  return newArray;
}
