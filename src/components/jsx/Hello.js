import React from "react";

const Hello = () => {
  //   return <h3>This is JSX Functional Component</h3>;
  return React.createElement(
    "h3",
    { id: "hello", className: "Hello" },
    "Hello"
  );
};

export default Hello;
