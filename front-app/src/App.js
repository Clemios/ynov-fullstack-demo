import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row justify-between items-center p-2'>
        <div className='w-16'> <img src={logo} /></div>
        <div className='flex flex-row gap-2 justify-end p-2'>
        <a href="/register"><Button small>Register</Button></a>
        <a href="/login"><Button primary small>Login</Button></a>
        </div>
      </div>
      <div className="App-header">
        <h1>Welcome to the App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex flex-row gap-2">
          <a href="/register"><Button onFocus={() => console.log('focused')} onBlur={() => console.log('blurred')}>Register</Button></a>
          <a href="/login"><Button primary onClick={() => console.log('clicked')} onFocus={() => console.log('focused')} onBlur={() => console.log('blurred')}>Login</Button></a>      
        </div>
      </div>
    </div>
  );
}

export default App;
