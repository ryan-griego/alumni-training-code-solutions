/* exported toObject */
function toObject(keyValuePair: [string, any]): object {
  const newObject: any = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
