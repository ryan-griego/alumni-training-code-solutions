/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: Person): string {
  console.log('Log the person', person);
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
