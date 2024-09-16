/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen(): numbers[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): evenNumbers[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    if (currentNumber % 2 === 0) {
      evenNumbers.push(currentNumber);
      currentNumber += 2;
    }
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count: number = 1;
  let repeated: string = '';

  while (count <= times) {
    //  repeated.concat(word);
    repeated += word;
    count++;
  }
  return repeated;
}

function logEachCharacter(str: string): void {
  for (let i = 0; i < str.length; i++) {
    console.log('log the str', str[i]);
  }
}

function doubleAll(numbers: Array<T>): doubled[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

function getKeys(obj: Record<string, unknown>): keys[] {
  const keys = [];
  for (const prop in obj) {
    keys.push(prop);
  }

  return keys;
}

function getValues(obj: Record<string, unknown>): values[] {
  const values = [];
  for (const prop in obj) {
    values.push(obj[prop]);
  }
  return values;
}
