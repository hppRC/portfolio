import React from 'react';
import { Layout } from '../layouts';
import { NotFound } from '../internal/NotFound';
import styled from '@emotion/styled';

const Theme = styled.div`
	min-height: 100vh;
	height: auto;
	padding: 5rem 10%;
	max-width: 1600px;
	margin: 0 auto;
`;

export default () => (
	<Layout>
		<Theme>
			<NotFound />
		</Theme>
	</Layout>
);
