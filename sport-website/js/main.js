// grab navbar toggle button – mobile/tablet
const toggle = document.querySelector('.toggle');

// toggle navbar – mobile/tablet
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

// grab modal opener
const open = document.getElementById('open');

// eventListiner for opening the modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// grab modal close button
const close = document.getElementById('close');

// eventListiner for modal close
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// hide modal on outside click
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);