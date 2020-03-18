import React from 'react';
import { scaleLinear, scaleTime, extent, max, line } from 'd3';

function LineChart({data}) {
  const margin = 25;
  const width = 400;
  const height = 400;


  const yScale = scaleLinear()
    .domain([0, max(data, d => d.cases)])
    .range([height, 0]);

  const xScale = scaleTime()
    .domain(extent(data, d => new Date(d.date)))
    .range([0, width]);

  const lineFunction = line()
    .x(d => xScale(new Date(d.date)))
    .y(d => yScale(d.cases));

  return (
    <svg viewBox={`0 0 ${width + margin * 2} ${height + margin * 2}`} width={width} height={height}>
      <g transform={`translate(${margin} ${margin})`}>
        <text>{data.reduce((acc, curr) => acc + curr.cases, 0)} Cases</text>
        <g fill="none" stroke="currentColor" strokeWidth="5">
          <path d={lineFunction(data)} />
        </g>
      </g>
    </svg>
  )
}

export default LineChart;