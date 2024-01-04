import { css } from '@emotion/react';

import { calcTableWidth } from 'utils/table';

export const pointsTable = css`
  tr {
    grid-template-columns: ${calcTableWidth([
      '134px',
      '132px',
      '124px',
      '1fr',
    ])};
  }
`;
