// data detailing one object for every year in the surfing competition
// source https://www.worldsurfleague.com/pages/history
const data = [
  {
    year: '2018',
    men: {
      name: 'Gabriel Medina',
      country: 'BRA',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2017',
    men: {
      name: 'John John Florence',
      country: 'HAW',
    },
    women: {
      name: 'Tyler Wright',
      country: 'AUS',
    },
  },
  {
    year: '2016',
    men: {
      name: 'John John Florence',
      country: 'HAW',
    },
    women: {
      name: 'Tyler Wright',
      country: 'AUS',
    },
  },
  {
    year: '2015',
    men: {
      name: 'Adriano de Souza',
      country: 'BRA',
    },
    women: {
      name: 'Carissa Moore',
      country: 'HAW',
    },
  },
  {
    year: '2014',
    men: {
      name: 'Gabriel Medina',
      country: 'BRA',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2013',
    men: {
      name: 'Mick Fanning',
      country: 'AUS',
    },
    women: {
      name: 'Carissa Moore',
      country: 'HAW',
    },
  },
  {
    year: '2012',
    men: {
      name: 'Joel Parkinson',
      country: 'AUS',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2011',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Carissa Moore',
      country: 'HAW',
    },
  },
  {
    year: '2010',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2009',
    men: {
      name: 'Mick Fanning',
      country: 'AUS',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2008',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2007',
    men: {
      name: 'Mick Fanning',
      country: 'AUS',
    },
    women: {
      name: 'Stephanie Gilmore',
      country: 'AUS',
    },
  },
  {
    year: '2006',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '2005',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Chelsea Georgeson',
      country: 'AUS',
    },
  },
  {
    year: '2004',
    men: {
      name: 'Andy Irons',
      country: 'HAW',
    },
    women: {
      name: 'Sofia Mulanovich',
      country: 'PER',
    },
  },
  {
    year: '2003',
    men: {
      name: 'Andy Irons',
      country: 'HAW',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '2002',
    men: {
      name: 'Andy Irons',
      country: 'HAW',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '2001',
    men: {
      name: 'C. J. Hobgood',
      country: 'USA',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '2000',
    men: {
      name: 'Sunny Garcia',
      country: 'HAW',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '1999',
    men: {
      name: 'Mark Occhilupo',
      country: 'AUS',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '1998',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Layne Beachley',
      country: 'AUS',
    },
  },
  {
    year: '1997',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Lisa Andersen',
      country: 'USA',
    },
  },
  {
    year: '1996',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Lisa Andersen',
      country: 'USA',
    },
  },
  {
    year: '1995',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Lisa Andersen',
      country: 'USA',
    },
  },
  {
    year: '1994',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Lisa Andersen',
      country: 'USA',
    },
  },
  {
    year: '1993',
    men: {
      name: 'Derek Ho',
      country: 'HAW',
    },
    women: {
      name: 'Pauline Menczer',
      country: 'AUS',
    },
  },
  {
    year: '1992',
    men: {
      name: 'Kelly Slater',
      country: 'USA',
    },
    women: {
      name: 'Wendy Botha',
      country: 'AUS',
    },
  },
  {
    year: '1991',
    men: {
      name: 'Damien Hardman',
      country: 'AUS',
    },
    women: {
      name: 'Wendy Botha',
      country: 'AUS',
    },
  },
  {
    year: '1990',
    men: {
      name: 'Tom Curren',
      country: 'USA',
    },
    women: {
      name: 'Pam Burridge',
      country: 'AUS',
    },
  },
  {
    year: '1989',
    men: {
      name: 'Martin Potte',
      country: 'UK',
    },
    women: {
      name: 'Wendy Botha',
      country: 'AUS',
    },
  },
  {
    year: '1988',
    men: {
      name: 'Barton Lynch',
      country: 'AUS',
    },
    women: {
      name: 'Freida Zamba',
      country: 'USA',
    },
  },
  {
    year: '1987',
    men: {
      name: 'Damien Hardman',
      country: 'AUS',
    },
    women: {
      name: 'Wendy Botha',
      country: 'RSA',
    },
  },
  {
    year: '1986',
    men: {
      name: 'Tom Curren',
      country: 'USA',
    },
    women: {
      name: 'Freida Zamba',
      country: 'USA',
    },
  },
  {
    year: '1985',
    men: {
      name: 'Tom Curren',
      country: 'USA',
    },
    women: {
      name: 'Freida Zamba',
      country: 'USA',
    },
  },
  {
    year: '1984',
    men: {
      name: 'Tom Carroll',
      country: 'AUS',
    },
    women: {
      name: 'Freida Zamba',
      country: 'USA',
    },
  },
  {
    year: '1983',
    men: {
      name: 'Tom Carroll',
      country: 'AUS',
    },
    women: {
      name: 'Kim Mearig',
      country: 'USA',
    },
  },
  {
    year: '1982',
    men: {
      name: 'Mark Richards',
      country: 'AUS',
    },
    women: {
      name: 'Debbie Beacham',
      country: 'USA',
    },
  },
  {
    year: '1981',
    men: {
      name: 'Mark Richards',
      country: 'AUS',
    },
    women: {
      name: 'Margo Oberg',
      country: 'HAW',
    },
  },
  {
    year: '1980',
    men: {
      name: 'Mark Richards',
      country: 'AUS',
    },
    women: {
      name: 'Margo Oberg',
      country: 'HAW',
    },
  },
  {
    year: '1979',
    men: {
      name: 'Mark Richards',
      country: 'AUS',
    },
    women: {
      name: 'Lynn Boyer',
      country: 'HAW',
    },
  },
  {
    year: '1978',
    men: {
      name: 'Wayne Bartholomew',
      country: 'AUS',
    },
    women: {
      name: 'Lynn Boyer',
      country: 'HAW',
    },
  },
  {
    year: '1977',
    men: {
      name: 'Shaun Tomson',
      country: 'RSA',
    },
    women: {
      name: 'Margo Oberg',
      country: 'HAW',
    },
  },
  {
    year: '1976',
    men: {
      name: 'Peter Townend',
      country: 'AUS',
    },
    women: {
      name: '',
      country: '',
    },
  },
  {
    year: '1975',
    men: {
      name: 'Mark Richards',
      country: 'AUS',
    },
    women: {
      name: '',
      country: '',
    },
  },
  {
    year: '1974',
    men: {
      name: 'Reno Abellira',
      country: 'USA',
    },
    women: {
      name: '',
      country: '',
    },
  },
  {
    year: '1973',
    men: {
      name: 'Ian Cairns',
      country: 'AUS',
    },
    women: {
      name: '',
      country: '',
    },
  },
  {
    year: '1972',
    men: {
      name: 'James Blears',
      country: 'USA',
    },
    women: {
      name: 'Sharon Webber',
      country: 'USA',
    },
  },
  {
    year: '1970',
    men: {
      name: 'Rolf Aurness',
      country: 'USA',
    },
    women: {
      name: 'Sharon Webber',
      country: 'USA',
    },
  },
  {
    year: '1968',
    men: {
      name: 'Fred Hemmings',
      country: 'USA',
    },
    women: {
      name: 'Margo Godfrey',
      country: 'USA',
    },
  },
  {
    year: '1966',
    men: {
      name: 'Nat Young',
      country: 'AUS',
    },
    women: {
      name: 'Joyce Hoffman',
      country: 'USA',
    },
  },
  {
    year: '1965',
    men: {
      name: 'Felipe Pomar',
      country: 'PER',
    },
    women: {
      name: 'Joyce Hoffman',
      country: 'USA',
    },
  },
  {
    year: '1964',
    men: {
      name: 'Midget Farrelly',
      country: 'AUS',
    },
    women: {
      name: "Phyllis O'Donnell",
      country: 'AUS',
    },
  },
];

// array describing the countries for each year year, considering both mens and women' competitions
const countriesArray = data
  .reduce((acc, curr) => {
    const { country: countryMen } = curr.men;
    const { country: countryWomen } = curr.women;
    return [...acc, countryMen, countryWomen];
  }, [])
  // filter out falsy values like empty strings (which happens for a few years and the women' category)
  .filter(country => country);

/*  object enumerating the countries in the array
{
  country: num,
  country: num,
  country: num,
  ...
}
*/
const dataCountries = countriesArray.reduce((acc, curr) => {
  if(acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

const dataAreaChart = Object.entries(dataCountries).sort(([, vA], [, vB]) =>
  vA > vB ? -1 : 1
);
const width = 300;
const height = 400;

const root = d3.select('#root');

const html = root.append('div');
html.append('h1').text('Surf World Championships');
html.append('p').text('This area chart describes the number of championships won by country and through various global surfing competitions.');
html.append('p').html('Source : <a href="https://www.worldsurfleague.com/pages/history">World Surf League</a>');

const svg = root.append('svg').attr('viewBox', `0 0 ${width * 1.2} ${height}`);

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataAreaChart, ([, value]) => value)])
  .range([0, width]);

const yScale = d3
  .scalePoint()
  .domain(dataAreaChart.map(([country]) => country))
  .range([0, height]);

const line = d3
  .line()
  .x(([, value]) => xScale(value))
  .y(([country]) => yScale(country))
  .curve(d3.curveCatmullRom);

const area = d3
  .area()
  .x0(() => xScale(0))
  .x1(([, value]) => xScale(value))
  .y(([country]) => yScale(country))
  .curve(d3.curveCatmullRom);

svg
  .append('path')
  .attr('d', line(dataAreaChart))
  .attr('fill', 'none')
  .attr('stroke', 'hsl(220, 70%, 50%)')
  .attr('stroke-width', '5');

svg
  .append('path')
  .attr('d', area(dataAreaChart))
  .attr('fill', 'hsl(220, 60%, 80%)')
  .attr('stroke', 'none');

const countries = svg
  .selectAll('g.country')
  .data(dataAreaChart)
  .enter()
  .append('g')
  .attr('class', 'country')
  .attr(
    'transform',
    ([country, value]) => `translate(${xScale(value)} ${yScale(country)})`
  );

countries
  .append('text')
  .attr('text-anchor', 'start')
  .attr('x', '5')
  .attr('y', (d, i, { length }) => (i === length - 1 ? 0 : 10))
  .attr('font-size', '10')
  .attr('font-weight', '500')
  .text(([country]) => country);
