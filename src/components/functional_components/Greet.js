import React from "react";

export const Greet = (props) => {
  console.log("Greet", props);
  return (
    <>
      <h2>Hey {props.name}, Don't make it bad!</h2>
      <em>{props.children}</em>
    </>
  );
};
