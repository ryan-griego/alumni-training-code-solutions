/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const answer: boolean = true;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }

  return answer;
}
