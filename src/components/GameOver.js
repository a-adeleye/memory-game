import React from "react";

export default function GameOver(props) {
  return (
    <div className="game-over">
      <div className="modal">
        <h2 className="game-over--title">Game Over!</h2>
        <h3 className="level">Level: {props.level}</h3>
        <h3 className="score">Score: {props.score}</h3>
        <h3 className="best">Best: {props.best}</h3>
        <button className="game-over--button" onClick={props.onClick}>
          Restart Game
        </button>
      </div>
    </div>
  );
}
