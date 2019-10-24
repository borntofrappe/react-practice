import React from 'react';

function Watch() {
  return (
    <div className="Watch">
      <div className="Display">
        <main class="Screen">
          {/* include the gadgets here */}
        </main>
      </div>
      <div className="Controls">
        <button aria-label="Previous Gadget"></button>
        <button aria-label="Next Gadget"></button>
      </div>
    </div>
  );
}

export default Watch;
