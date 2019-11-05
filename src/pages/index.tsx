import React, { useState, useEffect } from 'react';
import { Layout } from '../layouts';
import {
	About,
	Intro,
	Events,
	Skills,
	Background,
	TopMessage
} from '../internal/index';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 10%;
	max-width: 1600px;
	margin: 0 auto;
`;

export const Index = () => {
	const [show, setShow]: [boolean, any] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
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

const PlaceHolderTheme = styled.div`
	width: 100%;
	height: 100vw;
`;

const PlaceHolder = () => <PlaceHolderTheme />;

export default Index;
