import { AxiosResponse } from 'axios';
import { axiosClient } from './axiosClient';
import { TOP_RATED_URL } from '../constants/routes';
import { DataResponse } from './interfaces';

const getAll = async (type: string): Promise<AxiosResponse<DataResponse>> =>
  axiosClient.get(TOP_RATED_URL(type));

export const listItemApi = {
  getAll,
};
