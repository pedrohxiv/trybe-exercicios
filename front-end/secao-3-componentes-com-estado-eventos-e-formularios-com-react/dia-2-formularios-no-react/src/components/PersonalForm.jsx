import React from 'react';
import PropTypes from 'prop-types';

class PersonalForm extends React.Component {
  render() {
    const { changeHandler, currentState } = this.props;

    const { name, email, cpf } = currentState;

    return (
      <fieldset>
        <legend>Dados pessoais</legend>
        <div className="container">
          <label htmlFor="name">
            Nome
            <input
              id="name"
              type="text"
              name="name"
              maxLength="40"
              required
              value={ name }
              onChange={ changeHandler }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              maxLength="50"
              required
              value={ email }
              onChange={ changeHandler }
            />
          </label>
        </div>
        <div className="container">
          <label htmlFor="cpf">
            CPF
            <input
              id="cpf"
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={ cpf }
              onChange={ changeHandler }
            />
          </label>
        </div>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  currentState: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
  }).isRequired,
};

export default PersonalForm;
