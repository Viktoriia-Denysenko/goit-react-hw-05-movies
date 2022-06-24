import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import s from '../MovieDetails/MovieDetails.module.css';

function NotFoundView() {
  const location = useLocation();
  return (
    <>
      <Link className={s.link} to={location?.state?.from ?? '/'}>
        <FaArrowLeft className={s.arrow} />
        <span className={s.linkText}>Go back</span>
      </Link>
      <h1 className={s.title}>404 Сторінку не знайдено</h1>
    </>
  );
}

export default NotFoundView;
