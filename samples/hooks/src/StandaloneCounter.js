import React from 'react';

class StandaloneCounter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value || 0 };

    this.increaseCounter = this.increaseCounter.bind(this);
  }

  increaseCounter() {
    this.setState({ ...this.state, value: this.state.value + 1 });
  }

  render() {
    return (
      <div className="counter standalone">
        <div>Current counter value is {this.state.value}.</div>
        <button onClick={this.increaseCounter}>
          Click here to increase value.
        </button>
      </div>
    );
  }
}

export default StandaloneCounter;
