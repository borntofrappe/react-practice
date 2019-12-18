import React, {useRef, useState, useLayoutEffect} from 'react'
import { data } from './data.js'
import * as d3 from 'd3'
import styled from 'styled-components'

const Tooltip = styled.div`
  position: absolute;
  background: hsl(0, 0%, 100%);
  padding: 0.75rem 1rem;
  filter: drop-shadow(0 5px 10px hsla(0, 0%, 0%, 0.2));
  border-radius: 5px;
  transform: translate(-50%, -100%);
  transition: all 0.2s ease-in-out;

  &:after {
    padding: 0;
    margin: 0;
    position: absolute;
    content: '';
    background: inherit;
    width: 10px;
    height: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  h1 {
    font-weight: 700;
    font-size: 0.95rem;
  }
  p {
    font-size: 0.9rem;
  }
`

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
    font-weight: 700;
  }
`

function App() {
  const [selection, setSelection] = useState()

  const width = 500
  const height = 500
  const margin = {
    top: 20,
    right: 35,
    bottom: 20,
    left: 110,
  }

  // horizontally consider the values from the dataset
  const maxValue = d3.max(data, d => d.value)
  const xTicks = d3.ticks(100, maxValue, 5)
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
  const formatDay = d3.timeFormat('%A')

  const tooltip = useRef()

  useLayoutEffect(() => {
    if(selection) {
      const bar = document.querySelector(`#bar-${selection.date}`)
      const { x, y, width: w } = bar.getBoundingClientRect()

      tooltip.current.style.left = `${x + w / 2}px`
      tooltip.current.style.top = `${y}px`
    }
  }, [selection, tooltip])

  function highlightSelection({date, value, average}) {
    setSelection({
      date,
      value,
      average
    })
  }

  return (
    <Visualization onMouseLeave={() => setSelection(null)}>
      {selection &&
        <Tooltip ref={tooltip}>
          <h1>{formatTime(parseTime(selection.date))}</h1>
          <p>{selection.value}km of traffic</p>
          <p>This is <strong>{`${selection.value > selection.average ? '+' : ''}${Math.round((selection.value - selection.average) / selection.average * 100)}`}%</strong> in comparison to the average {formatDay(parseTime(selection.date))} ({selection.average} km)</p>
        </Tooltip>
      }

      <Message>This graph highlights the accumulation of traffic in the region of Île-de-France and for the month of December 2019. The strike begun on the 5th of December caused a considerable increase over the expected, average value.</Message>
      <Message>Hover on the rectangles for more details.</Message>

      <SVG viewBox={`0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`} width={width} height={height}>
        <defs>
          <linearGradient id="dash-gradient" gradientUnits="userSpaceOnUse" spreadMethod="repeat" x1="0" x2="10" y1="0" y2="10">
            <stop stopColor="hsl(40 , 90%, 50%)" offset="0.5"></stop>
            <stop stopColor="hsl(50, 100%, 85%)" offset="0.5"></stop>
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
              <rect id={`bar-${date}`} onMouseEnter={() => highlightSelection({date, value, average})} opacity={selection && selection.date === date ? 1 : 0.6} fill={value > average ? 'hsl(40, 90%, 50%)' : 'hsl(220, 80%, 50%)'} width={xScale(value)} height={yScale.bandwidth()} />
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
                <text dominantBaseline="middle" x="-10" textAnchor="end">{formatTime(parseTime(date))}</text>
              </g>
          </g>)
          }
          {/*
          - an arbitrary number of values for the x axis */}
          {xTicks.map(tick => <g key={tick}>
              <g transform={`translate(${xScale(tick)} 0)`}>
                <text y="-10" textAnchor="middle">{tick}km</text>
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
