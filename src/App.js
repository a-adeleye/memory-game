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
import Footer from "./components/Footer";

function App() {
  const [gameMode, setGameMode] = React.useState(false);
  const [mode, setMode] = React.useState(God);
  const [logoImage, setLogoImage] = React.useState(0);
  const [deck, setDeck] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [scores, setScores] = React.useState([0]);
  const [gameData, setGameData] = React.useState({
    firstTime: true,
    level: 1,
    best: 0,
  });
  const [levelComplete, setLevelComplete] = React.useState(false);
  const [shuffler, setShuffler] = React.useState(1);
  const [gameOver, setGameOver] = React.useState(false);
  const [gameComplete, setGameComplete] = React.useState(false);

  const images = [God, Goddess, Movies];

  function checkFirstTimer() {
    const checkData = localStorage.getItem("data");
    if (!checkData) {
      return;
    } else {
      let newData = JSON.parse(checkData);
      setGameData((prev) => {
        return {
          ...prev,
          firstTime: newData.firstTime,
          level: newData.level,
          best: newData.best,
        };
      });
    }
  }

  React.useEffect(() => {
    checkFirstTimer();
  }, []);

  function updateGameDataToStorage() {
    const newData = JSON.stringify(gameData);
    localStorage.setItem("data", newData);
  }

  function handleFirstTime() {
    setGameData((prevData) => {
      return { ...prevData, firstTime: false };
    });
    setGameMode(true);
  }

  function handleModeChange(e) {
    setMode(images[e.target.value]);
    setLogoImage(e.target.value);
    if (gameData.level > 1) {
      setGameData((prevData) => {
        return { ...prevData, level: 1 };
      });
    }
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
    const newArray = array.slice(0, gameData.level * 2 + 2);
    return newArray.map((num) => mode[num]);
  }

  // Check this line for change in mode at level higher than 1

  React.useEffect(() => {
    setDeck(shuffledArrayOfCards());
  }, [gameData.level, mode]);

  React.useEffect(() => {
    checkLevelComplete();
    setScores((prevScores) => [Math.max(...[...prevScores, score])]);
  }, [score]);

  React.useEffect(() => {
    updateGameDataToStorage();
  }, [gameData]);

  React.useEffect(() => {
    updateBestScore();
  }, [scores]);

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
  }

  function calculateScore() {
    setScore(score + gameData.level);
  }

  function checkLevelComplete() {
    if (!deck.length || gameComplete) {
      return;
    }
    if (deck.every((card) => card.isClicked === true)) {
      if (gameData.level === 7) {
        setGameComplete(true);
      } else {
        showLevelComplete();
        increaseLevel();
      }
    }
  }

  function showLevelComplete() {
    setLevelComplete(true);
    setTimeout(() => setLevelComplete(false), 1500);
  }

  function increaseLevel() {
    setGameData((prevData) => {
      return { ...prevData, level: gameData.level + 1 };
    });
  }

  function updateBestScore() {
    if (!Math.max(...scores)) {
      return;
    }
    setGameData((prevGameData) => {
      return { ...prevGameData, best: Math.max(...scores) };
    });
  }

  function restartGame() {
    setGameData((prevData) => {
      return { ...prevData, level: 1 };
    });
    setScore(0);
    setDeck(shuffledArrayOfCards());
    setGameOver(false);
    gameComplete && setGameComplete(false);
  }

  function resetGame() {
    setScore(0);
    setGameData((prevData) => {
      return { ...prevData, level: 1 };
    });
    setGameMode(false);
    setGameOver(false);
    setGameComplete(false);
    setLevelComplete(false);
    setShuffler(1);
    setDeck(shuffledArrayOfCards());
  }

  return (
    <div className="App">
      <Header score={score} bestScore={gameData.best} mode={logoImage}></Header>
      <Gameboard
        deck={deck}
        level={gameData.level}
        onClick={handleClick}
      ></Gameboard>
      {gameData.firstTime && <Instruction onClick={handleFirstTime} />}
      {gameMode && <GameMode onClick={resetGame} onChange={handleModeChange} />}

      {levelComplete && <LevelComplete level={gameData.level} />}

      {gameOver && (
        <GameOver
          level={gameData.level}
          score={score}
          best={gameData.best}
          onClick={restartGame}
          changeGameMode={handleGameMode}
        />
      )}

      {gameComplete && (
        <GameComplete
          level={gameData.level}
          score={score}
          best={gameData.best}
          onClick={restartGame}
          changeGameMode={handleGameMode}
        />
      )}
      {gameComplete && <Confetti />}
      <Footer />
    </div>
  );
}

export default App;
