import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const {
      personalForm: { name, email, cpf, address, city, uf },
      professionalForm: { curriculum, job, description },
    } = this.props;
    return (
      <section>
        <h1>Dados Enviados</h1>
        <div>
          Nome:
          {name}
        </div>
        <div>
          Email:
          {email}
        </div>
        <div>
          CPF:
          {cpf}
        </div>
        <div>
          Endereço:
          {address}
        </div>
        <div>
          Cidade:
          {city}
        </div>
        <div>
          Estado:
          {uf}
        </div>
        <div>
          Currículo:
          {curriculum}
        </div>
        <div>
          Cargo:
          {job}
        </div>
        <div>
          Descrição do cargo:
          {description}
        </div>
      </section>
    );
  }
}

FormDataDisplay.propTypes = {
  personalForm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
  }),
  professionalForm: PropTypes.shape({
    curriculum: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  personalForm: state.individual.personalForm,
  professionalForm: state.individual.professionalForm,
});

export default connect(mapStateToProps)(FormDataDisplay);
