import React, { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
        
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log(this.state.count);
  }

  render() {
    return (
      <div>
        count -{this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>decrement</button>
      </div>
    );
  }
}

export default Counter;
