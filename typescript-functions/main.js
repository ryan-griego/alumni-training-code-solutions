'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('log 5 minutes to seconds', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey ' + name + '!';
}
console.log('Greet ->', greet('Alfred'));
const getFirstName = (person) => `${person.firstName}`;
console.log(
  'getfirstname ->',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
const getLastElement = (element) => element[element.length - 1];
console.log(
  'getLastElement ->',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log('last test', callOtherFunction(convertMinutesToSeconds, 10));
