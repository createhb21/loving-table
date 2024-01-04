import React, { Suspense } from 'react';

import * as S from './FeedbackTable.styled';
import Filter from '../filter/Filter';
import {
  FEEDBACK_FILTER_CONDITION,
  FEEDBACK_HISTORY_HEADER,
} from 'domains/feedback/static/filter';
import { DataSectionSkeleton } from 'components/TableDataSection';
import FeedbackPagination from '../pagination/FeedbackPagination';
import { PaginationSkeleton } from 'components/Pagination';
import FeedbackTableSection from './section/FeedbackTableSection';

const FeedbackTable = () => {
  return (
    <>
      <Filter css={S.filter} filterCondition={FEEDBACK_FILTER_CONDITION} />
      <Suspense
        fallback={
          <DataSectionSkeleton>
            <DataSectionSkeleton.Table
              css={S.PointsTableskeleton}
              columnTable={FEEDBACK_HISTORY_HEADER}
            />
          </DataSectionSkeleton>
        }
      >
        <FeedbackTableSection />
      </Suspense>
      <Suspense fallback={<PaginationSkeleton />}>
        <FeedbackPagination />
      </Suspense>
    </>
  );
};

export default FeedbackTable;
