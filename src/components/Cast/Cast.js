import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieCredits } from 'components/Api/Api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await getMovieCredits(movieId);
        setCast(cast);
      } catch (error) {
        toast.error('No movie found');
      }
    }
    getCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(hero => {
            return <li key={hero.id}>{hero.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Cast;
