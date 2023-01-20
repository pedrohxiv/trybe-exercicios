import { Link, useLocation } from 'react-router-dom';
import { BsFilm, BsHeart } from 'react-icons/bs';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="bg-blue-500 py-8 flex justify-center">
      <nav>
        {pathname === '/favorites' ? (
          <Link
            className="flex items-center gap-2 text-2xl hover:bg-blue-400 rounded-md text-white p-4"
            to="/"
          >
            <BsFilm /> Films
          </Link>
        ) : (
          <Link
            className="flex items-center gap-2 text-2xl hover:bg-blue-400 rounded-md text-white p-4"
            to="/favorites"
          >
            <BsHeart /> Favorites
          </Link>
        )}
      </nav>
    </header>
  );
}
