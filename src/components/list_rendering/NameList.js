import React from "react";
import PersonList from "./PersonList";

const NameList = () => {
  const nameArr = [
    "Ma Ma",
    "Saysi",
    "Dont Giveup",
    "Itis",
    "Alite",
    "Complicated",
  ];

  const personArr = [
    { id: 1, name: "John", age: 18, skills: ["React", "PHP"] },
    { id: 2, name: "Ace", age: 21, skills: ["Vue", "Ruby", "Python"] },
    { id: 4, name: "Black bearded", age: 22, skills: ["Laravel", "React"] },
    { id: 5, name: "Robin", age: 24, skills: ["Typescript", "Nodejs"] },
    { id: 3, name: "Sanjit", age: 28, skills: ["React", "Java"] },
  ];

  const nameList = nameArr.map((name, index) => <li key={index}>{name}</li>);

  return (
    <div>
      <h3>Name List</h3>
      <ul>{nameList}</ul>
      <hr />
      <br />
      <PersonList persons={personArr} />
    </div>
  );
};

export default NameList;
