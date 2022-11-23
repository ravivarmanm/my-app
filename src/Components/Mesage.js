import React, { Component } from "react";
class Message extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank You for Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.message} {this.props.name}
        </h1>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}

export default Message;
