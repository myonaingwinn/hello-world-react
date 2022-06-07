import React, { Component } from "react";
import "./App.css";
import { Greet } from "./components/functional_components/Greet"; // exact name only
import GreetingComponent from "./components/functional_components/Greeting"; // can use alias name

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <GreetingComponent />
      </div>
    );
  }
}

export default App;
