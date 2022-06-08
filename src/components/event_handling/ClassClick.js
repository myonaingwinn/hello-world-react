import React, { Component } from "react";

class ClassClick extends Component {
  handleClick = () => {
    console.log("You clicked, in class!");
  };

  render() {
    const anotherWay = () => {
      console.log("You clicked, anotherWay()!");
    };

    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <br />
        <button onClick={anotherWay}>Click me (anotherWay)</button>
      </div>
    );
  }
}

export default ClassClick;
