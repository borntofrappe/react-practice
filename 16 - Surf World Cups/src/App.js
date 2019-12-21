import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import {data} from './data.js';

const Viz = styled.div`
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

const SVG = styled.svg`
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
  font-family: "Dosis", sans-serif;
  align-self: flex-end;
`;

function App() {
  /* data massaging
  desired data structure: an array describing the country and championships awarded
  ! if two countries have the same number of championships, include them in the same object
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

  // array describing the countries for each year year, considering both mens and women' competitions
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

  const championshipsByAthletes = athletes
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

  // create a linear scale mapping the scale of the path in the [1, 4] range
  const scale = d3
    .scaleLinear()
    .domain(d3.extent(dataChampionships, ({value}) => value))
    .range([1, 4]);


  const colorScale = d3
    .scaleOrdinal()
    .domain(d3.range(dataChampionships.length).reverse())
    .range(d3.schemeBlues[dataChampionships.length]);

  return (
    <Viz>
      <Main>
        <Heading>Riding the wave</Heading>
        <p>Surfing championships have been held since <strong>{data[data.length - 1].year}</strong>, showcasing talent at a global scale.</p>
        <p>Despite the global reach, a few countries monopolize the sport, with <strong>{dataChampionships[0].country}</strong> alone able to win <strong>{dataChampionships[0].value}</strong> times.</p>
        <p>A few athletes have also been able to win on multiple occasions:</p>
        <List>
          {championshipsByAthletes.slice(0, 3).map(({athlete, value}) => <li key={athlete}>
            {athlete} ({value} times)
          </li>)}
        </List>
        <Source>Source: <a href="https://www.worldsurfleague.com/pages/history">Surf World League</a></Source>

      </Main>
      <SVG viewBox={`-10 ${-height - 8} ${width} ${height}`}>
        <defs>
          <path id="wave" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 40" />
          <filter id="shadow">
            <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.3"/>
          </filter>
        </defs>
          {dataChampionships.map(({country, value}, index) => <g key={country}>
            <g transform={`scale(${scale(value)})`}>
              <use
                style={{ filter: 'url(#shadow)'}}
                href="#wave"
                fill={colorScale(index)}
                stroke={colorScale(index)}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round" />

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
      </SVG>
    </Viz>
  );
}

export default App;
