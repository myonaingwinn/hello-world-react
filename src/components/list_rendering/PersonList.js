import React from "react";
import Person from "./Person";

const PersonList = ({ persons }) => {
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} /> // Don't use 'index' as 'key' prop!!!! Cuz' the list will never be reordered or filtered
  ));

  return (
    <div>
      <h3>Person List</h3>
      {personList}
    </div>
  );
};

export default PersonList;
