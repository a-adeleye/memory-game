import React from "react";
import goddessLogo from "../goddess-logo.jpg";
import godLogo from "../god-logo.jpg";
import movieLogo from "../movie-logo.jpg";

export default function Header(props) {

const images = [godLogo,goddessLogo,movieLogo];
const modes = ["God", "Goddess", "Movie"]

  return (
    <header>
      <div className="logo">
        <img className="logo--image" alt="logo" src={images[props.mode]} />
        <h2 className="logo--title">Memory Game: {modes[props.mode]} mode</h2>
      </div>
      <div className="score-board">
        <h3 className="score">Score: {props.score}</h3>
        <div className="score-board--separator"></div>
        <h3 className="best">Best: {props.bestScore}</h3>
      </div>
    </header>
  );
}
