import React, { Component } from 'react';
import styled from 'styled-components';
import SVGIcons from './SVGIcons.js';

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
`;

const CurrentEpisode = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ProgressBar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(to right, #006400, #006400 0%, #fff 0%);
  margin-bottom: 2rem;
`;
const Controls = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1.5rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
`;
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

const SpeedButton = styled(Button)`
  font-family: inherit;
  &:after {
  content: 'x';
  }
`;

const MoreButton = styled(Button)`
  align-self: flex-end;
  margin-top: -1rem;
`;

const Time = styled.p`
  margin: 1rem 0 2rem;
  span {
    margin: 0 0.3rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;

`;
// in a wrapping container detail a div just for aesthetics
// below this empty div, add the  components responsible for the application
class PodcastApp extends Component {
  // in the state detail the audio file
  constructor(props) {
    super(props);
    this.state = {
      podcast: [],
      speedRate: [1, 1.5, 1.75, 2, 2.5, 3],
      speedOption: 0,
      intervalID: 0,
      isPlaying: false,
      isMute: false
    };
    // bind the methods called when clicking the buttons of the application
    this.toggleButton = this.toggleButton.bind(this);
    this.stopButton = this.stopButton.bind(this);
    this.volumeButton = this.volumeButton.bind(this);
    this.speedButton = this.speedButton.bind(this);
  }


  // function parsing the RSS feed, called as the components mount
  parseFeed(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'application/xml');

    const items = doc.querySelectorAll('item');

    /* this.state.podcast ought to be an array of objects with the following structure
      {
        title,
        audio,
        pubdate,
        duration
      }
    */
    const podcast = [];
    for (let i = 0; i < items.length; i += 1) {
      const { textContent: title } = items[i].querySelector('title');
      const audio = items[i].querySelector('enclosure').getAttribute('url');
      const { textContent: pubDate } = items[i].querySelector('pubDate');
      const date = new Date(pubDate);

      const { textContent: time } = items[i].querySelector('enclosure').nextElementSibling;

      const timeComponents = time.split(':');
      const [, minutes, hours] = timeComponents.reverse();

      const totalMinutes = (hours) ? parseInt(hours, 10) * 60 + parseInt(minutes, 10) : parseInt(minutes, 10);

      podcast.push({
        title,
        audio,
        date: date.toDateString(),
        totalMinutes
      });
    }

    this.setState({
      podcast
    })
  }

  // when the components are mount(ed) retrieve the information from the RSS feed
  // using the parseFeed function
  componentDidMount() {
    const URL = 'https://podcast.freecodecamp.org/rss';

    fetch(URL)
      .then(response => response.text())
      .then(text => this.parseFeed(text));
  }

  // utility functions called to enable the functionalities behind the buttons
  playAudio(audio) {
    const { speedOption, speedRate } = this.state;
    audio.play();
    audio.playbackRate = speedRate[speedOption];
  }
  pauseAudio(audio) {
    audio.pause();
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
    e.preventDefault();

    const { isPlaying } = this.state;
    const audio = document.querySelector('audio');

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
    e.preventDefault();
    const { isMute } = this.state;
    const audio = document.querySelector('audio');
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
    e.preventDefault();
    const { speedOption, speedRate } = this.state;
    const { length } = speedRate;
    const audio = document.querySelector('audio');

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
    e.preventDefault();
    const audio = document.querySelector('audio');
    this.pauseAudio(audio);
    audio.currentTime = 0;
    this.setState({
      isPlaying: false
    })
  }

  // when clicking the toggle button

  render() {
    const { podcast, isPlaying, isMute, speedRate, speedOption } = this.state;
    return (
      <Podcast className="PodcastApp">
        <Vinyl />
        <CurrentEpisode>
          <ProgressBar />

          <Controls>
            <ToggleButton onClick={this.toggleButton}>
              {
                isPlaying ?
                  <SVGIcons icon="pause" />

                  :

                  <SVGIcons icon="play" />
              }
              {
                podcast[0] &&
                <audio src={podcast[0].audio} />
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
            <span>00:00:00</span>
            /
            <span>01:09:12</span>
          </Time>

          {
            podcast[0] ?
              <Title>
                {podcast[0].title}
              </Title>
              :
              <Title>
                Fetching latest episode
              </Title>
          }
        </CurrentEpisode>

        <MoreButton>
          <SVGIcons icon="more" />
        </MoreButton>
      </Podcast>
    );
  }
}

export default PodcastApp;
