import React from 'react';
import AboutMDX from '../documents/about.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const About = () => (
	<Theme>
		<AboutMDX />
	</Theme>
);

export default About;
