import React, {useState, useRef} from 'react';
import DigitalWatch from './DigitalWatch.js';
import Counter from './Counter.js';
import AnalogWatch from './AnalogWatch.js';
import styled from 'styled-components';

const Watch = styled.div`
    display: flex;
    align-items: center;
    filter: drop-shadow(0 0 0.65rem hsla(0, 0%, 85%, 0.5));
    height: 18rem;
`;

const Display = styled.div`
    width: 18rem;
    height: 100%;
    padding: 2rem;
    background: linear-gradient(to right, transparent 25%, hsl(0, 0%, 5%) 25%, hsl(0, 0%, 5%) 75%, transparent 75%), hsl(0, 0%, 100%);
`;

const Screen = styled.main`
    width: 100%;
    height: 100%;
    background: hsl(120, 30%, 58%);
    border: 0.25rem solid hsl(0, 0%, 5%);
    position: relative;

    &:before,
    &:after {
        content: "";
        position: absolute;
        left: 0%;
        width: 100%;
        height: 50%;
        background: hsl(0, 0%, 5%);
        transform: scaleY(0);
        z-index: 10;
        transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }

    &:before {
        top: 0%;
        transform-origin: 50% 0%;
    }
    &:after {
      bottom: 0%;
        transform-origin: 50% 100%;
    }

    &.Changing:before,
    &.Changing:after {
        transform: scaleY(1);
    }
`;

const Controls = styled.section`
    width: 5rem;
    height: 100%;
    padding: 3rem 2rem;
    padding-left: 0rem;
    background: hsl(0, 0%, 100%);
    border-radius: 0 5rem 5rem 0;
    display: flex;
    flex-direction: column;
`;

const Control = styled.button`
    background: hsl(360, 85%, 65%);
    border: 0.25rem solid hsl(0, 0%, 5%);
    flex-grow: 1;

    &:active {
        filter: brightness(95%);
    }
    &:first-of-type {
      border-top-right-radius: 2rem;
      border-bottom: none;
    }
    &:last-of-type {
        border-bottom-right-radius: 2rem;
    }
`;

function App() {
  const screen = useRef();
  const [app, setApp] = useState(0);

  function handleClick(direction) {
    if(!screen.current.classList.contains('Changing')) {
      screen.current.classList.add('Changing');
      let timeout = setTimeout(() => {
        if(direction === 'next') {
          setApp((prev) => prev === 2 ? 0 : prev + 1);
        } else {
          setApp((prev) => prev === 0 ? 2 : prev - 1);
        }
        screen.current.classList.remove('Changing');
        clearTimeout(timeout);
      }, 750)
    }
  }

  return (
    <Watch>
      <Display>
        <Screen ref={screen}>
          {
            app === 0
            ?
            <DigitalWatch />
            :
            app === 1
            ?
            <Counter/>
            :
            <AnalogWatch/>
          }
        </Screen>
      </Display>
      <Controls>
        <Control onClick={() => handleClick('prev')} aria-label="Previous Gadget"></Control>
        <Control onClick={() => handleClick('next')} aria-label="Next Gadget"></Control>
      </Controls>
    </Watch>
  );
}

export default App;
