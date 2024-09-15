/* exported getStudentNames */

// type students = {
//   name: string;
// };
function getStudentNames(students: Array<T>): Array<T> {
  const newArray: array = [];
  for (let i = 0; i <= students.length - 1; i++) {
    newArray.push(students[i].name);
  }
  return newArray;
}
