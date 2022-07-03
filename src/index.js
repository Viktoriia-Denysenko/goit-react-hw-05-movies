import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from 'App';
import './index.css';

const Home = lazy(() => import('./views/Home/Home'));
const Movies = lazy(() => import('./views/Movies/Movies'));
const MovieDetails = lazy(() => import('./views/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./views/Cast/Cast'));
const Reviews = lazy(() => import('./views/Reviews/Reviews'));
const NotFoundView = lazy(() => import('./views/NotFoundView/NotFoundView'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies/">
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
    </BrowserRouter>
  </React.StrictMode>
);
