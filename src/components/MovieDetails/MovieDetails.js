import { useParams, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Loader from 'components/Loader/Loader';
import { getMoviesById } from 'components/Api/Api';
import { FaArrowLeft } from 'react-icons/fa';
import MovieCard from 'components/MovieCard/MovieCard';
import s from './MovieDetails.module.css';

function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await getMoviesById(moviesId);
        setMovie(movie);
      } catch (error) {
        toast.error('No movie found');
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [moviesId, location]);

  return (
    <main>
      <Link className={s.link} to={location?.state?.from ?? '/'}>
        <FaArrowLeft className={s.arrow} />
        <span className={s.linkText}>Go back</span>
      </Link>
      {loading && <Loader />}
      {movie && <MovieCard movie={movie} />}
    </main>
  );
}

export default MovieDetails;
