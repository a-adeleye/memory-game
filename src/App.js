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
    <div key={nanoid()} className="card">
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

    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    const newArray = array.slice(0, 4);

    return newArray.map((num) => Goddess[num]);
  }

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, []);

  const [deck, setDeck] = React.useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Gameboard deck={deck} level={level}></Gameboard>
    </div>
  );
}

export default App;
