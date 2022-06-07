import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/class_components/Welcome";
import { Greet } from "./components/functional_components/Greet"; // exact name only
import GreetingComponent from "./components/functional_components/Greeting"; // can use alias name

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Greet />
        <GreetingComponent />
      </div>
    );
  }
}

export default App;
