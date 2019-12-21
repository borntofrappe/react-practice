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
  max-width: 800px;
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

  const dataAreaChart = Object.entries(dataCountries).sort(([, vA], [, vB]) =>
    vA > vB ? -1 : 1
  );

  const width = 200;
  const height = 200;
  // horizontally consider a linear scale for the number of championships
  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(dataAreaChart, ([, value]) => value)])
    .range([0, width]);

  // vertically consider one point for each country
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

  return (
    <Visualization>
      <SVG viewBox={`-10 ${-height} ${width} ${height}`}>
          <path transform="scale(3)" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 42" fill="hsl(220, 80%, 50%)" stroke="hsl(220, 80%, 50%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path transform="scale(2)" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 42" fill="hsl(210, 80%, 55%)" stroke="hsl(210, 80%, 55%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path transform="scale(1)" d="M 0 0 a 45 45 0 0 1 60 -40 a 20 20 0 0 0 0 42" fill="hsl(200, 80%, 60%)" stroke="hsl(200, 80%, 60%)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </SVG>
    </Visualization>
  );
}

export default App;
