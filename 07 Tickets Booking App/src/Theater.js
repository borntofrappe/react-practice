import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

// render a paragraph describing the screen atop a grid describing the seats
const TheaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;
`;

const TheaterScreen = styled.p`
  text-align: center;
  text-transform: uppercase;
  padding: 0.3rem 1rem;
  color: hsl(0, 0%, 80%);
  border-radius: 20px;
  border: 1px solid currentColor;
  font-size: 0.5rem;
  letter-spacing: 0.1rem;
  background: inherit;
  position: relative;

  &:before, &:after {
    position: absolute;
    content: "";
    top: 50%;
    transform: translate(0%, -50%);
    width: 70px;
    height: 1px;
    background: currentColor;
  }
  &:before {
    right: 100%;
  }
  &:after {
    left: 100%;
  }
`;

const TheaterSeats = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(10, 18px);
  grid-template-rows: repeat(10, 18px);
  grid-gap: 0.75rem 0.3rem;
  grid-auto-flow: dense;
`;

// invisible div used to create whitespace in the grid
const FillerSeat = styled.div`
  visibility: hidden;
  opacity: 0;
  &:nth-child(2) {
    grid-column: 10/11;
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-row: 6/11;
    grid-column: 1/2;
  }
  &:nth-child(4) {
    grid-column: 10/11;
    grid-row: 6/11;
  }
`;
// actual seat highlighted through an icon
const Seat = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
  }
`;

// render the paragraph and the grid of seats with the scheduled whitespace
const Theater = ({seats = [], toggleSeat}) => {
  // four FillerSeat components, occupying the selected space in the group
  const FillerSeats = Array(4).fill('').map((item, i) => <FillerSeat key={i}/>);
  const Seats = seats.map((seat, i) => <Seat onClick={toggleSeat} data-index={i} data-status={seat} key={i}><Icon href={seat} size="16" /></Seat>)
  return(
    <TheaterContainer>
      <TheaterScreen>Screen</TheaterScreen>
      <TheaterSeats>
        {
          FillerSeats
        }
        {
          Seats
        }
      </TheaterSeats>
    </TheaterContainer>

  );
}

export default Theater;