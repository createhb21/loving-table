import React from 'react';

import type { PageInfo } from 'types';
import usePagination from './hooks/usePagination';
import * as S from './Pagination.styled';

interface PaginationProps {
  className?: string;
  hasDoubleBtn?: boolean;
  pageInfo?: PageInfo;
  maxPageCount?: number;
}

const Pagination = ({
  className,
  hasDoubleBtn = true,
  pageInfo = {
    currentPage: 0,
    dataPerPage: 0,
    startRow: 0,
    totalData: 0,
    totalPages: 0,
  },
  maxPageCount = 10,
}: PaginationProps) => {
  const { totalPages } = pageInfo;

  const {
    currentPage,
    pageNumList,
    isDisabledPrev,
    isDisabledNext,
    handlePrevPage,
    handleFirstPage,
    handleNextPage,
    handleLastPage,
    handleClickNum,
  } = usePagination(maxPageCount, totalPages);

  return (
    <S.Root className={className}>
      <S.Wrapper>
        {hasDoubleBtn && (
          <S.ArrowBtn
            type="button"
            disabled={isDisabledPrev}
            onClick={handleFirstPage}
          >
            <S.ArrowDubbleLeftIcon />
          </S.ArrowBtn>
        )}

        <S.ArrowBtn
          type="button"
          disabled={isDisabledPrev}
          onClick={handlePrevPage}
        >
          <S.ArrowLeftIcon />
        </S.ArrowBtn>
        <S.NumWrapper>
          {pageNumList.length ? (
            pageNumList.map((num) => (
              <S.NumBtn
                key={num}
                type="button"
                isCurrentPage={currentPage === num}
                onClick={handleClickNum(num)}
              >
                {num}
              </S.NumBtn>
            ))
          ) : (
            <S.NumBtn isCurrentPage={true} disabled type="button">
              1
            </S.NumBtn>
          )}
        </S.NumWrapper>
        <S.ArrowBtn
          type="button"
          disabled={isDisabledNext}
          onClick={handleNextPage}
        >
          <S.ArrowRightIcon />
        </S.ArrowBtn>
        {hasDoubleBtn && (
          <S.ArrowBtn
            type="button"
            disabled={isDisabledNext}
            onClick={handleLastPage}
          >
            <S.ArrowDubbleRightIcon />
          </S.ArrowBtn>
        )}
      </S.Wrapper>
    </S.Root>
  );
};

export default Pagination;
