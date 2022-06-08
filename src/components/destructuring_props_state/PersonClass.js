import React, { Component } from "react";

class PersonClass extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <h2>
        Welcome to <code>MonoCode</code>, {name}! You're now {age}.
      </h2>
    );
  }
}

export default PersonClass;
