import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Button onClick={() => console.log('clicked')} onFocus={() => console.log('focused')} onBlur={() => console.log('blurred')}>Click me</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="text-red-500 bg-blue-500">test tailwind</div>
      </header>
    </div>
  );
}

export default App;
