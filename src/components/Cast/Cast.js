import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getMovieCredits } from 'components/Api/Api';

function Cast({ id }) {
  const [cast, setCast] = useState('');
  console.log(cast);
  useEffect(() => {
    async function getCast() {
      try {
        const cast = await getMovieCredits(id);
        setCast(cast);
      } catch (error) {
        toast.error('No movie found');
      }
    }
    getCast();
  }, [id]);

  return (
    <div>
      <ul>
        {cast &&
          cast.map(hero => {
            return <li key="hero.cast_id">{hero.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default Cast;
