import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import Button from './Button';

class Pokedex extends React.Component {
  state = {
    pokeIndex: 0,
    pokeType: 'all',
  };

  nextPoke = (numPoke) => {
    this.setState((poke) => ({
      pokeIndex: (poke.pokeIndex + 1) % numPoke,
    }));
  };

  pokeFilter = (pokeType) => {
    this.setState({ pokeType, pokeIndex: 0 });
  };

  searchPokeFiltered = () => {
    const { pokemonList } = this.props;
    const { pokeType } = this.state;

    return pokemonList.filter((poke) => {
      if (pokeType === 'all') return true;
      return poke.type === pokeType;
    });
  };

  searchPokeTypes = () => {
    const { pokemonList } = this.props;
    const pokeTypes = [];

    pokemonList.forEach((poke) => {
      if (!pokeTypes.includes(poke.type)) pokeTypes.push(poke.type);
    });
    return pokeTypes;
  };

  render() {
    const { pokeIndex } = this.state;
    const pokeFilter = this.searchPokeFiltered();
    const pokeTypes = this.searchPokeTypes();

    return (
      <div className="pokedex">
        <h1> Pokédex </h1>
        <Pokemon
          key={ pokeFilter[pokeIndex].id }
          pokemon={ pokeFilter[pokeIndex] }
        />
        <div className="pokedex-buttons-panel">
          <Button onClick={ () => this.pokeFilter('all') } className="filter-button">
            All
          </Button>
          {pokeTypes.map((type) => (
            <Button key={ type } onClick={ () => this.pokeFilter(type) }>{ type }</Button>
          ))}
        </div>
        <Button
          className="pokedex-button"
          onClick={ () => this.nextPoke(pokeFilter.length) }
          disabled={ pokeFilter.length <= 1 }
        >
          Próximo pokémon
        </Button>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
