import { Global, css } from '@emotion/core';

export const Background = () => (
	<Global
		styles={css`
			body {
				background: linear-gradient(236deg, #080113, #09090f, #cfda00);
				background-color: #09090f;
				background-size: 600% 600%;

				-webkit-animation: BackAnimation 60s ease infinite;
				-moz-animation: BackAnimation 60s ease infinite;
				animation: BackAnimation 60s ease infinite;

				@-webkit-keyframes BackAnimation {
					0% {
						background-position: 45% 0%;
					}
					50% {
						background-position: 56% 100%;
					}
					100% {
						background-position: 45% 0%;
					}
				}
				@-moz-keyframes BackAnimation {
					0% {
						background-position: 45% 0%;
					}
					50% {
						background-position: 56% 100%;
					}
					100% {
						background-position: 45% 0%;
					}
				}
				@keyframes BackAnimation {
					0% {
						background-position: 45% 0%;
					}
					50% {
						background-position: 56% 100%;
					}
					100% {
						background-position: 45% 0%;
					}
				}
			}
		`}
	/>
);

export default Background;
