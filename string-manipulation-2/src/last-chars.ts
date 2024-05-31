/* exported lastChars */
function lastChars(length: number, string: string): string {
  let newString: string = '';
  if (length > string.length) {
    length = string.length;
  }
  for (let i = string.length - length; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
