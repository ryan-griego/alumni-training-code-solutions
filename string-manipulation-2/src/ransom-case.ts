/* exported ransomCase */
function ransomCase(string: string): string {
  let word: string = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string[i].toLowerCase();
    } else {
      word += string[i].toUpperCase();
    }
  }
  return word;
}
