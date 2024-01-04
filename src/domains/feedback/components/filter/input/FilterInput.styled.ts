import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FilterInputWrapper = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  padding-right: 90px;
`;

export const FilterInput = styled.input`
  width: 100%;
  height: 34px;
  border: 0;
  padding-left: 20px;

  :focus {
    border: 0;
  }
`;

export const FilterInputApply = styled.button`
  ${({ theme }) => css`
    ${theme.font.medium_13};

    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 28px;
    border-radius: 4px;
    color: ${theme.color.blue_10};
    background-color: ${theme.color.gray_10};
  `}
`;
