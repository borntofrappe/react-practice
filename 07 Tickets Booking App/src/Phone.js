import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';
import Legend from './Legend.js';
import Theater from './Theater.js';
import Checkout from './Checkout.js';
import Details from './Details.js';

// phone screen as a rounded box with a noticeable shadow
// update the custom properties according to the theme variable
const Screen = styled.div`
  --color: ${({theme}) => theme === 'light' ? '#2c2f62' : '#eee'};
  --background: ${({theme}) => theme === 'light' ? '#fff' : '#2c2f62'};
  --accent: ${({theme}) => theme === 'light' ? '#fd6d8e' : '#fcb43c'};
  border-radius: 30px;
  width: 300px;
  min-height: 500px;
  color: var(--color, #2c2f62);
  background: var(--background, #ffffff);
  padding: 2rem 2rem 1.25rem;
  box-shadow: 0 2px 10px -8px hsla(0, 0%, 0%, 0.4);
  margin: 1rem;
`;

// render the components making up the screen
// use the theme in the styled component
// pass the array of seats and the sum to the fitting components
const Phone = ({theme, seats, total, toggleSeat, removeSeat, selectedSeats}) => (
  <Screen theme={theme}>
    <Header />
    <Legend />
    <Theater seats={seats} toggleSeat={toggleSeat} />
    <Details selectedSeats={selectedSeats} removeSeat={removeSeat} />
    <Checkout total={total} />
  </Screen>
)

export default Phone;
