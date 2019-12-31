// following the mousemove event on the window update the rotation of the svg
const svg = document.querySelector('svg');
const angle = 15;

window.addEventListener('mousemove', (e) => {
  const { innerWidth: width, innerHeight: height } = window;
  const { x, y } = e;
  // [0,1] range
  const px = x / width;
  const py = y / height;
  // [-1,1] range
  const rx = px * 2 - 1;
  const ry = py * 2 - 1;
  svg.style.transform = `translateZ(-100px) rotate3d(${ry * -1}, ${rx}, 0, ${angle}deg)`;
});
