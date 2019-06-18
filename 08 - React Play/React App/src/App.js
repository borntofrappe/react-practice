import React, { Component } from 'react';
import data from './data/data.js';
import Card from './Card';
import { Carousel } from './style/components';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riders: [], // rider's info
      predictions: [], // questions and options
      selections: [], // selections for the predictions
    }
    // bind the functions updating the selections array
    this.selectOption = this.selectOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  // update the state with the data from the f1Teams and f1Prediction objects
  componentDidMount() {
    const {f1Teams, f1Predictions} = data;

    // ! for the teams the application actually needs an array of riders instead of teams
    /* desired data structure
    [
      {
        name: {
          first: 'Lewis',
          last: 'Hamilton'
        },
        team: 'Mercedes',
        color: '#00D2BE',
        number: 44,
      },
      ...
    ]
    */
    const { teams } = f1Teams;
    // reduce to return a single array
    const riders = teams.reduce((acc, curr) => {
      // retrieve the team name, color and composition
      const { name: team, color, riders: composition} = curr;
      // for each team create an array of 2 objects, representing the riders
      const teamRiders = composition.map(({ name, number}) => ({
        name: {
          first: name.first,
          last: name.last
        },
        // ! include the team's name and color from the parent object
        team,
        color,
        number,
      }));
      // spread the two objects to return a single array with every rider
      return [...acc, ...teamRiders]
    }, []);

    // ! for the predictions retrieve the array of predictions and substitute the options' integers with the matching rider
    const { predictions } = f1Predictions;
    predictions.forEach(prediction => {
      const {options} = prediction;
      prediction.options = options.map(number => riders.find(rider => parseInt(rider.number, 10) === parseInt(number, 10)));
    });

    // update the riders and predictions arrays with the actual data
    // update the selections array to contain as many items as there are predictions
    const selections = Array(predictions.length).fill('');
    this.setState({
      riders,
      predictions,
      selections,
    });
  }

  // function called on scroll, to focus one card at a time
  handleScroll() {
    // target the carousel and the nested cards
    const carousel = document.querySelector('.Carousel');
    const cards = carousel.querySelectorAll('.Card');

    // retrieve the distance being scrolled and the width of the carousel, to focus on the card placed in the middle of the viewport
    const {scrollLeft: fromLeft, offsetWidth: fromWidth} = carousel;

    // add .rotate classes to the cards positioned before and after the center of the screen, minus plus the size of the card
    cards.forEach(card => {
      card.classList.remove('rotate', 'rotate-left', 'rotate-right');
      const {offsetLeft: left, offsetWidth: width } = card;
      // 40 to consider the whitespace around the cards, and to always focus on at least one card
      if(fromLeft + fromWidth / 2 < left - 40) {
        card.classList.add('rotate', 'rotate-left');
      }
      if(fromLeft + fromWidth / 2 > left + width + 40) {
        card.classList.add('rotate', 'rotate-right');
      }
    });
  }

  // once the components are set up listen for a scroll event on the carousel
  componentDidUpdate() {
    const carousel = document.querySelector('.Carousel');
    carousel.addEventListener('scroll', this.handleScroll);
    // immediately call the handle scroll function to focus on the first card
    this.handleScroll();
  }

  // functions updating the selections array

  // select
  // the function receives as argument the index of the card being clicked as well as the object representing the rider
  selectOption(index, option) {
    const {selections} = this.state;
    selections[index] = option;

    this.setState({
      selections,
    });
  }

  // remove
  // the function receives as argument the index of the selected option
  removeOption(index) {
    const {selections} = this.state;
    selections[index] = '';
    this.setState({
      selections,
    })
  }

  // render one card for each prediction, passing along the matching selection
  render(){
    const { predictions, selections } = this.state;

    return(
      <Carousel className="Carousel">
        {
          predictions.map((card, index) => (
            <Card
              key={index}
              prediction={card}
              selected={selections[index]}
              index={index}
              total={predictions.length}
              selectOption={this.selectOption}
              removeOption={this.removeOption}/>
          ))
        }
      </Carousel>
    );
  }
}

export default App;
