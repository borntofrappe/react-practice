// target the button allowing to slide the panels
const button = document.querySelector('.panel__half.half--second button');
// integer to determine the direction of the slide for the two panels
let program = 0;

// when clicking the button retrieve the bounding box for both panels
button.addEventListener('click', () => {
  const firstPanel = document.querySelector('.panel__half.half--first');
  const secondPanel = document.querySelector('.panel__half.half--second');
  const boundingFirst = firstPanel.getBoundingClientRect();
  const boundingSecond = secondPanel.getBoundingClientRect();

  // with the default position, slide each panel where the other lies
  if (program === 0) {
    firstPanel.style.transform = `translateX(${boundingSecond.width}px)`;
    secondPanel.style.transform = `translateX(${-boundingFirst.width}px)`;
    // update also the border-radius
    firstPanel.style.borderRadius = '0 20px 20px 0';
    secondPanel.style.borderRadius = '20px 0 0 20px';
  } else {
    // from the translated position, slide the panels back to the original location
    firstPanel.style.transform = `translateX(0)`;
    secondPanel.style.transform = `translateX(0)`;
    firstPanel.style.borderRadius = '20px 0 0 20px';
    secondPanel.style.borderRadius = '0 20px 20px 0';
  }
  // toggle the program to consider the slide in the opposite direction
  program = program === 0 ? 1 : 0;
});