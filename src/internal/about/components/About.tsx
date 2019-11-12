import React from 'react';
import AboutMDX from '../documents/about.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	div {
		padding: 4rem 0;
	}
`;

export const About = () => (
	<Theme>
		<AboutMDX />
	</Theme>
);

export default About;
