import React from "react";
import rubik from "../rubik.png";

export default function LevelComplete(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal--title">Level {props.level - 1} completed</h2>
        <img className="modal--image" alt="" src={rubik} />
      </div>
    </div>
  );
}
