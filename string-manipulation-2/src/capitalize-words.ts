/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  const newString: string = words.join(' ');

  return newString;
}
