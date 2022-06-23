import React, { lazy, Suspense } from 'react';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:query" element={<MovieDetails />} />
            <Route path="movie/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              {/* <Route path="reviews" element={<MovieDetails />} /> */}
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
