import React, { Component } from 'react';
import AppOutput from './AppOutput';
import AppInput from './AppInput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {
        name: '',
        sprite: ''
      },
      input: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updatePokemon(pokemon) {
    const { name } = pokemon;
    const { front_default: sprite } = pokemon.sprites
    this.setState({
      pokemon: {
        name,
        sprite
      }
    });
  }
  componentDidMount() {
    const randomInt = Math.ceil(Math.random() * 300);
    const url = `https://pokeapi.co/api/v2/pokemon/${randomInt}/`;
    fetch(url)
      .then(promise => promise.json())
      .then(json => this.updatePokemon(json));
  }
  handleSubmit(e) {
    e.preventDefault();
    // const { input } = this.state;
    // const { name } = this.state.pokemon;
    const headings = document.querySelectorAll('.AppOutput h2');
    const image = document.querySelector('.AppOutput img');

    headings.forEach(heading => heading.classList.add('answer'));
    image.classList.add('answer');
    image.parentElement.classList.add('answer');
    this.setState({
      input: ''
    });
  }
  handleChange(e) {
    const { value: input } = e.target;
    this.setState({
      input: input
    })
  }

  render() {
    return (
      <div className="App">
        <AppOutput pokemon={this.state.pokemon} />
        <AppInput input={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
