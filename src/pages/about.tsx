import React from 'react';
import { Layout } from '../layouts';
import { About } from '../internal/about';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<About />
		</Theme>
	</Layout>
);
