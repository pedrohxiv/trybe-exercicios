import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { useEffect, useState } from 'react';
import FilmsContext from './context/FilmsContext';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const resp = await fetch(
        'https://api-trybe-frontend.vercel.app/api/ghibli-animations',
      );
      const fetchedFilms = await resp.json();
      setFilms(fetchedFilms);
    };
    fetchFilms();
  }, []);

  return (
    <FilmsContext.Provider value={{ films, favorites, setFavorites }}>
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          path="/favorites"
          component={Favorites}
        />
      </Switch>
    </FilmsContext.Provider>
  );
}

export default App;
