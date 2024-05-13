import { DetailsUrlProps, UrlProps } from '../api/interfaces';

export const API_BASE_URL = 'https://api.themoviedb.org/3';
export const API_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const API_IMAGE_URL_BIG = 'https://image.tmdb.org/t/p/w700';
export const TOP_RATED_URL = ({ type = 'tv', query = '' }: UrlProps): string => {
  let url;
  url = `/${type}/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&include_adult=false&language=en-US`;
  if (query) {
    url = `/search/${type}?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&include_adult=false&language=en-US`;
  }
  return url;
};
export const ITEM_DETAILS_URL = ({ type, id }: DetailsUrlProps): string => {
  return `https://api.themoviedb.org/3/${type}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&`;
};
export const ITEM_TRAILER_URL = ({ type, id }: DetailsUrlProps): string => {
  return `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&`;
};
