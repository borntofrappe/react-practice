import React from 'react';
import styled from 'styled-components';
import {data} from './data.js'
import * as d3 from 'd3';
import Flag from './Flag';

/* center the visualization horizontally */
const Viz = styled.div`
  max-width: 600px;
  width: 90vw;
  margin: 1rem auto;
  background: hsl(35, 85%, 85%);
  box-shadow: 0 0 5px -4px hsl(35, 85%, 20%);
  border-radius: 20px;
`;

const SVG = styled.svg`
  border-radius: inherit;
  display: block;
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
  }, {});

  const dataAreaChart = Object.entries(dataCountries).sort(([, vA], [, vB]) =>
    vA > vB ? -1 : 1
  );


  const width = 300;
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
    <Viz>
      <SVG viewBox={`0 0 ${width * 1.1} ${height}`}>
        <path d={line(dataAreaChart)} fill="none" stroke="hsl(220, 70%, 50%)" stroke-width="5" />
        <path d={area(dataAreaChart)} fill="hsl(220, 60%, 80%)" stroke="none" />
        {dataAreaChart.map(([country, value], index, {length}) => <g key={country} transform={`translate(${xScale(value)} ${yScale(country)})`}>
          <g transform="scale(0.3) translate(-30 0)">
            <g transform={`translate(0 ${index === (length - 1) ? -60 : 0})`}>
             <Flag country={country} />
            </g>
          </g>
        </g>)}
      </SVG>
    </Viz>
  );
}

export default App;
