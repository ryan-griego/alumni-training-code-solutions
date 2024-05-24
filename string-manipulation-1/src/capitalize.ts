/* exported capitalize */
function capitalize(word: string): string {
  const capital: string =
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capital;
}
