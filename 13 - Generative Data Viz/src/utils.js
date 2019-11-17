export const links = {
  stream: 'https://www.learnwithjason.dev/generative-data-visualization-design-and-planning',
  twitter: {
    jason: 'https://twitter.com/jlengstorf',
    shirley: 'https://twitter.com/sxywu',
  }
};

// setting up a random dataset
const adjective = [
  'insightful',
  'inspiring',
  'motivational',
  'encouraging',
  'teaching',
  'whimsical',
  'practical',
  'uplifting',
  'cheerful',
  'playful',
  'charismatic',
  ];

const noun = [
  'story',
  'novel',
  'series',
  'book',
  'tale',
  'history',
  'journey',
  'discovery'
];

const color = [
  'crimson',
  'coral',
  'moccasin',
  'chartreuse',
  'turquoise',
  'navy',
  'lavender',
  'pink',
  'ivory',
  'silver',
  'chocolate',
];

const animal = [
  'chicken',
  'lamb',
  'turtle',
  'hummingbird',
  'narwhal',
  'albatross',
  'kangaroo',
  'hamster',
  'porcupine',
  'moose',
  'panther',
];

// array describing the categories modifying the color used in the bucket
const topics = [
    'romance',
    'comedy',
    'tragedy',
    'mystery',
    'fantasy',
    'biography',
];

// utility function returning an integer up to an optional maximum
const randomInteger = (max = 1) => Math.floor(Math.random() * max);
// utility function returning a random item from an array
const randomItem = arr => arr[randomInteger(arr.length)];

// function generating the title for each data point, from the hard coded arrays
const randomTitle = () =>
  `The ${randomItem(adjective)} ${randomItem(noun)} of the ${randomItem(
    color
  )} ${randomItem(animal)}`;

// function returning the individual data point describing the prescribed metrics
const randomMetrics = () => ({
  title: randomTitle(),
  views: randomInteger(20000),
  shares: randomInteger(1000),
  twitter: randomInteger(5000),
  level: randomInteger(3),
  topic: randomItem(topics),
  isTeaching: Math.random() > 0.5,
});

// build the array using the utility functions
export const getData = (datapoints = 20) => Array(datapoints)
  .fill()
  .map(() => randomMetrics());