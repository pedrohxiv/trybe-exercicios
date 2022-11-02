import React from 'react';
import PropTypes from 'prop-types';
import states from '../countryStates';

class AddressForm extends React.Component {
  render() {
    const { changeHandler, onBlurHandler, currentState } = this.props;
    const { address, city, countryState, addressType } = currentState;
    return (
      <fieldset>
        <legend>Dados de Endereço</legend>
        <div className="container">
          <label htmlFor="address">
            Endereço
            <input
              id="address"
              type="text"
              name="address"
              maxLength="200"
              required
              value={ address }
              onChange={ changeHandler }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="city">
            Cidade
            <input
              id="city"
              type="text"
              name="city"
              maxLength="28"
              required
              value={ city }
              onBlur={ onBlurHandler }
              onChange={ changeHandler }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="countryState">
            Estado
            <select
              id="countryState"
              name="countryState"
              required
              onChange={ changeHandler }
              value={ countryState }
            >
              <option value="">Selecione</option>
              {states.map((value) => (
                <option key={ value }>{value}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="container">
          <label htmlFor="house">
            <input
              type="radio"
              id="house"
              name="addressType"
              value="Casa"
              checked={ addressType === 'Casa' }
              onChange={ changeHandler }
            />
            Casa
          </label>
          <label htmlFor="apart">
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="Apartamento"
              checked={ addressType === 'Apartamento' }
              onChange={ changeHandler }
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    );
  }
}

AddressForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  currentState: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    countryState: PropTypes.string,
    addressType: PropTypes.string,
  }).isRequired,
};

export default AddressForm;
