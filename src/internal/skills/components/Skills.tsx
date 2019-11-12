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

		@media screen and (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
			li {
				padding: 1.5rem;
			}
		}

		@media screen and (max-width: 480px) {
			li {
				padding: 1rem;
			}
		}
	}
`;

export const Skills = () => (
	<Theme>
		<SkillsMDX />
	</Theme>
);

export default Skills;
