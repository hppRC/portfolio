import React from 'react';
import IntroMDX from '../documents/intro.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
	width: 80vw;
`;

export const Intro = () => (
	<Theme>
		<IntroMDX />
	</Theme>
);

export default Intro;
