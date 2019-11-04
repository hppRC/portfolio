import React from 'react';
import LanguageMDX from '../documents/language.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)``;

export const Language = () => (
	<Theme>
		<LanguageMDX />
	</Theme>
);

export default Language;
