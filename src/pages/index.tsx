import React, { Suspense, lazy } from 'react';
import { Layout } from '../layouts';
import { About, Intro, Events, Skills, TopMessage } from '../internal/index';
import styled from '@emotion/styled';

const Background = lazy(() =>
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
		{/*
		 */}
		<TopMessage />
		<Theme>
			<Intro />
			<About />
			<Skills />
			<Events />
		</Theme>
		<Suspense fallback={null}>
			<Background />
		</Suspense>
	</Layout>
);

export default Index;
