import React from 'react';
import { Layout } from '../layouts';
import { Contact } from '../internal/contact';
import styled from '@emotion/styled';
import { PageBaseTheme } from '../themes';

const Theme = styled(PageBaseTheme)``;

export default () => (
	<Layout>
		<Theme>
			<Contact />
		</Theme>
	</Layout>
);
