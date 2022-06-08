import React from "react";

function ChildComponent({ greetHandler }) {
  return (
    <div>
      {/* <button onClick={greetHandler}>Greet Parent Component</button> */}
      <button onClick={() => greetHandler("ChildComponent")}>
        Greet Parent Component
      </button>
    </div>
  );
}

export default ChildComponent;
