import React from 'react';
import { Global, css } from '@emotion/core';

//Guarantees that the page height is at least 100vh
export const GlobalCSS = () => (
	<Global
		styles={css`
			html {
				body {
					background-color: #09090f;
					color: #fff;
					font-family: 'Hiragino Kaku Gothic ProN',
						'ヒラギノ角ゴ ProN W3', Roboto, 'メイリオ', sans-serif;
				}
			}
		`}
	/>
);

export default GlobalCSS;
