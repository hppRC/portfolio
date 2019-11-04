import React from 'react';
import AboutMDX from '../documents/about.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	> h1:first-of-type {
		margin: 0 auto;
	}
`;

export const About = () => (
	<Theme>
		<AboutMDX />
	</Theme>
);

export default About;
