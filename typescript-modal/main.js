'use strict';
const dismissModal = document.querySelector('.dismiss-modal');
const openModal = document.querySelector('.open-modal');
const firstDialog = document.querySelector('dialog');
if (!dismissModal) {
  throw new Error('No element found for .dismiss-modal');
}
if (!openModal) {
  throw new Error('No element found for .open-modal');
}
if (!firstDialog) {
  throw new Error('No element found for dialog');
}
openModal.addEventListener('click', function () {
  firstDialog.showModal();
});
dismissModal.addEventListener('click', function () {
  firstDialog.close();
});
