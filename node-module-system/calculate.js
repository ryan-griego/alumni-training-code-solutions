'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var add_js_1 = require('./add.js');
var subtract_js_1 = require('./subtract.js');
var multiply_js_1 = require('./multiply.js');
var divide_js_1 = require('./divide.js');
var operations = {
  plus: add_js_1.default,
  minus: subtract_js_1.default,
  over: divide_js_1.default,
  times: multiply_js_1.default,
};
var validOperation = false;
process.argv.forEach(function (val, index) {
  if (operations[val]) {
    var num1 = Number(process.argv[index - 1]);
    var num2 = Number(process.argv[index + 1]);
    var result = operations[val](num1, num2);
    console.log('Result:', result);
    validOperation = true;
  }
});
if (!validOperation) console.log('invalid operation');
