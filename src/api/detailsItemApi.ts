import { AxiosResponse } from 'axios';
import { axiosClient } from './axiosClient';
import { ITEM_DETAILS_URL, ITEM_TRAILER_URL } from '../constants/routes';
import { DetailsResponse, DetailsUrlProps, TrailerResponse } from './interfaces';

const getItemDetails = async ({
  type,
  id,
}: DetailsUrlProps): Promise<AxiosResponse<DetailsResponse>> =>
  axiosClient.get(ITEM_DETAILS_URL({ type, id }));

const getItemTrailer = async ({
  type,
  id,
}: DetailsUrlProps): Promise<AxiosResponse<TrailerResponse>> =>
  axiosClient.get(ITEM_TRAILER_URL({ type, id }));

export const detailsItemApi = {
  getItemDetails,
  getItemTrailer,
};
