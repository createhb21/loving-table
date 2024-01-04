import { css, Theme } from '@emotion/react';

import { calcTableWidth } from 'utils/table';

export const filter = (theme: Theme) => css`
  border-bottom: 1px solid ${theme.color.gray_20};

  & > div > div {
    border: 0;
  }

  & > div:first-of-type {
    border-bottom: 1px solid ${theme.color.gray_20};
  }

  & > div:nth-of-type(2) {
    width: 50%;
  }
`;

export const PointsTableskeleton = css`
  tr {
    grid-template-columns: ${calcTableWidth([
      '134px',
      '96px',
      '124px',
      '124px',
      '124px',
      '148px',
    ])};
  }
`;
