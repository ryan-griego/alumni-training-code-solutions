'use strict';
let clickCounter = 0;
const $buttonElement = document.querySelector('.hot-button');
const $clickCountElement = document.querySelector('.click-count');
if (!$buttonElement) throw new Error('The $buttonElement query failed');
$buttonElement.addEventListener('click', function () {
  clickCounter++;
  if ($clickCountElement !== null) {
    $clickCountElement.textContent = 'Clicks: ' + clickCounter;
  }
  if (!$buttonElement || !clickCounter) {
    throw new Error('The $buttonElement or clickCounter query failed');
  }
  if (clickCounter < 4) {
    $buttonElement.className = 'hot-button cold';
  } else if (clickCounter < 7) {
    $buttonElement.className = 'hot-button cool';
  } else if (clickCounter < 10) {
    $buttonElement.className = 'hot-button tepid';
  } else if (clickCounter < 13) {
    $buttonElement.className = 'hot-button warm';
  } else if (clickCounter < 16) {
    $buttonElement.className = 'hot-button hot';
  } else if (clickCounter > 16) {
    $buttonElement.className = 'hot-button nuclear';
  }
});
