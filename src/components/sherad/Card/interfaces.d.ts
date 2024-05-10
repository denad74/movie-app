import { Movies, TvShows } from '../../types/api';
export interface CardProps {
  item: Movies | TvShows;
  mode: string;
}
