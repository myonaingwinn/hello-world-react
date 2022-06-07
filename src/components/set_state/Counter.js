import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // use this 5 times, it will update state every time. But, values will be the same
  increaseCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => console.log("Async increment", this.state.count)
    );
    console.log(this.state.count);
  }

  increaseOne() {
    // prevState can be anything
    // props can be used as 2nd parameter
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  increaseCountFived() {
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
    this.increaseOne();
  }

  render() {
    return (
      <>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increaseCount()}>Increment (+1)</button>
        <button onClick={() => this.increaseCountFived()}>
          Increment (+5)
        </button>
      </>
    );
  }
}

export default Counter;
