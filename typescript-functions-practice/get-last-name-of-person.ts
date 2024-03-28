/* exported getLastNameOfPerson */
type Person = {
  name: string;
  firstName: string;
  lastName: string;
  birthPlace: string;
  occupation: string;
};

function getLastNameOfPerson(person: Person): string {
  return person.lastName;
}
