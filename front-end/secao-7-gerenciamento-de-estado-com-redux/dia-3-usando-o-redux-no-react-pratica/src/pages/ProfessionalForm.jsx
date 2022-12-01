import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import { addProfessionalForm } from '../redux/actions';
import { connect } from 'react-redux';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
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
    dispatch(addProfessionalForm({ ...this.state }));
    history.push('/formdisplay');
  }

  render() {
    const { curriculum, job, description } = this.state;
    return (
      <form onSubmit={() => console.log('Envia as informações para a store')}>
        <h1 className="title">Informações Profissionais</h1>
        <TextArea
          label="Resumo do currículo: "
          value={curriculum}
          name="curriculum"
          maxLength="1000"
          onChange={this.handleChange}
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={job}
          onChange={this.handleChange}
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={this.handleChange}
          value={description}
          required
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

ProfessionalForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect()(ProfessionalForm);
