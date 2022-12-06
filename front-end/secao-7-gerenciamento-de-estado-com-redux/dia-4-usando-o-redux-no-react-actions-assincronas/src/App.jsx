import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharaterInfo } from './store/actions';

class App extends Component {
  constructor() {
    super();

    this.state = {
      charater: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  render() {
    const { charater } = this.state;
    const { dispatch, charaterInfo, isFetching, errorMessage } = this.props;

    if (isFetching) return <p>Loading</p>;
    if (errorMessage) return <p>{errorMessage}</p>;

    return (
      <div>
        <div>
          <input
            type="text"
            label="Personagem"
            name="charater"
            value={charater}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={() => dispatch(fetchCharaterInfo(charater))}
          >
            Buscar
          </button>
        </div>
        <div>
          <p>Nome: {charaterInfo.name}</p>
          <p>Genero: {charaterInfo.gender}</p>
          <p>Cultura: {charaterInfo.culture}</p>
          <p>Nascido em: {charaterInfo.born}</p>
          <p>Titulos: {charaterInfo.titles}</p>
          <p>Apelidos: {charaterInfo.aliases}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  charaterInfo: state.charaterReducer.charater,
  isFetching: state.charaterReducer.isFetching,
  errorMessage: state.charaterReducer.errorMessage,
});

export default connect(mapStateToProps)(App);
