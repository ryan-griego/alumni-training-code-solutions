'use strict';
let heroes = ['Superman', 'Spiderman', 'Captain America', 'Aquaman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
console.log('randomNumber', randomNumber);
let randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
let randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);
let library = [
  {
    title: 'The Big Book',
    author: 'Jane Doe',
  },
  {
    title: 'Other Book',
    author: 'Albert Hong',
  },
  {
    title: 'Sample book',
    author: 'John Smith',
  },
];
let lastBook = library.pop();
console.log('lastbook', lastBook);
let firstBook = library.shift();
console.log('firstbook', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('log the value of library', library);
let fullName = 'Ryan Griego';
let firstAndLastName = fullName.split(' ');
let firstName = firstAndLastName[0];
let sayMyName = firstName.toUpperCase();
console.log('log the value of sayMyName', sayMyName);
let employee = [
  {
    name: 'Big Al',
    age: 7,
    position: 'Cook',
  },
  {
    name: 'Frank H.',
    age: 8,
    position: 'Dishwasher',
  },
  {
    name: 'Ben H.',
    age: 6,
    position: 'Gardener',
  },
];
let employeeKeys = Object.keys(employee);
console.log('log employeeKeys', employeeKeys);
let employeeValues = Object.values(employee);
console.log('log employeeValues', employeeValues);
let employeePairs = Object.entries(employee);
console.log('log employeePairs', employeePairs);
