import React from "react";
import Person from "./Person";

const PersonList = ({ persons }) => {
  const personList = persons.map((person, index) => (
    <Person key={person.id} person={person} />
  ));

  return (
    <div>
      <h3>Person List</h3>
      {personList}
    </div>
  );
};

export default PersonList;
