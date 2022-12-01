import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';
import { connect } from 'react-redux';
import { addPersonalForm } from '../redux/actions';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(addPersonalForm({ ...this.state }));
    history.push('/professionalform');
  }

  render() {
    const { name, email, cpf, address, city, uf } = this.state;

    return (
      <form onSubmit={() => console.log('Ao clicar, envie a informação do formulário')}>
        <h1 className="title">Informações Pessoais</h1>
        <Input
          label="Nome: "
          type="text"
          onChange={this.handleChange}
          value={name}
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={this.handleChange}
          value={email}
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={this.handleChange}
          value={cpf}
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={this.handleChange}
          value={address}
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={this.handleChange}
          name="city"
          value={city}
        />
        <Select
          defaultOption="Selecione"
          onChange={this.handleChange}
          value={uf}
          label="Estado: "
          name="uf"
          options={UF_LIST}
        />
        <Button
          type="submit"
          label="Enviar"
          moreClasses="is-fullwidth is-info"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

PersonalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(PersonalForm);
