"use strict";
/* exported getIndexes */
function getIndexes(array) {
    const newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        newArray.push(array.indexOf(array[i]));
    }
    return newArray;
}
