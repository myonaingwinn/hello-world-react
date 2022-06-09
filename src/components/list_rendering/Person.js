import React from "react";

const Person = ({ person }) => {
  return (
    <div key={person.id}>
      <div>name: {person.name}</div>
      <div>age: {person.age}</div>
      <div>skills: {person.skills.map((skill) => skill).join(", ")}</div>
      <br />
    </div>
  );
};

export default Person;
