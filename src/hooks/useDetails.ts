import { UseQueryResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { detailsItemApi } from '../api/detailsItemApi';
import { DetailsMovie, DetailsResponse, DetailsTv, KeyDetails, Trailer } from '../api/interfaces';

export interface UseQueryItemsResult
  extends Omit<UseQueryResult<AxiosResponse<DetailsResponse>>, 'data'> {
  itemData?: DetailsMovie | DetailsTv;
}

export const useDetails = ({ queryKey }: KeyDetails) => {
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const id = typeof queryKey[1] === 'object' ? queryKey[1].id : '';
  // fetch movie detail and show detail based on id query
  const fetchData = async (): Promise<DetailsResponse> => {
    try {
      const response = await detailsItemApi.getItemDetails({ type, id });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  // fetch video official trailer of movie and show. in detail fetch we get information that movie has video trailer but for show no. for more movies video is false but in fetch video from TMDB we can find movie
  const fetchDataTrailer = async () => {
    try {
      const response = await detailsItemApi.getItemTrailer({ type, id });
      return response?.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const { data, ...rest } = useQuery(['movies', type], fetchData, { enabled: !!type });

  /// THERE IS OFFICIAL VIDEO AND data.video is false
  const {
    data: trailer,
    isLoading: isLoadingVideo,
    isError: isErrorVideo,
    error: errorVideo,
  } = useQuery(['item', type], fetchDataTrailer, { enabled: !!id });

  const officialTrailers = trailer?.filter(
    (el: Trailer): boolean => el.type === 'Trailer' && el.official === true,
  );

  return { data, officialTrailers, isLoadingVideo, isErrorVideo, errorVideo, ...rest };
};
