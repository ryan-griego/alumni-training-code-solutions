import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const operations = {
  plus: add,
  minus: subtract,
  over: divide,
  times: multiply,
};

let validOperation = false;

process.argv.forEach((val, index) => {
  if (operations[val]) {
    const num1 = Number(process.argv[index - 1]);
    const num2 = Number(process.argv[index + 1]);
    const result = operations[val](num1, num2);
    console.log('Result:', result);
    validOperation = true;
  }
});

if (!validOperation) console.log('invalid operation');
