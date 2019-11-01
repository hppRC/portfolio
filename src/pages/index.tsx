import React from 'react';
import { Layout } from '../layouts';
import {
	AboutMDX,
	IntroMDX,
	ProjectsMDX,
	BackgroundArt
} from '../sections/index';

export const Index = () => (
	<Layout>
		<BackgroundArt />
		<AboutMDX />
		<IntroMDX />
		<ProjectsMDX />
	</Layout>
);

export default Index;
