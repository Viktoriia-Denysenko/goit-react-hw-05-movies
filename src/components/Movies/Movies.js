import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import s from './Movies.module.css';
import { getMovieByQuery } from 'components/Api/Api';

function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const location = useLocation();

  const handleSubmit = event => {
    event.preventDefault();
    // setQuery(event.currentTarget.firstChild.value.toLowerCase().trim());
    setQuery(event.currentTarget.elements.query.value.toLowerCase().trim());
    setSearchParams({
      query: event.currentTarget.elements.query.value.toLowerCase().trim(),
    });
  };

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movies = await getMovieByQuery(query);
        setMovies(movies);
      } catch (error) {
        toast.error('No movie found');
      } finally {
        setLoading(false);
      }
    }
    if (query !== '') {
      fetchMovie();
    }
  }, [query]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
        ></input>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {loading && <Loader />}
      {movies && (
        <ul className={s.movieList}>
          {movies.map(movie => (
            <li className={s.movieItem} key={movie.id}>
              <Link to={`/movie/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Movies;
