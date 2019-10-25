import React from 'react';
import DigitalWatch from './DigitalWatch.js';

function App() {
  return (
    <div className="Watch">
      <div className="Display">
        <main className="Screen">
          <DigitalWatch />
        </main>
      </div>
      <div className="Controls">
        <button aria-label="Previous Gadget"></button>
        <button aria-label="Next Gadget"></button>
      </div>
    </div>
  );
}

export default App;
