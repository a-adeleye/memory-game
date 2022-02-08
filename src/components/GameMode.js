import React from "react";
import { God, Goddess } from "./Images";

export default function GameMode(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2 className="modal--title">Choose your mode</h2>
        <select value={props.text} onChange={props.onChange}>
          <option value="0">RANDOM</option>
          <option value="1"> GOD MODE</option>
          <option value="2">GODDESS MODE</option>
        </select>
        <button className="modal--button" onClick={props.onClick}>
          Start
        </button>
      </div>
    </div>
  );
}
