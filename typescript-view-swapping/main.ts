const tabContainer = document.querySelector('.tab-container');
const tabs = document.querySelectorAll('.tab');
const views = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event: MouseEvent) {
  const $eventTarget = event.target as HTMLDivElement;
  if ($eventTarget.matches('.tab')) {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].dataset.view === $eventTarget.dataset.view) {
        tabs[i].classList.add('active');
      } else {
        tabs[i].classList.remove('active');
      }
    }
    for (let i = 0; i < views.length; i++) {
      if (views[i].dataset.view !== $eventTarget.dataset.view) {
        views[i].classList.add('hidden');
      } else {
        views[i].classList.remove('hidden');
      }
    }
  }
});
