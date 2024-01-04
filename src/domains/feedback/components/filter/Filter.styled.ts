import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { CalendarInput } from 'components';

export const Filter = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: 40px;
    border: 1px solid ${theme.color.gray_20};
    border-bottom: 0;
    cursor: default;
  `}
`;

interface ConditionWrapperProps {
  columnCount?: number;
}

export const ConditionWrapper = styled.div<ConditionWrapperProps>`
  ${({ columnCount }) => css`
    display: grid;
    grid-template-columns: ${`repeat(${columnCount}, 1fr)`};
  `}
`;

export const Condition = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 210px 1fr;
    border-bottom: 1px solid ${theme.color.gray_20};

    &[data-isconditionfocus='true'] {
      border-bottom: 1px solid ${theme.color.blue_10};
    }

    &[data-isconditionerror='true'] {
      border-bottom: 1px solid ${theme.color.red_20};
    }
  `}
`;

export const ConditionName = styled.div`
  ${({ theme }) => css`
    ${theme.font.medium_14};

    display: flex;
    align-items: center;
    padding-left: 20px;
    color: ${theme.color.gray_60};
    background-color: ${theme.color.gray_10};

    &[data-isconditionfocus='true'] {
      color: ${theme.color.blue_10};
      background-color: rgba(51, 137, 255, 0.1);
    }

    &[data-isconditionerror='true'] {
      color: ${theme.color.red_20};
      background-color: rgba(255, 221, 221, 1);
    }
  `}
`;

export const ConditionChildrenWapper = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 7px 0;
`;

export const CalendarWrapper = styled(ConditionChildrenWapper)`
  padding: 0;
`;

export const Calendar = styled(CalendarInput)`
  width: 100%;

  & > input {
    padding-left: 20px;
  }
`;

export const FilterListWapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
  row-gap: 15px;
  max-width: fit-content;
  padding: 7px 0 7px 20px;
`;

export const FilterListItem = styled.li`
  ${({ theme }) => css`
    ${theme.font.regular_14};

    label {
      border-radius: 2px;
      padding: 6px 12px;
      color: ${theme.color.gray_50};

      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      :hover {
        background-color: ${theme.color.gray_10};
        cursor: pointer;
      }
    }

    input {
      display: none;
    }

    input:checked + label {
      color: ${theme.color.white};
      background-color: ${theme.color.blue_10};
    }
  `}
`;

export const FilterAllBtn = styled(FilterListItem)`
  ${({ theme }) => css`
    color: ${theme.color.gray_50};

    :hover {
      background-color: ${theme.color.gray_10};
      border-radius: 2px;
    }

    input:checked + label {
      color: ${theme.color.black};
      background-color: ${theme.color.gray_10};
    }
  `}
`;

export const SearchLabelBoxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid ${theme.color.gray_20};
  `}
`;
