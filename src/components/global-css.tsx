import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalCSS = () => (
  <Global
    styles={css`
      html {
        body {
          font-family: 'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3',
            Roboto, 'メイリオ', sans-serif;
          list-style-position: inside;
        }
      }
    `}
  />
);

export default GlobalCSS;
