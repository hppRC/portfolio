import React from 'react';
import WorksMDX from '../documents/works.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const Works = () => (
	<Theme>
		<WorksMDX />
	</Theme>
);

export default Works;
