import React from 'react';
import NotFoundMDX from '../documents/NotFound.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 5rem 10%;
	max-width: 1600px;
	margin: 0 auto;
	h1 {
		font-size: 3.5rem;
	}
	@media screen and (max-width: 768px) {
		padding: 4rem 10%;
		h1 {
			font-size: 3rem;
		}
	}
	@media screen and (max-width: 480px) {
		padding: 3rem 10%;
		h1 {
			font-size: 2rem;
		}
	}
`;

export const NotFound = () => (
	<Theme>
		<NotFoundMDX />
	</Theme>
);

export default NotFound;
