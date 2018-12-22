import React from 'react';
import SVGIcons from './SVGIcons.js';
import styled, { css } from 'styled-components';

const Episode = styled.div`
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

  ${({ toggle }) => toggle && css`
    grid-column: 1/-1;
    width: 56px;
    height: 56px;
  `}

  ${({ speed }) => speed && css`
    font-family: inherit;
    &:after {
      content: 'x';
    }
  `}

  ${({ more }) => more && css`
    // font-family: inherit;
    // &:after {
    //   content: 'x';
    // }
  `}


  &: hover {
  background: rgba(255, 255, 255, 0.15);
}
`;
const Timing = styled.p`
  margin: 1rem 0 2rem;
  span {
    margin: 0 0.3rem;
  }
`;



const CurrentEpisode = ({ audio, buttons }) => {
  return (
    <Episode>
      <ProgressBar />
      <Controls>
        <Button toggle>
          <SVGIcons icon="play" />
          <audio src={audio} />
        </Button>

        <Button>
          <SVGIcons icon="volume" />
        </Button>

        <Button speed>1</Button>

        <Button>
          <SVGIcons icon="stop" />
        </Button>

      </Controls>

      <Timing>
        <span>00:00:00</span>
        /
        <span>01:09:12</span>
      </Timing>

      <h2>
        Ep. 51: Erica Peterson, founder, entrepreneur, and mother
      </h2>

      <Button more>
        <SVGIcons icon="more" />
      </Button>
    </Episode>
  );
}

export default CurrentEpisode;
