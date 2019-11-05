import React from 'react';
import { Layout } from '../layouts';
import { About, Intro, Events, Skills, TopMessage } from '../internal/index';
import styled from '@emotion/styled';
import loadable from '@loadable/component';

const Background = loadable(() =>
	import('../internal/index/components/Background')
);

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
`;

export const Index = () => (
	<Layout>
		<TopMessage />
		<Theme>
			<Intro />
			<About />
			<Skills />
			<Events />
		</Theme>
		<Background />
	</Layout>
);

export default Index;
