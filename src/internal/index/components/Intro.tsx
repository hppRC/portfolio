import React from 'react';
import IntroMDX from '../documents/intro.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const Intro = () => (
	<Theme>
		<IntroMDX />
	</Theme>
);

export default Intro;
