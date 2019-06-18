import React, { Component } from 'react';
import data from './data/data.js';
import Card from './Card';
import { Carousel } from './style/components';

/* state management
- define empty arrays for the riders and predictions
- when the component is mounted include the actual data from `data.js`, as if retrieved from an API
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      riders: [],
      predictions: [],
      selection: [], // array to keep track of the selection for each prediction
    }
  }

  // include in the state the pertinent data from the f1Teams and f1Prediction objects
  componentDidMount() {
    const {f1Teams, f1Predictions} = data;
    // for the predictions retrieve the array of predictions
    const { predictions } = f1Predictions;

    // ! for the teams the application actually needs an array of riders instead of teams
    /* desired data structure
    [
      {
        name: 'Lewis Hamilton',
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

    // update the riders and predictions arrays with the actual data
    this.setState({
      riders,
      predictions,
    })
  }

  // function called on scroll, to focus one card at a time
  handleScroll() {
    // target the carousel and the nested cards
    const carousel = document.querySelector('.Carousel');
    const cards = carousel.querySelectorAll('.Card');

    // retrieve the distance being scrolled and the width of the carousel, to focus on the card placed in the middle of the container
    const {scrollLeft: fromLeft, offsetWidth: fromWidth} = carousel;

    // add .rotate classes to cards which are located before and after the center of the screen, minus plus the size of the card
    cards.forEach(card => {
      card.classList.remove('rotate', 'rotate-left', 'rotate-right');
      const {offsetLeft: left, offsetWidth: width } = card;
      // 45 to consider the whitespace around the cards, and to always focus on at least one card
      if(fromLeft + fromWidth / 2 < left - 45) {
        card.classList.add('rotate', 'rotate-left');
      }
      if(fromLeft + fromWidth / 2 > left + width + 45) {
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

  // render the card passing through props a specific question
  render(){
    /* the idea is to pass an object structured as follows
    {
      "name": "Who will top the podium?",
      "options": [
        44,
        77,
        5,
        16,
        33,
        10
      ]
    },

    in stead of the integers though, the options property specifies the name of the matching rider
    */
    const { predictions, riders } = this.state;
    const cards = [];
    // if prediction describes more than an empty array
    if(predictions.length > 0) {
      predictions.forEach(prediction => {
        const {options} = prediction;
        prediction.options = options.map(number => riders.find(rider => parseInt(rider.number, 10) === parseInt(number, 10)));
        cards.push(prediction);
      });
    }
    return(
      <Carousel className="Carousel">
        {
          cards.map((card, idx) => (
            <Card
              key={idx}
              prediction={card}
              index={idx}
              total={predictions.length}/>
          ))
        }
      </Carousel>
    );
  }
}

export default App;
