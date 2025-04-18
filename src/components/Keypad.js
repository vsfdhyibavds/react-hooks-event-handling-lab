import React from "react";

function Keypad() {
  function handleClick(event) {
    console.log(event.target.textContent);
  }

  const buttons = [];
  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <button key={i} onClick={handleClick}>
        {i}
      </button>
    );
  }

  return <div>{buttons}</div>;
}

export default Keypad;
