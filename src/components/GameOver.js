import React from "react";

export default function GameOver(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal--title">Game Over!</h2>
        <h3 className="level">Level: {props.level}</h3>
        <h3 className="score">Score: {props.score}</h3>
        <h3 className="best">Best: {props.best}</h3>
        <button className="modal--button" onClick={props.onClick}>
          Restart
        </button>
        <button className="modal--button" onClick={props.changeGameMode}>
          Change mode
        </button>
      </div>
    </div>
  );
}
