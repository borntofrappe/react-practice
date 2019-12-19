import React, {useRef, useState, useLayoutEffect} from 'react'
import { data } from './data.js'
import { scaleLinear, scaleBand, max, ticks, timeParse, timeFormat } from 'd3'
import styled from 'styled-components'

/* absolute position the tooltip
include a triangle pointing downwards with a pseudo element
*/
const Tooltip = styled.div`
  position: absolute;
  background: hsl(0, 0%, 100%);
  padding: 0.75rem 1rem;
  filter: drop-shadow(0 2px 2px hsla(0, 0%, 0%, 0.4));
  transform: translate(-50%, -100%);
  transition: all 0.25s ease-in-out;

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

// cap the width of the content
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

const Link = styled.a`
  color: inherit;
  font-size: 0.9rem;
`

function App() {
  // use a variable to describe the data point currently being selected
  const [selection, setSelection] = useState()

  // dimensions setting up the visualization
  const width = 500
  const height = 500
  const margin = {
    top: 20,
    right: 35,
    bottom: 20,
    left: 110,
  }

  // xScale: consider the `value` property, describing a continuous domain
  const maxValue = max(data, d => d.value)

  const xScale = scaleLinear()
    .domain([0, maxValue])
    .range([0, width])
    .nice()

  // to fabricate the x axis, create "five" ticks up to the maximum value
  const xTicks = ticks(100, maxValue, 5)

  // yScale: consider the dates as individual bands, occupying a fraction of the vertical space
  // array used as a faux y axis as well, including one text element for each date
  const dates = data.map(({date}) => date)
  const yScale = scaleBand()
    .domain(dates)
    .range([0, height])
    .padding(0.2)

  // to describe the input date in a desired format, first parse the given syntax to a date object
  const parseTime = timeParse('%e-%m-%Y')
  // for the y axis and the heading in the tooltip show 'Tue 12 Dec'
  const formatTime = timeFormat('%a %e %b')
  // for the description of the tooltip retrieve also the long format for the day
  const formatDay = timeFormat('%A')

  // update the position of the tooltip as the selection changes
  const tooltip = useRef()
  useLayoutEffect(() => {
    if(selection) {
      // ! this seems less than optimal, but to position the tooltip retrieve the coordinates/dimensions of the selected rectangle
      const bar = document.querySelector(`#bar-${selection.date}`)
      const { x, y, width: w } = bar.getBoundingClientRect()

      tooltip.current.style.left = `${x + w / 2}px`
      tooltip.current.style.top = `${y + document.documentElement.scrollTop}px`
    }
  }, [selection, tooltip])

  function highlightSelection({date, value, average, change}) {
    setSelection({
      date,
      value,
      average,
      change,
    })
  }

  return (
    <Visualization onMouseLeave={() => setSelection(null)}>
      {/* show the tooltip if a rectangle is being hovered on */}
      {selection &&
        <Tooltip ref={tooltip}>
          <h1>{formatTime(parseTime(selection.date))}</h1>
          <p>{selection.value}km of traffic</p>
          <p>This is <strong>{selection.change}%</strong> in comparison to the average {formatDay(parseTime(selection.date))} ({selection.average} km)</p>
        </Tooltip>
      }

      <Message>This graph illustrates the accumulation of traffic in the region of <strong>Île-de-France</strong> and for the month of <strong>December 2019</strong>. The strike begun on the 5th of December caused a considerable increase over the expected, average value.</Message>
      <Message>Hover on the rectangles for more details.</Message>

      <SVG viewBox={`0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`} width={width} height={height}>
        {/* userSpaceOnUse to have a gradient independent of the size of the shape using the gradient */}
        <defs>
          <linearGradient id="dash-gradient" gradientUnits="userSpaceOnUse" spreadMethod="repeat" x1="0" x2="10" y1="0" y2="10">
            <stop stopColor="hsl(40 , 90%, 50%)" offset="0.5"></stop>
            <stop stopColor="hsl(50, 100%, 85%)" offset="0.5"></stop>
          </linearGradient>
        </defs>
        <g transform={`translate(${margin.left} ${margin.top})`}>
          {/* include one group for each data point, translating the shapes vertically and according to the y scale */}
          {
          data.map(({date, value, average, change}) => <g key={date}>
            <g transform={`translate(0 ${yScale(date)})`}>
              {/* rectangles describing the value
              the idea is to add a dashed variant for the rectangles describing an increase
              by playing with the opacity of the solid shape included afterwards, the dashes will be covered by the solid using the same color
              */}
              {
              value > average
              &&
              <rect fill="url(#dash-gradient)" width={xScale(average)} height={yScale.bandwidth()} />
              }
              <rect
                id={`bar-${date}`}
                onMouseEnter={() => highlightSelection({date, value, average, change})}
                opacity={selection && selection.date === date ? 1 : 0.6}
                fill={value > average ? 'hsl(40, 90%, 50%)' : 'hsl(220, 80%, 50%)'}
                width={xScale(value)}
                height={yScale.bandwidth()} />

              {/* text describing the change, to the right of the rectangles */}
              <g transform={`translate(${xScale(value) + 5} ${yScale.bandwidth() / 2})`}>
                <text textAnchor="start" dominantBaseline="middle">
                  {change}%
                </text>
              </g>
            </g>
          </g>)
          }

          {/* makeshift axes */}
          {/* text & grid lines for the x axis */}
          {xTicks.map(tick => <g key={tick}>
              <g transform={`translate(${xScale(tick)} 0)`}>
                <text y="-10" textAnchor="middle">{tick}km</text>
                <path d={`M 0 10 V ${height}`} fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5" opacity="0.25" />
              </g>
          </g>)
          }

          {/* text for the y axis */}
          {dates.map(date => <g key={date}>
              <g transform={`translate(0 ${yScale(date) + yScale.bandwidth() / 2})`}>
                <text dominantBaseline="middle" x="-10" textAnchor="end">{formatTime(parseTime(date))}</text>
              </g>
          </g>)
          }

        </g>
      </SVG>

      <Link href="https://www.lemonde.fr/les-decodeurs/article/2019/12/16/ile-de-france-entre-25-et-100-de-bouchons-en-plus-depuis-le-debut-de-la-greve_6023037_4355770.html">
        Article inspiring the visualization <span role="img" aria-label="French">🇫🇷</span>
      </Link>
    </Visualization>
  );
}

export default App;
