import React from "react";
import "../styles/GuessKeys.css";

const GuessKeys = (props) => {
  const handleTileClick = (event) => {
    const keyValue = event.target.keyTile;
  };

  return (
    <div className="flexKeys">
      <div
        className={`Tile ${props.KeyColors} ${props.animateKey} ${props.tileStyle}`}
      >
        {props.KeyState.toUpperCase()}
      </div>
    </div>
  );
};

export default GuessKeys;
