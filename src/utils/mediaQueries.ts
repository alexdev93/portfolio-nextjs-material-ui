// utils/mediaQueries.ts
import { css } from '@emotion/react';

export const isMobile = (styles: TemplateStringsArray | string) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`;
