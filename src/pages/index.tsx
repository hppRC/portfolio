import React from 'react';
import { Layout } from '../components/layouts';
import TopArt from '../keyVisuals/top';
import { css } from '@emotion/core';

const theme = css`
	position: relative;
	padding: 10px;
	color: #fbfbfb;
	font-size: 2rem;
`;

export const testIndex = () => (
	<>
		<TopArt />
		<h1 css={theme}>hpp Portfolio</h1>
	</>
);

export default testIndex;
