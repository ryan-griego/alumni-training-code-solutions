/* exported pick */
function pick(source: object, keys: Array<string, unknown>): object {
  const properties: object = {};

  for (const property in source) {
    if (property === keys[0]) {
      properties[keys[0]] = source[keys[0]];
    }
    if (property === keys[1]) {
      properties[keys[1]] = source[keys[1]];
    }
  }

  return properties;
}
