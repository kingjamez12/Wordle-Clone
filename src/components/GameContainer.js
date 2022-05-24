import React, { Component } from "react";
import "../styles/GameContainer.css";
import GameKeyboard from "./GameKeyboard.js";
import GameBoard from "./GameBoard.js";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardColors: {},
      winningWord: ["r", "e", "a", "c", "t"],
      currentRow: 0,
      currentTile: 0,

      tileStyles: ["", "", "", "", ""],

      rowAnimations: ["", "", "", "", "", ""],

      Colors: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
      ],

      Guesses: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
      ]
    };
  }

  checkEmpty = () => {
    for (let i = 0; i < 5; i++) {
      if (this.state.Guesses[this.state.currentRow][i] === "") {
        return false;
      }
    }
  };

  checkWin = () => {
    const checkColors = () => {
      for (let i = 0; i < 5; i++) {
        if (this.state.Colors[this.state.currentRow][i] !== "green") {
          return false;
        }
      }
    };
    if (checkColors() === false && this.state.currentRow === 5) {
      alert("Game Over");
    } else if (checkColors() === false) {
      console.log("Try Again");
    } else {
      alert("You won");
    }
  };

  styleCurrentTile = () => {
    let setStyle = ["", "", "", "", ""];
    setStyle[this.state.currentTile] = "currentStyle";
    this.setState({
      tileStyles: setStyle
    });
  };

  handleSubmit = () => {
    if (this.checkEmpty() !== false) {
      if (this.state.currentRow <= 4) {
        this.setState((prevState) => {
          return { currentRow: prevState.currentRow + 1 };
        });
      }
      this.setState({
        currentTile: 0
      });
      this.setColor();
      this.checkWin();
      this.styleCurrentTile();
    } else {
      alert("word is not 5 letter");
      let animationCopy = this.state.rowAnimations;
      animationCopy[this.currentRow] = "shake";
      this.setState({
        rowAnimations: animationCopy
      });
    }
  };

  handleBackspace = () => {
    let letter = this.state.Guesses[this.state.currentRow][
      this.state.currentTile
    ];

    if (letter !== "") {
      // letter is present
      let updatedBoard = this.state.Guesses;
      updatedBoard[this.state.currentRow][this.state.currentTile] = "";
      this.setState({
        Guesses: updatedBoard
      });
    } else if (letter === "" && this.state.currentTile !== 0) {
      let updatedBoard = this.state.Guesses;
      updatedBoard[this.state.currentRow][this.state.currentTile - 1] = "";
      this.setState({
        Guesses: updatedBoard
      });
      this.setState((prevState) => {
        return { currentTile: prevState.currentTile - 1 };
      });
      this.styleCurrentTile();
    }
  };
  // keyPressed is being lower case so Enter becomes enter
  // need logic to prevent special keys from being lowercased
  handleKeyPress = (event) => {
    console.log(event);

    let letterPressed = "";
    if (event.type === "keydown") {
      letterPressed = event.key;
    } else if (event.type === "click") {
      event.preventDefault();
      letterPressed = event.target.value.toLowerCase();
    }

    if (letterPressed === "Enter") {
      event.preventDefault();
      this.handleSubmit();
    } else if (letterPressed === "Backspace") {
      this.handleBackspace();
    } else if (
      letterPressed === "ArrowLeft" ||
      letterPressed === "ArrowRight"
    ) {
      this.handleTileMove(letterPressed);
    } else if (letterPressed.length === 1 && letterPressed.match(/[a-z]/i)) {
      if (this.state.Guesses[this.state.currentRow][4] === "") {
        let updatedBoard = this.state.Guesses;
        updatedBoard[this.state.currentRow][
          this.state.currentTile
        ] = letterPressed;
        this.setState({
          Guesses: updatedBoard
        });
      }
      if (this.state.currentTile < 4) {
        this.setState((prevState) => {
          return { currentTile: prevState.currentTile + 1 };
        });
        this.styleCurrentTile();
      }
    }
  };

  handleTileMove = (arrowKey) => {
    if (arrowKey === "ArrowLeft") {
      if (this.state.currentTile > 0) {
        this.setState({
          currentTile: this.state.currentTile - 1
        });
        this.styleCurrentTile();
        console.log("Left Arrow pressed currentTile: ", this.state.currentTile);
      }
    } else if (arrowKey === "ArrowRight") {
      if (this.state.currentTile < 4) {
        this.setState((prevState) => {
          return { currentTile: prevState.currentTile + 1 };
        });
        this.styleCurrentTile();
      }
      console.log("Left Arrow pressed currentTile: ", this.state.currentTile);
    }
  };

  setColor = () => {
    let row = this.state.Guesses[this.state.currentRow];

    let colorsCopy = this.state.Colors;

    row.forEach((letter, index) => {
      if (
        this.state.winningWord.includes(letter) &&
        letter !== this.state.winningWord[index]
      ) {
        colorsCopy[this.state.currentRow][index] = "yellow";
      } else if (letter === this.state.winningWord[index]) {
        colorsCopy[this.state.currentRow][index] = "green";
      } else {
        colorsCopy[this.state.currentRow][index] = "gray";
      }
      letter = letter.toUpperCase();
      if (this.state.keyboardColors[letter] !== "green") {
        this.state.keyboardColors[letter] =
          colorsCopy[this.state.currentRow][index];
      }
    });
  };

  render() {
    return (
      <div tabIndex="-1" onKeyDown={this.handleKeyPress}>
        <GameBoard BoardState={this.state} />
        <GameKeyboard
          keyboardColors={this.state.keyboardColors}
          handleKeyPress={this.handleKeyPress}
        />
      </div>
    );
  }
}

export default GameContainer;
