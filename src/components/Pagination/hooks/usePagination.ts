import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getAllQuery } from 'utils/filter';
import { createPageList } from 'utils/pagination';

const usePagination = (maxPageCount: number, totalPages: number) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [pageNumList, setPageNumList] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  );

  const isDisabledPrev = useMemo(() => {
    return currentPage - maxPageCount <= 0;
  }, [currentPage, searchParams]);

  const isDisabledNext = useMemo(() => {
    return (
      Math.floor((currentPage + maxPageCount - 1) / maxPageCount) >
      Math.floor(totalPages / maxPageCount)
    );
  }, [currentPage, maxPageCount, totalPages]);

  const handlePrevPage = useCallback(() => {
    if (currentPage === 1) return;

    const prevPageNum = Math.max(
      maxPageCount *
        Math.floor((currentPage - maxPageCount - 1) / maxPageCount) +
        1,
      1,
    );

    setSearchParams({
      ...getAllQuery(searchParams),
      page: String(prevPageNum),
    });
  }, [currentPage, searchParams]);

  const handleFirstPage = useCallback(() => {
    if (currentPage === 1) return;

    setSearchParams({
      ...getAllQuery(searchParams),
      page: '1',
    });
  }, [currentPage, searchParams]);

  const handleNextPage = useCallback(() => {
    if (currentPage === totalPages) return;

    const nextPageNum = Math.min(
      Math.floor((currentPage + maxPageCount - 1) / maxPageCount) *
        maxPageCount +
        1,
      totalPages,
    );

    setSearchParams({
      ...getAllQuery(searchParams),
      page: String(nextPageNum),
    });
  }, [currentPage, searchParams]);

  const handleLastPage = useCallback(() => {
    if (currentPage === totalPages) return;

    setSearchParams({
      ...getAllQuery(searchParams),
      page: String(totalPages),
    });
  }, [currentPage, searchParams]);

  const handleClickNum = useCallback(
    (idx: number) => () => {
      setSearchParams({
        ...getAllQuery(searchParams),
        page: String(idx),
      });
    },
    [currentPage, searchParams],
  );

  useEffect(() => {
    setCurrentPage(Number(searchParams.get('page')) || 1);
  }, [searchParams.get('page')]);

  useEffect(() => {
    const newPageNumList = createPageList(
      currentPage,
      maxPageCount,
      totalPages,
    );
    setPageNumList(newPageNumList);
  }, [currentPage, maxPageCount, totalPages]);

  return {
    currentPage,
    pageNumList,
    isDisabledPrev,
    isDisabledNext,
    handlePrevPage,
    handleFirstPage,
    handleNextPage,
    handleLastPage,
    handleClickNum,
  };
};

export default usePagination;
