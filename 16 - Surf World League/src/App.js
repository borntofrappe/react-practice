import React from 'react';
import styled from 'styled-components';
import { data } from './data.js';
import { scaleLinear, scaleOrdinal, extent, range, schemeBlues } from 'd3';

/* the idea is to show the text and illustration in two different layouts
- by default in a row, showing the SVG graphic first
- when the viewport is thinner than a predefined threshold, in a column, with the SVG following the text
*/
const Visualization = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  min-height: 100vh;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    max-width: 600px;
    margin: 1rem auto 0;
    width: 90vw;
    justify-content: space-between;

    & > * + * {
      margin-top: 1rem;
    }

  }
`;


const Main = styled.main`
  max-width: 400px;
  padding: 1rem;
  background: hsl(0, 0%, 100%);
  color: hsl(220, 90%, 5%);

  & > * + * {
    margin-top: 1rem;
  }
`;
const Heading = styled.h1`
  font-family: "Dosis", sans-serif;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid currentColor;
`;
const List = styled.ul`
  list-style-position: inside;
  line-height: 2;
`;
const Source = styled.p`
  font-size: 0.9rem;

  a {
    text-decoration-style: dotted;
    color: inherit;
    font-style: italic;
  }
`;


// position the SVG at the very bottom of the page
const Illustration = styled.svg`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  font-family: "Dosis", sans-serif;
  align-self: flex-end;
`;


function App() {
  /* data massaging part 1
  desired data structure: an array describing the country and championships awarded
  {
    country
    value
  }
  */

  // array describing the countries for each year year, considering both mens and women' competitions
  const countries = data
    .reduce((acc, curr) => {
      const { country: countryMen } = curr.men;
      const { country: countryWomen } = curr.women;
      return [...acc, countryMen, countryWomen];
    }, []);

  // array describing an object for each unique country
  const championships = countries
    .reduce((acc, curr) => {
      const index = acc.findIndex(({country}) => country === curr);
      if(index !== -1) {
        acc[index].value += 1;
        return acc;
      }
      return [...acc, {
        country: curr,
        value: 1,
      }];
    }, []);

  // array collapsing duplicate objects with the same value into one and sorting the objects by value
  const dataChampionships = championships
    .reduce((acc, curr) => {
      const index = acc.findIndex(({value}) => value === curr.value);
      if(index !== -1) {
        acc[index].country += ` & ${curr.country}`;
        return acc;
      }
      return [...acc, {
        country: curr.country,
        value: curr.value,
      }];
    }, [])
    // sort in descending order
    .sort(({value: vA}, {value: vB})=> vA > vB ? -1 : 1);


  /* data massaging part 2
  desired data structure: an array describing the championships awarded to individual athletes
  */
  const athletes = data
    .reduce((acc, curr) => {
      const { name: nameMen } = curr.men;
      const { name: nameWomen } = curr.women;
      return [...acc, nameMen, nameWomen];
    }, []);

  const dataAthletes = athletes
    .reduce((acc, curr) => {
      const index = acc.findIndex(({athlete}) => athlete === curr);
      if(index !== -1) {
        acc[index].value += 1;
        return acc;
      }
      return [...acc, {
        athlete: curr,
        value: 1,
      }];
    }, [])
    .sort(({value: vA}, {value: vB})=> vA > vB ? -1 : 1);


  const width = 300;
  const height = 200;

  // create a linear scale mapping the scale of the path to a [1, 4] range
  const scale = scaleLinear()
    .domain(extent(dataChampionships, ({value}) => value))
    .range([1, 4]);


  // ordinal scale describing the different shades of blue applied to the wave
  // 1. based on the index of the shape
  // 1. increasing in blue intensity
  const colorScale = scaleOrdinal()
    .domain(range(dataChampionships.length).reverse())
    .range(schemeBlues[dataChampionships.length]);

  return (
    <Visualization>
      <Main>
        <Heading>Riding the wave</Heading>
        {/* inject a few variables describing the first year and the country awarded most points */}
        <p>Surfing championships have been held since <strong>{data[data.length - 1].year}</strong>, showcasing talent at a global scale.</p>
        <p>Despite the global reach, a few countries monopolize the sport, with <strong>{dataChampionships[0].country}</strong> alone able to win <strong>{dataChampionships[0].value}</strong> times.</p>
        <p>A few athletes have also been able to win on multiple occasions:</p>
        {/* list the top three scorers */}
        <List>
          {dataAthletes.slice(0, 3).map(({athlete, value}) => <li key={athlete}>
            {athlete} ({value} times)
          </li>)}
        </List>
        <Source>Source: <a href="https://www.worldsurfleague.com/pages/history">Surf World League</a></Source>
      </Main>

      {/* modify the viewbox to draw the path elements from the bottom */}
      <Illustration viewBox={`-10 ${-height - 8} ${width} ${height}`}>
        <defs>
          {/* path used to create the wave and position the text */}
          <path id="wave" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 40" />
          {/* shadow applied to the waves */}
          <filter id="shadow">
            <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.3"/>
          </filter>
        </defs>
        {/* for each object add a group */}
          {dataChampionships.map(({country, value}, index) => <g key={country}>
            {/* scale the group according to the value */}
            <g transform={`scale(${scale(value)})`}>
              {/* wave */}
              <use
                style={{ filter: 'url(#shadow)'}}
                href="#wave"
                fill={colorScale(index)}
                stroke={colorScale(index)}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round" />
              {/* text using the path's syntax to position the country at the top of the wave */}
              <text dy='-2'>
                <textPath
                href="#wave"
                startOffset="57%"
                textAnchor="end"
                fontSize={6}
                fontWeight="700"
                fill="hsl(220, 90%, 5%)"
                stroke="none">
                  {country}
                </textPath>
              </text>
            </g>
          </g>)}
      </Illustration>
    </Visualization>
  );
}

export default App;
