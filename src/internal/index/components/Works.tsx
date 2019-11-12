import React from 'react';
import WorksMDX from '../documents/works.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';
import LearnMoreButton from './LearnMoreButton';

const Theme = styled(BaseTheme)`
	color: #fff;
	div {
		img {
			width: 100%;
			height: auto;
			border-radius: 5px;
		}
		h2,
		p {
			padding: 2.5rem;
		}
	}
`;

export const Works = () => (
	<Theme>
		<WorksMDX />
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<LearnMoreButton to={'/works'} />
		</div>
	</Theme>
);

export default Works;
