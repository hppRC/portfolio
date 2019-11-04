import React from 'react';
import { Layout } from '../layouts';
import {
	About,
	Intro,
	Projects,
	Language,
	Background,
	TopMessage
} from '../internal/index';
import styled from '@emotion/styled';

//import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
`;

export const Index = () => (
	<Layout>
		{/*
		 */}
		<Background />
		<TopMessage />
		<Theme>
			<Intro />
			<About />
			<Language />
			<Projects />
		</Theme>
	</Layout>
);

export default Index;
