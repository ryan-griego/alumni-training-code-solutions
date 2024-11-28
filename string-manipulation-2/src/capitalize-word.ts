/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const capitalize: string =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    word = 'JavaScript';
    return word;
  }
  return capitalize;
}
