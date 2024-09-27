interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookshelf: Array<Book> = [
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

// In the bookshelf.ts file, log the name of the author of the second book to the console with a descriptive label.
console.log('log the author of the second book', bookshelf[1].author);

// In the bookshelf.ts file, log the ISBN of the first book to the console with a descriptive label.
console.log('log the ISBN of the first book', bookshelf[0].isbn);

// In the bookshelf.ts file, log the title of the third book to the console with a descriptive label.
console.log('log the title of the third book', bookshelf[2].title);
