import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const API_KEY = "928BF6B809AF9C4C09EC4B6E28A030D9";


  return (
    <div className="App">
      <div className='container'>
        <h5>Dota 2 Player Search</h5>
        <input type='text' onChange={e => setSearchText(e.target.value)}></input>
        <button>Search for Player</button>
      </div>
    </div>
  );
}

export default App;
