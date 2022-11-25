import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("count:" + this.state.count);
      }
    );
  }
  decrement() {
    this.setState({
      count: this.state.count <= 0 ? 0 : this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        count :{this.state.count}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}

export default Counter;
