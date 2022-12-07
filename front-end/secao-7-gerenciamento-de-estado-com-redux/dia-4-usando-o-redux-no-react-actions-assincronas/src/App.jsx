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

    return (
      <div style={{ textAlign: 'center' }}>
        {isFetching && <p>Loading</p>}
        {errorMessage && <p>{errorMessage}</p>}
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
        {!charaterInfo.name ? (
          <p>Insira o nome de um personagem</p>
        ) : (
          <div>
            <h1>{charaterInfo.name}</h1>
            <p>
              <strong>Genero:</strong>
              <br /> {charaterInfo.gender}
            </p>
            <p>
              <strong>Cultura:</strong>
              <br /> {charaterInfo.culture}
            </p>
            <p>
              <strong>Nascido em:</strong>
              <br /> {charaterInfo.born}
            </p>
            <p>
              <strong>Titulos:</strong>
            </p>
            {charaterInfo.titles.map((title) => (
              <p key={title}>{title}</p>
            ))}
            <p>
              <strong>Apelidos:</strong>
            </p>
            {charaterInfo.aliases.map((alias) => (
              <p key={alias}> {alias} </p>
            ))}
          </div>
        )}
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
