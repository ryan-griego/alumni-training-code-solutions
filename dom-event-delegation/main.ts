const taskList = document.querySelector('.task-list') as HTMLElement;

if (taskList === null) {
  throw new Error('Query failed');
}

function handleClick(event: Event): void {
  const eventTarget: HTMLElement = event.target;
  // let eventTarget = event.target as HTMLElement | null;
  const tagName = eventTarget.tagName;
  // if(!event.target)
  if (tagName === 'BUTTON') {
    const ancestor = eventTarget.closest('.task-list-item');
    ancestor.remove();
  }
}

taskList.addEventListener('click', handleClick);
