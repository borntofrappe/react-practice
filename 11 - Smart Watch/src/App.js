import React, {useState, useRef} from 'react';
import DigitalWatch from './DigitalWatch.js';
import Counter from './Counter.js';
import AnalogWatch from './AnalogWatch.js';

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
    <div className="Watch">
      <div className="Display">
        <main className="Screen" ref={screen}>
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
        </main>
      </div>
      <div className="Controls">
        <button onClick={() => handleClick('prev')} aria-label="Previous Gadget"></button>
        <button onClick={() => handleClick('next')} aria-label="Next Gadget"></button>
      </div>
    </div>
  );
}

export default App;
