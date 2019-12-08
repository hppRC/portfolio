import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Lato&display=swap');
      html {
        font-size: 62.5%;
        body {
          background-color: #09090f;
          color: #fff;

          font-size: 1.6em;
          overflow-x: hidden;
          overscroll-behavior-y: none;

          font-family: -apple-system, 'Hiragino Kaku Gothic ProN', 'Lato',
            'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', sans-serif;

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
