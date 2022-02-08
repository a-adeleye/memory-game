import React from "react";
import Header from "./components/Header";
import Gameboard from "./components/Gameboard";
import { God, Goddess, Movies } from "./components/Images";
import "./App.css";
import Instruction from "./components/Instruction";
import GameMode from "./components/GameMode";
import LevelComplete from "./components/LevelComplete";
import GameOver from "./components/GameOver";
import GameComplete from "./components/GameComplete";
import Confetti from "react-confetti";

function App() {
  const [firstTime, setFirstTime] = React.useState(checkFirstTimer());
  const [gameMode, setGameMode] = React.useState(false);
  const [mode, setMode] = React.useState(God);
  const [logoImage, setLogoImage] = React.useState(0);
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [bestScore, setBestScore] = React.useState(checkBestScore());
  const [level, setLevel] = React.useState(1);
  const [levelComplete, setLevelComplete] = React.useState(false);
  const [shuffler, setShuffler] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameComplete, setGameComplete] = React.useState(false);

  const images = [God, Goddess, Movies];
  const data = { firstTime: false, best: [] };

  function checkFirstTimer() {
    const data = localStorage.getItem("data");
    if (!data) {
      return true;
    } else {
      return false;
    }
  }

  function checkBestScore() {
    const data = localStorage.getItem("data");
    if (data) {
      let newData = JSON.parse(data);
      return newData.best;
    }
    if (!data) {
      return [];
    }
  }

console.log(bestScore)

  function updateBestScoreToStorage() {
    const newData = JSON.stringify({ ...data, best: bestScore });
    localStorage.setItem("data", newData);
  }

  function handleFirstTime() {
    localStorage.setItem("data", JSON.stringify(data));
    setFirstTime(false);
    setGameMode(true);
  }

  function handleModeChange(e) {
    setMode(images[e.target.value]);
    setLogoImage(e.target.value);
  }

  function handleGameMode() {
    if (gameOver) {
      setGameOver(false);
    }
    if (gameComplete) {
      resetGame();
    }
    setGameMode((prevValue) => (prevValue = !prevValue));
  }

  function shuffledArrayOfCards() {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    shuffle(array);
    const newArray = array.slice(0, level * 2 + 2);
    return newArray.map((num) => mode[num]);
  }

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, [level, mode]);

  React.useEffect(() => {
    checkLevelComplete();
    saveGame();
  }, [score]);

  React.useEffect(() => {
    updateBestScoreToStorage();
  }, [bestScore]);

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
    if (!deck.length || gameComplete) {
      return;
    }
    if (deck.every((card) => card.isClicked === true)) {
      if (level === 2) {
        setGameComplete(true);
      } else {
        showLevelComplete();
        increaseLevel();
      }
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

  function resetGame() {
    setScore(0);
    setLevel(1);
    setGameMode(false);
    setGameOver(false);
    setGameComplete(false);
    setLevelComplete(false);
    setShuffler(1);
    setDeck(shuffledArrayOfCards());
  }

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} mode={logoImage}></Header>
      <Gameboard deck={deck} level={level} onClick={handleClick}></Gameboard>
      {firstTime && <Instruction onClick={handleFirstTime} />}
      {gameMode && <GameMode onClick={resetGame} onChange={handleModeChange} />}

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
          changeGameMode={handleGameMode}
        />
      )}
      {gameComplete && <Confetti />}
    </div>
  );
}

export default App;
