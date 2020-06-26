import React, { useState } from 'react';
import './App.css';
import { getPercentage, getRandomInt, getRandomFloat, zeroPad } from './utils';
import Signal from './Signal';
import Battery from './Battery';
import Wifi from './Wifi';
import * as d3 from 'd3';

function App() {
  const maxSignal = 4;
  const maxGigabytes = 20;

  const [date, setDate] = useState(new Date());
  const [hasWifi, setHasWifi] = useState(Math.random() > 0.5);
  const [signal, setSignal] = useState(
    Math.floor((getPercentage() / 100) * maxSignal)
  );
  const [battery, setBattery] = useState(getPercentage());
  const [gigabytes, setGigabytes] = useState(getRandomFloat(maxGigabytes));

  const [days, setDays] = useState(getRandomInt(30));
  const [credit, setCredit] = useState(getRandomFloat(10));

  const minutes = date.getMinutes();
  const hours = date.getHours();

  const endAngle = (Math.PI * 8) / 4.75;
  const angle = (endAngle * gigabytes) / maxGigabytes;
  const pathL = d3.arc().startAngle(0).innerRadius(44).outerRadius(44);

  const pathM = d3
    .arc()
    .startAngle(0)
    .endAngle(endAngle)
    .innerRadius(32.5)
    .outerRadius(32.5);
  const pathS = d3
    .arc()
    .startAngle(0)
    .endAngle(endAngle)
    .innerRadius(21)
    .outerRadius(21);

  return (
    <div>
      <nav>
        <div>
          <span className="visually-hidden">
            Signal: {signal} out of {maxSignal} bars
          </span>
          <Signal signal={signal} maxSignal={maxSignal} />
        </div>
        <div>
          <span className="visually-hidden">
            Wifi: {hasWifi ? 'available' : 'unavailable'}
          </span>
          <Wifi hasWifi={hasWifi} />
        </div>

        <div>
          {zeroPad(hours)}:{zeroPad(minutes)}
        </div>

        <div>
          <span className="visually-hidden">Battery: </span>
          {battery}%
          <Battery battery={battery} />
        </div>
      </nav>

      <main>
        <h1>Mobile Usage</h1>
        <svg viewBox="-50 -50 100 100" width="200" height="200">
          <defs>
            <path id="path-l" d={pathL.endAngle(endAngle)()} />
            <path id="path-lo" d={pathL.endAngle(angle)()} />
            <path id="path-m" d={pathM()} />
            <path id="path-s" d={pathS()} />
          </defs>
          <g transform="translate(-7.5 -43.25)">
            <text textAnchor="end">
              <tspan fontSize="9" x="0">
                {gigabytes}
              </tspan>
              <tspan fontSize="5" x="0" y="5.5">
                of {maxGigabytes}
              </tspan>
            </text>
          </g>

          <g
            fill="none"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <use href="#path-l" stroke="#1764BC" opacity="0.2" />
            <use href="#path-lo" stroke="#1764BC" />
            <use href="#path-m" stroke="#930096" />
            <use href="#path-s" stroke="#CF00BC" />
          </g>

          <g fill="hsl(0, 0%, 100%)" textAnchor="start" fontSize="4.5">
            <text dy="1.75">
              <textPath href="#path-l">GB</textPath>
            </text>
            <text dy="1.75">
              <textPath href="#path-m">Unlimited minutes</textPath>
            </text>
            <text dy="1.75">
              <textPath href="#path-s">Unlimited messages</textPath>
            </text>
          </g>
        </svg>
      </main>

      <footer>
        <h2>
          Next installment
          <span>
            {days}
            <span>days</span>
          </span>
        </h2>
        <h2>
          Remaining credit
          <span>
            {credit}
            <span>&euro;</span>
          </span>
        </h2>
      </footer>
    </div>
  );
}

export default App;
