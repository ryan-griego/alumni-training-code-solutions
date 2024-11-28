"use strict";
/* exported defaults */
function defaults(target, source) {
    for (const property in source) {
        if (!(property in target)) {
            target[property] = source[property];
        }
    }
    return target;
}
