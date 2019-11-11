import React from 'react';
import SkillsMDX from '../documents/skills.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;

		li {
			display: flex;
			padding: 2rem;
		}
	}
`;

export const Skills = () => (
	<Theme>
		<SkillsMDX />
	</Theme>
);

export default Skills;
