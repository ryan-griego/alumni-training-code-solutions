const heroes: Array<string> = [
  'Superman',
  'Spiderman',
  'Captain America',
  'Aquaman',
];

let randomNumber: number = Math.random();

randomNumber = randomNumber * heroes.length;

console.log('randomNumber', randomNumber);

const randomIndex: number = Math.floor(randomNumber);

console.log('randomIndex', randomIndex);

const randomHero: string = heroes[randomIndex];

console.log('randomHero', randomHero);

type Book = {
  title: string;
  author: string;
};

const library: Array<Book> = [
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

const lastBook: Book | undefined = library.pop();
console.log('lastbook', lastBook);

const firstBook: Book | undefined = library.shift();
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

const fullName: string = 'Ryan Griego';

const firstAndLastName: string[] = fullName.split(' ');

const firstName: string = firstAndLastName[0];

const sayMyName: string = firstName.toUpperCase();

console.log('log the value of sayMyName', sayMyName);

type Employee = {
  name: string;
  age: number;
  position: string;
};

const employee: Array<Employee> = [
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

const employeeKeys: object = Object.keys(employee);

console.log('log employeeKeys', employeeKeys);

const employeeValues: object = Object.values(employee);

console.log('log employeeValues', employeeValues);

const employeePairs: object = Object.entries(employee);

console.log('log employeePairs', employeePairs);
