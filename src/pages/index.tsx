import React, { useState, useEffect } from 'react';
import { Layout } from '../layouts';
import {
	About,
	Intro,
	Events,
	Skills,
	TopMessage,
	Background
} from '../internal/index';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
	margin: 0 auto;
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
