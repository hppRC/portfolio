import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../../../themes';
import { Layout, ResetCSS, GlobalCSS } from '../../../layouts';
import UseAnimations from 'react-useanimations';
import loadable from '@loadable/component';

const About = loadable(() => import('./About'));
const Intro = loadable(() => import('./Intro'));
const Events = loadable(() => import('./Events'));
const Skills = loadable(() => import('./Skills'));
const TopMessage = loadable(() => import('./TopMessage'));
const Background = loadable(() => import('./Background'));

const LoadingTheme = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;
const Theme = styled(PageBaseTheme)``;

export const IndexPage = () => {
	const [show, setShow] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setShow((prev: boolean) => !prev);
		}, 0);
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

export default IndexPage;
