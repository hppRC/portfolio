import React from 'react';
import { Layout } from '../layouts';
import { About } from '../internal/about';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 5% 10%;
	max-width: 1600px;
	margin: 0 auto;
	h1 {
		font-size: 3.5rem;
	}
	@media screen and (max-width: 768px) {
		padding: 6rem 10%;
		h1 {
			font-size: 3rem;
		}
	}
	@media screen and (max-width: 480px) {
		padding: 8rem 10%;
		h1 {
			font-size: 2rem;
		}
	}
`;

export default () => (
	<Layout>
		<Theme>
			<About />
		</Theme>
	</Layout>
);
