'use strict';
const circle = document.querySelector('.dark-circle');
const body = document.querySelector('body');
circle.addEventListener('click', () => {
  circle.classList.toggle('on');
  body.classList.toggle('on');
});
