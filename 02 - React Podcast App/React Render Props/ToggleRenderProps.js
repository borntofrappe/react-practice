import React, { Component } from 'react';

class ToggleRenderProps extends Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    const { render } = this.props;
    const { on } = this.state;
    const { toggle } = this;

    return (
      <div className="ToggleRenderProps">
        {
          render({ on, toggle })
        }
      </div>
    );
  }
}

export default ToggleRenderProps;
