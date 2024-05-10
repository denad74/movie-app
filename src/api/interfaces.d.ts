import { Movies, TvShows } from '../types/api';

export interface Key {
  queryKey: (string | { type: string })[];
}
interface queryKey {
  queryKey: (string | { type: string; searchQuery: string | null })[];
}
interface KeyDetails {
  queryKey: (string | { type: string; id: number })[];
}
export interface DataResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
  data: Movies[] | TvShows[];
}
