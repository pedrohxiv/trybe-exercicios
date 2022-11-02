import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pokemonType } from '../types';
import Pokemon from './Pokemon';

export default class PokemonDetails extends Component {
  render() {
    const { pokemons, match: { params: { id } } } = this.props;
    const pokemon = pokemons.find((poke) => poke.id === Number(id));
    return (
      <div>
        <h1>{`${pokemon.name} details`}</h1>
        <Pokemon pokemon={ pokemon } />
        <h2>Sumário:</h2>
        <p>{pokemon.summary}</p>
        <h2>Hábitat:</h2>
        <div>
          {pokemon.foundAt.map((loc) => (
            <div key={ loc.location }>
              <span>{ loc.location }</span>
              <img src={ loc.map } alt="mapa do pokemon" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
