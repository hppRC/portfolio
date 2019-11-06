import React from 'react';
import { Layout } from '../layouts';
import { Skills } from '../internal/skills';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<Skills />
		</Theme>
	</Layout>
);
