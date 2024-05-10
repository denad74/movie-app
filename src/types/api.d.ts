export interface Movies {
  id: number;
  title: string;
  name?: string;
  release_date: string;
  poster_path: string;
}

export interface TvShows {
  id: number;
  title?: string;
  name: string;
  first_air_date: string;
  poster_path: string;
}
