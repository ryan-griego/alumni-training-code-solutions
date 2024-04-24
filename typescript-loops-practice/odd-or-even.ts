/* exported oddOrEven */
function oddOrEven(numbers: Array<T>): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
