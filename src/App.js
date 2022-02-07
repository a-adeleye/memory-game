import React from "react";
import { nanoid } from "nanoid";
import goddessLogo from "./goddess-logo.jpg";
import Goddess from "./Images";
import "./App.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo--image" alt="logo" src={goddessLogo} />
        <h2 className="logo--title">Goddess Memory Game</h2>
      </div>
      <div className="score-board">
        <h3 className="score-board--score">Score: 10</h3>
        <div className="score-board--separator"></div>
        <h3 className="score-board--best">Best: 20</h3>
      </div>
    </header>
  );
}

function Gameboard(props) {
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

function App() {
  const [level, setLevel] = React.useState(1);

  function shuffledArrayOfCards() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(array);
    const newArray = array.slice(0, level * 2 + 2);
    return newArray.map((num) => Goddess[num]);
  }

  const [deck, setDeck] = React.useState([]);

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, [level]);

  const [shuffler, setShuffler] = React.useState(1);

  React.useEffect(() => {
    checkLevelComplete();
  }, [shuffler]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleCurrentDeck(id, isClicked) {
    setShuffler(shuffler + 1);
    if(isClicked){
      console.log("gameover");
      return;
    }
    console.log(id);
    console.log(isClicked)
    setDeck(shuffle(deck));
    setDeck((prevDeck) =>
    prevDeck.map((card) =>
      card.name === id ? { ...card, isClicked: true } : card
    )
  );
  }

  function checkLevelComplete() {
    if(!deck.length){
      return
    }
    if(deck.every((card) => card.isClicked === true)){
      setLevel(level + 1)
    }
  }

  function checkDoubleClick(isClicked) {
    console.log(isClicked)
  }

  function increase() {
    setLevel(level + 1);
  }

  function decrease() {
    setLevel(level - 1);
  }

  console.log(deck)

  return (
    <div className="App">
      <Header></Header>
      <Gameboard
        deck={deck}
        level={level}
        onClick={shuffleCurrentDeck}
      ></Gameboard>
      <button onClick={increase}>Increase level</button>
      <button onClick={shuffleCurrentDeck}>Shuffle Deck</button>
    </div>
  );
}

export default App;
