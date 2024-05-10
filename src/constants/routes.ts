// Base urls
export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const topRatedMoviesURL = `${API_BASE_URL}/movie/top_rated`;
export const topRatedTVShowsURL = `${API_BASE_URL}/tv/top_rated`;
export const TOP_RATED_URL = (type = 'tv'): string =>
  `/${type}/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&language=en-US`;
