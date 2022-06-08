import React, { Component } from "react";
import "./App.css";
import ParentComponent from "./components/method_as_props/ParentComponent";
// import EventBind from "./components/binding_event_handlers/EventBind";
// import Person from "./components/destructuring_props_state/Person";
// import { Person2 } from "./components/destructuring_props_state/Person";
// import Invitation from "./components/destructuring_props_state/PersonClass";
// import FunctionClick from "./components/event_handling/FunctionClick";
// import ClassClick from "./components/event_handling/ClassClick";
// import Counter from "./components/set_state/Counter";
// import Welcome from "./components/class_components/Welcome";
// import { Greet } from "./components/functional_components/Greet"; // exact name only
// import GreetingComponent from "./components/functional_components/Greeting"; // can use alias name
// import Hello from "./components/jsx/Hello";
// import Message from "./components/state/Message";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent />
        {/* <EventBind /> */}
        {/* <FunctionClick />
        <ClassClick /> */}
        {/*       <Invitation name="Aniki" age="30" />
        <Person name="Qojack" age="25" />
        <Person2 name="Luffy" age="22" /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Welcome name="Jackson" />
        <Greet name="Luffy" />
        <Greet name="Sanji">
          <span>Vin Smoke Sanji</span>
        </Greet>
        <GreetingComponent />
        <Hello /> */}
      </div>
    );
  }
}

export default App;
