import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Favorites() {
  const { favorites, setFavorites } = useContext(FilmsContext);

  const handleClick = (film) => {
    if (favorites.find((favorite) => favorite.id === film.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== film.id));
    } else setFavorites([...favorites, film]);
  };

  return (
    <>
      <Header />
      <h1 className="text-center text-4xl my-6">Favorites</h1>
      <div className="grid grid-cols-4 gap-y-12 gap-x-4 mx-4">
        {favorites.map((favorite) => (
          <div
            key={favorite.id}
            className="border-2 shadow-xl rounded flex flex-col"
          >
            <img
              src={favorite.image}
              alt={favorite.title}
              className="h-auto"
            />
            <h2 className="text-center text-xl font-semibold my-4">{favorite.title}</h2>
            <p className="h-3/6 text-sm truncate mx-1">{favorite.description}</p>
            <button
              type="button"
              className="bg-blue-900 mx-auto rounded text-white p-3 shadow my-4"
              onClick={() => handleClick(favorite)}
            >
              {favorites.some(({ id }) => id === favorite.id)
                ? 'Desfavoritar Filme'
                : 'Favoritar Filme'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
