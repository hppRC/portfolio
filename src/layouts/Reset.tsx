import React from 'react';
import { Global, css } from '@emotion/core';

export const Reset = () => (
	<Global
		styles={css`
			* {
				box-sizing: border-box;
				&:before {
					box-sizing: inherit;
				}
				&:after {
					box-sizing: inherit;
				}
			}
			html {
				font-size: 18px;
			}
			body {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
				text-rendering: optimizeLegibility;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}
			::selection {
				background-color: primary;
				color: white;
			}
		`}
	/>
);

export default Reset;
