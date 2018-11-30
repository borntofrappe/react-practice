import React, { Component } from 'react';

/* import the components used by the application
- AppOutput, displaying the pokemon and introductory elements
- AppInput, for the form element evaluating user input
- AppResult, showing the button to trigger a new round (and techincally not the actual result)
*/
import AppOutput from './AppOutput';
import AppInput from './AppInput';
import AppResult from './AppResult';

class App extends Component {
  constructor(props) {
    super(props);
    // in the state detail an object for the pokemon, its name and sprite
    // add also the url for the api call as well as the value controlling the input element and a boolean showing the input/result component
    this.state = {
      pokemon: {
        name: '',
        sprite: ''
      },
      url: 'https://pokeapi.co/api/v2/pokemon/',
      input: '',
      result: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // update pokemon fuction
  // input: json object returned from the API call
  updatePokemon(pokemon) {
    // destructure the necessary values
    const { name } = pokemon;
    const { front_default: sprite } = pokemon.sprites;

    // update the state to the accrued values
    // additionally toggle the boolean to show the input instead of result
    this.setState({
      pokemon: {
        name,
        sprite
      },
      result: false
    });

    // select the header showing the answer and the image showing the pokemon
    const heading = document.querySelector('.AppOutput h2');
    const image = document.querySelector('.AppOutput img');

    // after a specified timeout, show the label describing pokemon and show the image in which the sprite is used
    const timeoutID = setTimeout(() => {
      heading.textContent = 'Pokemon';
      heading.style.opacity = 1;
      image.parentElement.style.transform = 'scale(1)';
      clearTimeout(timeoutID);
    }, 750);
  }

  // when the components are mounted fetch a value from the specified URL, and call a function to update the UI
  componentDidMount() {
    const randomInt = Math.ceil(Math.random() * 150);
    fetch(`${this.state.url}/${randomInt}/`)
      .then(promise => promise.json())
      .then(json => this.updatePokemon(json));
  }

  // handle submit function
  // called in response to a submit event (on the form)
  handleSubmit(e) {
    // prevent the default behavior and retrieve the input/name values
    e.preventDefault();
    const { input } = this.state;
    const { name } = this.state.pokemon;
    // update the state to show the input component and remvoe the value held by the input element
    this.setState({
      input: '',
      result: true
    });

    // target the heading and image to style them into view and according to the specupdated values
    const heading = document.querySelector('.AppOutput h2');
    const image = document.querySelector('.AppOutput img');

    // hide the pokemon label
    heading.style.opacity = 0;
    // after a specified amount of time show the name of the pokemon and show the image
    // opacity is altered directly (as it'd otherwise conflict with the Spring animation)
    // the image elment is styled by adding/removing a class
    const timeoutID = setTimeout(() => {
      // label
      heading.textContent = name;
      heading.style.opacity = 1;
      heading.style.transform = 'rotate(360deg)';
      // image
      image.classList.add('answer');
      if (name.toLowerCase() === input.toLowerCase()) {
        image.parentElement.classList.add('correct');
      } else {
        image.parentElement.classList.add('incorrect');
      }
      clearTimeout(timeoutID);
    }, 750);
  }

  // hande change function, updating the input as the user types in the specified element
  // making the element a controlled element
  handleChange(e) {
    const { value: input } = e.target;
    this.setState({
      input: input
    })
  }

  // handle click function, removing the pokemon (name and image) and triggering a new call to the API
  handleClick(e) {
    const heading = document.querySelector('.AppOutput h2');
    const image = document.querySelector('.AppOutput img');
    heading.style.opacity = 0;
    image.classList.remove('answer');
    image.parentElement.classList.remove('correct');
    image.parentElement.classList.remove('incorrect');
    image.parentElement.style.transform = 'scale(0)';

    // call to the API matching the one specified in the componentDidMount function
    const randomInt = Math.ceil(Math.random() * 150);
    fetch(`${this.state.url}/${randomInt}/`)
      .then(promise => promise.json())
      .then(json => this.updatePokemon(json));
  }

  // in a wrapping div render the components passing the necessary values
  render() {
    const { pokemon, input, result } = this.state;
    return (
      <div className="App">
        <AppOutput pokemon={pokemon} />
        {/* depending on the boolean variable show the input or the result */}
        {
          result
            ?
            <AppResult handleClick={this.handleClick} />
            :
            <AppInput input={input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        }

      </div>
    );
  }
}

export default App;
