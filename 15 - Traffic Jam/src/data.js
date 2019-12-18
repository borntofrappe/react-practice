const input = [
    {
      date: '16-12-2019',
      value: 628,
      average: 330,
    },
    {
      date: '15-12-2019',
      value: 223,
      average: 140,
    },
    {
      date: '14-12-2019',
      value: 207,
      average: 105,
    },
    {
      date: '13-12-2019',
      value: 487,
      average: 330,
    },
    {
      date: '12-12-2019',
      value: 570,
      average: 330,
    },
    {
      date: '11-12-2019',
      value: 475,
      average: 280,
    },
    {
      date: '10-12-2019',
      value: 415,
      average: 330,
    },
    {
      date: '9-12-2019',
      value: 629,
      average: 330,
    },
    {
      date: '8-12-2019',
      value: 241,
      average: 140,
    },
    {
      date: '7-12-2019',
      value: 245,
      average: 105,
    },
    {
      date: '6-12-2019',
      value: 590,
      average: 330,
    },
    {
      date: '5-12-2019',
      value: 180,
      average: 330,
    },
    {
      date: '4-12-2019',
      value: 557,
      average: 280,
    },
];

// prior to exporting the input data include the percentage change
export const data = input.map(({ date, value, average}) => ({
  date,
  value,
  average,
  change: `${value > average ? '+' : ''}${Math.round((value - average) / average * 100)}`,
}));