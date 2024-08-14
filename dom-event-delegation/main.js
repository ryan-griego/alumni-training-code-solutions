'use strict';
const taskList = document.querySelector('.task-list');
if (taskList === null) {
  throw new Error('Query failed');
}
function handleClick(event) {
  let eventTarget = event.target;
  // let eventTarget = event.target as HTMLElement | null;
  let tagName = eventTarget.tagName;
  // if(!event.target)
  if (tagName === 'BUTTON') {
    let ancestor = eventTarget.closest('.task-list-item');
    ancestor.remove();
  }
}
taskList.addEventListener('click', handleClick);
