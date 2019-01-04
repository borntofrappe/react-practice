import React, { Component } from 'react';
import styled from 'styled-components';
// import the components in which the application is structured
import PodcastProgress from './PodcastProgress.js';
import PodcastControls from './PodcastControls.js';
import PodcastTime from './PodcastTime.js';
import PodcastTitle from './PodcastTitle.js';
import PodcastMore from './PodcastMore.js';

// import the component responsible for the SVG icons
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
  background: var(--color-primary-l);
  position: relative;
`;

// visual displaying a makeshift vinyl, rotated as the audio progresses to match the number of seconds (0-60)
const PodcastVinyl = styled.div`
  margin: 1rem;
  width: calc(10rem + 2.5vw);
  height: calc(10rem + 2.5vw);
  border-radius: 50%;
  background: linear-gradient(
      to bottom right,
      transparent,
      var(--colot-text-tt),
      transparent
    ),
    url("https://d33wubrfki0l68.cloudfront.net/cce87b74a290f321f582cb56a12007343ff2d77e/bb9e6/img/glyph.png"),
    repeating-radial-gradient(var(--color-primary) 0, var(--color-primary) 3px, #007e00 4px);
  background-repeat: no-repeat;
  background-size: 100%, 50%, 100%;
  background-position: 0%, 50% 50%, 100%;
  box-shadow: 0 1px 5px rgba(0, 100, 0, 0.7);
  transform: ${props => `rotate(${props.progress * 6}deg)`};
  transition: transform 1s linear;
`;


// all buttons share a common set of property-value pairs
const Button = styled.button`
  width: 48px;
  height: 48px;
  background: none;
  padding: 0.5rem;
  border-radius: 50%;
  color: var(--color-text);
  border: 1.2px solid var(--color-text-t);
  transition: all 0.2s ease-out;

  &: hover {
  background: var(--color-text-ttt);
}
`;

// last button laid to the right of the application
const MoreButton = styled(Button)`
  align-self: flex-end;
`;


class PodcastApp extends Component {
  /* in the state detail
    URL, forwarding toward the page storing the information of the RSS feed
    episodes, array tobe filled with one object for each episode
    currentEpisode, in order to highlight the currently selected/playing episode
    currentTime, to keep track of the time and highlight it throughout the application
    speedRate and speedOption, allowing a change in the speed rate of the audio
    isPlaying, isMute, isHidden, bollean values to toggle the buttons and the panel nesting more episodes
  */
  constructor(props) {
    super(props);
    this.state = {
      URL: 'https://podcast.freecodecamp.org/rss',
      episodes: [],
      currentEpisode: 0,
      currentTime: 0,
      speedRate: [1, 1.5, 2, 2.5, 3],
      speedOption: 0,
      isPlaying: false,
      isMute: false,
      isHidden: true,
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


  // function parsing the RSS feed, called as the components mounts
  // input: the text of the page with the RSS feed information
  // behavior: update this.state.episodes with one object for each episode
  parseFeed(text) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'application/xml');

    /* each episode is scheduled to be structured as follows
      {
        title, title
        audio, url redirecting toward the actual sound file
        pubdate, date object matching the episode's
        duration, seconds the episode lasts
      }
    */

    // find all the episodes in <item> elements
    const items = doc.querySelectorAll('item');

    // create the desired data structure looping through each item and destructuring the required information
    const episodes = [...items].map(item => {
      // title found in a <title> element
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

      return ({
        title,
        audio,
        date: date.toDateString(),
        duration
      });
    });

    // update the state with the retrieved information
    this.setState({
      episodes
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

  // function accepting an audio element and playing it at the desired speed rate
  playAudio(audio) {
    const { speedOption, speedRate } = this.state;
    audio.play();
    audio.playbackRate = speedRate[speedOption];

    // update the UI changing the `current` time value every second
    this.intervalID = setInterval(() => {
      const { currentTime } = audio;

      this.setState({
        currentTime: Math.round(currentTime)
      })
    }, 1000);


  }

  // function accepting an audio element and pausing it
  pauseAudio(audio) {
    audio.pause();
    // clear the ongoing interval to stop the UI from updating
    clearInterval(this.intervalID);
  }

  // function accepting an audio element and setting its volume to 0
  muteAudio(audio) {
    audio.volume = 0;
  }

  // function accepting an audio element and setting its volume back to 1
  volumeAudio(audio) {
    audio.volume = 1;
  }

  // function accepting an audio element, a rate at which to run the audio and changing the audio's speed accordingly
  speedAudio(audio, playbackRate) {
    audio.playbackRate = playbackRate;
  }



  // functions called in response to click event

  // toggleButton allowing to play/pause the audio
  toggleButton(e) {
    // select the audio element in the .toggle button, play/pause it according to the starting boolean
    const { isPlaying } = this.state;
    const audio = document.querySelector('.toggle audio');

    if (!isPlaying) {
      this.playAudio(audio);
    }
    else {
      this.pauseAudio(audio);
    }

    // update the state altering the boolean's value
    this.setState({
      isPlaying: !isPlaying
    })
  }

  // volume button allowing to mute/unmute the audio
  volumeButton(e) {
    // select the audio element and change its volume acording to the original boolean
    const { isMute } = this.state;
    const audio = document.querySelector('.toggle audio');
    // call the functions to mute or unmute the audio
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

  // speed button allowing to change the playback rate
  speedButton(e) {
    // from the array detailing the different options select the one right after the current one (or the first one if the method reaches the array's end)
    const { speedOption, speedRate } = this.state;
    const { length } = speedRate;
    const audio = document.querySelector('.toggle audio');

    let newOption = speedOption + 1;

    if (newOption >= length) {
      newOption = 0;
    }

    // call the function to change the speed
    this.speedAudio(audio, speedRate[newOption]);
    // update the state with the new option
    this.setState({
      speedOption: newOption
    })
  }

  // stop button pausing the audio and setting it back to the beginning
  stopButton(e) {
    const audio = document.querySelector('.toggle audio');
    // call the function to pause the audio
    this.pauseAudio(audio);
    // change the current time to 0
    audio.currentTime = 0;

    // update the UI showing the play button
    this.setState({
      isPlaying: false,
      currentTime: 0
    })
  }

  // functions opening and closing the panel, by way of adding and removing a class on the basis of the boolean's value
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

  // select button changing the src attribute of the audio in the .toggle button to the newly selected episode
  selectButton(e) {
    const audio = document.querySelector('.toggle audio');
    // pause the audio if ongoing
    if (!audio.paused) {
      this.pauseAudio(audio);
    }

    // find the url of the new audio under the .audio property of the selected element
    const { episodes } = this.state;
    const newAudio = e.target.querySelector('audio');
    const newSrc = newAudio.getAttribute('src');
    const newEpisode = episodes.findIndex(episode => episode.audio === newSrc);

    // update the UI and add the new episode in the .toggle button
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

  render() {
    /*
    PodcastApp structure
    Vinyl (an empty div styled with styled-components)
    PodcastProgress (bar to highlight the progress)
    PodcastControls (allowing the pause/play/mute/unmute/speed up/down/stop the audio)
    PodcastTime (current point in the podcast vs the length of the same)
    PodcastTitle
    MoreButton (toggling the PodcastEpisodes visibility)
    PodcastEpisodes (additional episodes)
    */
    const { episodes, currentEpisode, currentTime, speedRate, speedOption, isPlaying, isMute, isHidden } = this.state;

    return (
      <Podcast className="PodcastApp">
        <PodcastVinyl progress={Math.round(currentTime)} />

        {/*
        for the progress bar, this needs the current number of seconds and the total number of seconds
        as the episode might not initially exist, use a ternary operator to provide a fallback value
        */}
        <PodcastProgress
          currentTime={currentTime}
          totalTime={episodes[currentEpisode] ? episodes[currentEpisode].duration : 0}
        />

        {/*
        for the panel of controls, this needs the elements necessary to enable the applications functionalities
        pass the methods of the buttons, in addition to the booleans and the speedRate variables
        pass also an src value from the current episode's audio (if existing)
        */}
        <PodcastControls
          src={episodes[currentEpisode] ? episodes[currentEpisode].audio : ''}
          toggleButton={this.toggleButton}
          volumeButton={this.volumeButton}
          speedButton={this.speedButton}
          stopButton={this.stopButton}
          isPlaying={isPlaying}
          isMute={isMute}
          speedRate={speedRate}
          speedOption={speedOption}
        />


        {/*
        for the paragraph showing the timestamp, pass the number of hours, minutes and seconds, alongside the format function
        in addition to this, pass the duration of the current episode, if existing
        */}
        <PodcastTime
          currentTime={currentTime}
          totalTime={episodes[currentEpisode] ? episodes[currentEpisode].duration : 0}
          formatTime={this.formatTime}
        />


        {/*
        for the heading displaying the title, this one requires simply the title of the current episode, if existing
        */}
        <PodcastTitle
          title={episodes[currentEpisode] ? episodes[currentEpisode].title : 'Fetching the latest episode'}
        />

        <MoreButton onClick={this.moreButton}>
          <SVGIcons icon="more" />
        </MoreButton>


        <PodcastMore
          isHidden={isHidden}
          episodes={episodes}
          selectButton={this.selectButton}
          closeButton={this.closeButton} />

      </Podcast>
    );
  }
}

export default PodcastApp;
