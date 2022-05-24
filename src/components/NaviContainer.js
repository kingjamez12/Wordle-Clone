import React, { Component } from "react";
import "../styles/NaviContainer.css";
import image from "../assets/menu_drop_down.png";

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark_mode: false
    };
  }

  render() {
    return (
      <div className="naviContainer">
        <div className="button-container1"></div>
        <div className="title-container">
          <div className="gameTitle">Wordle</div>
        </div>
        <div className="button-container2"></div>
      </div>
    );
  }
}

export default GameContainer;
