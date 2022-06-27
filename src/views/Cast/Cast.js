import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieCredits } from 'services/Api';
import s from './Cast.module.css';

function Cast() {
  const { moviesId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await getMovieCredits(moviesId);
        setCast(cast);
      } catch (error) {
        toast.error('No movie found');
      }
    }
    getCast();
  }, [moviesId]);

  return (
    <div>
      <ul className={s.list}>
        {cast &&
          cast.map(({ profile_path, id, name, character }) => {
            const poster = profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://nuft.edu.ua/assets/images/people/no-image.jpg';
            return (
              <li key={id} className={s.profile}>
                <img className={s.image} src={poster} alt={name} />
                <div className={s.textWrapper}>
                  <h4 className={s.text}>{name}</h4>
                  <h4 className={s.text}>Character: {character}</h4>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cast;
