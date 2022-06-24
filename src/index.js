import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

const Home = lazy(() => import('./components/Home/Home'));
const Movies = lazy(() => import('./components/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('./components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFoundView = lazy(() =>
  import('./components/NotFoundView/NotFoundView')
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
      {/* <Suspense fallback=""> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:moviesId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} replace={true} />
            <Route path="reviews" element={<Reviews />} replace={true} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundView />}></Route>
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  </React.StrictMode>
);
