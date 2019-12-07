import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        body {
          background-color: #09090f;
          color: #fff;

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
