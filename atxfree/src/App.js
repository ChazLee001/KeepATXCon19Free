import React from 'react';
import './App.css';
import imgURL from './city-of-austin-skyline.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imgURL} className="Austin-BK" alt="Austin-BK" />
        <p>
          Goal to provide resources and FAQ for COVID19
        </p>
        <a
          className="App-link"
          href="http://www.austintexas.gov/COVID19"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To CDC
        </a>
      </header>
    
    </div>
  );
}

export default App;
