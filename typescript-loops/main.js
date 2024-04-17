'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  let numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
function getEvenNumbersToTwenty() {
  let evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    if (currentNumber % 2 === 0) {
      evenNumbers.push(currentNumber);
      currentNumber += 2;
    }
  }
  return evenNumbers;
}
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    //  repeated.concat(word);
    repeated += word;
    count++;
  }
  return repeated;
}
function logEachCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    console.log('log the str', str[i]);
  }
}
function doubleAll(numbers) {
  let doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    let result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}
function getKeys(obj) {
  let keys = [];
  for (let prop in obj) {
    keys.push(prop);
  }
  return keys;
}
function getValues(obj) {
  let values = [];
  for (let prop in obj) {
    values.push(obj[prop]);
  }
  return values;
}
