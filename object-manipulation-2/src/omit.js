'use strict';
/* exported omit */
function omit(source, keys) {
  const properties = {};
  for (const property in source) {
    if (property !== keys[0] && property !== keys[1]) {
      properties[property] = source[property];
    }
  }
  return properties;
}
