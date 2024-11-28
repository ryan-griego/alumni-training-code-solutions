/* exported getValues */
function getValues(object: object): Array {
  const newArray: Array = [];
  for (const property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
