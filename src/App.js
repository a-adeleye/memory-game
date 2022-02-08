import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import Goddess from "./components/Images";
import "./App.css";
import LevelComplete from "./components/LevelComplete";
import GameOver from "./components/GameOver";
//import { Transition } from 'react-transition-group';

function App() {
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [gameRecord, setGameRecord] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [levelComplete, setLevelComplete] = React.useState(false);
  const [shuffler, setShuffler] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);

  function shuffledArrayOfCards() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(array);
    const newArray = array.slice(0, level * 2 + 2);
    return newArray.map((num) => Goddess[num]);
  }

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
    console.log(27);
  }, [level]);

  React.useEffect(() => {
    checkLevelComplete();
    saveGame();
    console.log(32);
  }, [score]);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(id, isClicked) {
    setShuffler(shuffler + 1);
    if (isClicked) {
      setGameOver(true);
      return;
    }
    setDeck(shuffle(deck));
    setDeck((prevDeck) =>
      prevDeck.map((card) =>
        card.name === id ? { ...card, isClicked: true } : card
      )
    );
    calculateScore();
    saveGame();
  }

  console.log(gameOver);

  function checkLevelComplete() {
    if (!deck.length) {
      return;
    }
    if (deck.every((card) => card.isClicked === true)) {
      showLevelComplete();
    }
  }

  function saveGame() {
    setGameRecord([...gameRecord, score]);
  }

  function increaseLevel() {
    setLevel(level + 1);
  }

  const bestScore = gameRecord.length > 0 && Math.max(...gameRecord);

  function showLevelComplete() {
    setLevelComplete(true);
    setTimeout(() => setLevelComplete(false), 2000);
  }

  function calculateScore() {
    setScore(score + level);
  }

  function restartGame() {
    setLevel(1);
    setScore(0);
    setDeck(shuffledArrayOfCards());
    setGameOver(false);
  }

  console.log(deck);
  console.log(score);
  console.log(gameRecord);

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
      <Gameboard deck={deck} level={level} onClick={handleClick}></Gameboard>

      {levelComplete && <LevelComplete level={level} />}
      {gameOver && (
        <GameOver
          level={level}
          score={score}
          best={bestScore}
          onClick={restartGame}
        />
      )}
    </div>
  );
}

export default App;
