'use strict';
const Bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
const orderHistory = [
  {
    orderPlaced: '2022-01-01',
    total: '$100.00',
    shipTo: 'John Doe',
    orderNumber: 12345,
    deliveredDate: '2022-01-05',
    items: [
      { id: 1, name: 'Product 1', price: 50, returnWindow: 'August 19, 2020' },
      { id: 2, name: 'Product 2', price: 50, returnWindow: 'August 19, 2020' },
    ],
  },
  {
    orderPlaced: '2022-02-01',
    total: '$200.00',
    shipTo: 'Jane Doe',
    orderNumber: 12346,
    deliveredDate: '2022-02-05',
    items: [
      { id: 3, name: 'Product 3', price: 100, returnWindow: 'August 19, 2020' },
      { id: 4, name: 'Product 4', price: 100, returnWindow: 'August 19, 2020' },
    ],
  },
  // More orders here
];
