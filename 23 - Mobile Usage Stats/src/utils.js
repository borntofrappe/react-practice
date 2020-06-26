export const getPercentage = (min = 0) =>
  Math.floor(Math.random() * (101 - min) + min);

export const getRandomInt = (max = 100) => Math.floor(Math.random() * max);

export const getRandomFloat = (max) =>
  parseFloat((Math.random() * max).toFixed(2));

export const zeroPad = (n) => (n >= 10 ? n.toString() : `0${n}`);
