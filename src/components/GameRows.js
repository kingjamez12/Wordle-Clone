import React from "react";
import "../styles/GameRows.css";
import GuessKeys from "./GuessKeys";

const GameRow = (props) => {
  return (
    <div className="GameRowBox">
      <GuessKeys
        KeyState={props.RowState[0]}
        KeyColors={props.RowColors[0]}
        animateKey="animate0"
      />
      <GuessKeys
        KeyState={props.RowState[1]}
        KeyColors={props.RowColors[1]}
        animateKey="animate1"
      />
      <GuessKeys
        KeyState={props.RowState[2]}
        KeyColors={props.RowColors[2]}
        animateKey="animate2"
      />
      <GuessKeys
        KeyState={props.RowState[3]}
        KeyColors={props.RowColors[3]}
        animateKey="animate3"
      />
      <GuessKeys
        KeyState={props.RowState[4]}
        KeyColors={props.RowColors[4]}
        animateKey="animate4"
      />
    </div>
  );
};

export default GameRow;
