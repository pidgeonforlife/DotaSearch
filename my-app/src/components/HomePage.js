import React, { useState } from 'react';
import axios from 'axios';
import './HomePage.css';


function HomePage() {
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({
    player_id: "",
    name: "",
    img: "",
    steamid: "",
    rankImg: "",
    lastLogin: "",
  });
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)

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
        rankImg: response.data.rank_tier,
        lastLogin: response.data.profile.last_login,
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
        <img className='dotaImage' src='./dota2.png' />
        <input type='text' onChange={e => setSearchText(e.target.value)}></input>
        <div className='buttonContainer'>
          <button id='button1' onClick={e => {
            searchForPlayer(e)
            onClick()
            }}>Matches</button>
          <button id='button2'>Profile</button>
        </div>
      </div>
      <div className='statsContainer'>
      {JSON.stringify(playerData) != '{}' ? 
      <>
        <div className='nameRankContainer'>
        <img src={playerData.img} />
          <div className='wrapNameRank'>
            <p>{playerData.name}</p>
            <p>{playerData.rankImg}</p>
          </div>
        </div>
        <hr />
        <div className='additionalInfoContainer'>
          <p>Account ID: {playerData.player_id}</p>
          <p>Last Login: {playerData.lastLogin}</p>
        </div>
      </>
      : 
      <><p>No player data.</p></>
      }
      </div>

    </div>
  );
}

export default HomePage;