'use strict';
/* exported pick */
function pick(source, keys) {
  const properties = {};
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
