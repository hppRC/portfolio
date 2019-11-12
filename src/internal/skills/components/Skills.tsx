import React from 'react';
import SkillsMDX from '../documents/skills.mdx';
import styled from '@emotion/styled';
import Background from './Background';

const Theme = styled.div`
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		width: 100%;

		li {
			display: flex;
			padding: 1rem;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
			li {
				padding: 0.75rem;
			}
		}

		@media screen and (max-width: 480px) {
			li {
				padding: 0.5rem;
			}
		}
	}
`;

export const Skills = () => (
	<Theme>
		<Background />
		<SkillsMDX />
	</Theme>
);

export default Skills;
