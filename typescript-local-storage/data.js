"use strict";
let todos = [];
const previouseTodosJSON = localStorage.getItem('javascript-local-storage');
if (previouseTodosJSON !== null) {
    todos = JSON.parse(previouseTodosJSON);
}
window.addEventListener('beforeunload', function () {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('javascript-local-storage', todosJSON);
});
