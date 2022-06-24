import { Suspense } from 'react';
import s from './MovieCard.module.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';

function MovieCard({ movie }) {
  const location = useLocation();
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movie;
  const data = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '(unknown)';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

  const userScore = Number(vote_average) * 10;

  const linkClick = () => {
    let scroll = Scroll.animateScroll;

    scroll.scrollToBottom();
  };
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.img} src={poster} alt={title} />
        <div className={s.infoWrapper}>
          <h1 className={s.title}>
            {title}
            <span className={s.data}>{data} </span>
          </h1>
          <p className={s.info}>
            <span>User Score: </span>
            {userScore}%
          </p>
          <h2 className={s.subtitle}>Overview</h2>
          <p className={s.info}>{overview}</p>
          <h2 className={s.subtitle}>Genres</h2>
          <ul className={s.genreList}>
            {genres.map(({ id, name }) => (
              <li className={s.listItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <h2 className={s.subtitle}>Additional information</h2>
        <ul>
          <li className={s.listItem}>
            <Link
              onClick={linkClick}
              to={`cast`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li className={s.listItem}>
            <Link
              onClick={linkClick}
              to={`reviews`}
              state={{ from: location?.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    id: PropTypes.number.isRequired,
  }),
};
