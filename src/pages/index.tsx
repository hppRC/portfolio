import React, { useState, useEffect } from 'react';
import { Layout } from '../layouts';
import {
	About,
	Intro,
	Events,
	Skills,
	TopMessage,
	PlaceHolder
} from '../internal/index';
import styled from '@emotion/styled';
import loadable from '@loadable/component';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
	margin: 0 auto;
`;

let Background: React.FC;

export const Index = () => {
	const [show, setShow]: [boolean, any] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			Background = loadable(() =>
				import('../internal/index/components/Background')
			);
			setShow((prev: boolean) => !prev);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<Layout>
			{show ? <TopMessage /> : <PlaceHolder />}
			<Theme>
				<Intro />
				<About />
				<Skills />
				<Events />
			</Theme>
			{show && <Background />}
		</Layout>
	);
};

export default Index;
