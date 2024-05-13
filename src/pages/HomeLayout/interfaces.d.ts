import { Movies, TvShows } from '../../types/api';

export interface HomeLayoutProps {
  items: Movies[] | TvShows[];
}
