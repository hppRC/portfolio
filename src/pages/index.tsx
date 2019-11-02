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
		<BackgroundArt />
		<Intro />
	</Layout>
);

const Theme = styled.div`
	color: #ffffff;
`;

const Intro = () => (
	<Theme>
		<IntroMDX />
		<h1>yhea</h1>
	</Theme>
);

export default Index;
