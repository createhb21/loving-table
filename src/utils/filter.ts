import type { FilterCondition } from 'types';

export const getAllQuery = (searchParams: URL['searchParams']) => {
  return Object.keys(Object.fromEntries(searchParams)).reduce(
    (acc, queryKey) => ({
      ...acc,
      [queryKey]: searchParams.getAll(queryKey),
    }),
    {} as { [key: string]: string[] },
  );
};

export const makeFilterQuery = (
  searchParams: URL['searchParams'],
  queryName: string,
  key: string,
) => {
  const query = getAllQuery(searchParams);
  const hasItem = (query[queryName] ?? []).includes(key);

  return {
    ...query,
    page: ['1'],
    [queryName]: hasItem
      ? searchParams.getAll(queryName).filter((item) => item !== key)
      : [...searchParams.getAll(queryName), key],
  };
};

export const isEligible = (query: string[], key: string): boolean => {
  const isMaxItem = query.length > 4;

  return !isMaxItem || (isMaxItem && query.includes(key));
};

export const makeRadioBtnFilterQuery = (
  searchParams: URL['searchParams'],
  queryName: string,
  key: string,
) => {
  const query = getAllQuery(searchParams);

  return {
    ...query,
    page: ['1'],
    [queryName]: [key],
  };
};

export const getFilterKeyNames = (filterCondition: FilterCondition[][]) =>
  filterCondition
    .map((item) => item.map((item) => ({ key: item.key, name: item.name })))
    .flat();

export const selectFilterName = (
  filterKeyValues: { key: string; name: string }[],
  selectLabel: string,
) =>
  filterKeyValues.filter(
    (filterKeyValue) => filterKeyValue.key === selectLabel,
  )[0].name;
