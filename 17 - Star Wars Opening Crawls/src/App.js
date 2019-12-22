import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSpring, useChain, animated, config } from 'react-spring';

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
  const removeOffsetRef = useRef();
  const removeOffset = useSpring({
    from: { strokeDashoffset: 150},
    to: { strokeDashoffset: 0},
    config: {
      mass: 1,
      tension: 200,
      friction: 400,
    },
    ref: removeOffsetRef,
  });

  const translateYRef = useRef();
  const translateY = useSpring({
    from: { transform: 'translateY(6px)'},
    to: { transform: 'translateY(0)'},
    config: config.slow,
    ref: translateYRef
  });

  useChain([removeOffsetRef, translateYRef], [0, 1]);

  return (
    <Loading>
      <SVG viewBox="0 0 100 58">
        <g stroke="hsl(60, 100%, 50%)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <g transform="translate(5 10.5)">
                <g transform="translate(4 0)">
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z" />
                </g>

                <g transform="translate(25 0)">
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 -10 h 20 v 6 h -7 v 15 h -6 v -15 h -7 z" />
                </g>
                <g transform="translate(46 0)">
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z" />
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 8 2 h 4 l -2 -5.7 -2 5.7 z" />
                </g>
                <g transform="translate(71 0)">
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z" />
                    <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z" />
                </g>
            </g>

            <g transform="translate(0 35)">
                <g stroke="hsl(60, 100%, 50%)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none">
                    <g transform="translate(0.5 0)">
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 -10 l 7 20 h 6 l 1.75 -5 1.75 5 h 6 l 7 -20 h -7 l -2.375 6.8 -2.375 -6.8 h -6 l -2.375 6.8 -2.375 -6.8 h -7z" />
                    </g>
                    <g transform="translate(30 0)">
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 10 l 7 -20 h 6 l 7 20 h -6 l -1.05 -3 h -5.9 l -1.05 3 z" />
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 8 2 h 4 l -2 -5.7 -2 5.7 z" />
                    </g>
                    <g transform="translate(56 0)">
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 -10 h 12 a 7 7 0 0 1 0 14 l 5 6 h -7 l -5 -6 v 6 h -5.5 z" />
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 5 -5 h 5 a 2 2 0 0 1 0 4 h -5 z" />
                    </g>
                    <g transform="translate(82.5 0)">
                        <animated.path strokeDasharray="150" strokeDashoffset="150" style={removeOffset} d="M 0 10 h 8 a 7 7 0 0 0 0 -14 h 9 v -6 h -10 a 7 7 0 0 0 0 14 h -10 v 6 z" />
                    </g>
                </g>
            </g>
        </g>

        <Text style={translateY} x="50" y="58" textLength="100" lengthAdjust="spacing" textAnchor="middle" fill="hsl(0, 0%, 100%)">
            Coming soon
        </Text>
      </SVG>
    </Loading>
  );
}

export default App;
