'use strict';
// Select all buttons with the class 'click-button'
const $buttons = document.querySelectorAll('.click-button');
if ($buttons.length === 0)
  throw new Error('No buttons found with class .click-button');
$buttons.forEach(($button) => {
  $button.addEventListener('click', handleClick);
});
function handleClick(event) {
  console.log('button clicked');
  console.log('log the event', event);
  console.log('log the event target', event.target);
}
// Select all buttons with the class 'hover-button'
const $hoverButtons = document.querySelectorAll('.hover-button');
if ($hoverButtons.length === 0)
  throw new Error('No buttons found with class .hover-button');
$hoverButtons.forEach(($hoverButtons) => {
  $hoverButtons.addEventListener('mouseover', handleMouseover);
});
function handleMouseover(event) {
  console.log('button hovered');
  console.log('log the event', event);
  console.log('log the event target', event.target);
}
// Select all buttons with the class 'double-click-button'
const $doubleClickButtons = document.querySelectorAll('.double-click-button');
if ($doubleClickButtons.length === 0)
  throw new Error('No buttons found with class .double-click-button');
$doubleClickButtons.forEach(($doubleClickButtons) => {
  $doubleClickButtons.addEventListener('dblclick', handleDoubleClick);
});
function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log('log the event', event);
  console.log('log the event target', event.target);
}
