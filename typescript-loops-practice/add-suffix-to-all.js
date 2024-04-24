"use strict";
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
    const newArray = [];
    for (let i = 0; i <= words.length - 1; i++) {
        newArray.push(words[i] + suffix);
    }
    return newArray;
}
