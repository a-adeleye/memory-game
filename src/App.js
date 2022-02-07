import goddessLogo from "./goddess-logo.jpg";
import awilix from './goddess/awilix.jpg';
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

function Gameboard() {
  return (
    <section className="gameboard">
      <h1 className="level">Level 1</h1>

      <div className="cards">
        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>
        
        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>

        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>

        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>

        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <div className="card--image">
            <img src={awilix} alt="name" />
          </div>

          <h4 className="card-description">Yemoja</h4>
        </div>
   
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Gameboard></Gameboard>
    </div>
  );
}

export default App;
