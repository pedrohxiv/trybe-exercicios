import React from 'react';
import countryStates from './countryStates';
import Form from './components/Form';
import FormDataDisplay from './components/FormDataDisplay';
import FormError from './components/FormError';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: countryStates[0],
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;
    if (name === 'name') formattedValue = value.toUpperCase();
    if (name === 'address') formattedValue = this.validateAddress(value);
    this.updateState(name, formattedValue);
  };

  onBlurHandler = (event) => {
    const { name, value } = event.target;
    let validatedValue = value;
    if (name === 'city') validatedValue = value.match(/^\d/) ? '' : value;
    this.updateState(name, validatedValue);
  };

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };

  resetForm = () => {
    this.setState(INITIAL_STATE);
  };

  validateField(fieldName, value) {
    switch (fieldName) {
    case 'email': {
      const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      return isValid ? '' : ' is invalid';
    }
    default:
      return '';
    }
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.validateField(name, value),
      },
    }));
  }

  render() {
    const { submitted, formError } = this.state;
    return (
      <main>
        <Form
          sendForm={ this.handleSubmit }
          resetForm={ this.resetForm }
          changeHandler={ this.changeHandler }
          currentState={ this.state }
          onBlurHandler={ this.onBlurHandler }
        />
        <div className="container">
          <FormError formError={ formError } />
        </div>
        {submitted && <FormDataDisplay currentState={ this.state } />}
      </main>
    );
  }
}

export default App;
