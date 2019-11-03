import React from 'react';
import ProjectsMDX from '../documents/projects.mdx';
import styled from '@emotion/styled';

const Theme = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 100vh;
	height: auto;
`;

export const Projects = () => (
	<Theme>
		<ProjectsMDX />
	</Theme>
);

export default Projects;
