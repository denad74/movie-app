import { AxiosResponse } from 'axios';
import { axiosClient } from './axiosClient';
import { TOP_RATED_URL } from '../constants/routes';
import { DataResponse, UrlProps } from './interfaces';

const getAll = async ({ type, query }: UrlProps): Promise<AxiosResponse<DataResponse>> =>
  axiosClient.get(TOP_RATED_URL({ type, query }));

export const listItemApi = {
  getAll,
};
