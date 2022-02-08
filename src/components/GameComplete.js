import React from "react";

export default function GameComplete(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal--title">Congratulations!!!</h2>
        <p className="modal--text">You have completed the quest. You must be a genius.</p>
        <h3 className="level">Level: {props.level}</h3>
        <h3 className="score">Score: {props.score}</h3>
        <h3 className="best">Best: {props.best}</h3>
        <button className="modal--button" onClick={props.onClick}>
          Play Again
        </button>
        <button className="modal--button" onClick={props.onClick}>
          Change mode
        </button>
      </div>
    </div>
  );
}
