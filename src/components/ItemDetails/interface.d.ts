export interface DetailsProps {
  mode: string;
  id: string;
}

export interface MovieDetails {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
}

export interface TvShowDetails {
  backdrop_path: string;
  id: number;
  original_name: string;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
}
