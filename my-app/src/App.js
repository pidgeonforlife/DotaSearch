import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Stats from './pages/Stats';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home />}/>
        <Route exact path='/stats' element={<Stats />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
