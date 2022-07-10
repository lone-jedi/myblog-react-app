import logo from './logo.svg';
import './App.css';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is your joke :
        </p>
        <Joke />
      </header>
    </div>
  );
}

export default App;
