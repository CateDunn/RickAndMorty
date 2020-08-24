import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import axios from 'axios'

const App = () => {
const [characters, setCharacters] = useState([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchCharacters = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character/`)
      console.log(result.data.results)
      setCharacters(result.data.results);
      setIsLoading(false)
  }

  fetchCharacters()
  
}, [])

  return (
    <div className="container">
      <Header/>
      <Characters isLoading={isLoading} characters={characters} />
    </div>
  );
}

export default App;
