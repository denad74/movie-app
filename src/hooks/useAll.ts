import { useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { UseQueryResult, useQuery } from 'react-query';
import { listItemApi } from '../api/listItemApi';
import { DataResponse, Movies, TvShows, queryKey } from '../api/interfaces';

export interface UseQueryItemsResult
  extends Omit<UseQueryResult<AxiosResponse<DataResponse>>, 'data'> {
  items?: Movies[] | TvShows[];
}
export const useAll = ({ queryKey }: queryKey): UseQueryItemsResult => {
  const type = typeof queryKey[1] === 'object' ? queryKey[1].type : '';
  const query = typeof queryKey[1] === 'object' ? queryKey[1].searchQuery : '';

  // fetch al movie and shows based on type and also based on query provided by user
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const responseData = data;

  return { items: responseData, refetch: queryRefetch, ...rest };
};
