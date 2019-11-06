import React from 'react';
import { Layout } from '../layouts';
import { AllPosts } from '../components';
import styled from '@emotion/styled';

const Theme = styled.div``;

export default () => (
	<Layout>
		<Theme>
			<AllPosts />
		</Theme>
	</Layout>
);
