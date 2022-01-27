import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});
  const API_KEY = "212d088e-95ed-45a9-a37f-14e4ad6bdb29";
  
  function searchForPlayer(event) {
    //Set up the correct API call
    var APICallString = "https://api.opendota.com/api/players/" + searchText + "?api_key=" + API_KEY;
    //Handle the API call
    axios.get(APICallString).then(function (response) {
    //Success
      setPlayerData(response.data);
    }).catch(function (error) {
    //Error
      console.log(error);
    console.log(error);
    });
  }


  return (
    <div className="App">
      <div className='container'>
        <h5>Dota 2 Player Search</h5>
        <input type='text' onChange={e => setSearchText(e.target.value)}></input>
        <button onClick={e => searchForPlayer(e)}>Search for Player</button>
      </div>
      {JSON.stringify(playerData) != '{}' ? <><p>We have player data.</p></> 
      : 
      <><p>No player data.</p></>
      }
    </div>
  );
}

export default App;
