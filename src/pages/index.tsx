import React from 'react';
import { Layout } from '../layouts';
import { AboutMDX, IntroMDX, ProjectsMDX } from '../sections/index';

export const Index: React.FC<{}> = () => (
	<Layout>
		<AboutMDX />
		<IntroMDX />
		<ProjectsMDX />
	</Layout>
);

export default Index;
