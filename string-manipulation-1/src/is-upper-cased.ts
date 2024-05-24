/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const answer: boolean = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }

  return answer;
}
