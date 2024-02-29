const width: number = 4;
const height: number = 6;
const area: number = width * height;

console.log('area', area);
console.log('typeof area', typeof area);

const bill: number = 22;

const payment: number = 32;

const change: number = payment - bill;

console.log('change', change);
console.log('typeof change', typeof change);

const quizzes: number = 10;
const midterm: number = 2;
const final: number = 1;

const grade: number = (quizzes + midterm + final) / 3;

console.log('log the grade', grade);
console.log('log the typeof grade', typeof grade);

const firstName: string = 'Ryan';
const lastName: string = 'Griego';

const fullName: string = firstName + ' ' + lastName;

console.log('log the fullName', fullName);
console.log('log thetypeof  fullName', typeof fullName);

const pH: number = 3;

const isAcidic: boolean = pH < 7;
console.log('log the isAcidic', isAcidic);
console.log('log the typeof  isAcidic', typeof isAcidic);

const headCount: number = 4;
const isSparta: boolean = headCount === 300;

console.log('log the isSparta', isSparta);
console.log('log the typeof  isSparta', typeof isSparta);

let motto: string = fullName;

motto = fullName + ' is the GOAT';

console.log('log motto', motto);
console.log('log typeof motto', typeof motto);
