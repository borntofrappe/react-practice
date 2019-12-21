import React from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import {data} from './data.js';

const Viz = styled.div`
  margin: 0 auto;
  max-width: 800px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  background: hsl(0, 0%, 100%);
  color: hsl(220, 90%, 5%);
  align-self: flex-end;
  margin-top: 1rem;
  @media screen and (max-width: 600px) {
    align-self: center;
  }
`

const SVG = styled.svg`
  margin-top: auto;
  width: 100%;
  max-width: 600px;
  height: auto;
  display: block;
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
        <h1>Surf World League</h1>
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
