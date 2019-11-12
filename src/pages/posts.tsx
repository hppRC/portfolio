import React from 'react';
import { Layout } from '../layouts';
import { AllPosts } from '../components';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)`
	section {
		display: grid;
		grid-template-columns: repeat(2, 1fr);

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}

		@media screen and (max-width: 480px) {
		}
	}
`;

export default () => (
	<Layout>
		<Theme>
			<h1>Posts</h1>
			<AllPosts />
		</Theme>
	</Layout>
);
