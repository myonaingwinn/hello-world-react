import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Hello, world!" };

    // this.clickHandlerAsProperty.bind(this); // you cann bind() here
  }

  clickHandlerAsProperty() {
    this.setState({
      message: "Hello, as Property!",
    });
    console.log(this);
  }

  clickHandlerAsArrow = () => {
    this.setState({
      message: "Hello, as Arrow()!",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandlerAsProperty.bind(this)}>
          Click me to bind
        </button>
        <br />
        <button onClick={() => this.clickHandlerAsArrow()}>
          Click me with arrow
        </button>
        <br />
        <button onClick={this.clickHandlerAsArrow}>Click me (Arrow)</button>
      </div>
    );
  }
}

export default EventBind;
