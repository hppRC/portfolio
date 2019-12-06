import { css } from '@emotion/core';

export const baseStyle = css`
  width: 100%;
  max-width: 1400px;
  height: auto;
  /* becaouse of footer height is 10vh */
  min-height: 90vh;

  margin: 0 auto;
  padding: 6rem 10%;

  @media screen and (max-width: 768px) {
    padding: 6rem 7.5%;
  }
  @media screen and (max-width: 480px) {
    padding: 6rem 5%;
  }
`;

export default baseStyle;
