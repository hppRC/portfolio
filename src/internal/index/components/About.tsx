import React from 'react';
import AboutMDX from '../documents/about.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';
import LearnMoreButton from './LearnMoreButton';

const Theme = styled(BaseTheme)`
	> div {
		padding: 4rem 0;
	}
`;

export const About = () => (
	<Theme>
		<AboutMDX />
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<LearnMoreButton to={'/about'} />
		</div>
	</Theme>
);

export default About;
