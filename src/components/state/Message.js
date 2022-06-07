import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to Message Session",
      clicked: false,
    };
  }

  changeState() {
    this.setState({ message: "Thanks for subscribing us!" });
    this.setState({ clicked: true });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => this.changeState()}
          disabled={this.state.clicked}
        >
          {this.state.clicked ? "Subscribed" : "Subscribe"}
        </button>
      </>
    );
  }
}

export default Message;
