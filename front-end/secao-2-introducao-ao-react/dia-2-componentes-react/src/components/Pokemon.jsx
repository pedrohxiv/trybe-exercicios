import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends Component {
  render() {
    const {
      pokemon: { name, type, averageWeight, image },
    } = this.props;
    return (
      <li className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <img src={ image } alt={ name } />
        </div>
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};
