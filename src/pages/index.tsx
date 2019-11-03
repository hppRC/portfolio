import React from 'react';
import { Layout } from '../layouts';
import { About, Intro, Projects, BackgroundArt } from '../sections/index';
import styled from '@emotion/styled';
//import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

export const Index = () => (
	<Layout>
		{/*
		 */}
		<Background />

		<Intro />
		<About />
		<Projects />
	</Layout>
);

const BackgroundTheme = styled.div`
	position: fixed;
	background-color: #000;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1;
`;

const Background = () => (
	<BackgroundTheme>
		<BackgroundArt />
	</BackgroundTheme>
);

export default Index;
