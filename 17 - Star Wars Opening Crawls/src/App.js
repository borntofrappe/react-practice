import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, useTrail, animated, config } from 'react-spring';

/* center in the viewport */
const Loading = styled.div`
  min-height: 100vh;
  display: flex;
`

const SVG = styled.svg`
  margin: auto;
  max-width: 550px;
  width: 95vw;
  height: auto;
  display: block;
`

const Text = styled(animated.text)`
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


  const trailRef = useRef();
  const trail = useTrail(letters.length, {
    from: { opacity: 0, strokeDashoffset: 200},
    to: { opacity: 1, strokeDashoffset: 0},
    config: config.molasses,
    ref: trailRef,
  });

  const springRef = useRef();
  const spring = useSpring({
    from: { transform: 'translateY(6px)'},
    to: { transform: 'translateY(0)'},
    config: config.slow,
    ref: springRef
  });

  useChain([trailRef, springRef], [0, 4]);


  return (
    <Loading>
      <SVG viewBox="0 0 100 55">
        <g stroke="hsl(60, 100%, 50%)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {trail.map((props, index) => <g key={index} transform={letters[index].transform}>
            {letters[index].paths.map((d) => <animated.path style={props} strokeDasharray="200" strokeDashoffset="200" key={`${index}-${d}`} d={d} />)}
          </g>)}
        </g>

        <Text style={spring} x="50" y="55" textLength="100" lengthAdjust="spacing" textAnchor="middle" fill="hsl(0, 0%, 100%)">
            Opening crawls
        </Text>
      </SVG>
    </Loading>
  );
}

export default App;
