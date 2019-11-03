import React from 'react';
import IntroMDX from '../documents/intro.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
`;

export const Intro = () => (
	<Theme>
		<IntroMDX />
	</Theme>
);

export default Intro;
