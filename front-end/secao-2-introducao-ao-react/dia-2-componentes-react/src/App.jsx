import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';

function App() {
  return (
    <main>
      <Pokedex pokemonList={ data } />
    </main>
  );
}

export default App;
