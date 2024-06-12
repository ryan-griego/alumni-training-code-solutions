/* exported omit */
function omit(source: object, keys: Array<string, unknown>): object {
  const properties: object = {};
  for (const property in source) {
    if (property !== keys[0] && property !== keys[1]) {
      properties[property] = source[property];
    }
  }
  return properties;
}
