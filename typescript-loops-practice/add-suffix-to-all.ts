/* exported addSuffixToAll */
function addSuffixToAll(words: Array<T>, suffix: string): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= words.length - 1; i++) {
    newArray.push(words[i] + suffix);
  }
  return newArray;
}
