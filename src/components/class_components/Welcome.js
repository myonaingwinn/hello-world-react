import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log("Welcome", this.props);
    return <h1>Welcome Class Component, {this.props.name}!</h1>;
  }
}

export default Welcome;
