import { UseQueryResult, useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { DataResponse, Movies, TvShows, queryKey } from '../api/interfaces';
import { listItemApi } from '../api/listItemApi';
import { useEffect } from 'react';

export interface UseQueryItemsResult
  extends Omit<UseQueryResult<AxiosResponse<DataResponse>>, 'data'> {
  items?: Movies[] | TvShows[];
}
export const useAll = ({ queryKey }: queryKey): UseQueryItemsResult => {
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const query = typeof queryKey[1] === 'object' ? queryKey[1].searchQuery : '';

  const fetchData = async () => {
    try {
      const response = await listItemApi.getAll({ type, query });
      return response.data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  const {
    data,
    refetch: queryRefetch,
    ...rest
  } = useQuery(['items', type], fetchData, { enabled: !!type });
  useEffect(() => {
    queryRefetch();
  }, [query]);
  const responseData = data;
  return { items: responseData, refetch: queryRefetch, ...rest };
};
