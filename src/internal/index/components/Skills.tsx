import React from 'react';
import SkillsMDX from '../documents/skills.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';
import SkillsTable from './SkillsTable';

const Theme = styled(BaseTheme)`
	li {
		padding: 0.2rem 0;
	}
	> div {
		margin: 5rem 0;
	}
`;

export const Skills = () => (
	<Theme>
		<SkillsMDX />
		<SkillsTable />
	</Theme>
);

export default Skills;
