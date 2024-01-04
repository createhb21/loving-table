import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import * as api from '../apis';
import * as formatter from 'utils/formatter';
import type * as type from '../types';

export const feedbackKeys = {
  all: ['feedback'] as const,
  lists: () => [...feedbackKeys.all, 'list'] as const,
  list: (filters: type.FeedbackListType) =>
    [...feedbackKeys.lists(), { filters }] as const,
};

export const useFetchFeedbacks = (
  driverId: string,
  filters: type.FeedbackListType,
  options?: UseQueryOptions<
    type.FeedbackServerModel,
    AxiosError,
    type.FeedbackServerModel,
    ReturnType<(typeof feedbackKeys)['list']>
  >,
): UseQueryResult<type.FeedbackServerModel> => {
  const date = formatter.formatPeriodLocalToUtc(filters.date?.[0].split(' ~ '));
  const req = formatter.deleteObjectKeyWithEmptyValue({
    status: filters.status?.join(',') ?? 'all', // TODO: 현재 중복검색 안됨. 문의드려야함
    startDate: date?.startDate,
    endDate: date?.endDate,
    page: filters.page?.[0],
    pageSize: 20,
  });

  return useQuery({
    ...options,
    queryKey: feedbackKeys.list(filters),
    queryFn: () => api.getFeedbackList(driverId, req),
  });
};
