// following a click event on the window toggle a class to rotate the card
const div = document.querySelector('.card');
window.addEventListener('click', () => {
  div.classList.toggle('toggle');
})
