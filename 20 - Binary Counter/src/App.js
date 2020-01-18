import React, { useState, useRef, useEffect } from 'react';
import LightBulb from './LightBulb';

function App() {
  const DIGITS = 8;

  const [count, setCount] = useState(0)
  const [binary, setBinary] = useState()
  const timeoutRef = useRef()
  function tick() {
    setCount(count + 1)
  }
  timeoutRef.current = setTimeout(() => {
    tick();
  }, 1000);

  useEffect(() => {
    clearTimeout(timeoutRef)
  }, [timeoutRef])

  useEffect(() => {
    setBinary(count.toString(2).padStart(DIGITS, "0"))
    if(count >= 2 ** 8) {
      setCount(0)
    }
  }, [count])

  return (
    <div className="Row">
      {
        binary &&
        binary.split("").map((value, index, { length }) => <LightBulb key={index} on={value === "1"} hue={360 - (360 / length * index)} />)
      }
    </div>

  );
}

export default App;
