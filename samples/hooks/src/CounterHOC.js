import React from 'react';

function withCounter(InnerComponent) {
  return class extends React.PureComponent {
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
        <InnerComponent
          value={this.state.value}
          increaseCounter={this.increaseCounter}
          {...this.props}
        />
      );
    }
  };
}

export default withCounter;
