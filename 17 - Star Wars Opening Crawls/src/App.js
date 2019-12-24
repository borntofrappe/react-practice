import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, useTrail, useTransition, animated, config } from 'react-spring';
import OpeningCrawls from './OpeningCrawls';

const Heading = styled.div`
  min-height: 100vh;
  display: flex;
`

const SVG = styled.svg`
  margin: auto;
  max-width: 500px;
  width: 95vw;
  height: auto;
  display: block;
`

const SVGText = styled(animated.text)`
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 6px;
  font-weight: bold;
`;

function App() {
  const letters = [
    {
      paths: ['M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z'],
      transform: 'translate(9 10.5)'
    },
    {
      paths: ['M 0 -10 h 20 v 6 h -7 v 15 h -6 v -15 h -7 z'],
      transform: 'translate(30 10.5)'
    },
    {
      paths: [
        'M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z',
        'M 8 2 h 4 l -2 -5.7 -2 5.7 z'
      ],
      transform: 'translate(51 10.5)'
    },
    {
      paths: [
        'M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z',
        'M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z'
      ],
      transform: 'translate(76 10.5)'
    },
    {
      paths: ['M 0 -10 l 7 20 h 6 l 1.75 -5 1.75 5 h 6 l 7 -20 h -7 l -2.375 6.8 -2.375 -6.8 h -6 l -2.375 6.8 -2.375 -6.8 h -7z'],
      transform: 'translate(0.5 35.5)'
    },
    {
      paths: [
        'M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z',
        'M 8 2 h 4 l -2 -5.7 -2 5.7 z',
      ],
      transform: 'translate(30 35.5)'
    },
    {
      paths: [
        'M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z',
        'M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z'
      ],
      transform: 'translate(56 35.5)'
    },
    {
      paths: ['M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z'],
      transform: 'translate(82.5 35.5)'
    },
  ]

  const removeOffsetRef = useRef();
  const removeOffset = useTrail(letters.length, {
    from: { opacity: 0, strokeDashoffset: 200},
    to: { opacity: 1, strokeDashoffset: 0},
    config: config.molasses,
    ref: removeOffsetRef,
  });

  const translateYRef = useRef();
  const translateY = useSpring({
    from: { transform: 'translateY(6px)'},
    to: { transform: 'translateY(0)'},
    config: config.slow,
    ref: translateYRef
  });

  useChain([removeOffsetRef, translateYRef], [0, 4]);

  const [crawls, setCrawls] = useState([]);
  const [showCursor, setShowCursor] = useState(false);
  const cursorTransition = useTransition(showCursor, null, {
    from: {opacity: 0},
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
      fetch('https://swapi.co/api/films')
          .then(response => response.json())
          .then(json => {
              const results = json.results
                  .map(({episode_id: id, title, opening_crawl : crawl}) => ({
                      id,
                      title,
                      crawl
                  }))
                  .sort(({id: idA}, { id: idB}) => idA > idB ? 1 : -1);
              setCrawls(results);
              setShowCursor(true);
          });
  }, []);

  return (
    <>
      <Heading>
        <SVG viewBox="0 0 100 75">
          <defs>
            <clipPath id="text--clip">
              <rect x="0" y="0" width="100" height="55" />
            </clipPath>
          </defs>
          <g stroke="hsl(60, 100%, 50%)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {removeOffset.map((props, index) => <g key={index} transform={letters[index].transform}>
              {letters[index].paths.map((d) => <animated.path style={props} strokeDasharray="200" strokeDashoffset="200" key={`${index}-${d}`} d={d} />)}
            </g>)}
          </g>

          <g clipPath="url(#text--clip)">
            <SVGText style={translateY} x="50" y="55" textLength="100" lengthAdjust="spacing" textAnchor="middle" fill="hsl(0, 0%, 100%)">
                Opening crawls
            </SVGText>
          </g>

          {cursorTransition.map(({ item, key, props }) =>
            item &&
            <animated.g style={props} key={key} transform="translate(50 67.75)">
              <g fill="none" stroke="hsl(0, 0%, 100%)" strokeWidth="0.5">
                <rect x="-2.25" y="0" width="4.5" height="6" rx="2.25"  />
                <path d="M 0 1.75 v 1" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </animated.g>
          )}
        </SVG>
      </Heading>
      <OpeningCrawls crawls={crawls}/>
    </>
  );
}

export default App;
