import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import toast from 'react-hot-toast';
import s from './Movies.module.css';
import { getMovieByQuery } from 'services/Api';
import Form from 'components/Form/Form';

function Movies() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const location = useLocation();

  const handleForm = data => {
    setQuery(data);
    setSearchParams({
      query: data,
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
      <Form onSubmit={handleForm} />
      {loading && <Loader />}
      {movies && (
        <ul className={s.movieList}>
          {movies.map(({ id, title }) => (
            <li className={s.movieItem} key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Movies;
