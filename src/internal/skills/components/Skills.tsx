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
			padding: 1rem 0;
		}

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
			li {
				padding: 0.75rem 0;
			}
		}

		@media screen and (max-width: 480px) {
			li {
				padding: 0.5rem 0;
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
