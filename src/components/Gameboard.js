import React from 'react';
import { nanoid } from "nanoid";

export default function Gameboard(props) {
    const cards = props.deck.map((card) => (
      <div
        key={nanoid()}
        className="card"
        id={card.name}
        onClick={() => props.onClick(card.name, card.isClicked)}
      >
        <div className="card--image">
          <img src={card.url} alt="name" />
        </div>
        <h4 className="card-description">{card.name}</h4>
      </div>
    ));
  
    return (
      <section className="gameboard">
        <h1 className="level">Level {props.level}</h1>
        <div className="cards">{cards}</div>
      </section>
    );
  }