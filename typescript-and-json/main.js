'use strict';
const books = [
  {
    isbn: '978-3-16-148410-0',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    isbn: '978-0-452-28423-4',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  {
    isbn: '978-0-7432-7356-5',
    title: '1984',
    author: 'George Orwell',
  },
];
console.log('Log the books', books);
console.log('Log the typeof books', typeof books);
console.log('Log the JSON.stringify(books)', JSON.stringify(books));
console.log(
  'Log the typeof JSON.stringify(books)',
  typeof JSON.stringify(books)
);
const student = '{"id": 637364, "name": "Al Smith"}';
console.log('Log the student', student);
console.log('Log the typeof student', typeof student);
console.log('Log the JSON student', JSON.parse(student));
console.log('Log the typeof JSON student', typeof JSON.parse(student));
