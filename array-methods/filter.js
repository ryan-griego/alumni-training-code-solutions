'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log('log evenNumbers', evenNumbers);
const noDs = names.filter((name) => !name.includes('d') && !name.includes('D'));
console.log('log noDs', noDs);
