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
import { PageBaseTheme } from '../themes';
import { ResetCSS, GlobalCSS } from '../layouts';
import UseAnimations from 'react-useanimations';

const LoadingTheme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;
const Theme = styled(PageBaseTheme)``;

export default () => {
	const [show, setShow]: [boolean, any] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShow((prev: boolean) => !prev);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);
	return show ? (
		<>
			<ResetCSS />
			<GlobalCSS />
			<LoadingTheme>
				<UseAnimations animationKey='loading2' size={40} />
			</LoadingTheme>
		</>
	) : (
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
};
