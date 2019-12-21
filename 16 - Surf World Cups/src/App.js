import React from 'react';
import {data} from './data.js';
import * as d3 from 'd3';
import styled from 'styled-components';

const Visualization = styled.div`
display: flex;
min-height: 100vh;
`;

const SVG = styled.svg`
  margin-top: auto;
  max-width: 700px;
  height: auto;
  width: 100vh;
`;

function App() {
  /* data massaging
  from the input data create an object describing the countries and number of championships won
  */
  const dataCountries = data.reduce((acc, curr) => {
    // identify the country for the men/women tournament
    // ! it might be an empty string
    const { country: cMen } = curr.men;
    const { country: cWomen } = curr.women;

    // if the country is already represented increase its counter
    // else add an object
    if (cMen) {
      if (acc[cMen]) {
        acc[cMen] += 1;
        return acc;
      }
      return {
        ...acc,
        [cMen]: 1,
      };
    }
    if (cWomen) {
      if (acc[cWomen]) {
        acc[cWomen] += 1;
        return acc;
      }
      return {
        ...acc,
        [cWomen]: 1,
      };
    }
    return acc;
  }, {});

  const dataAreaChart = Object.entries(dataCountries)
    .reduce((acc, curr) => {
      const [country, value] = curr;
      const match = acc.findIndex(d => d[1] === value);
      if(match !== -1) {
        acc[match][0] += ` ${country}`;
        return acc;
      }

      return [...acc, [country, value]]

    }, [])
    .sort(([, vA], [, vB]) =>
    vA > vB ? -1 : 1
  );

  console.log(dataAreaChart);

  const width = 300;
  const height = 300;

  // create a linear scale mapping the scale of the path in the [1, 4] range
  const scale = d3
    .scaleLinear()
    .domain(d3.extent(dataAreaChart, ([, value]) => value))
    .range([1, 4]);
  // create a color scale mapping the values to an arbitrary range from aquamarine to full blue
  const colorScale = d3
    .scaleLinear()
    .domain(d3.extent(dataAreaChart, ([, value]) => value))
    .range(['hsl(180, 80%, 95%)', 'hsl(220, 85%, 40%)']);

    // create a color scale mapping the values to an arbitrary range from aquamarine to full blue
  const offsetScale = d3
  .scaleQuantize()
  .domain(d3.range(dataAreaChart.length))
  .range([20, 57]);

  console.log(d3.range(dataAreaChart.length))

  return (
    <Visualization>
      <SVG viewBox={`-10 ${-height} ${width} ${height}`}>
        <defs>
          <path id="wave" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 42" />
          <filter id="shadow">
            <feDropShadow dx="0.1" dy="0.1" stdDeviation="0.1"/>
          </filter>
        </defs>
          {dataAreaChart.map(([country, value], index) => <g key={country}>
            <g>
              <path style={{ filter: 'url(#shadow)'}} transform={`scale(${scale(value)})`} id={`wave-${country}`} d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 42" fill={colorScale(value)} stroke={colorScale(value)} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <text dy={-4 - scale(value)}>
                <textPath href={`#wave-${country}`} startOffset="56%" textAnchor="end" fontSize={8 + scale(value) * 2} fontWeight="700" fill="hsl(220, 90%, 5%)" stroke="none">
                  {country}
                </textPath>
              </text>
            </g>
          </g>)}
            {/* <text dy="-4">
              <textPath startOffset="55%" textAnchor="end" fontSize="7" fill="hsl(0, 0%, 100%)" fontWeight="700" href="#wave">
                Peru, South Africa and UK
              </textPath>
            </text> */}
      </SVG>
    </Visualization>
  );
}

export default App;
