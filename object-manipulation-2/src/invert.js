"use strict";
/* exported invert */
function invert(source) {
    const properties = {};
    for (const property in source) {
        properties[source[property]] = property;
    }
    return properties;
}
