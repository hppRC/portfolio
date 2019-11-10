import React from 'react';
import SkillsMDX from '../documents/skills.mdx';
import styled from '@emotion/styled';
import BaseTheme from './BaseTheme';
import Test from './Test';

const Theme = styled(BaseTheme)`
	li {
		padding: 0.2rem 0;
	}
`;

export const Skills = () => (
	<>
		<Theme>
			<SkillsMDX />
			<Test />
		</Theme>
	</>
);

export default Skills;
