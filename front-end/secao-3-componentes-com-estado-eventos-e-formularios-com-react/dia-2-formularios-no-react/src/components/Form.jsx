import React from 'react';
import PropTypes from 'prop-types';
import AddressForm from './AddressForm';
import PersonalForm from './PersonalForm';
import ProfessionalForm from './ProfessionalForm';

class Form extends React.Component {
  render() {
    const {
      sendForm,
      resetForm,
      changeHandler,
      currentState,
      onBlurHandler,
    } = this.props;

    return (
      <form onSubmit={ sendForm }>
        <PersonalForm
          changeHandler={ changeHandler }
          currentState={ currentState }
        />
        <AddressForm
          changeHandler={ changeHandler }
          onBlurHandler={ onBlurHandler }
          currentState={ currentState }
        />
        <ProfessionalForm
          currentState={ currentState }
          changeHandler={ changeHandler }
        />

        <button type="submit">Enviar</button>
        <button type="reset" onClick={ resetForm }>
          Limpar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  sendForm: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  onBlurHandler: PropTypes.func.isRequired,
  currentState: PropTypes.shape({}).isRequired,
};

export default Form;
