import React, { Component } from "react";
class Welcome extends Component {
  state = {};
  render() {
    return (
      <h1>
        Welcome {this.props.name} aka {this.props.heroname}
      </h1>
    );
  }
}

export default Welcome;
