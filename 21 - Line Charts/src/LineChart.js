import React from 'react';

function LineChart(props) {
  console.log(props);

  const width = 500;
  const height = 500;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <circle r="2" cx="50" cy="50" />
    </svg>
  )
}

export default LineChart;