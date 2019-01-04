import React from 'react';
import styled from 'styled-components';


// paragraph displaying the timestamp
const Time = styled.p`
  margin: 1rem 0 2rem;
  span {
    margin: 0 0.3rem;
  }
`;

const PodcastTime = ({ episodes, currentEpisode, hours, minutes, seconds, formatTime }) => {
  return (
    <Time>
      {
        episodes[currentEpisode] ?
          <span>{episodes[currentEpisode].duration >= 3600 ? `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}` : `${formatTime(minutes)}:${formatTime(seconds)}`}</span>
          :
          <span>00:00:00</span>
      }
      {/* <span>{Object.values(timeStamp).map(time => time >= 10 ? time : `0${time}`).join(':')}</span> */}
      /
          {
        episodes[currentEpisode] ?
          <span>{episodes[currentEpisode].time}</span>
          :
          <span>00:00:00</span>
      }
    </Time>
  );
}

export default PodcastTime;
