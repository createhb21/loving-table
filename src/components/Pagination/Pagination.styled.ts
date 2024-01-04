import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { ArrowIcon, ArrowDoubleIcon } from 'assets/icon';

export const Root = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 72px;
    border: 1px solid ${theme.color.gray_20};
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
`;

export const ArrowBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 2px;

    svg {
      fill: ${theme.color.gray_50};
    }

    :hover:not([disabled]) {
      background-color: ${theme.color.gray_30};

      svg {
        fill: ${theme.color.gray_60};
      }
    }

    &[disabled] {
      opacity: 0.5;
    }
  `}
`;

export const ArrowLeftIcon = styled(ArrowIcon)`
  transform: rotate(90deg);
`;

export const ArrowRightIcon = styled(ArrowIcon)`
  transform: rotate(-90deg);
`;

export const ArrowDubbleLeftIcon = styled(ArrowDoubleIcon)``;

export const ArrowDubbleRightIcon = styled(ArrowDoubleIcon)`
  transform: rotate(-180deg);
`;

export const NumWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > :last-child {
    border-right: 0;
  }
`;

interface NumBtnProps {
  isCurrentPage: boolean;
}

export const NumBtn = styled.button<NumBtnProps>`
  ${({ theme, isCurrentPage }) => css`
    ${theme.font.regular_14}

    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 2px;
    color: ${isCurrentPage ? theme.color.black : theme.color.gray_50};
    background-color: ${isCurrentPage
      ? theme.color.gray_10
      : theme.color.white};

    :disabled {
      :hover {
        background-color: ${theme.color.gray_10};
      }
    }

    :hover {
      background-color: ${theme.color.gray_30};
    }
  `}
`;
