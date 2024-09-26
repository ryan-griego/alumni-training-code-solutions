const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

const america: string =
  'America is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];
console.log(america);

colors[2] = 'green';
const mexico: string =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ' and ' + colors[2];
console.log(mexico);

console.log('log the value of colors', colors);
console.log('log the type of colors', typeof colors);

const students: string[] = ['Quinn', 'Alex', 'Grant'];

const numberOfStudents: number = students.length;
const studentNumbers: string =
  'There are ' + numberOfStudents + ' students in the class.';
console.log(studentNumbers);

let lastIndex: any = numberOfStudents - 1;

lastIndex = students[lastIndex];
const lastStudent: string = 'The last student in the group is ' + lastIndex;
console.log(lastStudent);

console.log('Value of the students array', students);
console.log('Type of the students array', typeof students);
