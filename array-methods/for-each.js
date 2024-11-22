'use strict';
const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
// In order
values.forEach((value, index, arr) => {
  console.log('log the arr[index]', arr[index]);
});
// Reverse order
values.forEach((value, index, arr) => {
  console.log(
    'log the arr[arr.length - (index + 1)]',
    arr[arr.length - (index + 1)]
  );
});
