/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  let newString: string = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[firstIndex]) {
      newString += string[secondIndex];
    } else if (string[i] === string[secondIndex] && i === secondIndex) {
      newString += string[firstIndex];
    } else {
      newString += string[i];
    }
  }
  return newString;
}
