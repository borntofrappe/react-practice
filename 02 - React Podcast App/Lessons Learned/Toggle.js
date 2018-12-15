import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div className="Toggle">
        {
          this.state.on &&
          this.props.children
        }
        <button onClick={this.toggle}>Show || Hide</button>
      </div>
    );
  }
}

export default Toggle;
