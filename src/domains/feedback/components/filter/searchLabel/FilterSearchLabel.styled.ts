import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const SearchLabelBoxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 10px 20px;
    border-bottom: 1px solid ${theme.color.gray_20};
  `}
`;

export const SearchLabelWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 8px;
  row-gap: 12px;
  max-width: fit-content;
`;

export const ResetBtn = styled.button`
  ${({ theme }) => css`
    ${theme.font.regular_14};

    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73px;
    height: 32px;
    margin-right: 33px;
    padding: 5px 8px;
    color: ${theme.color.gray_60};

    ::after {
      content: "";
      position: absolute;
      top: 50%;
      right: -8px;
      transform: translateY(-50%);
      width: 1px;
      height: 20px;
      border-right: 1px solid ${theme.color.gray_20};
    }
  `}
`;

export const SearchLabel = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 300px;
    height: 32px;
    padding: 5px 32px 5px 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color: ${theme.color.gray_10};
  `}
`;

export const SearchName = styled.span`
  ${({ theme }) =>
    css`
      ${theme.font.medium_14};
      margin-right: 4px;
      color: ${theme.color.black};
    `}
`;

export const SearchValue = styled.span`
  ${({ theme }) =>
    css`
      ${theme.font.regular_14};
      color: ${theme.color.black};
    `}
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  margin-left: 8px;
`;
