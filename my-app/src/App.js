import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({
    player_id: "",
    name: "",
    img: "",
    steamid: "",
  });
  const API_KEY = "212d088e-95ed-45a9-a37f-14e4ad6bdb29";
  
  function searchForPlayer(event) {
    //Set up the correct API call
    var APICallString = "https://api.opendota.com/api/players/" + searchText + "?api_key=" + API_KEY;
    //Handle the API call
    axios.get(APICallString).then(function (response) {
    //Success
      setPlayerData({
        player_id: searchText,
        name: response.data.profile.personaname,
        steamid: response.data.profile.steamid,
        img: response.data.profile.avatar,
      });
      console.log(response);
    }).catch(function (error) {
    //Error
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
      {JSON.stringify(playerData) != '{}' ? 
      <>
        <p>{playerData.player_id}</p>
        <p>Name: {playerData.name}</p>
        <p>SteamID: {playerData.steamid}</p>
        <img src={playerData.img} />
      </>
      : 
      <><p>No player data.</p></>
      }
    </div>
  );
}

export default App;