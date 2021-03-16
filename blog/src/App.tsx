import React from 'react';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <button type="button" className="btn btn-primary">this is a button</button>
      </header>
    </div>
  );
}

export default App;
