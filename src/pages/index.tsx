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
		<Intro />
		<BackgroundArt />
	</Layout>
);

const Theme = styled.div``;

const Intro = () => (
	<Theme>
		<IntroMDX />
	</Theme>
);

export default Index;
