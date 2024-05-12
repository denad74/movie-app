import { UseQueryResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { DetailsMovie, DetailsResponse, DetailsTv, KeyDetails, Trailer } from '../api/interfaces';
import { detailsItemApi } from '../api/detailsItemApi';

export interface UseQueryItemsResult
  extends Omit<UseQueryResult<AxiosResponse<DetailsResponse>>, 'data'> {
  itemData?: DetailsMovie | DetailsTv;
}
export const useDetails = ({ queryKey }: KeyDetails) => {
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const id = typeof queryKey[1] === 'object' ? queryKey[1].id : '';
  console.log(id);
  const fetchData = async (): Promise<DetailsResponse> => {
    try {
      const response = await detailsItemApi.getItemDetails({ type, id });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
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
  //   if (data && data?.video) {// THERE IS OFFICIAL VIDEO AND data.video is false
  const {
    data: trailer,
    isLoading: isLoadingVideo,
    isError: isErrorVideo,
    error: errorVideo,
  } = useQuery(['item', type], fetchDataTrailer, { enabled: !!id });
  const officialTrailers = trailer?.filter(
    (el: Trailer): boolean => el.type === 'Trailer' && el.official === true,
  );
  //   }
  console.log('trailer', officialTrailers);
  return { data, officialTrailers, isLoadingVideo, isErrorVideo, errorVideo, ...rest };
};
