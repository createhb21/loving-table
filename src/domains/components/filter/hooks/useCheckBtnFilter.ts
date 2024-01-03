import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useToast } from 'hooks';
import { getAllQuery, isEligible, makeFilterQuery } from 'utils/filter';
import { TOAST_MSG } from 'constants/toast';

const useCheckBtnFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { addToast } = useToast();

  const handleClickCheckBtn = useCallback(
    (queryName: string, key: string) => () => {
      const query = getAllQuery(searchParams);

      if (!isEligible(query[queryName] ?? [], key)) {
        addToast(TOAST_MSG.WARNING.FILTER_MAX_NUM);

        return;
      }

      setSearchParams(makeFilterQuery(searchParams, queryName, key));
    },
    [searchParams],
  );

  const handleClickAllCheckBtn = useCallback(
    (queryName: string) => () => {
      const query = getAllQuery(searchParams);
      delete query[queryName];

      setSearchParams({ ...query, page: ['1'] });
    },
    [searchParams],
  );

  return {
    handleClickCheckBtn,
    handleClickAllCheckBtn,
  };
};

export default useCheckBtnFilter;
