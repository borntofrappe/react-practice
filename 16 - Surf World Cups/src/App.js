import React from 'react';
import {data} from './data.js';
import * as d3 from 'd3';
import styled from 'styled-components';

const Visualization = styled.div`
  margin: 1rem auto;
  max-width: 500px;
  width: 100vw;
  background: hsl(200, 80%, 80%);
`;

const SVG = styled.svg`
  display: block;
  width: 100%;
  height: auto;
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

  const width = 400;
  const height = 400;
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
      <SVG viewBox={`0 0 ${width * 1.1} ${height}`}>
        <path d={area(dataAreaChart)} fill="hsl(200, 80%, 60%)" stroke="none" />
        <path d={line(dataAreaChart)} fill="none" stroke="hsl(220, 80%, 40%)" strokeWidth="4" />
        {dataAreaChart.map(([country, value], index) => <g key={country} transform={`translate(${xScale(value)} ${yScale(country)})`}>
          <text y={index === 0 ? "15" : "0"} fontSize="15" fill="hsl(220, 80%, 10%)" fontWeight="bold" textAnchor="start">{country}</text>
        </g>)}
      </SVG>
    </Visualization>
  );
}

export default App;
