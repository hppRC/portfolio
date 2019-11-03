import React from 'react';
import { Global, css } from '@emotion/core';

//Guarantees that the page height is at least 100vh
export const GlobalCSS = () => (
	<Global
		styles={css`
			body {
				background-color: #090909;
				color: #fff;
			}
		`}
	/>
);

export default GlobalCSS;
