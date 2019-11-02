import React from 'react';
import { Layout } from '../layouts';
import {
	AboutMDX,
	IntroMDX,
	ProjectsMDX,
	BackgroundArt
} from '../sections/index';
import styled from '@emotion/styled';

export const Index = () => (
	<Layout>
		{/*<BackgroundArt />*/}
		<Intro />
		<About />
		<Projects />
	</Layout>
);

const BaseTheme = styled.div`
	min-height: 100vh;
	height: auto;
`;

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
