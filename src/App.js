import goddessLogo from "./goddess-logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img className="logo--image" alt="logo-image" src={goddessLogo} />
          <h1 className="logo--title">Goddess Memory Game</h1>
        </div>
        <div className="score-board">
          <h2 className="score-board--score">Score: 10</h2>
          <div className="score-board--separator"></div>
          <h2 className="score-board--best">Best: 20</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
