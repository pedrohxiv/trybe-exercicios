import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    imageUrl: '',
    isLoading: true,
  };

  componentDidMount() {
    this.fetchApi();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !nextState.imageUrl.includes('terrier');
  }

  componentDidUpdate() {
    const { imageUrl } = this.state;
    localStorage.setItem('imageUrl', imageUrl);
    alert(imageUrl.split('/')[4]);
  }

  fetchApi = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => this.setState({ imageUrl: data.message, isLoading: false }));
  };

  render() {
    const { imageUrl, isLoading } = this.state;

    if (isLoading) {
      return (
        <div className="App">
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div className="App">
        <h1 className="App-header">Doguinhos</h1>
        <div>
          <img src={ imageUrl } alt="Doguinho aleatório" className="App-link" />
        </div>
        <button type="button" onClick={ this.fetchApi } className="App-button">
          Novo doguinho!
        </button>
      </div>
    );
  }
}

export default App;
