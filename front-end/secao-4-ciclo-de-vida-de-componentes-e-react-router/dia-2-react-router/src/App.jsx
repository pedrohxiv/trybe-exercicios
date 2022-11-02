import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Pokedex from './components/Pokedex';
import About from './components/About';
import PokemonDetails from './components/PokemonDetails';
import pokemonListData from './data';

export default class App extends React.Component {
  state = {
    pokemonList: pokemonListData,
  };

  render() {
    const { pokemonList } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Pokedex pokemonList={ pokemonList } /> }
          />
          <Route path="/about" component={ About } />
          <Route
            path="/pokemon/:id"
            render={ (props) => (
              <PokemonDetails { ...props } pokemons={ pokemonList } />
            ) }
          />
        </Switch>
      </div>
    );
  }
}
