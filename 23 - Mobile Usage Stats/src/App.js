import React from 'react';
import './App.css';

function App() {
  const data = {
    signal: 3, // integer in the [0, 4] range
    wifi: false, // boolean
    battery: 80, // integer in the 0-100 range
    gigabytes: 50, // integer in the 0-100 range describing the mobile data left
  };

  return (
    <div>
      <nav>
        <h2>
          <span className="visually-hidden">Signal: {data.signal}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-50 -90 100 100"
            width="1.25em"
            height="1.25em"
          >
            <defs>
              <rect id="signal" x="-7.5" width="15" y="-80" height="80" />
            </defs>
            <g fill="currentColor" stroke="none">
              {Array(4)
                .fill()
                .map((v, i, { length }) => (
                  <g key={i}>
                    <g transform={`translate(${-30 + 20 * i} 0)`}>
                      <use
                        opacity={`${i < data.signal ? 1 : 0.25}`}
                        href="#signal"
                        transform={`scale(1 ${1 - 0.25 * (length - i - 1)})`}
                      />
                    </g>
                  </g>
                ))}
            </g>
          </svg>
        </h2>
        <h2>
          <span className="visually-hidden">
            Wifi: {data.wifi ? 'available' : 'unavailable'}
          </span>
          {data.wifi ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 -90 100 100"
              width="1.25em"
              height="1.25em"
            >
              <defs>
                <path id="wifi" d="M 0 0 l -50 -50 a 60 60 0 0 1 100 0 z" />
                <mask id="mask-wifi">
                  <use href="#wifi" fill="hsl(0, 0%, 100%)" />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 0%)"
                    transform="scale(0.85)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 100%)"
                    transform="scale(0.7)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 0%)"
                    transform="scale(0.55)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 100%)"
                    transform="scale(0.4)"
                  />
                </mask>
              </defs>
              <g fill="currentColor" stroke="none" mask="url(#mask-wifi)">
                <use href="#wifi" />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-50 -90 100 100"
              width="1.25em"
              height="1.25em"
            >
              <defs>
                <path id="wifi" d="M 0 0 l -50 -50 a 60 60 0 0 1 100 0 z" />
                <path id="bar" d="M -30 -5 l 70 -70" />
                <mask id="mask-wifi">
                  <use href="#wifi" fill="hsl(0, 0%, 100%)" />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 0%)"
                    transform="scale(0.85)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 100%)"
                    transform="scale(0.7)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 0%)"
                    transform="scale(0.55)"
                  />
                  <use
                    href="#wifi"
                    fill="hsl(0, 0%, 100%)"
                    transform="scale(0.4)"
                  />

                  <use
                    href="#bar"
                    fill="none"
                    stroke="hsl(0, 0%, 0%)"
                    stroke-width="20"
                    stroke-linecap="square"
                  />

                  <path
                    d="M -30 -5 l 70 -70"
                    ill="none"
                    stroke="currentColor"
                    stroke-width="10"
                    stroke-linecap="square"
                  />
                </mask>
              </defs>
              <g fill="currentColor" stroke="none" mask="url(#mask-wifi)">
                <use href="#wifi" />
              </g>
              <use
                href="#bar"
                fill="none"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="square"
              />
            </svg>
          )}
        </h2>

        <h2>
          <span className="visually-hidden">Battery: </span>
          {data.battery}%
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3 -50 100 100"
            width="1.25em"
            height="1.25em"
          >
            <rect
              width="75"
              height="52"
              x="1"
              y="-26"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              rx="10"
            />
            <path d="M 84 -10 a 10 10 0 0 1 0 20" />
            <g transform="translate(7 0)">
              <g transform={`scale(${data.battery / 100} 1)`}>
                <rect
                  width="63"
                  height="32"
                  y="-16"
                  fill="currentColor"
                  stroke="none"
                />
              </g>
            </g>
          </svg>
        </h2>
      </nav>
    </div>
  );
}

export default App;
