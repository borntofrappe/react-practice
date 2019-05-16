import React, {Component} from 'react';
import styled from 'styled-components';
import SVGIcons from './SVGIcons.js';
import Phone from './Phone.js';

// container describing a wrapping row
const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
// create a function which returns a random item from an array
const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// app component to manage the state of the application and render the phone screen(s)
class App extends Component {
  constructor(props) {
    super(props);
    /**
     * seats describing the actual values
     * possibleSeats describing the possible values
     * selectedSeats describing the seat with the matching attribute
     * total to indicate the sum
     */
    this.state = {
      seats: [],
      possibleSeats: ['available', 'reserved'],
      selectedSeats: [],
      total: 0,
      price: 6,
    }
    // toggleSeat function tied to each button in the theater component
    this.toggleSeat = this.toggleSeat.bind(this);
    // removeSeat function tied to each button in the detail component
    this.removeSeat = this.removeSeat.bind(this);

    // update state to have the seats array update the selectedSeats and the total as well
    this.updateState = this.updateState.bind(this);
  }

  updateState(seats) {
    const { price } = this.state;
    // compute the total as 6 bucks for each selected seat
    const total = seats.reduce((acc, curr) => {
      const isSelected = curr === 'selected';
      return isSelected ? acc + price : acc;
    }, 0);

    // estimate the selected seats considering the
    const selectedSeats = [];
    seats.forEach((seat, index) => {
      if(seat === 'selected') {
        selectedSeats.push({
          seat: index,
          price: `$${price}`
        })
      }
    })
    // update the state
    this.setState({
      seats,
      total,
      selectedSeats,
    });
  }

  // function to select/de select an available seat
  toggleSeat(e) {
    // retrieve the button and the indicative attributes
    const { target } = e;
    const seatIndex = target.getAttribute('data-index');
    const seatStatus = target.getAttribute('data-status');

    // if reserved pre-emptively return the function
    if(seatStatus === 'reserved') {
      return false;
    } else {
      // else retrieve the previous array, include in its place the value opposite to the existing one
      const { seats: prevSeats } = this.state;
      const index = Number.parseInt(seatIndex, 10);
      const status = seatStatus === 'available' ? 'selected' : 'available';
      // update the data attribute
      target.setAttribute('data-status', status);
      // update the seats array
      const seats = [...prevSeats.slice(0, index), status, ...prevSeats.slice(index + 1)];

      // call a function to update the state on the basis of the new array
      this.updateState(seats);
    }
  }

  // function to remove the seat selected in the details component
  removeSeat(e) {
    // retrieve the index through the data attribute
    const { target } = e;
    const seatIndex = target.getAttribute('data-index');
    // update the state removing the selected item
    const { seats: prevSeats } = this.state;
    const index = Number.parseInt(seatIndex, 10);
    const seats = [...prevSeats.slice(0, index), 'available', ...prevSeats.slice(index + 1)];

    this.updateState(seats);
  }

  // when the component mounts update the seats array filling it with 88 values using the possibleSeats options
  componentDidMount() {
    const { possibleSeats } = this.state;
    const seats = [];
    for(let i = 0; i < 88; i +=1) {
      seats.push(randomItem(possibleSeats));
    }
    this.setState({
      seats,
    })
  }
  // render the phone screen(s) in the wrapping container, following the SVG component including the symbol elements for the icons
  render() {
    const { seats, total, selectedSeats } = this.state;
    return(
      <Main>
        <SVGIcons />
        <Phone theme="light" total={total} seats={seats} toggleSeat={this.toggleSeat} removeSeat={this.removeSeat} selectedSeats={selectedSeats} />
        <Phone theme="dark" total={total} seats={seats} toggleSeat={this.toggleSeat} removeSeat={this.removeSeat} selectedSeats={selectedSeats} />
      </Main>
    );
  }
}
export default App;
