import React from 'react';
import { Layout } from '../layouts';
import {
	About,
	Intro,
	Projects,
	Background,
	TopMessage
} from '../internal/index';

//import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

export const Index = () => (
	<Layout>
		{/*
		 */}
		<Background />
		<TopMessage />
		<Intro />
		<About />
		<Projects />
	</Layout>
);

export default Index;
