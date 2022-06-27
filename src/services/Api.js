import axios from 'axios';

export async function getMovies() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=ecc266c5c008b90a8b88a128072b35c2'
  );
  return response.data.results;
}

export async function getMoviesById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US`
  );
  return response.data;
}

export async function getMovieByQuery(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US&query=${query}`
  );
  return response.data.results;
}

export async function getMovieCredits(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US`
  );
  return response.data.cast;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=ecc266c5c008b90a8b88a128072b35c2&language=en-US`
  );
  return response.data.results;
}
