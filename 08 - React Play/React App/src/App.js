import React, { Component } from 'react';
import data from './data/data.js';
import Card from './Card';

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
      index: 0, // integer to keep track of the current prediction
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
        name: `${name.first} ${name.last}`,
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

    in stead of the integers though, the options property specifies the full name of the matching rider
    */
    const { predictions, index, riders } = this.state;
    let prediction = '';
    // if prediction describes more than an empty array
    if(predictions.length > 0) {
      // include the prediction specified by the index
      prediction = predictions[index];
      // in the options property include the full name of the rider with the same number
      const {options} = prediction;
      prediction.options = options.map(number => riders.find(rider => parseInt(rider.number, 10) === parseInt(number, 10)));
    }
    return(
      <Card
        prediction={prediction}
        index={index}
        total={predictions.length}/>
    );
  }
}

export default App;
