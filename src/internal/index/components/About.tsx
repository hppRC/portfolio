import React from 'react';
import AboutMDX from '../documents/about.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 100vh;
	height: auto;
`;

export const About = () => (
	<Theme>
		<AboutMDX />
	</Theme>
);

export default About;
