import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Goddess from "./components/Images";
import "./App.css";

function App() {
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [gameRecord, setGameRecord] = React.useState([]);
  const [level, setLevel] = React.useState(1);

  function shuffledArrayOfCards() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(array);
    const newArray = array.slice(0, level * 2 + 2);
    return newArray.map((num) => Goddess[num]);
  }

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, [level]);

  const [shuffler, setShuffler] = React.useState(1);

  React.useEffect(() => {
    checkLevelComplete();
  }, [shuffler, score]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function shuffleCurrentDeck(id, isClicked) {
    setShuffler(shuffler + 1);
    if (isClicked) {
      console.log("gameover");
      return;
    }
    console.log(id);
    console.log(isClicked);
    setDeck(shuffle(deck));
    setDeck((prevDeck) =>
      prevDeck.map((card) =>
        card.name === id ? { ...card, isClicked: true } : card
      )
    );
  }

  function checkLevelComplete() {
    if (!deck.length) {
      return;
    }
    if (deck.every((card) => card.isClicked === true)) {
      incrreaseLevel();
      calculateScore();
      saveGame();
    }
  }

  function saveGame() {
    setGameRecord([...gameRecord, score]);
  }

  function incrreaseLevel() {
    setLevel(level + 1);
  }

  const bestScore = gameRecord.length > 0 && Math.max(...gameRecord);

  function checkDoubleClick(isClicked) {
    console.log(isClicked);
  }

  function restart() {
    setLevel(1);
  }

  function calculateScore() {
    setScore(level * (level * 2 + 2));
  }

  console.log(deck);
  console.log(score);
  console.log(gameRecord);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
      <Gameboard
        deck={deck}
        level={level}
        onClick={shuffleCurrentDeck}
      ></Gameboard>
      <button onClick={restart}>Increase level</button>
      <button onClick={shuffleCurrentDeck}>Shuffle Deck</button>
    </div>
  );
}

export default App;
