import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { DataSection } from 'components';
import { getAllQuery } from 'utils/filter';
import type { KeyOf, TableBodyDataType } from 'types';
import * as S from './FeedbackTableSection.styled';
import { Feedback } from 'domains/feedback/types';
import { FEEDBACK_HISTORY_HEADER } from 'domains/feedback/static/filter';
import { useFetchFeedbacks } from 'domains/feedback/services';

const FeedbackTableSection = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const searchQuery = getAllQuery(searchParams);
  delete searchQuery.tab;

  const { data: feedbackHistory, refetch } = useFetchFeedbacks(
    id!,
    searchQuery,
  );

  //@ts-ignore
  const tableBodyData: TableBodyDataType<Feedback> = (key, data) => {
    switch (key) {
      case 'created_at':
        return data[key];

      default:
        return data[key] || '-';
    }
  };

  return (
    <DataSection
      totalData={feedbackHistory?.pageInfo.totalData!}
      // activeBtns={PointModalBtn} // NOTE: 2차 QC시 제외를 위해 주석처리
      handleReFetch={refetch}
    >
      <DataSection.Table
        css={S.pointsTable}
        title="point list"
        columnTable={FEEDBACK_HISTORY_HEADER}
      >
        {feedbackHistory?.history.map((rowData, i) => (
          <DataSection.Table.Row key={i}>
            {Object.keys(FEEDBACK_HISTORY_HEADER).map((key) => (
              <DataSection.Table.Td key={key}>
                {tableBodyData(key as KeyOf<Feedback>, rowData)}
              </DataSection.Table.Td>
            ))}
          </DataSection.Table.Row>
        ))}
      </DataSection.Table>
    </DataSection>
  );
};

export default FeedbackTableSection;
