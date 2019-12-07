import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        font-size: 62.5%;
        body {
          background-color: #09090f;
          color: #fff;

          font-size: 1.6em;

          font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
            Roboto, 'メイリオ', sans-serif;

          overflow-x: hidden;
          overscroll-behavior-y: none;

          @media screen and (max-width: 768px) {
            font-size: 1.4rem;
          }

          @media screen and (max-width: 480px) {
          }
        }
      }
    `}
  />
);

export default GlobalCSS;
