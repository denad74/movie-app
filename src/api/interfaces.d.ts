export interface Key {
  queryKey: (string | { type: string })[];
}
interface queryKey {
  queryKey: (string | { type: string; searchQuery?: string })[];
}
interface KeyDetails {
  queryKey: (string | { type: string; id: string })[];
}
export interface DataResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  data: Movies[] | TvShows[];
}

export interface UrlProps {
  type: string;
  query?: string;
}

export interface DetailsUrlProps {
  type: string;
  id: string;
}

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

export interface Trailer {
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
  id: string;
}
export interface TrailerResponseObject {
  id: number;
  response: Trailer[];
}

export interface TrailerResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  data?: TrailerResponseObject;
}

export interface DetailsMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  video: boolean;
  title: string;
  name: string;
}
export interface DetailsTv {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  video: boolean;
  title: string;
  name: string;
}

export interface DetailsResponse {
  backdrop_path: string;
  id: string;
  overview: string;
  poster_path: string;
  video: boolean;
  title: string;
  name: string;
}

// export interface DetailsAndVideoResponse {
//   items: DetailsTv | DetailsMovie;
//   videoData?: TrailerResponseObject[];
// }
