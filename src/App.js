import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import {God, Goddess} from "./components/Images";
import "./App.css";
import Instruction from "./components/Instruction";
import GameMode from "./components/GameMode";
import LevelComplete from "./components/LevelComplete";
import GameOver from "./components/GameOver";
import GameComplete from "./components/GameComplete";
import Confetti from "react-confetti";


function App() {
  const [firstTime, setFirstTime] = React.useState(true);
  const [gameMode, setGameMode] = React.useState(false);
  const [mode, setMode] = React.useState(God);
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState([]);
  const [level, setLevel] = React.useState(1);
  const [levelComplete, setLevelComplete] = React.useState(false);
  const [shuffler, setShuffler] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameComplete, setGameComplete] = React.useState(false);

  const images = ["Random", God, Goddess];

  function handleFirstTime() {
    setFirstTime(false);
    setGameMode(true)
  }

  function handleModeChange(e) {
   setMode(images[e.target.value])
  }

  function changeGameMode() {

  }

  function handleGameMode(){
    if(gameOver){
      setGameOver(false);
    }
    setGameMode(prevValue => prevValue = !prevValue)
  }

console.log(mode)
console.log(deck)

  function shuffledArrayOfCards() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(array);
    const newArray = array.slice(0, level * 2 + 2);
    return newArray.map((num) => mode[num]);
  }

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, [level,mode]);

  React.useEffect(() => {
    checkLevelComplete();
    saveGame();
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

  function checkLevelComplete() {
    if (!deck.length) {
      return;
    }
    if (deck.every((card) => card.isClicked === true)) {
      if (level === 7) {
        setGameComplete(true);
        return;
      }
      showLevelComplete();
      increaseLevel();
    }
  }

  function saveGame() {
    setBestScore([Math.max(...[...bestScore, score])]);
  }

  function increaseLevel() {
    setLevel(level + 1);
  }

  function showLevelComplete() {
    setLevelComplete(true);
    setTimeout(() => setLevelComplete(false), 1500);
  }

  function calculateScore() {
    setScore(score + level);
  }

  function restartGame() {
    setLevel(1);
    setScore(0);
    setDeck(shuffledArrayOfCards());
    setGameOver(false);
    gameComplete && setGameComplete(false);
  }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
      <Gameboard deck={deck} level={level} onClick={handleClick}></Gameboard>
      {firstTime && <Instruction onClick={handleFirstTime}/>}
      {gameMode && <GameMode onClick={handleGameMode} onChange={handleModeChange}/>}

      {levelComplete && <LevelComplete level={level} />}

      {gameOver && (
        <GameOver
          level={level}
          score={score}
          best={bestScore}
          onClick={restartGame}
          changeGameMode={handleGameMode}
        />
      )}

      {gameComplete && (
        <GameComplete
          level={level}
          score={score}
          best={bestScore}
          onClick={restartGame}
        />
      )}
      {gameComplete && <Confetti />}
      {firstTime && <Instruction onClick={handleFirstTime}/>}
    </div>
  );
}

export default App;
