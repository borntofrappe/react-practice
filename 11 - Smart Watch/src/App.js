import React, {useState, useRef} from 'react';
import DigitalWatch from './DigitalWatch.js';
import Counter from './Counter.js';

function App() {
  const screen = useRef();
  const [app, setApp] = useState(0);

  function handleClick() {
    if(!screen.current.classList.contains('Changing')) {
      screen.current.classList.add('Changing');
      let timeout = setTimeout(() => {
        setApp((prev) => prev === 0 ? 1 : 0);
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
            <Counter/>
          }
        </main>
      </div>
      <div className="Controls">
        <button onClick={handleClick} aria-label="Previous Gadget"></button>
        <button onClick={handleClick} aria-label="Next Gadget"></button>
      </div>
    </div>
  );
}

export default App;
