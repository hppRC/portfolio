import React from 'react';
import { Layout } from '../layouts';
import { NotFound } from '../internal/NotFound';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<NotFound />
		</Theme>
	</Layout>
);
