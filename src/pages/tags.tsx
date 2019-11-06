import React from 'react';
import { Layout } from '../layouts';
import { AllTags } from '../components';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<AllTags />
		</Theme>
	</Layout>
);
