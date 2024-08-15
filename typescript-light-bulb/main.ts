const circle = document.querySelector<HTMLElement>('.dark-circle');
const body = document.querySelector<HTMLElement>('body');

circle.addEventListener('click', () => {
  circle.classList.toggle('on');
  body.classList.toggle('on');
});
