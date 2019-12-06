import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        body {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #09090f;
          color: #fff;

          font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
            Roboto, 'メイリオ', sans-serif;

          list-style-position: inside;
          overflow-x: hidden;
          overscroll-behavior-y: none;
        }
      }
    `}
  />
);

export default GlobalCSS;
