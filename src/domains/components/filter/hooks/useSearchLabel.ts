import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useImmer } from 'use-immer';

import * as filter from 'utils/filter';
import type { FilterCondition } from 'types';

interface FilterState {
  [key: string]: string[];
}

const useSearchLabel = (filterCondition: FilterCondition[][]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchLabel, setSearchLabel] = useImmer<FilterState>({});

  const filterKeyNames = filter.getFilterKeyNames(filterCondition);
  const isEmptyLabel =
    Object.values(searchLabel).filter((item) => item.length !== 0).length === 0;

  const getSearchFilterQuery = useCallback(
    (query: FilterState) => {
      const newQuery = { ...query };
      const searchFilterKeys = filterCondition
        .flat()
        .filter((filter) => filter.type !== 'notice')
        .map((filter) => filter.key);
      const notSearchFilters = Object.keys(newQuery).filter(
        (queryKey) => !searchFilterKeys.includes(queryKey),
      );

      notSearchFilters.forEach((searchLabel) => delete newQuery[searchLabel]);

      return newQuery;
    },
    [filterCondition],
  );

  const handleDeleteSearchLabel = useCallback(
    (key: string, deleteValue: string) => () => {
      const deleteQuery = searchParams.getAll(key);
      const queries = filter.getAllQuery(searchParams);
      delete queries.driverId;

      setSearchParams({
        ...queries,
        [key]: deleteQuery.filter((item) => item !== deleteValue),
      });
    },
    [searchParams],
  );

  const handleClickReset = useCallback(() => {
    const tabQuery = searchParams.get('tab');

    setSearchParams({ ...(tabQuery && { tab: tabQuery }) });
  }, []);

  useEffect(() => {
    const query = filter.getAllQuery(searchParams);

    delete query.tab;
    delete query.page;

    const searchFilterQuery = getSearchFilterQuery(query);

    setSearchLabel(searchFilterQuery);
  }, [searchParams]);

  return {
    isEmptyLabel,
    filterKeyNames,
    searchLabel,
    handleDeleteSearchLabel,
    handleClickReset,
  };
};

export default useSearchLabel;
