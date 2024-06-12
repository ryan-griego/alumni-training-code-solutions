/* exported invert */
function invert(source: object): object {
  const properties: object = {};
  for (const property in source) {
    properties[source[property]] = property;
  }
  return properties;
}
