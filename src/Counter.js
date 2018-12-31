import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: this.props.init
  };

  static defaultProps = {
      init: 0
  }

  handleIncrement() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  handleDecrement() {
    if (this.state.counter > this.props.init) {
      this.setState(prevState => ({
        counter: prevState.counter - 1
      }));
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleDecrement()}>-</button>
        <span>{this.state.counter}</span>
        <button onClick={() => this.handleIncrement()}>+</button>
      </div>
    );
  }
}

export default Counter
