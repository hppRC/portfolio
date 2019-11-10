import React from 'react';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../../../themes';
import { Layout } from '../../../layouts';
import loadable from '@loadable/component';

const About = loadable(() => import('./About'));
const Intro = loadable(() => import('./Intro'));
const Events = loadable(() => import('./Events'));
const Skills = loadable(() => import('./Skills'));
const TopMessage = loadable(() => import('./TopMessage'));
const Background = loadable(() => import('./Background'));

const Theme = styled(PageBaseTheme)``;

export const IndexPage = () => (
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

export default IndexPage;
