import React from 'react';
import { Layout } from '../layouts';
import {
	AboutMDX,
	IntroMDX,
	ProjectsMDX,
	BackgroundArt
} from '../sections/index';
import styled from '@emotion/styled';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

export const Index = () => (
	<Layout>
		{/*

	*/}
		<Background />

		<Parallax pages={3}>
			<ParallaxLayer offset={0} speed={0.3}>
				<Intro />
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={0.4}>
				<About />
			</ParallaxLayer>
			<ParallaxLayer offset={2} speed={1.7}>
				<Projects />
			</ParallaxLayer>
		</Parallax>
	</Layout>
);

const BaseTheme = styled.div`
	min-height: 100vh;
	height: auto;
`;

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

const Intro = () => (
	<BaseTheme>
		<IntroMDX />
	</BaseTheme>
);

const About = () => (
	<BaseTheme>
		<AboutMDX />
	</BaseTheme>
);

const Projects = () => (
	<BaseTheme>
		<ProjectsMDX />
	</BaseTheme>
);

export default Index;
