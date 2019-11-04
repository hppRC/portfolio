import React from 'react';
import IntroMDX from '../documents/intro.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	> h1:first-of-type {
		margin: 0 auto;
		padding: 2rem 0;
	}
`;

export const Intro = () => (
	<Theme>
		<IntroMDX />
	</Theme>
);

export default Intro;
