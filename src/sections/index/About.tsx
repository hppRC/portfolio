import React from 'react';
import AboutMDX from './about.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
`;

export const About = () => (
	<Theme>
		<AboutMDX />
	</Theme>
);

export default About;
