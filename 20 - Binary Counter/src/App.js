import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
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

  return (
    <div className="Row">
      {count.toString(2)}
    </div>

  );
}

export default App;
