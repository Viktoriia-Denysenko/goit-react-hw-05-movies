import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieReviews } from 'components/Api/Api';
import s from './Reviews.module.css';

function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(moviesId);
        setReviews(reviews);
      } catch (error) {
        toast.error('No movie found');
      }
    }
    getReviews();
  }, [moviesId]);
  return (
    <ul className={s.list}>
      {reviews &&
        reviews.map(({id,author, content}) => {
          return (
            <li key={id} className={s.profile}>
              <h4 className={s.title}>Author: {author}</h4>
              <p className={s.text}>{content}</p>
            </li>
          );
        })}
      {reviews.length === 0 && (
        <p className={s.text}>We do not have any reviews for this movie</p>
      )}
    </ul>
  );
}

export default Reviews;
