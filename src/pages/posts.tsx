import React from 'react';
import { Layout } from '../layouts';
import { AllPosts } from '../components';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<AllPosts />
		</Theme>
	</Layout>
);
