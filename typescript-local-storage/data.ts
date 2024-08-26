/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];
const previouseTodosJSON = localStorage.getItem('javascript-local-storage');

if (previouseTodosJSON !== null) {
  todos = JSON.parse(previouseTodosJSON);
}
window.addEventListener('beforeunload', function () {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
