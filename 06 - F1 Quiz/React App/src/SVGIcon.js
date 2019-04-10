import React from 'react';

// stateless component returning the SVG syntax making up the different icons of the project
const SVGIcon = ({ icon = 'v', size = "100%" }) => {
  // include the path elements according to the input icon ans size the SVG according to the other string value
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      {
        icon === '?' &&
        <g transform="translate(10 10) scale(0.8 0.8)">
          <path d="M 25 25 h 30 a 15 15 0 0 1 0 30 h -18" fill="none" stroke="currentColor" strokeWidth="20" />
          <path d="M 46 75 v 15" fill="none" stroke="currentColor" strokeWidth="20" />
        </g>
      }
      {
        icon === 'v' &&
        <path d="M 10 40 l 30 30 l 45 -50" fill="none" stroke="currentColor" strokeWidth="20" />
      }
      {

        icon === 'x' &&
        <path d="M 25 25 l 50 50 z M 25 75 l 50 -50" fill="none" stroke="currentColor" strokeWidth="20" />
      }
      {
        icon === 'share' &&
        <path d="m50.008 10a40.008 40.004 0 0 0-40.008 40.004 40.008 40.004 0 0 0 40.008 39.996 40.008 40.004 0 0 0 39.992-39.996 40.008 40.004 0 0 0-39.992-40.004zm-22.075 19.216c4.1013 10.024 20.896 12.836 20.896 12.836 4.09-18.868 18.635-8.4211 19.335-7.0679 1.1718 1.5988 7.2274-1.406 7.2274-1.406 0.19278 2.2073-5.2731 4.6112-5.2731 4.6112l5.859 0.2041c0.19656 1.1981-5.4659 2.8045-5.4659 2.8045-0.39312 25.864-22.264 29.118-22.264 29.118-11.525 2.007-23.047-3.2051-23.047-3.2051 7.6167 1.406 16.602-8.0204 16.602-8.0204-6.3126 1.4967-10.97-2.6155-12.395-4.082a0.94122 0.94113 0 0 1-0.49896-0.52915s0.2079 0.22678 0.49896 0.52915c1.9429 0.96759 8.2895-1.7349 8.2895-1.7349-12.304-1.6026-13.668-11.025-13.668-11.025 5.2693 5.2159 11.325 4.6112 11.325 4.6112-8.2026 0.20032-7.4201-17.643-7.4201-17.643z" fill="currentColor" stroke-width="3.7798" />
      }
    </svg>
  );

};

export default SVGIcon;