import React from 'react';
import SkillsMDX from '../documents/skills.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';

const Theme = styled(BaseTheme)`
	li {
		padding: 0.2rem 0;
	}
`;

export const Skills = () => (
	<Theme>
		<SkillsMDX />
	</Theme>
);

export default Skills;
