/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(num: number): boolean {
  if (num < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  const firstLetter = string.charAt(0);
  if (firstLetter === 'j' || firstLetter === 'J') {
    return true;
  } else {
    return false;
  }
}

interface Person {
  age: number;
  name: string;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person) {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH <= 7) {
    return 'acid';
  } else if (pH >= 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
      break;

    case 'wakko':
      return "We're the warner brothers!";
      break;
    case 'dot':
      return "I'm cute~";
      break;
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
      break;

    case 'comedy':
      return 'The Big Lebowski';
      break;
    case 'horror':
      return 'The Ring';
      break;
    case 'drama':
      return 'The Drama Magnet';
      break;
    case 'musical':
      return 'Rent';
      break;
    case 'sci-fi':
      return 'Dune';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
