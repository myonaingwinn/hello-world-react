import React, { Component } from "react";
import "./App.css";
import Welcome from "./components/class_components/Welcome";
import { Greet } from "./components/functional_components/Greet"; // exact name only
import GreetingComponent from "./components/functional_components/Greeting"; // can use alias name
import Hello from "./components/jsx/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name="Jackson" />
        <Greet name="Luffy" />
        <Greet name="Sanji">
          <span>Vin Smoke Sanji</span>
        </Greet>
        <GreetingComponent />
        <Hello />
      </div>
    );
  }
}

export default App;
