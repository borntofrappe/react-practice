import React, { Component } from 'react';

class ToggleRPC extends Component {
  // define the values and methods used by the component
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  // instead of returning an Element, return a function in _children_
  // this is picked up as the function is then introduced _inside_ of the component
  render() {
    const { children } = this.props;
    // passing as arguments the specified variable and method
    return children({
      on: this.state.on,
      toggle: this.toggle
    });
  }
}

export default ToggleRPC;
