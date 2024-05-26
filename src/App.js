import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="main-component">
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;