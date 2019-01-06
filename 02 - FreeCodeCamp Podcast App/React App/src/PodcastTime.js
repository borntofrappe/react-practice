import React from 'react';
import styled from 'styled-components';


// paragraph displaying the timestamp
const Time = styled.p`
  margin: 1rem 0 2rem;
  span {
    margin: 0 0.3rem;
    letter-spacing: 0.05rem;
  }
`;

const PodcastTime = ({ currentTime, totalTime, formatTime }) => {
  // current and total time both refer to the number of seconds of the episode (played v total)
  // starting from the number of seconds time create the number of seconds/ minutes/ hours and display non-zero values for both


  // ! there's certainly room for improvement
  /* the convoltuted solution is as follows
  - create an object for the number of seconds
  - add minutes and hours according to the seconds value
  - display in a span element only non-zero values, joined by a colon :

  the same is applied for the current timestamp, but to match the number of non-zero values of the total counterpart
  this one uses the substring() method to start only from said values
  */
  const totalTimestamp = {
    hours: 0,
    minutes: 0,
    seconds: totalTime
  };

  while (totalTimestamp.seconds >= 60) {
    totalTimestamp.seconds -= 60;
    totalTimestamp.minutes += 1;
  }

  while (totalTimestamp.minutes >= 60) {
    totalTimestamp.minutes -= 60;
    totalTimestamp.hours += 1;
  }


  const currentTimestamp = {
    hours: 0,
    minutes: 0,
    seconds: currentTime
  };

  while (currentTimestamp.seconds >= 60) {
    currentTimestamp.seconds -= 60;
    currentTimestamp.minutes += 1;
  }

  while (currentTimestamp.minutes >= 60) {
    currentTimestamp.minutes -= 60;
    currentTimestamp.hours += 1;
  }

  const totalValues = Object.values(totalTimestamp);
  // remove the first and second sets of numbers if the total number of seconds doesn't exceed the appropriate time
  if (totalTime < 3600) {
    totalValues.shift();
  }
  if (totalTime < 60) {
    totalValues.shift();
  }

  const currentValues = Object.values(currentTimestamp);

  const { length: totalLength } = totalValues;
  const { length: currentLength } = currentValues;
  return (
    <Time>
      <span>
        {
          currentValues.slice(currentLength - totalLength).map(stamp => formatTime(stamp)).join(':')
        }
      </span>

      |

      <span>
        {
          totalValues.map(stamp => formatTime(stamp)).join(':')
        }
      </span>
    </Time>
  );
}

export default PodcastTime;
