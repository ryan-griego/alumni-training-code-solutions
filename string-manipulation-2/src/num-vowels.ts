/* exported numVowels */
function numVowels(string: string): number {
  let count: number = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i].toLowerCase()) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        count++;
        break;
      default:
        break;
    }
  }

  return count;
}
