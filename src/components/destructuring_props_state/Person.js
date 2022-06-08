import React from "react";

const Person = ({ name, age }) => {
  return (
    <div>
      <h3>Personal Profile</h3>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export const Person2 = (props) => {
  const { name, age } = props;

  return (
    <div>
      <h3>Personal Profile 2</h3>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
};

export default Person;
