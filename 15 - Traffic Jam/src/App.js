import React, {useRef, useState} from 'react'
import { data } from './data.js'
import * as d3 from 'd3'
import styled from 'styled-components'

const Tooltip = styled.div`
  position: absolute;
  left: ${({left}) => `${left}px`};
  top: ${({top}) => `${top}px`};
  background: hsl(0, 0%, 100%);
  padding: 0.5rem 0.8rem;
  line-height: 2;
  filter: drop-shadow(-5px 0 10px hsla(0, 0%, 0%, 0.1));
  border-radius: 5px;
  transform: translate(0%, -50%);

  &:after {
    padding: 0;
    margin: 0;
    position: absolute;
    content: '';
    background: inherit;
    width: 10px;
    height: 10px;
    clip-path: polygon(100% 0%, 100% 100%, 0% 50%);
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
  }

  h1 {
    font-size: 0.9rem;
  }
  p {
    font-size: 0.8rem;
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
    font-weight: bold;
  }
`

function App() {
  const [selection, setSelection] = useState()

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

  const groupBars = useRef()
  function highlightSelection(date, value, average) {
    const bars = groupBars.current.querySelectorAll('rect.bar')
    const selection = [...bars].find(bar => bar.getAttribute('id') === `bar-${date}`)

    bars.forEach(bar => {bar.style.opacity = 0.7})
    selection.style.opacity = 1

    const { x, y, width: w, height: h } = selection.getBoundingClientRect()
    setSelection({
      x: x + w,
      y: y + h / 2,
      date,
      value,
      average
    })
  }

  return (
    <Visualization>
      {selection &&
        <Tooltip left={selection.x} top={selection.y}>
          <h1>{formatTime(parseTime(selection.date))}</h1>
          <p>{selection.value}km of traffic</p>
          <p>This is {`${selection.value > selection.average ? '+' : ''}${Math.round((selection.value - selection.average) / selection.average * 100)}`}% in comparison to the average {formatDay(parseTime(selection.date))} ({selection.average} km)</p>
        </Tooltip>
      }

      <Message>This graph highlights the accumulation of traffic in the region of Île-de-France in 2019. The recent strike caused a considerable increase over the expected, average value.</Message>
      <Message>Hover on the rectangles for more details.</Message>

      <SVG viewBox={`0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`} width={width} height={height}>
        <defs>
          <linearGradient id="dash-gradient" gradientUnits="userSpaceOnUse" spreadMethod="repeat" x1="0" x2="5" y1="0" y2="5">
            <stop stopColor="hsl(40 , 90%, 50%)" offset="0.5"></stop>
            <stop stopColor="hsl(45, 100%, 60%)" offset="0.5"></stop>
          </linearGradient>
        </defs>
        <g ref={groupBars} transform={`translate(${margin.left} ${margin.top})`}>
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
              <rect id={`bar-${date}`} className="bar" onMouseEnter={() => highlightSelection(date, value, average)} opacity="0.7" fill={value > average ? 'hsl(40, 90%, 50%)' : 'hsl(220, 80%, 50%)'} width={xScale(value)} height={yScale.bandwidth()} />
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
