/* exported firstChars */
function firstChars(length: number, string: string): string {
  let newString: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i < length) {
      newString += string[i];
    }
  }
  return newString;
}
