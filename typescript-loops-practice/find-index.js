"use strict";
/* exported findIndex */
function findIndex(array, value) {
    // let newArray: array = [];
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
