import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllQuery, makeRadioBtnFilterQuery } from 'utils/filter';

const useRadioBtnFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickRadioBtn = useCallback(
    (queryName: string, key: string) => () => {
      setSearchParams(makeRadioBtnFilterQuery(searchParams, queryName, key));
    },
    [searchParams],
  );

  const handleClickAllRadioBtn = useCallback(
    (queryName: string) => () => {
      const query = getAllQuery(searchParams);
      delete query[queryName];

      setSearchParams({ ...query, page: ['1'] });
    },
    [searchParams],
  );

  return {
    handleClickRadioBtn,
    handleClickAllRadioBtn,
  };
};

export default useRadioBtnFilter;
