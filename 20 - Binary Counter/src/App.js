import React, { useState, useRef, useEffect } from 'react';
import LightBulb from './LightBulb';

function App() {
  // const [count, setCount] = useState(0)
  // const timeoutRef = useRef()
  // function tick() {
  //   setCount(count + 1)
  // }
  // timeoutRef.current = setTimeout(() => {
  //   tick();
  // }, 1000);

  // useEffect(() => {
  //   clearTimeout(timeoutRef)
  // }, [timeoutRef])

  return (
    <div className="Row">
      {/* {count.toString(2)} */}
      {
        Array(8).fill(0).map((value, index, { length}) => 360 / length * index).map(hue => <LightBulb key={hue} hue={hue} />)
      }
    </div>

  );
}

export default App;
