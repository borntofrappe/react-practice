import React, { Component } from 'react';
import styled from 'styled-components';
import SVGIcons from './SVGIcons.js';

// wrapping container for the entire application
// single column layout, horizontally centered
const Podcast = styled.div`
  max-width: 400px;
  width: 90vw;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: #267b26;
  position: relative;
`;

// visual displaying a makeshift vinyl, rotated as the audio progresses to match the number of seconds (0-60)
const Vinyl = styled.div`
  margin: 1rem;
  width: calc(10rem + 2.5vw);
  height: calc(10rem + 2.5vw);
  border-radius: 50%;
  background: linear-gradient(
      to bottom right,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    ),
    url("https://d33wubrfki0l68.cloudfront.net/cce87b74a290f321f582cb56a12007343ff2d77e/bb9e6/img/glyph.png"),
    repeating-radial-gradient(#006400 0, #006400 3px, #007e00 4px);
  background-repeat: no-repeat;
  background-size: 100%, 50%, 100%;
  background-position: 0%, 50% 50%, 100%;
  box-shadow: 0 1px 5px rgba(0, 100, 0, 0.7);
  // transition: transform 1s linear;
  transform: ${props => `rotate(${props.progress * 6}deg)`};
  transition: transform 1s linear;
`;

// visual displaying the current progress vis-a-vis the toal duration of the podcast
const ProgressBar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: ${props => `linear-gradient(to right, #006400, #006400 ${props.progress}%, #fff ${props.progress}%)`};
  margin-bottom: 2rem;
  transition: background 1s linear;
`;

// wrapping container for the buttons
const Controls = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;

// buttons starting from a common set of property value pairs
// buttons positioned with the first button centered in the first row and the rest laid below it

const Button = styled.button`
  width: 48px;
  height: 48px;
  background: none;
  padding: 0.5rem;
  border-radius: 50%;
  color: #fff;
  border: 1.2px solid rgba(255, 255, 255, 0.7);
  transition: all 0.2s ease-out;

  &: hover {
  background: rgba(255, 255, 255, 0.15);
}
`;
const ToggleButton = styled(Button)`
  grid-column: 1/-1;
  width: 56px;
  height: 56px;
`;
// speed button with an x after the speed option
const SpeedButton = styled(Button)`
  font-family: inherit;
  &:after {
  content: 'x';
  }
`;
// last button laid to the right of the application
const MoreButton = styled(Button)`
  align-self: flex-end;
`;

// paragraph displaying the timestamp
const Time = styled.p`
  margin: 1rem 0 2rem;
  span {
    margin: 0 0.3rem;
  }
`;
// heading dusplaying the title of the current episode
const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

// wrapping container for more episodes
// absolute positioned to cover a section of the podcast app container
// with a .hidden class toggling its appearance
const MoreEpisodes = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-top: 2.5px solid rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease-out;

  &.hidden {
    height: 0;
    opacity: 0;
    visibility: none;
  }
`;

// wrapping container for the episodes
// with vertical overflow to allow for the scroll
// with pseudo selectors for the scroll bar
const Episodes = styled.div`
  overflow-y: auto;
  height: 100%;
  background: #267b26;


  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 0.5rem #040;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
  background-color: #fff;
  outline: 0.08rem solid #fff;
  }
`;

// wrapping container for each episode
/* displaying the content in a grid, as follows
| heading   | heading     | button|
| date      | duration    |       |

*/
const Episode = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  padding: 1.25rem 1rem;
  border-top: 2px solid rgba(255, 255, 255, 0.4);
  grid-gap: 0.5rem 1rem;

  &:nth-of-type(1) {
    border-top: none;
  }
`;

// properties for the separate heading / paragraph / button elements of each episode
const EpisodeTitle = styled.h3`
  font-weight: 900;
  font-size: 1rem;
  grid-row: 1/2;
  grid-column: 1/3;

`;
const EpisodeDate = styled.p`
  grid-row: 2/3;
  grid-column: 1/2;
`;

const EpisodeDuration = styled.p`
  grid-row: 2/3;
  grid-column: 2/3;
`;
const EpisodeButton = styled(Button)`
  width: 40px;
  height: 40px;
  grid-row: 1/span 2;
  grid-column: 3/4;
`;

// final button positioned below the Episodes container, to close the MoreEpisode container
const CloseButton = styled.button`
  padding: 0.75rem 0;
  background: #040;
  border: none;
  color: #fff;
  font-size: 1.1rem;
  font-family: inherit;
  transition: all 0.2s ease-out;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

class PodcastApp extends Component {
  /* in the state detail
    URL, storing the information of the RSS feed
    podcast, array tobe filled with one object for each episode

  */
  constructor(props) {
    super(props);
    this.state = {
      URL: 'https://podcast.freecodecamp.org/rss',
      podcast: [],
      currentEpisode: 0,
      currentTime: 0,
      speedRate: [1, 1.5, 2, 2.5, 3],
      speedOption: 0,
      isPlaying: false,
      isMute: false,
      isHidden: true,
      intervalID: 0
    };
    // bind the methods called when clicking the buttons of the application
    this.toggleButton = this.toggleButton.bind(this);
    this.stopButton = this.stopButton.bind(this);
    this.volumeButton = this.volumeButton.bind(this);
    this.speedButton = this.speedButton.bind(this);
    this.moreButton = this.moreButton.bind(this);
    this.selectButton = this.selectButton.bind(this);
    this.closeButton = this.closeButton.bind(this);
  }


  // function parsing the RSS feed, called as the components mount
  // input: the text of the page with the RSS feed information
  // behavior: update this.state.podcast with one object for each episode
  parseFeed(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'application/xml');

    /* each episode is structured with the following format
      {
        title, title
        audio, url redirecting toward the actual sound file
        pubdate, date object matching the episode's
        duration, seconds the episode lasts
      }
    */

    // find all the episodes in <item> elements
    const items = doc.querySelectorAll('item');

    const podcast = [];
    // loop through each item and add to the podcast array the necessary information
    [...items].forEach(item => {
      // title found in <title> element
      const { textContent: title } = item.querySelector('title');

      // audio found in the url attribute of the <enclosure> element
      const audio = item.querySelector('enclosure').getAttribute('url');

      // date found in the <pubDate> element
      const { textContent: pubDate } = item.querySelector('pubDate');
      const date = new Date(pubDate);

      // duration (in hh:mm:ss) in the element following the <enclosure> element
      const { textContent: time } = item.querySelector('enclosure').nextElementSibling;
      const timeComponents = time.split(':');
      const [seconds, minutes, hours] = timeComponents.reverse();
      let duration = parseInt(seconds, 10) + parseInt(minutes, 10) * 60;
      if (hours) {
        duration += parseInt(hours, 10) * 60 * 60;
      }

      // append the information in the podcast array
      podcast.push({
        title,
        audio,
        date: date.toDateString(),
        time,
        duration
      });
    });

    // update the state with the retrieved information
    this.setState({
      podcast
    })
  }

  // retrieve the information from the RSS feed as the components mount
  // calling the parseFeed function and passing as argument the text retrieved from the described URL
  componentDidMount() {
    const { URL } = this.state;

    fetch(URL)
      .then(response => response.text())
      .then(text => this.parseFeed(text));
  }

  // utility functions called to enable the functionalities behind the buttons
  playAudio(audio) {
    const { speedOption, speedRate } = this.state;
    audio.play();
    audio.playbackRate = speedRate[speedOption];

    let intervalID;
    intervalID = setInterval(() => {
      const { currentTime } = audio;

      this.setState({
        currentTime: Math.round(currentTime)
      })
    }, 1000);

    this.setState({
      intervalID
    })
  }
  pauseAudio(audio) {
    audio.pause();

    const { intervalID } = this.state;
    clearInterval(intervalID);
  }

  muteAudio(audio) {
    audio.volume = 0;
  }

  volumeAudio(audio) {
    audio.volume = 1;
  }

  speedAudio(audio, playbackRate) {
    audio.playbackRate = playbackRate;
  }

  // functions called in response to click event
  toggleButton(e) {

    const { isPlaying } = this.state;
    const audio = document.querySelector('.toggle audio');

    if (!isPlaying) {
      this.playAudio(audio);
    }
    else {
      this.pauseAudio(audio);
    }

    this.setState({
      isPlaying: !isPlaying
    })
  }

  volumeButton(e) {
    const { isMute } = this.state;
    const audio = document.querySelector('.toggle audio');
    if (!isMute) {
      this.muteAudio(audio);
    }
    else {
      this.volumeAudio(audio);
    }
    this.setState({
      isMute: !isMute
    })
  }

  speedButton(e) {
    const { speedOption, speedRate } = this.state;
    const { length } = speedRate;
    const audio = document.querySelector('.toggle audio');

    let newOption = speedOption + 1;

    if (newOption >= length) {
      newOption = 0;
    }

    this.speedAudio(audio, speedRate[newOption]);
    this.setState({
      speedOption: newOption
    })
  }

  stopButton(e) {
    const audio = document.querySelector('.toggle audio');
    this.pauseAudio(audio);
    audio.currentTime = 0;
    this.setState({
      isPlaying: false,
      currentTime: 0
    })
  }

  moreButton(e) {
    this.setState({
      isHidden: false
    })
  }

  closeButton(e) {
    this.setState({
      isHidden: true
    })
  }

  selectButton(e) {
    const audio = document.querySelector('.toggle audio');
    if (!audio.paused) {
      this.pauseAudio(audio);
    }

    const { podcast } = this.state;
    const newAudio = e.target.querySelector('audio');
    const newSrc = newAudio.getAttribute('src');
    const newEpisode = podcast.findIndex(episode => episode.audio === newSrc);

    this.setState({
      currentEpisode: newEpisode,
      isHidden: true,
      isPlaying: false,
      currentTime: 0
    })
  }


  formatTime(time) {
    return (time >= 10) ? time : `0${time}`;
  }
  // when clicking the toggle button

  /*
  PodcastApp structure
  <Podcast> wrapping container (for the entire application)
    <Vinyl> visual to display the current number of seconds (0-60) into degrees (0-360)
    <ProgressBar> visual to display the current timestamp vis-a-vis the episode's timestamp (00:00:00 / 01:09:21)

    <Controls> wrapping container (for the main buttons)
      <Button> four buttons for the play/pause, mute/volume, change speed rate, stop functionalities

    <Time> paragraph nesting two pan elements, and displaying the current timestamp vis-a-vis the episode's timestamp
    <Title> with the title of the episode currently being played

    <Button> for the more episodes functionality

    <MoreEpisodes> wrapping container for more episodes
      <Episodes> wrapping container for the actual episodes
        <Episode> wrapping container for each episode
          <Title> of the episode
          <Date> of the episode
          <Duration> of the episode
          <Button> selecting the episode

      <Button> to close the more episodes panel

  */
  render() {
    const { podcast, currentEpisode, currentTime, speedRate, speedOption, isPlaying, isMute, isHidden } = this.state;

    // for the vinyl, detail the rotation according to the number of seconds (0-60)
    const timeStamp = {
      hours: 0,
      minutes: 0,
      seconds: Math.round(currentTime)
    }
    while (timeStamp.seconds >= 60) {
      timeStamp.seconds -= 60;
      timeStamp.minutes += 1;
    }
    while (timeStamp.minutes >= 60) {
      timeStamp.minutes -= 60;
      timeStamp.hours += 1;
    }

    const { hours, minutes, seconds } = timeStamp;

    return (
      <Podcast className="PodcastApp">
        <Vinyl progress={Math.round(currentTime)} />
        {
          podcast[currentEpisode] ?
            <ProgressBar progress={Math.round(currentTime / podcast[currentEpisode].duration * 100)} />
            :
            <ProgressBar progress={0} />
        }

        <Controls>
          <ToggleButton className="toggle" onClick={this.toggleButton}>
            {
              isPlaying ?
                <SVGIcons icon="pause" />

                :

                <SVGIcons icon="play" />
            }
            {
              podcast[currentEpisode] &&
              <audio src={podcast[currentEpisode].audio} />
            }
          </ToggleButton>

          <Button onClick={this.volumeButton}>
            {
              isMute ?
                <SVGIcons icon="mute" />

                :

                <SVGIcons icon="volume" />
            }
          </Button>

          <SpeedButton onClick={this.speedButton}>
            {
              speedRate[speedOption]
            }
          </SpeedButton>

          <Button onClick={this.stopButton}>
            <SVGIcons icon="stop" />
          </Button>
        </Controls>

        <Time>
          {
            podcast[currentEpisode] ?
              <span>{podcast[currentEpisode].duration >= 3600 ? `${this.formatTime(hours)}:${this.formatTime(minutes)}:${this.formatTime(seconds)}` : `${this.formatTime(minutes)}:${this.formatTime(seconds)}`}</span>
              :
              <span>00:00:00</span>
          }
          {/* <span>{Object.values(timeStamp).map(time => time >= 10 ? time : `0${time}`).join(':')}</span> */}
          /
          {
            podcast[currentEpisode] ?
              <span>{podcast[currentEpisode].time}</span>
              :
              <span>00:00:00</span>
          }
        </Time>

        {
          podcast[currentEpisode] ?
            <Title>
              {podcast[currentEpisode].title}
            </Title>
            :
            <Title>
              Fetching latest episode
            </Title>
        }

        <MoreButton onClick={this.moreButton}>
          <SVGIcons icon="more" />
        </MoreButton>

        <MoreEpisodes className={isHidden ? 'hidden' : ''}>
          <Episodes>
            {
              podcast &&
              podcast.map(episode => {
                const { title, date, duration, audio } = episode;

                return (
                  <Episode key={title}>
                    <EpisodeTitle>{title}</EpisodeTitle>
                    <EpisodeDate>{date}</EpisodeDate>
                    <EpisodeDuration>{Math.floor(duration / 60)} mins</EpisodeDuration>
                    <EpisodeButton onClick={this.selectButton}>
                      <SVGIcons icon="play" />
                      <audio src={audio} />
                    </EpisodeButton>
                  </Episode>
                );
              })
            }
          </Episodes>
          <CloseButton onClick={this.closeButton}>
            Close
          </CloseButton>
        </MoreEpisodes>

      </Podcast>
    );
  }
}

export default PodcastApp;
