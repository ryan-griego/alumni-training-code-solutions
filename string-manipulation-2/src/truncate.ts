/* exported truncate */
function truncate(length: number, string: string): string {
  const newString: string = string.slice(0, length) + '...';
  return newString;
}
