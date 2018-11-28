import React, { Component } from 'react';
import './css/Home.css';
// use styled components for the individual elements and Link for routing
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// animate the background property altering the color of the heading
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

// button soon altered to forward toward a created project
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
  font-size: calc(1rem + 1.1vw);
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

// render the heading next to a link forwarding toward the about section
// below render a grid made up of one button for each project
// below render an anchor link element forwarding toward a twitter profile
class Home extends Component {
  render() {
    const grid = Array(31).fill(null);
    const gridElements = grid.map((project, index) => <ProjectButton key={index}>{index + 1}.</ProjectButton>);

    return (
      <div className="Home">
        <header>
          <Heading>reactice</Heading>
          <Link to="/about">about</Link>
        </header>

        <div className="HomeGrid">
          {
            gridElements
          }
        </div>

        <a href="https://twitter.com/borntofrappe">
          twt
        </a>
      </div>
    );
  }
}

export default Home;

