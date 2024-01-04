import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { Pagination } from 'components';
import { getAllQuery } from 'utils/filter';

const FeedbackPagination = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const searchQuery = getAllQuery(searchParams);
  delete searchQuery.tab;

  const { data } = useFetchFeedbacks(id!, searchQuery, {
    keepPreviousData: true,
  });

  return <Pagination pageInfo={data?.pageInfo!} />;
};

export default FeedbackPagination;
