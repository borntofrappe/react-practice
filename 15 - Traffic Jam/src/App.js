import React from 'react'
import { data } from './data.js'
import * as d3 from 'd3'

function App() {

  const width = 500
  const height = 500
  const margin = {
    top: 20,
    right: 50,
    bottom: 20,
    left: 150,
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
    .padding(0.1)

  return (
    <div className="App">
      <h1>Traffic Jam</h1>
      <p>This graph highlights the accumulation of traffic in the region of Île-de-France in 2019. The recent strike caused a considerable increase over the expected, average value.</p>

      <svg viewBox={`0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`} width={width} height={height}>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {/* include one group for each data point, translating the shapes vertically and according to the y scale */}
          {
          data.map(({date, value, average}, index) => <g key={date}>
            <g transform={`translate(0 ${yScale(date)})`}>
              {/* rectangle describing the value */}
              <rect width={xScale(value)} height={yScale.bandwidth()} />
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
                <text dominantBaseline="middle" x="-5" textAnchor="end">{date}</text>
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
      </svg>
    </div>
  );
}

export default App;
