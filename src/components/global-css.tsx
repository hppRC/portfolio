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
        }
      }
    `}
  />
);

export default GlobalCSS;
