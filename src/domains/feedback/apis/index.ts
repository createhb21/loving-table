import axios from 'axios';
import type * as type from '../types';

export const getFeedbackList = async (
  driverId: string,
  req: type.FeedbackServerModel,
): Promise<type.FeedbackServerModel> => {
  const { data } = await axios.get(`/drivers/${driverId}/points`, {
    params: req,
  });
  return data;
};
