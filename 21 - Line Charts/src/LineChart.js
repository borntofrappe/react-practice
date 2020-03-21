import React from 'react';
import { scaleLinear, scaleTime, max, min, line, format, timeFormat, ticks } from 'd3';
import styled from 'styled-components';

const Main = styled.main`
  color: hsl(207, 26%, 16%);
  background: hsl(0, 0%, 100%);
  box-shadow: 0 2px 10px -7px hsla(0, 0%, 0%, 0.8);
  padding: 20px 28px;
  line-height: 1.25;
`;

const H1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: initial;
`;

const H2 = styled.h2`
  font-size: 3.25rem;
  font-weight: bold;
  span {
    margin-left: -5px0;
    font-size: 1rem;
    font-weight: initial;
  }
`;

const SVG = styled.svg`
  display: block;
  width: 90vw;
  max-width: 400px;
  height: auto;

  text {
    text-transform: capitalize;
  }
`;

function LineChart({ country, status, data }) {
  const margin = 30;
  const width = 600;
  const height = 400;

  const total = data[data.length - 1].cases;
  const formatNumber = format(",");
  const formatDay = timeFormat("%d/%m");

  const maxCases = max(data, d => d.cases);
  const yScale = scaleLinear()
    .domain([0, maxCases])
    .range([height, 0]);

  const dayOne = min(data, d => new Date(d.date));
  const dayLast = max(data, d => new Date(d.date));
  const xScale = scaleTime()
    .domain([dayOne, dayLast])
    .range([0, width]);

  const lineFunction = line()
    .x(d => xScale(new Date(d.date)))
    .y(d => yScale(d.cases));

  const ticksY = ticks(0, maxCases, 4);
  const ticksX = data.filter((d, i) => i % 5 === 0).map(({ date }) => date);

  return (
    <Main>
      <H1>{country}</H1>
      <H2>
        {formatNumber(total)} <span>{status}</span>
      </H2>
      <SVG
        viewBox={`0 0 ${width + margin * 2} ${height + margin * 2}`}
        width={width}
        height={height}
      >
        <g transform={`translate(${margin} ${margin})`}>
          <g>
            {ticksY.map(tick => (
              <g key={`y-${tick}`}>
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="2 3"
                  opacity="0.3"
                  d={`M 0 ${yScale(tick)} h ${width}`}
                />
                <text fontSize="25" y={yScale(tick) - 5}>
                  {formatNumber(tick)}
                </text>
              </g>
            ))}
            {ticksX.map(tick => (
              <g
                key={`x-${tick}`}
                transform={`translate(${xScale(new Date(tick))} ${height})`}
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  opacity="0.3"
                  d={`M 0 0 v 5`}
                />
                <text fontSize="25" y="25">
                  {formatDay(new Date(tick))}
                </text>
              </g>
            ))}
          </g>
          <g fill="none" stroke="currentColor" strokeWidth="5">
            <path d={lineFunction(data)} />
          </g>
        </g>
      </SVG>
    </Main>
  );
}

export default LineChart;