import React from 'react';
import styled from 'styled-components';

// visual displaying the current progress vis-a-vis the toal duration of the podcast
const ProgressBar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
`;
// pointer-events none to have the click register on the progress bar div
const Progress = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  width: ${props => `${props.progress}%`};
  height: 100%;
  border-radius: 4px 0 0 4px;
  background: var(--color-primary);
  transition: width 1s linear;
`;
// ! tooltip shown when hovering the progress bar
// pointer-events none to have the click register on the progress bar div
const Tooltip = styled.p`
  pointer-events: none;
  padding: 0.5rem 0.75rem;
  background: var(--color-primary-d);
  box-shadow: 0 1px 5px -2px var(--color-primary-d);
  letter-spacing: 0.1rem;
  color: white;
  border-radius: 5px;
  position: absolute;
  top: 100%;
  left: 0;
  transform: translate(-50%, 0);
  opacity: 0;
  visibility: hidden;
  transition: all 0.15s ease-out;

  &.isTooltip {
    opacity: 1;
    visibility: visible;
  }

`;
// within a wrapping div, make use of another empty container to show the progress in a colored bar
// add a tooltip, absolutely positioned relative to the progress bar
const PodcastProgress = ({ currentTime, totalTime, tooltipTime, formatTime, showTooltip, hideTooltip, changeCurrentTime }) => {
  const progress = Math.round(currentTime / totalTime * 100);

  // compute the number of hours, minutes, seconds to show in the tooltip
  const time = {
    hours: 0,
    minutes: 0,
    seconds: tooltipTime
  }

  while (time.seconds >= 60) {
    time.seconds -= 60;
    time.minutes += 1;
  }

  while (time.minutes >= 60) {
    time.minutes -= 60;
    time.hours += 1;
  }

  // retrieve the number of hours, minutes and seconds
  const timeValues = Object.values(time);

  // remove the first or even the second set of numbers if the number of seconds doesn't exceed the appropriate values
  if (tooltipTime < 3600) {
    timeValues.shift();
  }
  if (tooltipTime < 60) {
    timeValues.shift();
  }

  // show the progress bar with the two nested divs and a paragraph element showing the relative time through the tooltip
  return (
    <ProgressBar
      onMouseMove={showTooltip}
      onMouseLeave={hideTooltip}
      onClick={changeCurrentTime}
    >
      <Progress
        progress={progress} />

      <Tooltip>
        {/* display the appropriate units of time separating them with a colon */}
        {
          timeValues.map(time => formatTime(time)).join(':')
        }
      </Tooltip>
    </ProgressBar>
  );
}

export default PodcastProgress;

