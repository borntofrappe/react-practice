import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

// include the details followed by a non-wrapping, overflowing row of buttons
const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0.25rem;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    border-radius: 5px;
  }
`;
const DetailsHeading = styled.h4`
  font-weight: 700;
  font-size: 1rem;
  padding: 0.5rem 0;
`;
const DetailsButton = styled.button`
  flex-shrink: 0;
  background: none;
  font-family: inherit;
  font-size: 0.7rem;
  color: hsl(0, 0%, 70%);
  border: 1px solid currentColor;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  margin: 0 0.5rem;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.35rem;
    pointer-events: none;
  }
`;
// for each selected seat include a button with the close icon
const Details = ({selectedSeats = [], removeSeat}) => {
  // {
  //   seat: 4,
  //   price: '$6',
  // },

  // in the button include the text in the following format
  // row: 7 seat: 4 price: $16
  return(
    <DetailsContainer>
      <DetailsHeading>Details</DetailsHeading>
      {
        selectedSeats.map(selectedSeat => {
          const entries = Object.entries(selectedSeat);
          return <DetailsButton onClick={removeSeat} key={entries[0][1]} data-index={entries[0][1]}>
            {
              entries.map(([property, value]) => `${property}: ${value}`).join(' ').trim()
            }
            <Icon href="close" size="12" />
          </DetailsButton>;
        })
      }
    </DetailsContainer>
  );
}

export default Details;