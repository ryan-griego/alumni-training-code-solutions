function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('log 5 minutes to seconds', convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}

console.log('Greet ->', greet('Alfred'));

const getFirstName = (person: object): string => `${person.firstName}`;

console.log(
  'getfirstname ->',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

const getLastElement = (element: Array): string => element[element.length - 1];

console.log(
  'getLastElement ->',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);

function callOtherFunction(otherFunction: Function, params: unknown): unknown {
  return otherFunction(params);
}

console.log('last test', callOtherFunction(convertMinutesToSeconds, 10));
