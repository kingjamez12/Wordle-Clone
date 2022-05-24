import React from "react";
import "../styles/GameBoard.css";
import GameRows from "./GameRows.js";

const GameBoard = (props) => {
  return (
    <div className="gameBoardAlign">
      <div className="boardBox">
        <GameRows
          RowState={props.BoardState.Guesses[0]}
          RowColors={props.BoardState.Colors[0]}
          tileStyles={props.BoardState.tileStyles[0]}
        />
        <GameRows
          RowState={props.BoardState.Guesses[1]}
          RowColors={props.BoardState.Colors[1]}
          tileStyles={props.BoardState.tileStyles[1]}
        />
        <GameRows
          RowState={props.BoardState.Guesses[2]}
          RowColors={props.BoardState.Colors[2]}
          tileStyles={props.BoardState.tileStyles[2]}
        />
        <GameRows
          RowState={props.BoardState.Guesses[3]}
          RowColors={props.BoardState.Colors[3]}
          tileStyles={props.BoardState.tileStyles[3]}
        />
        <GameRows
          RowState={props.BoardState.Guesses[4]}
          RowColors={props.BoardState.Colors[4]}
          tileStyles={props.BoardState.tileStyles[4]}
        />
        <GameRows
          RowState={props.BoardState.Guesses[5]}
          RowColors={props.BoardState.Colors[5]}
          tileStyles={props.BoardState.tileStyles[5]}
        />
      </div>
    </div>
  );
};

export default GameBoard;
