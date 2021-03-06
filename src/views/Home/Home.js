import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'services/Api';
import Loader from 'components/Loader/Loader';
import s from './Home.module.css';

const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      setLoading(true);
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return { movies, loading };
};

function Home() {
  const { movies, loading } = useFetchTrendingMovies();

  return (
    <main>
      <h1 className={s.title}>Trending today</h1>
      {loading && <Loader />}
      <ul className={s.list}>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
