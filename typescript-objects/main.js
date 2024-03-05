'use strict';
const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('log the student fullName', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Web Developer';
console.log('log student.livesInIrvine', student.livesInIrvine);
console.log('log the student.previousOccupation', student.previousOccupation);
const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2001,
};
vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;
console.log('log the vehicle color', vehicle['color']);
console.log('log the vehicle isConvertible', vehicle['isConvertible']);
console.log('log the vehicle', vehicle);
console.log('log the typeof vehicle', typeof vehicle);
const pet = {
  name: 'George',
  kind: 'Dog',
};
delete pet.name;
delete pet.kind;
console.log('log the pet', pet);
console.log('log the typeof pet', typeof pet);
