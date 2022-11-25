import React, { Component } from "react";
class ClassClick extends Component {
  state = {};
  clickHandler() {
    console.log("ClassClick Clicked");
  }
  render() {
    return (
      <div>
        <p>ClassClick</p>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
