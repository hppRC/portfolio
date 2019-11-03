import React from 'react';
import { Global, css } from '@emotion/core';

//Guarantees that the page height is at least 100vh
export const GlobalCSS = () => (
	<Global
		styles={css`
			body {
				background-color: #070707;
				color: #fff;
				min-height: 100vh;
				height: auto;
			}
		`}
	/>
);

export default GlobalCSS;
