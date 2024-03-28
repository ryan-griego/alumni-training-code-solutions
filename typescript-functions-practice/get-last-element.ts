/* exported getLastElement */

function getLastElement<T>(array: Array<T>): T | null {
  return array[array.length - 1];
}
