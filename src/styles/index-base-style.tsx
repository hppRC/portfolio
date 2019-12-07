import { css } from '@emotion/core';

export const indexBaseStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  list-style-position: inside;
  padding: 5rem 0;

  > h1:first-of-type {
    margin: 0 auto;
    padding: 4rem 0;
    font-size: 5rem;
  }

  @media screen and (max-width: 768px) {
    > h1:first-of-type {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 480px) {
    > h1:first-of-type {
      font-size: 3rem;
    }
  }
`;

export default indexBaseStyle;
