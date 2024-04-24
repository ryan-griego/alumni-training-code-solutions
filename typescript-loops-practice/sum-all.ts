/* exported sumAll */
function sumAll(numbers: Array<T>): number {
  let total: number = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    total += numbers[i];
  }
  return total;
}
