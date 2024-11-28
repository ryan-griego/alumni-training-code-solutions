/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels: Array<string> = ['a', 'e', 'i', 'o', 'u', 'y', 'w'];

  for (let i = 0; i <= vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
