import { useContext } from 'react';
import FilmsContext from '../context/FilmsContext';
import Header from '../components/Header';

export default function Home() {
  const { films, favorites, setFavorites } = useContext(FilmsContext);

  const handleClick = (film) => {
    if (favorites.find((favorite) => favorite.id === film.id)) {
      setFavorites(favorites.filter((favorite) => favorite.id !== film.id));
    } else setFavorites([...favorites, film]);
  };

  return (
    <>
      <Header />
      <h1 className="text-center text-4xl my-6">Films</h1>
      <div className="grid grid-cols-4 gap-y-12 gap-x-4 m-4">
        {films.map((film) => (
          <div
            key={film.id}
            className="border-2 shadow-xl rounded flex flex-col"
          >
            <img
              src={film.image}
              alt={film.title}
              className="h-auto"
            />
            <h2 className="text-center text-xl font-semibold my-4">{film.title}</h2>
            <p
              className="h-3/6 text-sm truncate mx-1"
              title={film.description}
            >
              {film.description}
            </p>
            <button
              type="button"
              className={`${
                favorites.some((favorite) => favorite.id === film.id)
                  ? 'bg-blue-900'
                  : 'bg-blue-500'
              } mx-auto rounded text-white p-3 shadow my-4`}
              onClick={() => handleClick(film)}
            >
              {favorites.some((favorite) => favorite.id === film.id)
                ? 'Desfavoritar Filme'
                : 'Favoritar Filme'}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
