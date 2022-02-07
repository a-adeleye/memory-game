import goddessLogo from "./goddess-logo.jpg";
import "./App.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img className="logo--image" alt="logo" src={goddessLogo} />
        <h1 className="logo--title">Goddess Memory Game</h1>
      </div>
      <div className="score-board">
        <h2 className="score-board--score">Score: 10</h2>
        <div className="score-board--separator"></div>
        <h2 className="score-board--best">Best: 20</h2>
      </div>
    </header>
  );
}

function Main() {
  return (
    <section className="gameboard">
      <h1 className="level">Level 1</h1>

      <div className="cards">
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
          <h4 className="card-description">Yemoja</h4>
        </div>
        <div className="card">
          <img src="" alt="name"/>
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
      <Main></Main>
    </div>
  );
}

export default App;
