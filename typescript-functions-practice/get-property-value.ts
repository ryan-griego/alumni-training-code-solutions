/* exported getPropertyValue */
function getPropertyValue(Person: { [key: string]: any }, key: string): any {
  return Person[key];
}
