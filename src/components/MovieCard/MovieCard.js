import s from './MovieCard.module.css';
import { Outlet, Link } from 'react-router-dom';

function MovieCard({ movie }) {
  const { poster_path, release_date, title, vote_average, overview, genres } =
    movie;
  const data = release_date
    ? `(${new Date(release_date).getFullYear()})`
    : '(unknown)';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';

  const userScore = Number(vote_average) * 10;
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
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={`/movie/${movie.id}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movie/${movie.id}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
}

export default MovieCard;
