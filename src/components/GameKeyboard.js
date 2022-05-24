import React from "react";
import "../styles/GameKeyboard.css";

const keysArray = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["Enter", "Delete", "<-", "->"]
];

const GameKeyboard = (props) => {
  const handleClick = (event) => {
    const keyPressed = event.target.value;
    props.updateKey(keyPressed);
  };

  const handleSpecialClick = (event) => {
    const keyPressed = event.target.value;
    props.updateKey(keyPressed);
  };

  return (
    <div className="KeyBoardContainer">
      <div>
        {keysArray[0].map((keyName) => (
          <button
            value={keyName}
            onClick={props.handleKeyPress}
            className={props.keyboardColors[keyName]}
          >
            {keyName}
          </button>
        ))}
      </div>
      <div>
        {keysArray[1].map((keyName) => (
          <button
            value={keyName}
            onClick={props.handleKeyPress}
            className={props.keyboardColors[keyName]}
          >
            {keyName}
          </button>
        ))}
      </div>
      <div>
        {keysArray[2].map((keyName) => (
          <button
            value={keyName}
            onClick={props.handleKeyPress}
            className={props.keyboardColors[keyName]}
          >
            {keyName}
          </button>
        ))}
      </div>
      <div>
        {keysArray[3].map((keyName) => (
          <button
            className="speacial-buttons"
            value={keyName}
            onClick={props.handleKeyPress}
          >
            {keyName}
          </button>
        ))}
      </div>
    </div>
  );
};
export default GameKeyboard;
