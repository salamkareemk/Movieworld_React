const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Trending Movies
export const getTrendingMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data.results;
};

// Search Movies
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();
  return data.results;
};

// Movie Details
export const getMovieDetails = async (id) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  return await response.json();
};

// Movie Genres
export const getGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );

  const data = await response.json();
  return data.genres;
};

// Movies By Genre
export const getMoviesByGenre = async (genreId) => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );

  const data = await response.json();
  return data.results;
};

// ⭐ Popular Movies
export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data.results;
};

// ⭐ Top Rated Movies
export const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data.results;
};

// ⭐ Upcoming Movies
export const getUpcomingMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data.results;
};

// Latest
export const getLatestMovies = async () => {

  const response = await fetch(
    `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;

};