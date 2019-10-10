import React from 'react';
import { Layout } from '../components/layouts';
import TopArt from '../keyVisuals/top';
import { css } from '@emotion/core';
import { SEO } from '../components/web';

const theme = css`
	position: relative;
	padding: 10px;
	color: #fbfbfb;
	font-size: 2rem;
`;

export const testIndex = () => (
	<>
		<SEO title={'hppPortfolio'} />
		<Layout>
			<h1 css={theme}>hpp Portfolio</h1>
		</Layout>
		<TopArt />
	</>
);

export default testIndex;
