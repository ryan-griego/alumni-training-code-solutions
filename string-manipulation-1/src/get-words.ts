/* exported getWords */
function getWords(string: string): Array<string> {
  const splitted = string.split(' ');
  if (string === '') {
    return [];
  }
  return splitted;
}
