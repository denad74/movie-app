import { UseQueryResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { DataResponse, Key } from '../api/interfaces';
import { listItemApi } from '../api/listItemApi';
import { Movies, TvShows } from '../types/api';

export interface UseQueryItemsResult
  extends Omit<UseQueryResult<AxiosResponse<DataResponse>>, 'data'> {
  items?: Movies[] | TvShows[];
}
export const useAll = ({ queryKey }: Key): UseQueryItemsResult => {
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';

  const fetchData = async () => {
    try {
      const response = await listItemApi.getAll(type);
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  const { data, ...rest } = useQuery(['items', type], fetchData, { enabled: !!type });
  const responseData = data;
  return { items: responseData, ...rest };
};
