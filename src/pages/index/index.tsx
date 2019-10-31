import React from 'react';
import { Layout } from '../../layouts';
import AboutMDX from './about.mdx';
import IntroMDX from './intro.mdx';
import ProjectsMDX from './projects.mdx';

export const Index = () => (
	<Layout>
		<AboutMDX />
		<IntroMDX />
		<ProjectsMDX />
	</Layout>
);

export default Index;
