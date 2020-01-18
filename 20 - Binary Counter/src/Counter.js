import React from 'react';
import LightBulb from './LightBulb';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      DIGITS: 8,
      count: 0,
      interval: 0,
    }
  }

  componentDidMount() {
    const interval = setInterval(() => {
      const {count, DIGITS} = this.state;
      this.setState({
        count: count >= 2 ** DIGITS ? 0 : count + 1
      })
    }, 1000)
    this.setState({interval})
  }
  componentWillUnmount() {
    clearInterval(this.state.interval)
  }

  render() {
    const { count, DIGITS } = this.state;

    const binary = count
                    // to binary
                    .toString(2)
                    // padded to have an arbitrary number of digits
                    .padStart(DIGITS, "0")
                    // to an array
                    .split("")
                    .map((value, index, { length }) => ({
                      key: index,
                      hue: 360 - (360 / length * index),
                      isOn: value === "1",
                    }))
    return (
      <div>
        {
          // render one svg for each value
          binary.map(({key, hue, isOn}) => <LightBulb key={key} hue={hue} isOn={isOn} />)
        }
      </div>

    );
  }
}

export default Counter;
