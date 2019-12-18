import React, {useRef} from 'react'
import { data } from './data.js'
import * as d3 from 'd3'
import styled from 'styled-components'

const Visualization = styled.div`
  max-width: 500px;
  width: 90vw;
  margin: 1rem auto;

  & * + * {
    margin-top: 0.5rem;
  }
`

const Message = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
`

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  display: block;

  text {
    font-weight: bold;
  }
`

function App() {

  const width = 500
  const height = 500
  const margin = {
    top: 20,
    right: 25,
    bottom: 20,
    left: 90,
  }

  // horizontally consider the values from the dataset
  const maxValue = d3.max(data, d => d.value)
  const xTicks = d3.ticks(100, maxValue, 5)
  console.log(xTicks)
  const xScale = d3
    .scaleLinear()
    .domain([0, maxValue])
    .range([0, width])
    .nice()

  // vertically set up an band scale
  const dates = data.map(({date}) => date)
  const yScale = d3
    .scaleBand()
    .domain(dates)
    .range([0, height])
    .padding(0.2)

  const parseTime = d3.timeParse('%e-%m-%Y')
  const formatTime = d3.timeFormat('%a %e %b')



  return (
    <Visualization>
      <Message>This graph highlights the accumulation of traffic in the region of Île-de-France in 2019. The recent strike caused a considerable increase over the expected, average value.</Message>

      <SVG viewBox={`0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`} width={width} height={height}>
        <defs>
          <linearGradient id="dash-gradient" gradientUnits="userSpaceOnUse" spreadMethod="repeat" x1="0" x2="5" y1="0" y2="5">
            <stop stopColor="hsl(40 , 90%, 50%)" offset="0.5"></stop>
            <stop stopColor="hsl(45, 100%, 60%)" offset="0.5"></stop>
          </linearGradient>
        </defs>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {/* include one group for each data point, translating the shapes vertically and according to the y scale */}
          {
          data.map(({date, value, average}) => <g key={date}>
            <g transform={`translate(0 ${yScale(date)})`}>
              {/* rectangles describing the value */}
              {
              value > average
              &&
              <rect fill="url(#dash-gradient)" width={xScale(average)} height={yScale.bandwidth()} />
              }
              <rect opacity="0.7" fill={value > average ? 'hsl(40, 90%, 50%)' : 'hsl(220, 80%, 50%)'} width={xScale(value)} height={yScale.bandwidth()} />
              {/* text describing the increase */}
              <g transform={`translate(${xScale(value) + 5} ${yScale.bandwidth() / 2})`}>
                <text textAnchor="start" dominantBaseline="middle">
                  {`${value > average ? '+' : ''}${Math.round((value - average) / average * 100)}`}%
                </text>
              </g>
            </g>
          </g>)
          }

          {/* makeshift axes
          - dates for the y axis */}
          {dates.map(date => <g key={date}>
              <g transform={`translate(0 ${yScale(date) + yScale.bandwidth() / 2})`}>
                <text dominantBaseline="middle" x="-5" textAnchor="end">{formatTime(parseTime(date))}</text>
              </g>
          </g>)
          }
          {/*
          - an arbitrary number of values for the x axis */}
          {xTicks.map(tick => <g key={tick}>
              <g transform={`translate(${xScale(tick)} 0)`}>
                <text y="-5" textAnchor="middle">{tick}km</text>
                <path d={`M 0 10 V ${height}`} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5" opacity="0.25" />
              </g>
          </g>)
          }
        </g>
      </SVG>
    </Visualization>
  );
}

export default App;
