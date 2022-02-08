import React from "react";

export default function Instruction(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal--title">Welcome</h2>
        <p className="modal--text">This game puts your memory to the test.</p>
        <p className="modal--text">
          You are presented with multiple images that get shuffled everytime
          they are clicked.
        </p>
        <p className="modal--text">
          You CAN NOT click on any image more than once else it's game over. Try
          to get the highest score possible.
        </p>
        <button className="modal--button" onClick={props.onClick}>
          Start Game
        </button>
      </div>
    </div>
  );
}
