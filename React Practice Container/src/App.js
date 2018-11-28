import React, { Component } from 'react';
import './css/App.css';
import styled, { keyframes } from 'styled-components';

const translateGradient = keyframes`
  100% {
    background-position-x: -300%;
  }
`;

const Heading = styled.h1`
  color: var(--color-text);
  font-size: calc(3rem + 1vw);
  background: linear-gradient(
    120deg,
    var(--color-bg-s) 0,
    var(--color-bg-s) 35%,
    var(--color-bg-m) 35%,
    var(--color-bg-m) 70%,
    var(--color-bg-e) 70%,
    var(--color-bg-e) 90%,
    var(--color-bg-s) 90%
  );
  background-size: 300% 100%;
  background-position-x: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${translateGradient} infinite alternate ease-in-out 4s;
`;

const ProjectButton = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: relative;
  line-height: 100%;
  text-align: center;
  font-size: calc(1rem + 1.5vw);
  color: #ffffffaa;
  transition: all 0.2s ease-out;

  &:hover {
    color: #fff;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(
      to bottom right,
      var(--color-bg-s),
      var(--color-bg-e)
    );
    z-index: -100;
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: var(--color-bg);
    z-index: -100;
    transition: all 0.2s ease-out;
  }
  &:hover:after {
    margin: 7px;
  }
`;

const AboutButton = styled.button`
  font-size: 1.75rem;
  font-family: inherit;
  color: inherit;
  background: none;
  border: none;
  opacity: 0.75;
  transition: opacity 0.25s ease-out;

  &:hover {
    opacity: 1;
  }
`;
const TwitterLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  opacity: 0.75;
  transition: opacity 0.25s ease-out;

  &:hover {
    opacity: 0.9;
  }

`;
// in the main component render two headings at either side of the top of the page
// below them render a grid of 30+ items
// finally render an anchor links forwarding toward a twitter profile
class App extends Component {
  constructor(props) {
    super(props);
    // currently detail in  the state a single number, to add as many grid items as speified
    // later the grid items will benefit from a more descriptive state, describing the projects and a forwarding URL
    this.state = {
      projects: 31
    }
  }
  render() {
    const grid = Array(31).fill(null);
    const gridElements = grid.map((project, index) => <ProjectButton key={index}>{index + 1}.</ProjectButton>);

    return (
      <div className="App">
        <header>
          <Heading>reactice</Heading>
          <AboutButton>about</AboutButton>
        </header>

        <div className="AppGrid">
          {
            gridElements
          }
        </div>

        <TwitterLink href="https://twitter.com/borntofrappe">
          twt
        </TwitterLink>
      </div>
    );
  }
}

export default App;
