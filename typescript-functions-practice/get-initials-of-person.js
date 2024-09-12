'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  console.log('log the person', person);
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}
