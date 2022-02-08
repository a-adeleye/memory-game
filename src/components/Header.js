import React from "react";
import goddessLogo from "../goddess-logo.jpg";

export default function Header(props) {
    return (
      <header>
        <div className="logo">
          <img className="logo--image" alt="logo" src={goddessLogo} />
          <h2 className="logo--title">Goddess Memory Game</h2>
        </div>
        <div className="score-board">
          <h3 className="score-board--score">Score: {props.score}</h3>
          <div className="score-board--separator"></div>
          <h3 className="score-board--best">Best: {props.bestScore}</h3>
        </div>
      </header>
    );
  }